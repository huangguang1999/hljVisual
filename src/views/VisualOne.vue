<template>
  <div class="con">
    <div id="mask"></div>
    <div id="show">
      <div id="bg"></div>
      <span id="close_show">×</span>
      <div id="enlarge" style="width:100%;height:80%"></div>
    </div>
    <div class="top">
      黑龙江省各市地信息化发展水平总体分析
    </div>
    <div class="content">
      <div class="contentElement1">
        <div class="contentElement1_1">
          <DialogForm v-show="buttonShow1" @renderInPage="renderInPage"></DialogForm>
          <echartsVis :chartData="echartData.user" v-show="echartShow1" style="width:100%;height: 100%;"></echartsVis>
        </div>
        <div class="contentElement1_2">
          <DialogForm2 v-show="buttonShow2" @renderInPage2="renderInPage2"></DialogForm2>
          <echartsVis :chartData="echartData2.user" v-show="echartShow2" style="width:100%;height: 100%;"></echartsVis>
        </div>
      </div>
      <div class="contentElement2">
        <Map></Map>
      </div>
      <div class="contentElement3">
          <DialogForm3 v-show="buttonShow3" @renderInPage3="renderInPage3"></DialogForm3>
          <echartsVis :chartData="echartData3.user" v-show="echartShow3" style="width:100%;height: 100%;"></echartsVis>
      </div>
    </div>
    <div class="buttom">
      <div class="buttomElement1">
          <DialogForm4 v-show="buttonShow4" @renderInPage4="renderInPage4"></DialogForm4>
          <echartsVis :chartData="echartData4.user" v-show="echartShow4" style="width:100%;height: 100%;"></echartsVis>
      </div>
      <div class="buttomElement2">
          <DialogForm5 v-show="buttonShow5" @renderInPage5="renderInPage5"></DialogForm5>
          <echartsVis :chartData="echartData5.user" v-show="echartShow5" style="width:100%;height: 100%;"></echartsVis>
      </div>
      <div class="buttomElement3">
          <DialogForm6 v-show="buttonShow6" @renderInPage6="renderInPage6"></DialogForm6>
          <echartsVis :chartData="echartData6.user" v-show="echartShow6" style="width:100%;height: 100%;"></echartsVis>
      </div>
      <div class="buttomElement4">
          <DialogForm7 v-show="buttonShow7" @renderInPage7="renderInPage7"></DialogForm7>
          <echartsVis :chartData="echartData7.user" v-show="echartShow7" style="width:100%;height: 100%;"></echartsVis>
      </div>
    </div>
  </div>
</template>

