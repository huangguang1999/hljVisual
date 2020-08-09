<template>
  <div style="width:100%;height:100%;display:flex;flex-direction:column;justify-content: center;align-items: center ">
    <el-button type="primary" icon="edit" @click="dialogFormVisible = true">开始配置</el-button>
    <el-dialog title="配置选项" :visible.sync="dialogFormVisible" :top="0" style="padding:5px;" custom-class="dialogStyle">
      <div style="width:100%;height:20%;">
        <el-form :model="form">
          <el-form-item label="搜索内容">
            <el-autocomplete
              v-model="state"
              :fetch-suggestions="querySearchAsync"
              placeholder="请输入搜索内容"
              @select="handleSelect"
              @blur="displayData"
              style="width:90%"
            ></el-autocomplete>
          </el-form-item>
          <el-form-item label="表格类型">
            <el-select v-model="form.region" placeholder="请选择表格类型" style="width:90%" :disabled="selectController">
              <el-option label="柱状图" value="bar"></el-option>
              <el-option label="折线图" value="line"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="表格标题">
            <el-input v-model="echartsTitle" placeholder="请输入表格标题" style="width:90%"></el-input>
          </el-form-item>
        </el-form>
      </div>
      <div style="width:100%;height:80%;display:flex">
        <div style="width:50%;height:80%;">
          <editableTable :list='list' :tableData="tableData"  ref="table"></editableTable>
          <div></div>
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
import {renderData} from '../../utils/renderData'
import echartsDia from '../echarts/EchartsDia'
import editableTable from '../editTable/EditableTable'
import {editableTableMixins} from '../../mixins/EditableTable'
import {debounce} from '@/utils/common.js'
import {renderTableData, renderTableList} from '../../utils/render'
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
      formLabelWidth: '150px',
      formLabelWidth1: '50px',
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
      // 选框数据
      selectController: true,
      echartsTitle: '',
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
    '$store.state.resData3' () {
      if (this.resOption) {
        this.list = []
        this.tableData = []
        this.list = renderTableList(this.resOption)
        this.tableData = renderTableData(this.resOption)
      }
    },
    // 监听选择类型下拉框
    'form.region' () {
      this.renderECharts()
    },
    // 监听表格数据的变化
    '$store.state.tableData': {
      handler () {
        this.refreshTableData(this.$store.state.tableData)
      },
      deep: true
    }
  },
  methods: {
    // 跟随input框显示数据
    displayData: function () {
      if (this.state !== '') {
        request({
          method: 'get',
          url: 'http://39.106.10.108:8080/v3/querySourceData/' + this.state
        })
          .then(res => {
            // 显示数据
            console.log(res.data)
            if (res.data.length > 0) {
              this.resOption = res.data[0][1].value
              this.refreshData()
              // 改变标题时重新渲染数据
              if (this.form.region !== '' && this.resOption > 0) {
                this.renderECharts()
              }
            }
          })
          .catch(err => {
            console.log(err)
          })
      }
    },
    refreshData: function () {
      this.selectController = false
      this.$store.dispatch('refreshFun3', this.resOption)
    },
    renderECharts: function () {
      this.echartData.user.series = []
      this.echartData.user.xData = this.resOption.map(item => item[renderData(this.resOption, 0, 0).key])
      for (let i = 0; i < this.resOption[0].length - 1; i++) {
        this.echartData.user.series.splice(i, 1, {
          name: renderData(this.resOption, 0, i + 1).value.key,
          data: this.resOption.map(item => item[renderData(this.resOption, 0, i + 1).key]),
          type: this.form.region,
          barMaxWidth: '60%'
        })
      }
    },
    sendDFV: function () {
      this.dialogFormVisible = false
      this.form.name = this.state
      this.$emit('renderInPage3', this.form)
    },
    // 表格数据刷新渲染图表
    refreshTableData: function (value) {
      for (let i = 0; i < value.length - 1; i++) {
        for (let j = 0; j < Object.keys(value[0]).length - 1; j++) {
          this.echartData.user.series[i].data[j].value = value[i]['data' + j]
        }
      }
    },
    // 索引方法
    querySearchAsync: debounce(function (queryString, cb) {
      let listInput = []
      if (this.state !== '') {
        request({
          method: 'get',
          url: 'http://39.106.10.108:8080/v3/querySourceName/' + this.state + '/1/50'
        })
          .then(res => {
            let resArr = res.data
            if (resArr.length > 0) {
              resArr.forEach(item => {
                listInput.push({'value': item[0].value})
              })
              cb(listInput)
            }
          })
          .catch(err => {
            console.log(err)
          })
      }
    }, 500),
    handleSelect (item) {
      this.displayData()
    }
  }
}
</script>

<style scoped>
</style>
