<template>
  <div style="height: 100px" ref="echart">
  </div>
</template>

<script>
import echarts from 'echarts'
export default {
  props: {
    chartData: {
      type: Object,
      default () {
        return {
          xData: [],
          series: []
        }
      }
    },
    isAxisChart: {
      type: Boolean,
      default: true
    }
  },
  computed: {
    options () {
      return this.isAxisChart ? this.axisOption : this.normalOption
    },
    isCollapse () {
      return this.$store.state.tab.isCollapse
    }
  },
  watch: {
    chartData: {
      handler: function () {
        this.initChart()
      },
      deep: true
    }
  },
  data () {
    return {
      echart: null,
      axisOption: {
        legend: {
          date: [],
          textStyle: {
            color: 'white'
          }
        },
        grid: {
          left: '20%'
        },
        tooltip: {
          trigger: 'axis'
        },
        xAxis: {
          type: 'category',
          data: [],
          axisLine: {
            lineStyle: {
              color: '#17b3a3'
            }
          },
          axisLabel: {
            color: '#fff',
            interval: 0
          }
        },
        yAxis: [
          {
            type: 'value',
            axisLine: {
              lineStyle: {
                color: '#17b3a3'
              }
            }
          }
        ],
        color: function (params) {
          var colorList = ['#ffa31a', '#ffd480', '#ff8080', '#407fbf', '#7a7a52', '#ff6699', '#75a3a3', '#70dbdb', '#999999', '#00cc44', '#ffa31a', '#2d8659', '#d11aff']
          return colorList[params.dataIndex]
        },
        toolbox: {
          show: true,
          iconStyle: {
            borderColor: 'e6e6e6'
          },
          feature: {
            mark: { // '辅助线开关'
              show: true
            },
            dataView: { // 数据视图
              show: true
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
                imgChart.setOption(this.echart.getOption())
                // eslint-disable-next-line camelcase
                var close_show = document.getElementById('close_show')
                close_show.onclick = () => { // 关闭按钮触发
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
        series: []
      },
      normalOption: {
        tooltip: {
          trigger: 'item'
        },
        color: ['#0f78f4', '#dd536b', '#9462e5', '#a6a6a6', '#e1bb22', '#39c362', '#3ed1cf'],
        series: []
      }
    }
  },
  methods: {
    initChart () {
      this.initChartData()
      if (this.echart) {
        this.echart.setOption(this.options, true)
      } else {
        this.echart = echarts.init(this.$refs.echart, true)
        this.echart.setOption(this.options, true)
      }
    },
    initChartData () {
      if (this.isAxisChart) {
        this.axisOption.xAxis.data = this.chartData.xData
        this.axisOption.series = this.chartData.series
        this.axisOption.lenged = this.chartData.lenged
      } else {
        this.normalOption.series = this.chartData.series
      }
    },
    resizeChart () {
      this.echart ? this.echart.resize() : ''
    }
  },
  mounted () {
    window.addEventListener('resize', this.resizeChart)
  },
  destroyed () {
    window.removeEventListener('resize', this.resizeChart)
  }
}
</script>

<style lang="scss" scoped></style>
