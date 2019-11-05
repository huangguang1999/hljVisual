<template>
  <div class="box">
    <div id="mask"></div>
    <div id="show">
      <div id="bg"></div>
      <span id="close_show">×</span>
      <div id="enlarge" style="width:100%;height:80%"></div>
    </div>
    <div class="box-left">
      <div class="left-top" >
        <div style="display:flex;flex-direction: column;width:100%;height: 100%;overflow: hidden;position:absolute;top:50px;">
          <div style="width:100%;height:20px;color:white;font-size: 18px;text-align:center;overflow: hidden">{{eTitle}}</div>
          <div style="width:10%;height:5%;margin-left: 80%">
            <LeftDrawerMenu :created="created"></LeftDrawerMenu>
          </div>
          <div style="width:90%;height: 80%">
            <echarts :chartData="echartData.user" style="width:120%;height: 190px;margin-left: -5%"></echarts>
          </div>
        </div>
      </div>
      <div class="left-center"></div>
      <div class="left-bottom"></div>
    </div>
    <div class="box-center">
      <div class="center-top"></div>
      <div class="center-bottom">
        <Map style="{height:100%, width:100%}"></Map>
      </div>
    </div>
    <div class="box-right">
      <div class="right-top"></div>
      <div class="right-center"></div>
      <div class="right-bottom"></div>
    </div>
  </div>