<script>
import Map from '../components/display/Map'
import echartsVis from '../components/echarts/EchartsVis'
import DialogForm from '../components/display/DialogForm'
import DialogForm2 from '../components/display/DialogForm2'
import DialogForm3 from '../components/display/DialogForm3'
import DialogForm4 from '../components/display/DialogForm4'
import DialogForm5 from '../components/display/DialogForm5'
import DialogForm6 from '../components/display/DialogForm6'
import DialogForm7 from '../components/display/DialogForm7'
import {renderData} from '../components/common/js/renderData'
export default {
  components: {
    Map,
    echartsVis,
    DialogForm,
    DialogForm2,
    DialogForm3,
    DialogForm4,
    DialogForm5,
    DialogForm6,
    DialogForm7
  },
  data () {
    return {
      // 第一个表格数据
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
          series: [],
          title: {
            text: ''
          }
        },
        video: {
          series: []
        }
      },
      // 刷新后的数据
      resOption: [],
      // 判断组件是否显示
      echartShow1: false,
      buttonShow1: true,
      // 第二个表格数据
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
          series: [],
          title: {
            text: ''
          }
        },
        video: {
          series: []
        }
      },
      // 刷新后的数据
      resOption2: [],
      // 判断组件是否显示
      echartShow2: false,
      buttonShow2: true,
      // 第三个表格数据
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
          series: [],
          title: {
            text: ''
          }
        },
        video: {
          series: []
        }
      },
      // 刷新后的数据
      resOption3: [],
      // 判断组件是否显示
      echartShow3: false,
      buttonShow3: true,
      // 第四个表格数据
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
          series: [],
          title: {
            text: ''
          }
        },
        video: {
          series: []
        }
      },
      // 刷新后的数据
      resOption4: [],
      // 判断组件是否显示
      echartShow4: false,
      buttonShow4: true,
      // 第五个表格数据
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
          series: [],
          title: {
            text: ''
          }
        },
        video: {
          series: []
        }
      },
      // 刷新后的数据
      resOption5: [],
      // 判断组件是否显示
      echartShow5: false,
      buttonShow5: true,
      // 第六个表格数据
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
          series: [],
          title: {
            text: ''
          }
        },
        video: {
          series: []
        }
      },
      // 刷新后的数据
      resOption6: [],
      // 判断组件是否显示
      echartShow6: false,
      buttonShow6: true,
      // 第七个表格数据
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
          series: [],
          title: {
            text: ''
          }
        },
        video: {
          series: []
        }
      },
      // 刷新后的数据
      resOption7: [],
      // 判断组件是否显示
      echartShow7: false,
      buttonShow7: true
    }
  },
  watch: {
    '$store.state.resData' () {
      this.resOption = this.$store.state.resData
    },
    '$store.state.resData2' () {
      this.resOption2 = this.$store.state.resData2
    },
    '$store.state.resData3' () {
      this.resOption3 = this.$store.state.resData3
    },
    '$store.state.resData4' () {
      this.resOption4 = this.$store.state.resData4
    },
    '$store.state.resData5' () {
      this.resOption5 = this.$store.state.resData5
    },
    '$store.state.resData6' () {
      this.resOption6 = this.$store.state.resData6
    },
    '$store.state.resData7' () {
      this.resOption7 = this.$store.state.resData7
    }
  },
  methods: {
    renderInPage (form) {
      this.echartShow1 = true
      this.buttonShow1 = false
      this.echartData.user.xData = this.resOption.map(item => item[renderData(this.resOption, 0, 0).key])
      this.echartData.user.title.text = form.name
      for (let i = 0; i < Object.keys(this.resOption[0]).length - 1; i++) {
        this.echartData.user.series.splice(i, 1, {
          name: renderData(this.resOption, 0, i + 1).key,
          data: this.resOption.map(item => item[renderData(this.resOption, 0, i + 1).key]),
          type: form.region,
          barMaxWidth: '60%'
        })
      }
    },
    renderInPage2 (form) {
      this.echartShow2 = true
      this.buttonShow2 = false
      this.echartData2.user.xData = this.resOption2.map(item => item[renderData(this.resOption2, 0, 0).key])
      this.echartData2.user.title.text = form.name
      for (let i = 0; i < Object.keys(this.resOption2[0]).length - 1; i++) {
        this.echartData2.user.series.splice(i, 1, {
          name: renderData(this.resOption2, 0, i + 1).key,
          data: this.resOption2.map(item => item[renderData(this.resOption2, 0, i + 1).key]),
          type: form.region,
          barMaxWidth: '60%'
        })
      }
    },
    renderInPage3 (form) {
      this.echartShow3 = true
      this.buttonShow3 = false
      this.echartData3.user.xData = this.resOption3.map(item => item[renderData(this.resOption3, 0, 0).key])
      this.echartData3.user.title.text = form.name
      for (let i = 0; i < Object.keys(this.resOption3[0]).length - 1; i++) {
        this.echartData3.user.series.splice(i, 1, {
          name: renderData(this.resOption3, 0, i + 1).key,
          data: this.resOption3.map(item => item[renderData(this.resOption3, 0, i + 1).key]),
          type: form.region,
          barMaxWidth: '60%'
        })
      }
    },
    renderInPage4 (form) {
      this.echartShow4 = true
      this.buttonShow4 = false
      this.echartData4.user.xData = this.resOption4.map(item => item[renderData(this.resOption4, 0, 0).key])
      this.echartData4.user.title.text = form.name
      for (let i = 0; i < Object.keys(this.resOption4[0]).length - 1; i++) {
        this.echartData4.user.series.splice(i, 1, {
          name: renderData(this.resOption4, 0, i + 1).key,
          data: this.resOption4.map(item => item[renderData(this.resOption4, 0, i + 1).key]),
          type: form.region,
          barMaxWidth: '60%'
        })
      }
    },
    renderInPage5 (form) {
      this.echartShow5 = true
      this.buttonShow5 = false
      this.echartData5.user.xData = this.resOption5.map(item => item[renderData(this.resOption5, 0, 0).key])
      this.echartData5.user.title.text = form.name
      for (let i = 0; i < Object.keys(this.resOption5[0]).length - 1; i++) {
        this.echartData5.user.series.splice(i, 1, {
          name: renderData(this.resOption5, 0, i + 1).key,
          data: this.resOption5.map(item => item[renderData(this.resOption5, 0, i + 1).key]),
          type: form.region,
          barMaxWidth: '60%'
        })
      }
    },
    renderInPage6 (form) {
      this.echartShow6 = true
      this.buttonShow6 = false
      this.echartData6.user.xData = this.resOption6.map(item => item[renderData(this.resOption6, 0, 0).key])
      this.echartData6.user.title.text = form.name
      for (let i = 0; i < Object.keys(this.resOption6[0]).length - 1; i++) {
        this.echartData6.user.series.splice(i, 1, {
          name: renderData(this.resOption6, 0, i + 1).key,
          data: this.resOption6.map(item => item[renderData(this.resOption6, 0, i + 1).key]),
          type: form.region,
          barMaxWidth: '60%'
        })
      }
    },
    renderInPage7 (form) {
      this.echartShow7 = true
      this.buttonShow7 = false
      this.echartData7.user.xData = this.resOption7.map(item => item[renderData(this.resOption7, 0, 0).key])
      this.echartData7.user.title.text = form.name
      for (let i = 0; i < Object.keys(this.resOption7[0]).length - 1; i++) {
        this.echartData7.user.series.splice(i, 1, {
          name: renderData(this.resOption7, 0, i + 1).key,
          data: this.resOption7.map(item => item[renderData(this.resOption7, 0, i + 1).key]),
          type: form.region,
          barMaxWidth: '60%'
        })
      }
    }
  }
}
</script>

