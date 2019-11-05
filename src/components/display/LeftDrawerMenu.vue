<template>
  <div>
    <el-button icon="el-icon-menu" type="primary" @click="dialog = true" size="mini"></el-button>
    <el-drawer title="数据配置区域" :visible.sync="dialog" direction="ltr" custom-class="demo-drawer" ref="drawer" size="20%">
      <el-menu class="el-menu" mode="horizontal" text-color="blue"> </el-menu>
      <div class="demo-drawer__content">
        <el-form :model="form">
          <el-form-item label="城市" :label-width="formLabelWidth">
            <el-select v-model="valueArea" @change="selectGet" placeholder="请选择城市类型">
              <el-option v-for="item in area" :key="item.id" :label="item.name" :value="item.id"></el-option>
            </el-select>
          </el-form-item>

          <el-form-item label="年份" :label-width="formLabelWidth">
            <el-select @change="timeGit" :disabled="timeShow" v-model="valueTime" placeholder="请选择您需要的年份">
              <el-option v-for="item in time" :label="item.name" :value="item.id" :key="item.id"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="内容" :label-width="formLabelWidth">
            <el-select @change="dataElementGit" :disabled="dataElementShow" v-model="valuedataElement" placeholder="请选择您需要内容">
              <el-option v-for="item in dataElement" :label="item.name" :value="item.id" :key="item.id"></el-option>
            </el-select>
          </el-form-item>
        </el-form>
        <div class="demo-drawer__footer">
          <el-button @click="cancle">取消</el-button>
          <el-button @click="clear">清除</el-button>
          <el-button type="primary" @click="pushForm()" :loading="loading">{{ loading ? '提交中 ...' : '确定' }}</el-button>
        </div>
      </div>
    </el-drawer>
  </div>
</template>