</template>
<script>
import echarts from '../components/echarts/Echarts'
import LeftDrawerMenu from '../components/display/LeftDrawerMenu'
import LeftDrawerMenu2 from '../components/display/LeftDrawerMenu2'
import LeftDrawerMenu3 from '../components/display/LeftDrawerMenu3'
import LeftDrawerMenu4 from '../components/display/LeftDrawerMenu4'
import LeftDrawerMenu5 from '../components/display/LeftDrawerMenu5'
import LeftDrawerMenu6 from '../components/display/LeftDrawerMenu6'
import LeftDrawerMenu7 from '../components/display/LeftDrawerMenu7'
import Map from '../components/display/Map'
import {renderDate} from '../components/common/js/renderDate'
export default {
  components: {
    echarts,
    Map,
    LeftDrawerMenu,
    LeftDrawerMenu2,
    LeftDrawerMenu3,
    LeftDrawerMenu4,
    LeftDrawerMenu5,
    LeftDrawerMenu6,
    LeftDrawerMenu7
  },
  data () {
    return {
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
      echartData2: {
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
      echartData3: {
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
      echartData4: {
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
      echartData5: {
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
      echartData6: {
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
      echartData7: {
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
      // 表格渲染数据（动态变化）
      // 左中 第一个表格
      eDate: [
        {
          城市: '哈尔滨',
          网络基础设施就绪度: 83.5,
          信息化发展环境: 94.51,
          应用效益: 78.75,
          产业信息化: 141.25,
          发展指数: 92.94,
          增长率: 16.41,
          x: '哈尔滨',
          y: 83.5,
          z: 78.75
        },
        {
          城市: '牡丹江',
          网络基础设施就绪度: 90.31,
          信息化发展环境: 110.32,
          应用效益: 72.9,
          产业信息化: 108.09,
          发展指数: 91.75,
          增长率: 39.81,
          x: '牡丹江',
          y: 90.31,
          z: 72.9
        },
        {
          城市: '绥化',
          网络基础设施就绪度: 81.22,
          信息化发展环境: 94.88,
          应用效益: 74.24,
          产业信息化: 59.69,
          发展指数: 78.63,
          增长率: 36.34,
          x: '绥化',
          y: 81.22,
          z: 74.24
        },
        {
          城市: '大庆',
          网络基础设施就绪度: 73.33,
          信息化发展环境: 106.61,
          应用效益: 55.94,
          产业信息化: 73.64,
          发展指数: 74.81,
          增长率: 35.04,
          x: '大庆',
          y: 73.33,
          z: 55.94
        },
        {
          城市: '佳木斯',
          网络基础设施就绪度: 88.77,
          信息化发展环境: 47.32,
          应用效益: 68.39,
          产业信息化: 84.78,
          发展指数: 73.77,
          增长率: 32.78,
          x: '佳木斯',
          y: 88.77,
          z: 68.39
        },
        {
          城市: '齐齐哈尔',
          网络基础设施就绪度: 77.84,
          信息化发展环境: 47.98,
          应用效益: 56.55,
          产业信息化: 86.03,
          发展指数: 66.71,
          增长率: 18.33,
          x: '齐齐哈尔',
          y: 77.84,
          z: 56.55
        }
      ],
      eXDate: '',
      eTitle: '黑龙江省2015 - 2017网络基础设施就绪度',
      // 左中 第二个表格
      eDate2: [
        {
          城市: '哈尔滨',
          网络基础设施就绪度: 83.5,
          信息化发展环境: 94.51,
          应用效益: 78.75,
          产业信息化: 141.25,
          发展指数: 92.94,
          增长率: 16.41,
          x: '哈尔滨',
          y: 83.5,
          z: 78.75
        },
        {
          城市: '牡丹江',
          网络基础设施就绪度: 90.31,
          信息化发展环境: 110.32,
          应用效益: 72.9,
          产业信息化: 108.09,
          发展指数: 91.75,
          增长率: 39.81,
          x: '牡丹江',
          y: 90.31,
          z: 72.9
        },
        {
          城市: '绥化',
          网络基础设施就绪度: 81.22,
          信息化发展环境: 94.88,
          应用效益: 74.24,
          产业信息化: 59.69,
          发展指数: 78.63,
          增长率: 36.34,
          x: '绥化',
          y: 81.22,
          z: 74.24
        },
        {
          城市: '大庆',
          网络基础设施就绪度: 73.33,
          信息化发展环境: 106.61,
          应用效益: 55.94,
          产业信息化: 73.64,
          发展指数: 74.81,
          增长率: 35.04,
          x: '大庆',
          y: 73.33,
          z: 55.94
        },
        {
          城市: '佳木斯',
          网络基础设施就绪度: 88.77,
          信息化发展环境: 47.32,
          应用效益: 68.39,
          产业信息化: 84.78,
          发展指数: 73.77,
          增长率: 32.78,
          x: '佳木斯',
          y: 88.77,
          z: 68.39
        },
        {
          城市: '齐齐哈尔',
          网络基础设施就绪度: 77.84,
          信息化发展环境: 47.98,
          应用效益: 56.55,
          产业信息化: 86.03,
          发展指数: 66.71,
          增长率: 18.33,
          x: '齐齐哈尔',
          y: 77.84,
          z: 56.55
        }
      ],
      eXDate2: '',
      eTitle2: '黑龙江省2015 - 2017信息化发展环境',
      // 右中 第三个表格
      eDate3: [
        {
          城市: '哈尔滨',
          网络基础设施就绪度: 83.5,
          信息化发展环境: 94.51,
          应用效益: 78.75,
          产业信息化: 141.25,
          发展指数: 92.94,
          增长率: 16.41,
          x: '哈尔滨',
          y: 83.5,
          z: 78.75
        },
        {
          城市: '牡丹江',
          网络基础设施就绪度: 90.31,
          信息化发展环境: 110.32,
          应用效益: 72.9,
          产业信息化: 108.09,
          发展指数: 91.75,
          增长率: 39.81,
          x: '牡丹江',
          y: 90.31,
          z: 72.9
        },
        {
          城市: '绥化',
          网络基础设施就绪度: 81.22,
          信息化发展环境: 94.88,
          应用效益: 74.24,
          产业信息化: 59.69,
          发展指数: 78.63,
          增长率: 36.34,
          x: '绥化',
          y: 81.22,
          z: 74.24
        },
        {
          城市: '大庆',
          网络基础设施就绪度: 73.33,
          信息化发展环境: 106.61,
          应用效益: 55.94,
          产业信息化: 73.64,
          发展指数: 74.81,
          增长率: 35.04,
          x: '大庆',
          y: 73.33,
          z: 55.94
        },
        {
          城市: '佳木斯',
          网络基础设施就绪度: 88.77,
          信息化发展环境: 47.32,
          应用效益: 68.39,
          产业信息化: 84.78,
          发展指数: 73.77,
          增长率: 32.78,
          x: '佳木斯',
          y: 88.77,
          z: 68.39
        },
        {
          城市: '齐齐哈尔',
          网络基础设施就绪度: 77.84,
          信息化发展环境: 47.98,
          应用效益: 56.55,
          产业信息化: 86.03,
          发展指数: 66.71,
          增长率: 18.33,
          x: '齐齐哈尔',
          y: 77.84,
          z: 56.55
        }
      ],
      eXDate3: '',
      eTitle3: '黑龙江省2015 - 2017产业信息化',
      // 右下 第四个表格
      eDate4: [
        {
          城市: '哈尔滨',
          网络基础设施就绪度: 83.5,
          信息化发展环境: 94.51,
          应用效益: 78.75,
          产业信息化: 141.25,
          发展指数: 92.94,
          增长率: 16.41,
          x: '哈尔滨',
          y: 83.5,
          z: 78.75
        },
        {
          城市: '牡丹江',
          网络基础设施就绪度: 90.31,
          信息化发展环境: 110.32,
          应用效益: 72.9,
          产业信息化: 108.09,
          发展指数: 91.75,
          增长率: 39.81,
          x: '牡丹江',
          y: 90.31,
          z: 72.9
        },
        {
          城市: '绥化',
          网络基础设施就绪度: 81.22,
          信息化发展环境: 94.88,
          应用效益: 74.24,
          产业信息化: 59.69,
          发展指数: 78.63,
          增长率: 36.34,
          x: '绥化',
          y: 81.22,
          z: 74.24
        },
        {
          城市: '大庆',
          网络基础设施就绪度: 73.33,
          信息化发展环境: 106.61,
          应用效益: 55.94,
          产业信息化: 73.64,
          发展指数: 74.81,
          增长率: 35.04,
          x: '大庆',
          y: 73.33,
          z: 55.94
        },
        {
          城市: '佳木斯',
          网络基础设施就绪度: 88.77,
          信息化发展环境: 47.32,
          应用效益: 68.39,
          产业信息化: 84.78,
          发展指数: 73.77,
          增长率: 32.78,
          x: '佳木斯',
          y: 88.77,
          z: 68.39
        },
        {
          城市: '齐齐哈尔',
          网络基础设施就绪度: 77.84,
          信息化发展环境: 47.98,
          应用效益: 56.55,
          产业信息化: 86.03,
          发展指数: 66.71,
          增长率: 18.33,
          x: '齐齐哈尔',
          y: 77.84,
          z: 56.55
        }
      ],
      eXDate4: '',
      eTitle4: '黑龙江省2015 - 2017发展指数',
      // 右中第五个表格
      eDate5: [
        {
          城市: '哈尔滨',
          网络基础设施就绪度: 83.5,
          信息化发展环境: 94.51,
          应用效益: 78.75,
          产业信息化: 141.25,
          发展指数: 92.94,
          增长率: 16.41,
          x: '哈尔滨',
          y: 83.5,
          z: 78.75
        },
        {
          城市: '牡丹江',
          网络基础设施就绪度: 90.31,
          信息化发展环境: 110.32,
          应用效益: 72.9,
          产业信息化: 108.09,
          发展指数: 91.75,
          增长率: 39.81,
          x: '牡丹江',
          y: 90.31,
          z: 72.9
        },
        {
          城市: '绥化',
          网络基础设施就绪度: 81.22,
          信息化发展环境: 94.88,
          应用效益: 74.24,
          产业信息化: 59.69,
          发展指数: 78.63,
          增长率: 36.34,
          x: '绥化',
          y: 81.22,
          z: 74.24
        },
        {
          城市: '大庆',
          网络基础设施就绪度: 73.33,
          信息化发展环境: 106.61,
          应用效益: 55.94,
          产业信息化: 73.64,
          发展指数: 74.81,
          增长率: 35.04,
          x: '大庆',
          y: 73.33,
          z: 55.94
        },
        {
          城市: '佳木斯',
          网络基础设施就绪度: 88.77,
          信息化发展环境: 47.32,
          应用效益: 68.39,
          产业信息化: 84.78,
          发展指数: 73.77,
          增长率: 32.78,
          x: '佳木斯',
          y: 88.77,
          z: 68.39
        },
        {
          城市: '齐齐哈尔',
          网络基础设施就绪度: 77.84,
          信息化发展环境: 47.98,
          应用效益: 56.55,
          产业信息化: 86.03,
          发展指数: 66.71,
          增长率: 18.33,
          x: '齐齐哈尔',
          y: 77.84,
          z: 56.55
        }
      ],
      eXDate5: '',
      eTitle5: '黑龙江省2015 - 2017增长率',
      // 右中第六个表格
      eDate6: [
        {
          城市: '哈尔滨',
          网络基础设施就绪度: 83.5,
          信息化发展环境: 94.51,
          应用效益: 78.75,
          产业信息化: 141.25,
          发展指数: 92.94,
          增长率: 16.41,
          x: '哈尔滨',
          y: 83.5,
          z: 78.75
        },
        {
          城市: '牡丹江',
          网络基础设施就绪度: 90.31,
          信息化发展环境: 110.32,
          应用效益: 72.9,
          产业信息化: 108.09,
          发展指数: 91.75,
          增长率: 39.81,
          x: '牡丹江',
          y: 90.31,
          z: 72.9
        },
        {
          城市: '绥化',
          网络基础设施就绪度: 81.22,
          信息化发展环境: 94.88,
          应用效益: 74.24,
          产业信息化: 59.69,
          发展指数: 78.63,
          增长率: 36.34,
          x: '绥化',
          y: 81.22,
          z: 74.24
        },
        {
          城市: '大庆',
          网络基础设施就绪度: 73.33,
          信息化发展环境: 106.61,
          应用效益: 55.94,
          产业信息化: 73.64,
          发展指数: 74.81,
          增长率: 35.04,
          x: '大庆',
          y: 73.33,
          z: 55.94
        },
        {
          城市: '佳木斯',
          网络基础设施就绪度: 88.77,
          信息化发展环境: 47.32,
          应用效益: 68.39,
          产业信息化: 84.78,
          发展指数: 73.77,
          增长率: 32.78,
          x: '佳木斯',
          y: 88.77,
          z: 68.39
        },
        {
          城市: '齐齐哈尔',
          网络基础设施就绪度: 77.84,
          信息化发展环境: 47.98,
          应用效益: 56.55,
          产业信息化: 86.03,
          发展指数: 66.71,
          增长率: 18.33,
          x: '齐齐哈尔',
          y: 77.84,
          z: 56.55
        }
      ],
      eXDate6: '',
      eTitle6: '黑龙江省2015 - 2017应用效益',
      // 右中第七个表格
      eDate7: [
        {
          城市: '哈尔滨',
          网络基础设施就绪度: 83.5,
          信息化发展环境: 94.51,
          应用效益: 78.75,
          产业信息化: 141.25,
          发展指数: 92.94,
          增长率: 16.41,
          x: '哈尔滨',
          y: 83.5,
          z: 78.75
        },
        {
          城市: '牡丹江',
          网络基础设施就绪度: 90.31,
          信息化发展环境: 110.32,
          应用效益: 72.9,
          产业信息化: 108.09,
          发展指数: 91.75,
          增长率: 39.81,
          x: '牡丹江',
          y: 90.31,
          z: 72.9
        },
        {
          城市: '绥化',
          网络基础设施就绪度: 81.22,
          信息化发展环境: 94.88,
          应用效益: 74.24,
          产业信息化: 59.69,
          发展指数: 78.63,
          增长率: 36.34,
          x: '绥化',
          y: 81.22,
          z: 74.24
        },
        {
          城市: '大庆',
          网络基础设施就绪度: 73.33,
          信息化发展环境: 106.61,
          应用效益: 55.94,
          产业信息化: 73.64,
          发展指数: 74.81,
          增长率: 35.04,
          x: '大庆',
          y: 73.33,
          z: 55.94
        },
        {
          城市: '佳木斯',
          网络基础设施就绪度: 88.77,
          信息化发展环境: 47.32,
          应用效益: 68.39,
          产业信息化: 84.78,
          发展指数: 73.77,
          增长率: 32.78,
          x: '佳木斯',
          y: 88.77,
          z: 68.39
        },
        {
          城市: '齐齐哈尔',
          网络基础设施就绪度: 77.84,
          信息化发展环境: 47.98,
          应用效益: 56.55,
          产业信息化: 86.03,
          发展指数: 66.71,
          增长率: 18.33,
          x: '齐齐哈尔',
          y: 77.84,
          z: 56.55
        }
      ],
      eXDate7: '',
      eTitle7: '黑龙江省2015 - 2017网络基础设施就绪度'
    }
  },
  watch: {
    // 监听echarts表格数据变化
    '$store.state.resDate' () {
      this.eXDate = this.$store.state.resXDate
      this.eTitle = this.$store.state.resTitle
      this.eDate = this.$store.state.resDate.data
      this.refreshTableDate()
    },
    '$store.state.resDate2' () {
      this.eXDate2 = this.$store.state.resXDate2
      this.eTitle2 = this.$store.state.resTitle2
      this.eDate2 = this.$store.state.resDate2.data
      this.refreshTableDate2()
    },
    '$store.state.resDate3' () {
      this.eXDate3 = this.$store.state.resXDate3
      this.eTitle3 = this.$store.state.resTitle3
      this.eDate3 = this.$store.state.resDate3.data
      this.refreshTableDate3()
    },
    '$store.state.resDate4' () {
      this.eXDate4 = this.$store.state.resXDate4
      this.eTitle4 = this.$store.state.resTitle4
      this.eDate4 = this.$store.state.resDate4.data
      this.refreshTableDate4()
    },
    '$store.state.resDate5' () {
      this.eXDate5 = this.$store.state.resXDate5
      this.eTitle5 = this.$store.state.resTitle5
      this.eDate5 = this.$store.state.resDate5.data
      this.refreshTableDate5()
    },
    '$store.state.resDate6' () {
      this.eXDate6 = this.$store.state.resXDate6
      this.eTitle6 = this.$store.state.resTitle6
      this.eDate6 = this.$store.state.resDate6.data
      this.refreshTableDate6()
    },
    '$store.state.resDate7' () {
      this.eXDate7 = this.$store.state.resXDate7
      this.eTitle7 = this.$store.state.resTitle7
      this.eDate7 = this.$store.state.resDate3.data
      this.refreshTableDate7()
    }
  },
  methods: {
    // 渲染echarts
    getTableData () {
      // 用户柱状图
      this.echartData.user.xData = this.eDate.map(item => item.城市)
      this.echartData.user.series.push({
        name: '网络基础设施就绪度',
        data: this.eDate.map(item => item.网络基础设施就绪度),
        type: 'bar',
        barWidth: '20px'
      })
    },
    // 获取新数据重新渲染echarts
    refreshTableDate () {
      console.log('刷新后渲染的数据：' + JSON.stringify(this.eDate))
      console.log('刷新后渲染的数组：' + JSON.stringify(renderDate(this.eDate, 1, 1).key))
      this.echartData.user.xData = this.eDate.map(item => item[this.eXDate])
      this.echartData.user.series.splice(0, 1, {
        name: renderDate(this.eDate, 1, 1).key,
        data: this.eDate.map(item => item[renderDate(this.eDate, 1, 1).key]),
        type: 'bar',
        barWidth: '20px'
      })
    },
    getTableData2 () {
      // 用户柱状图
      this.echartData2.user.xData = this.eDate2.map(item => item.城市)
      this.echartData2.user.series.push({
        name: '信息化发展环境',
        data: this.eDate2.map(item => item.信息化发展环境),
        type: 'bar',
        barWidth: '20px'
      })
    },
    // 获取新数据重新渲染echarts
    refreshTableDate2 () {
      this.echartData2.user.xData = this.eDate2.map(item => item[this.eXDate2])
      this.echartData2.user.series.splice(0, 1, {
        name: renderDate(this.eDate2, 1, 1).key,
        data: this.eDate2.map(item => item[renderDate(this.eDate2, 1, 1).key]),
        type: 'bar',
        barWidth: '20px'
      })
    },
    getTableData3 () {
      // 用户柱状图
      this.echartData3.user.xData = this.eDate3.map(item => item.城市)
      this.echartData3.user.series.push({
        name: '信息化发展环境',
        data: this.eDate3.map(item => item.信息化发展环境),
        type: 'bar',
        barWidth: '20px'
      })
    },
    // 获取新数据重新渲染echarts
    refreshTableDate3 () {
      console.log('第二次刷新后渲染的数据：' + JSON.stringify(this.eDate3))
      console.log('第二次刷新后渲染的数组：' + JSON.stringify(renderDate(this.eDate3, 1, 1).key))
      this.echartData3.user.xData = this.eDate3.map(item => item[this.eXDate3])
      this.echartData3.user.series.splice(0, 1, {
        name: renderDate(this.eDate3, 1, 1).key,
        data: this.eDate3.map(item => item[renderDate(this.eDate3, 1, 1).key]),
        type: 'bar',
        barWidth: '20px'
      })
    },
    getTableData4 () {
      // 用户柱状图
      this.echartData4.user.xData = this.eDate4.map(item => item.城市)
      this.echartData4.user.series.push({
        name: '发展指数',
        data: this.eDate4.map(item => item.发展指数),
        type: 'bar',
        barWidth: '20px'
      })
    },
    // 获取新数据重新渲染echarts
    refreshTableDate4 () {
      this.echartData4.user.xData = this.eDate4.map(item => item[this.eXDate4])
      this.echartData4.user.series.splice(0, 1, {
        name: renderDate(this.eDate4, 1, 1).key,
        data: this.eDate4.map(item => item[renderDate(this.eDate4, 1, 1).key]),
        type: 'bar',
        barWidth: '20px'
      })
    },
    getTableData5 () {
      // 用户柱状图
      this.echartData5.user.xData = this.eDate5.map(item => item.城市)
      this.echartData5.user.series.push({
        name: '增长率',
        data: this.eDate5.map(item => item.增长率),
        type: 'bar',
        barWidth: '20px'
      })
    },
    // 获取新数据重新渲染echarts
    refreshTableDate5 () {
      this.echartData5.user.xData = this.eDate5.map(item => item[this.eXDate5])
      this.echartData5.user.series.splice(0, 1, {
        name: renderDate(this.eDate5, 1, 1).key,
        data: this.eDate5.map(item => item[renderDate(this.eDate5, 1, 1).key]),
        type: 'bar',
        barWidth: '20px'
      })
    },
    getTableData6 () {
      // 用户柱状图
      this.echartData6.user.xData = this.eDate6.map(item => item.城市)
      this.echartData6.user.series.push({
        name: '应用效益',
        data: this.eDate6.map(item => item.应用效益),
        type: 'bar',
        barWidth: '20px'
      })
    },
    // 获取新数据重新渲染echarts
    refreshTableDate6 () {
      this.echartData6.user.xData = this.eDate6.map(item => item[this.eXDate6])
      this.echartData6.user.series.splice(0, 1, {
        name: renderDate(this.eDate6, 1, 1).key,
        data: this.eDate6.map(item => item[renderDate(this.eDate6, 1, 1).key]),
        type: 'bar',
        barWidth: '20px'
      })
    },
    getTableData7 () {
      // 用户柱状图
      this.echartData7.user.xData = this.eDate7.map(item => item.城市)
      this.echartData7.user.series.push({
        name: '网络基础设施就绪度',
        data: this.eDate7.map(item => item.网络基础设施就绪度),
        type: 'bar',
        barWidth: '20px'
      })
    },
    // 获取新数据重新渲染echarts
    refreshTableDate7 () {
      this.echartData7.user.xData = this.eDate7.map(item => item[this.eXDate7])
      this.echartData7.user.series.splice(0, 1, {
        name: renderDate(this.eDate7, 1, 1).key,
        data: this.eDate7.map(item => item[renderDate(this.eDate7, 1, 1).key]),
        type: 'bar',
        barWidth: '20px'
      })
    }
  },
  mounted () {
    this.getTableData()
    this.getTableData2()
    this.getTableData3()
    this.getTableData4()
    this.getTableData5()
    this.getTableData6()
    this.getTableData7()
  }
}
</script>

<style lang="scss">
  #mask{
    display:none;
    z-index:999999999;
    width:100%;
    height:300%;
    position:fixed;//利用固定定位的好处：页面还可以上下翻动，但是始终处于灰色背景下
  }
  #show{
    display:none;
    background:rgba(0,0,0,0.5);
    width:90%;
    height:90%;
    position:fixed;
    left:5%;
    top:1%;
    margin-top:2%;
    z-index:999999999;

  }
  #bg{
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: #192e54;
    -webkit-filter: blur(20px);
    -moz-filter: blur(20px);
    -ms-filter: blur(20px);
    -o-filter: blur(20px);
    filter: blur(35px);
  }
  #show #close_show{
    position:relative;
    left:49%;
    top:0%;
    font-size:20px;
    z-index:999999999;
    color:red;
    width:20px;
    height:20px;
    cursor:pointer;
  }
  .box {
    width: 100%;
    height: 100%;
    background: url(../assets/img/bg.png) left top no-repeat;
    background-size: 100% 100%;
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    outline: none;
  }
  .box-left {
    width: 28%;
    height: 100%;
    background: url(../assets/img/line1.png) top right repeat-y;
  }
  .box-center {
    width: 44%;
    height: 100%;
    background: url(../assets/img/line1.png) top right repeat-y;
  }
  .box-right {
    width: 28%;
    height: 100%;
  }
  .left-top {
    width: 100%;
    height: 40.4%;
    position: relative;
    background: url(../assets/img/border_bg01.png) top left no-repeat;
    background-size:98% 100%;

  }
  .left-center {
    width: 100%;
    height: 37%;
    position: relative;
    background: url(../assets/img/border_bg01.png) top left no-repeat;
    background-size:98% 100%;

  }
  .left-bottom {
    width: 100%;
    height: 42.6%;
    position: relative;
    background: url(../assets/img/border_bg01.png) top left no-repeat;
    background-size:98% 100%;

  }
  .center-top {
    width: 100%;
    height: 18.8%;
    position: relative;
    top: 0;
    left: -10px;
    background: url(../assets/img/title_border.png) bottom center no-repeat;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .center-bottom {
    width: 100%;
    height: 80.9%;
    position: relative;
    background: url(../assets/img/border_bg01.png) top left no-repeat;
    background-size:98% 100%;

  }
  .right-top {
    width: 100%;
    height: 41%;
    box-sizing: border-box;
    padding-top: 0.2rem;
    position: relative;
    background: url(../assets/img/border_bg01.png) top left no-repeat;
    background-size:98% 100%;

  }
  .right-center {
    width: 100%;
    height: 29%;
    position: relative;
    background: url(../assets/img/border_bg01.png) top left no-repeat;
    background-size:98% 100%;

  }
  .right-bottom {
    width: 100%;
    height: 30%;
    position: relative;
    background: url(../assets/img/border_bg01.png) top left no-repeat;
    background-size:98% 100%;

  }

</style>