<style scoped lang="scss">
  .con{
    display: flex;
    flex-direction: column;
    width:100%;
    height:100%;
    background:url(../assets/img/bg.png) no-repeat;
    background-size:100% 100%;
  }
  .top{
    display: flex;
    width:100%;
    height:9%;
    font-family: "Arial","Microsoft YaHei","黑体","宋体",sans-serif;
    font-size: 40px;
    align-items: center;
    justify-content: center;
    color: floralwhite;
  }
  .content{
    display: flex;
    width:100%;
    height:51%;
  }
  .buttom{
    display: flex;
    width:100%;
    height:40%;
  }
  .contentElement1{
    display: flex;
    flex-direction: column;
    width:30%;
    height:100%;
  }
  .contentElement2{
    display: flex;
    width:40%;
    height:100%;
    background:url(../assets/img/ccent.png) no-repeat;
    background-size:100% 100%;
  }
  .contentElement3{
    display: flex;
    width:30%;
    height:100%;
    background:url(../assets/img/crigh.png) no-repeat;
    background-size:100% 100%;
  }
  .buttomElement1{
     display: flex;
     width:25%;
     height:100%;
     background:url(../assets/img/b1.png) no-repeat;
     background-size:100% 100%;
   }
  .buttomElement2{
    display: flex;
    width:25%;
    height:100%;
    background:url(../assets/img/b1.png) no-repeat;
    background-size:100% 100%;
  }
  .buttomElement3{
    display: flex;
    width:25%;
    height:100%;
    background:url(../assets/img/b1.png) no-repeat;
    background-size:100% 100%;
  }
  .buttomElement4{
    display: flex;
    width:25%;
    height:100%;
    background:url(../assets/img/b1.png) no-repeat;
    background-size:100% 100%;
  }
  .contentElement1_1{
    display: flex;
    width:100%;
    height:50%;
    background:url(../assets/img/cleft1.png) no-repeat;
    background-size:100% 100%;
  }
  .contentElement1_2{
    display: flex;
    width:100%;
    height:50%;
    background:url(../assets/img/cleft2.png) no-repeat;
    background-size:100% 100%;
  }
  .echarts1{
    padding-left: 8%;
    width:100%;
    height:100%;
  }
  .echarts2{
    padding-left: 8%;
    width:100%;
    height:100%;
  }
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
</style>