<script>
import ConstData from '../../assets/util/num'
import { request } from '../../axios/axios'
import {judgeURL} from '../common/js/judgeURL'
export default {
  watch: {
    // 监听地区内容变化
    valueArea: function (newValue) {
      if (newValue || newValue === 0) {
        this.timeShow = false
      } else {
        this.timeShow = true
      }
    },

    // 监听数据类型内容变化
    valueTime: function (newValue) {
      if (newValue || newValue === 0) {
        this.dataElementShow = false
      } else {
        this.newValue = true
      }
    }
  },
  data: function () {
    return {
      // 表单状态数据
      table: false,
      dialog: false,
      loading: false,
      // 定义地区数据
      area: ConstData.Area,
      // 定义时间数据
      time: ConstData.Time,
      // 定义类型数据
      dataElement: ConstData.DataElement,
      // 表单数据
      form: {
        name: '',
        region: '',
        date1: '',
        date2: '',
        form: '',
        formArea: '',
        formDataElement: '',
        delivery: false,
        type: [],
        resource: '',
        desc: ''
      },
      // 用于存放选项被选中的值
      valueArea: '',
      valueTime: '',
      valuedataElement: '',
      // 选项禁用状态
      timeShow: true,
      dataElementShow: true,
      // 用于存放获取的数据
      areaChoose: '',
      timeChoose: '',
      dataElementChoose: '',
      // 表单宽度数据定义
      formLabelWidth: '80px',
      // 刷新的值
      resOption: [],
      resXDate: ''
    }
  },
  methods: {
    selectGet (vId) {
      // 获取地区选项框的内容
      let areaObj = {}
      areaObj = this.area.find(item => {
        // 这里的selectList就是上面遍历的数据源
        return item.id === vId // 筛选出匹配数据
      })
      this.areaChoose = { id: areaObj.id, name: areaObj.name }
      // 筛选年份内容
      if (areaObj.name === '黑龙江省') {
        this.valueTime = ''
        this.valuedataElement = ''
        this.time = [ConstData.Time[0]]
      } else if (areaObj.name === '东北三省') {
        this.valueTime = ''
        this.valuedataElement = ''
        this.time = [ConstData.Time[0], ConstData.Time[3]]
      } else if (areaObj.name === '黑龙江省各地市') {
        this.valueTime = ''
        this.valuedataElement = ''
        this.time = [ConstData.Time[1], ConstData.Time[2], ConstData.Time[3]]
      } else if (areaObj.name === '中心型城市群') {
        this.valueTime = ''
        this.valuedataElement = ''
        this.time = [ConstData.Time[1], ConstData.Time[2], ConstData.Time[3]]
      } else if (areaObj.name === '煤城型城市群') {
        this.valueTime = ''
        this.valuedataElement = ''
        this.time = [ConstData.Time[1], ConstData.Time[2], ConstData.Time[3]]
      } else if (areaObj.name === '生态型城市群') {
        this.valueTime = ''
        this.valuedataElement = ''
        this.time = [ConstData.Time[1], ConstData.Time[2], ConstData.Time[3]]
      } else {
        this.time = [ConstData.Time[1], ConstData.Time[2], ConstData.Time[3]]
      }

      // 筛选数据部分内容
      if (areaObj.name === '黑龙江省') {
        this.dataElement = ConstData.DataElement_hljProvice
      } else if (areaObj.name === '东北三省') {
        this.dataElement = ConstData.DataElement_EstenProbice
      } else if (areaObj.name === '黑龙江省各地市') {
        this.dataElement = ConstData.DataElement_PrefectureLevelCity
      } else if (areaObj.name === '中心型城市群' || areaObj.name === '煤城型城市群' || areaObj.name === '生态型城市群') {
        this.dataElement = ConstData.DataElement_PrefectureLevelCity
      } else {
        this.dataElement = ConstData.DataElement
      }
      return areaObj
    },
    // 获取时间选项恇内容
    timeGit (vId) {
      let timeObj = {}
      timeObj = this.time.find(item => {
        return item.id === vId
      })
      this.timeChoose = { id: timeObj.id, name: timeObj.name }
      return timeObj
    },
    // 获取数据类型选项恇内容
    dataElementGit (vId) {
      let dataElementObj = {}
      dataElementObj = this.dataElement.find(item => {
        return item.id === vId
      })
      this.dataElementChoose = { id: dataElementObj.id, name: dataElementObj.name }
      return dataElementObj
    },
    // 清除事件
    clear () {
      this.valueArea = ''
      this.valueTime = ''
      this.valuedataElement = ''
      this.areaChoose = ''
      this.timeChoose = ''
      this.dataElementShow = ''
    },
    // 取消事件
    cancle () {
      this.valueArea = ''
      this.valueTime = ''
      this.valuedataElement = ''
      this.areaChoose = ''
      this.timeChoose = ''
      this.dataElementShow = ''
      this.dialog = false
    },
    // 刷新x轴数据
    refreshTableDate () {
      this.$store.dispatch('refreshFun', this.resOption)
      this.$store.dispatch('refreshTitleFun', this.areaChoose.name + this.timeChoose.name + this.dataElementChoose.name)
    },
    refreshTableDate1 () {
      this.$store.dispatch('refreshXDateFun', '年度')
    },
    refreshTableDate2 () {
      this.$store.dispatch('refreshXDateFun', '地区')
    },
    refreshTableDate3 () {
      this.$store.dispatch('refreshXDateFun', 'city')
    },
    refreshTableDate4 () {
      this.$store.dispatch('refreshXDateFun', this.dataElementChoose)
    },
    // 确定事件
    pushForm: function () {
      if (this.areaChoose.name === undefined || this.timeChoose.name === undefined || this.dataElementChoose.name === undefined) {
        alert('选项不能为空')
      } else {
        let jURL = judgeURL(this.areaChoose.name, this.timeChoose.name, this.dataElementChoose.name)
        console.log(jURL)
        request({
          method: 'get',
          params: {},
          url: jURL
        })
          .then(res => {
            console.log('发送成功')
            console.log(res)
            this.resOption = res
            // 刷新数据
            this.refreshTableDate()
            if (this.areaChoose.name === '黑龙江省' && this.timeChoose.name === '2015 - 2017') {
              this.refreshTableDate1()
            } else if (this.areaChoose.name === '东北三省') {
              this.refreshTableDate2()
            } else if (this.areaChoose === '中心型城市群' || this.areaChoose === '煤城型城市群' || this.areaChoose === '生态型城市群') {
              this.refreshTableDate3()
            } else {
              this.refreshTableDate4()
            }
          })
          .catch(err => {
            console.log(err)
          })
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.el-drawer {
  background-color: black;
  .el-menu {
    width: 98%;
    margin: {
      left: 1%;
      right: 1%;
    }
    .el-menu-item {
      width: 25%;
      // font-size: 0.9em;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
}
.el-breadcrumb {
  float: right;
}
</style>
