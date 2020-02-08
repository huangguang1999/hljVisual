<template>

  <div class="map" id="s-map" style="width:100%;height:100%">
    <div id="chartMap" class="chartGauge" style="width:100%;height:100%">

    </div>
    <div id="mask"></div>
    <div id="show">
      <div id="bg"></div>
      <span id="closeShow">×</span>
      <div id="enlarge" style="width:100%;height:100%"></div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6"> // 在之前已经单独引入了echarts文件,在此只需引入需要的地区的json文件
import echarts from 'echarts'
import hlj from 'echarts/map/json/province/heilongjiang'
export default {
  props: {
    width: {
      type: String,
      default: '180px'
    },
    height: {
      type: String,
      default: '500px'
    }
  },
  methods: {
    drawmap () {
      let chartMap = document.getElementById('chartMap')
      let smap = document.getElementById('s-map')// 动态修改图表的宽高，达到自适应的效果
      var resizeWorldMapContainer = function () {
        chartMap.style.width = smap.clientWidth + 'px'
        chartMap.style.height = smap.clientHeight + 'px'
      }
      resizeWorldMapContainer()
      // 注册可用的地图
      echarts.registerMap('heilongjiang', hlj)
      let myChart = echarts.init(chartMap)
      myChart.setOption({
        roam: false,
        toolbox: {
          show: true,
          iconStyle: {
            borderColor: '#F0F0F0'
          },
          feature: {
            mark: { // '辅助线开关'
              show: true
            },
            restore: { // 配置项还原。
              show: true, // 是否显示该工具。
              title: '还原'
            },
            saveAsImage: {show: true},
            myEnlarge: {// 放大按钮，自定义按钮必须以my开头
              show: true,
              title: '放大',
              icon: 'image:///static/img/enlarge.png', // 按钮图片的位置//按钮图片的位置
              onclick: function () {
                var mask = document.getElementById('mask')
                var show = document.getElementById('show')
                mask.style.display = 'block'
                show.style.display = 'block'
                var imgChart = echarts.init(document.getElementById('enlarge'))
                imgChart.clear()
                // myChart.getOption()获取当前图形的配置项option
                imgChart.setOption(myChart.getOption())
                var closeShow = document.getElementById('closeShow')
                closeShow.onclick = () => { // 关闭按钮触发
                  imgChart.clear()
                  mask.style.display = 'none'
                  show.style.display = 'none'
                }
              }
            }
          },
          borderColor: '#00FFFF',
          padding: [35, 35, 35, 35]
        },
        series: [
          {
            name: '',
            type: 'map',
            map: 'heilongjiang',
            mapType: '黑龙江',
            roam: true,
            zoom: 1.2,
            itemStyle: {
              normal: {
                areaColor: '#0080ff',
                label: {
                  show: true,
                  textStyle: {
                    color: '#aaaaa',
                    fontSize: this.font
                  }
                }
              },
              emphasis: {
                areaColor: '#a6ffff',
                label: {
                  show: true,
                  textStyle: {
                    color: '#398def',
                    fontSize: this.font
                  }
                }

              }
            },
            data: [
              {name: '黑龙江', value: Math.round(Math.random() * 1000)}
            ]
          }
        ]
      })

      window.addEventListener('resize', function () {
        resizeWorldMapContainer()
        myChart.resize()
      })
    }
  },
  filters: {},
  computed: {},
  created () {

  },
  mounted () {
    this.drawmap()
  },
  destroyed () {}
}
</script>

<style lang="scss">
  @function px2rem($px) {
    $rem: 75px;
    @return ($px / $rem) + rem;
  }
  .mask{
    display:none;
    width:800px;
    height:800px;
    position:fixed;//利用固定定位的好处：页面还可以上下翻动，但是始终处于灰色背景下
  }
  .show{
    display:none;
    background:rgba(0,0,0,0.5);
    width:90px;
    height:90px;
    position:fixed;
    left:5.625rem;
    top:5.625rem;
    margin-top:5.625rem;
    z-index:999999999;

  }
  .bg{
    position: absolute;
    width: 100px;
    height: 100px;
    background-color: #192e54;
    -webkit-filter: blur(20px);
    -moz-filter: blur(20px);
    -ms-filter: blur(20px);
    -o-filter: blur(20px);
    filter: blur(35px);
  }
  .show .closeShow{
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
