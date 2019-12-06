<template>
  <div style="width:100%;height:100%;display:flex;flex-direction:column;justify-content: center;align-items: center; ">
      <el-button type="primary" icon="edit" @click="dialogFormVisible = true">开始配置</el-button>
      <el-dialog title="配置选项" :visible.sync="dialogFormVisible" style="width:100%;height:200%;">
          <div style="width:100%;height:20%;">
              <el-form :model="form" style="display:flex">
                  <el-form-item label="标题" :label-width="formLabelWidth">
                      <!--<el-input v-model="form.name" type="text" @blur="displayData()" auto-complete="off"></el-input>-->
                      <el-autocomplete
                        v-model="state"
                        :fetch-suggestions="querySearchAsync"
                        placeholder="请输入内容"
                        @select="handleSelect"
                        @blur="displayData"
                      ></el-autocomplete>
                  </el-form-item>
                  <el-form-item label="类型" :label-width="formLabelWidth">
                      <el-select v-model="form.region" placeholder="请选择表格类型">
                      <el-option label="柱状图" value="bar"></el-option>
                      <el-option label="折线图" value="line"></el-option>
                  </el-select>
              </el-form-item>
              </el-form>
          </div>
          <div style="width:100%;height:80%;display:flex">
            <div style="width:50%;height:80%;">
              <editableTable :list='list' :tableData="tableData"  ref="table"></editableTable>
            </div>
            <div style="width:50%;height:80%">
              <echartsDia :chartData="echartData.user" style="width:100%;height: 350%"></echartsDia>
            </div>
          </div>
          <div slot="footer" class="dialog-footer">
            <el-button @click="dialogFormVisible = false">取 消</el-button>
            <el-button type="primary" @click="sendDFV">保存配置</el-button>
          </div>
      </el-dialog>
  </div>
</template>

<script>
import { request } from '../../axios/axios'
import {renderData} from '../common/js/renderData'
import echartsDia from '../echarts/EchartsDia'
import editableTable from '../editTable/EditableTable'
import {editableTableMixins} from '../../mixins/EditableTable'
export default {
  components: {
    echartsDia,
    editableTable
  },
  data () {
    return {
      dialogFormVisible: false,
      form: {
        name: '',
        region: ''
      },
      formLabelWidth: '120px',
      // ECharts表格数据
      echartData: {
        legend: {
          textStyle: {
            color: '#333'
          }
        },
        order: {
          xData: [],
          series: []
        },
        user: {
          xData: [],
          lenged: [],
          series: []
        },
        video: {
          series: []
        }
      },
      // 刷新后的数据
      resOption: [],
      // 表格数据
      tabledatas: [],
      list: [],
      tableData: [],
      // 索引数据
      restaurants: [],
      state: '',
      timeout: null,
      resIndex: []
    }
  },
  mixins: [editableTableMixins],
  watch: {
    // 监听全局echarts表格数据变化
    '$store.state.resData' () {
      if (this.resOption[0] !== 'Error') {
        this.renderTable()
      }
    },
    // 监听选择类型下拉框
    'form.region' () {
      this.renderEcharts()
    },
    // 监听表格数据的变化
    '$store.state.tableData': {
      handler () {
        this.refreshTableData(this.$store.state.tableData)
        this.changeResOption(this.$store.state.tableData)
      },
      deep: true
    }
  },
  methods: {
    // 跟随input框显示数据
    displayData: function () {
      if (this.state === '') {
        this.alertMsg()
      } else {
        request({
          method: 'post',
          params: {data: this.state},
          url: 'http://118.25.91.106:8080/main/postKeys'
        })
          .then(res => {
            console.log('发送成功;数据是：' + JSON.stringify(res.data))
            // 显示数据
            this.resOption = res.data
            this.refreshData()
            // 改变标题时重新渲染数据
            if (this.form.region !== '' && this.resOption[0] !== 'Error') {
              this.renderEcharts()
            }
          })
          .catch(err => {
            console.log(err)
          })
      }
    },
    refreshData: function () {
      this.$store.dispatch('refreshFun', this.resOption)
    },
    renderTable: function () {
      this.list = []
      this.tableData = []
      let arr = Object.keys(this.resOption[0])
      for (let i = 0; i < arr.length; i++) {
        this.list.push(
          // eslint-disable-next-line standard/object-curly-even-spacing
          { label: renderData(this.resOption, 0, i).key, width: '', placeholder: '请输入内容', type: 'text', model: 'data' + i}
        )
      }
      for (let i = 0; i < this.resOption.length; i++) {
        let obj = {}
        for (let j = 0; j < arr.length; j++) {
          // eslint-disable-next-line no-eval
          eval('obj.data' + j + "='" + renderData(this.resOption, i, j).value + "'")
        }
        this.tableData.push(obj)
      }
    },
    renderEcharts: function () {
      this.echartData.user.series = []
      this.echartData.user.xData = this.resOption.map(item => item[renderData(this.resOption, 0, 0).key])
      for (let i = 0; i < Object.keys(this.resOption[0]).length - 1; i++) {
        this.echartData.user.series.splice(i, 1, {
          name: renderData(this.resOption, 0, i + 1).key,
          data: this.resOption.map(item => item[renderData(this.resOption, 0, i + 1).key]),
          type: this.form.region,
          barMaxWidth: '60%'
        })
      }
    },
    sendDFV: function () {
      this.dialogFormVisible = false
      this.form.name = this.state
      this.$emit('renderInPage', this.form)
    },
    // 表格数据刷新渲染图表
    refreshTableData: function (value) {
      this.echartData.user.xData = []
      for (let i = 0; i < value.length; i++) {
        this.echartData.user.xData.push(value[i].data0)
      }
      for (let i = 0; i < Object.keys(value[0]).length - 1; i++) {
        var item = this.echartData.user.series[i]
        let arr = []
        for (let j = 0; j < value.length; j++) {
          arr.push(value[j]['data' + (i + 1)] - 0)
        }
        item.data = arr
      }
    },
    // 发出警告方法
    alertMsg () {
      this.$notify({
        title: '警告',
        message: '选项不能为空',
        type: 'warning'
      })
    },
    // 表格数据改变图表数据方法
    changeResOption (val) {
      console.log(val)
      console.log(this.resOption)
      for (let i = 0; i < Object.keys(val[0]).length - 1; i++) {
        for (let j = 0; j < val.length; j++) {
          this.renderObj(this.resOption[j], i + 1, val[j]['data' + (i + 1)] - 0)
        }
      }
      console.log(this.resOption)
    },
    // 改变带中文字符的对象属性值
    renderObj (obj, row, data) {
      var p = 0
      for (var i in obj) {
        if (p === row) {
          obj[i] = data
        }
        p++
      }
    },
    // 索引方法
    querySearchAsync (queryString, cb) {
      var listInput = []
      if (this.state !== '') {
        request({
          method: 'get',
          params: { key: this.state },
          url: 'http://118.25.91.106:8080/main/getIndexes'
        })
          .then(res => {
            console.log(res.data)
            if (res.data[0].indexOf('Error') === -1) {
              this.resIndex = res.data
              for (let i = 0; i < this.resIndex.length; i++) {
                listInput.push({'value': this.resIndex[i]})
              }
              cb(listInput)
            }
          })
          .catch(err => {
            console.log(err)
          })
      }
    },
    handleSelect (item) {
      this.displayData()
    }
  }
}
</script>

<style scoped>
</style>
