<template>
  <div class="con">
    <div id="mask"></div>
    <div id="show">
      <div id="bg"></div>
      <span id="close_show">×</span>
      <div id="enlarge" style="width:100%;height:80%"></div>
    </div>
    <dragList></dragList>
    <div class="top">
      黑龙江省各市地信息化发展水平总体分析
    </div>
    <div class="content">
      <div class="contentElement1">
        <div class="contentElement1_1">
        </div>
        <div class="contentElement1_2">
        </div>
      </div>
      <div class="contentElement2">
        <Map></Map>
      </div>
      <div class="contentElement3">
      </div>
    </div>
    <div class="buttom">
      <div class="buttomElement1">
      </div>
      <div class="buttomElement2">
      </div>
      <div class="buttomElement3">
      </div>
      <div class="buttomElement4">

      </div>
    </div>
  </div>
</template>

<script>
import Map from '../components/display/Map'
import echartsVis from '../components/echarts/EchartsVis'
import dragList from '../components/dropList/DropList'
export default {
  components: {
    Map,
    echartsVis,
    dragList
  },
  data () {
    return {

    }
  },
  watch: {

  },
  methods: {

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
