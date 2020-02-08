<template>
  <div id="aa" style="height: 100%" ref="echart">
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
          series: [],
          title: {
            test: ''
          }
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
        title: {
          show: true,
          text: '',
          x: 'left',
          y: 'top',
          padding: 5,
          textStyle: {
            fontFamily: 'Microsoft YaHei',
            fontSize: 20,
            fontStyle: 'normal',
            fontWeight: 'bolder',
            color: '#cccccc'
          }
        },
        grid: {
          left: '20%',
          top: '20%',
          bottom: '10%'
        },
        tooltip: {
          trigger: 'axis'
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
              show: true,
              title: '数据视图',
              readOnly: true,
              lang: ['', '关闭'],
              optionToContent: function (opt) {
                let axisData = opt.xAxis[0].data // 坐标数据
                let series = opt.series // 折线图数据
                let tdHeads = '<td  style="padding: 0 10px">时间</td>' // 表头
                let tdBodys = '' // 数据
                series.forEach(function (item) {
                  tdHeads += `<td style="padding: 0 20px">${item.name}</td>` // 组装表头
                })
                let table = `<table border="1" style="margin-left:20px;border-collapse:collapse;font-size:14px;text-align:center"><tbody><tr>${tdHeads} </tr>`
                for (let i = 0, l = axisData.length; i < l; i++) {
                  for (let j = 0; j < series.length; j++) {
                    tdBodys += `<td>${series[j].data[i]}</td>` // 组装表数据
                  }
                  table += `<tr><td style="padding: 0 10px">${axisData[i]}</td>${tdBodys}</tr>`
                  tdBodys = ''
                }
                table += '</tbody></table>'
                return table
              }
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
                let chartMap = document.getElementById('aa')
                let myChart = echarts.init(chartMap)
                // myChart.getOption()获取当前图形的配置项option
                imgChart.setOption(myChart.getOption(), true)
                console.log(imgChart)
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
        xAxis: {
          type: 'category',
          data: [],
          axisLine: {
            lineStyle: {
              color: '#17b3a3'
            }
          },
          axisLabel: {
            color: '#cccccc',
            interval: 'auto'
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
        color: ['#ffa31a', '#ffd480', '#ff8080', '#407fbf', '#7a7a52', '#ff6699', '#75a3a3', '#70dbdb', '#999999', '#00cc44', '#ffa31a', '#2d8659', '#d11aff'],
        series: []
      },
      normalOption: {
        tooltip: {
          trigger: 'item'
        },
        color: function (params) {
          var colorList = ['#ffa31a', '#ffd480', '#ff8080', '#407fbf', '#7a7a52', '#ff6699', '#75a3a3', '#70dbdb', '#999999', '#00cc44', '#ffa31a', '#2d8659', '#d11aff']
          return colorList[params.dataIndex]
        },
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
        this.echart = echarts.init(this.$refs.echart)
        this.echart.setOption(this.options, true)
      }
    },
    initChartData () {
      if (this.isAxisChart) {
        this.axisOption.xAxis.data = this.chartData.xData
        this.axisOption.series = this.chartData.series
        this.axisOption.title.text = this.chartData.title.text
      } else {
        this.normalOption.series = this.chartData.series
      }
    },
    resizeChart () {
      if (this.echart) {
        this.echart.resize()
      }
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

<style lang="scss" scoped>
  #aa,#aa div{
    height:100%!important;
  }
</style>
