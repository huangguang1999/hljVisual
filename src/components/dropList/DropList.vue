<template>
  <div>
    <div class="content">
      <transition name="slide-fade">
        <div v-if="show" class="items">
          <router-link :to="{path:'/VisualTwo'}" style="text-decoration: none">
              黑紫
          </router-link>
        </div>
      </transition>
      <transition name="slide-fade">
        <div v-if="show" class="items">
          <router-link :to="{path:'/'}" style="text-decoration: none">
            深蓝
          </router-link>
        </div>
      </transition>
      <transition name="slide-fade">
        <div class="items" v-if="show" @click="createDialog">新建</div>
      </transition>
      <div class="items" @click="show = !show"><i class="el-icon-s-tools"></i></div>
    </div>
    <grid-layout
      v-if="charts.length!==0"
      v-loading="loading"
      :layout="layout || []"
      :col-num="24"
      :row-height="30"
      :is-draggable="mode === 'edit'"
      :is-resizable="mode === 'edit'"
      :is-mirrored="false"
      :vertical-compact="true"
      :pane-container="false"
      :margin="[10, 10]"
      :use-css-transforms="false"
      style="min-height: 500px"
      @layout-updated="handleLayoutChange"
    >
      <grid-item
        v-for="item in layout || []"
        :key="item.index"
        :x="item.x"
        :y="item.y"
        :w="item.w"
        :h="item.h"
        :i="item.i"
        @resized="handleResize"
      >
        <el-card v-loading="chartLoading[item.i]" class="visualize-card" body-style="padding: 10px;">
          <div slot="header" class="operation-bar">
            <div>
              <span>{{ getChartItem(item.i).chart_name }}</span>
            </div>
            <div>
              <i v-show="mode === 'edit'" class="el-icon-edit" @click="handleEdit(getChartItem(item.i))" />
              <i v-show="mode === 'edit'" class="el-icon-delete" @click="handleDelete(getChartItem(item.i))" />
              <el-tooltip :content="getChartItem(item.i).desc" class="item" effect="dark" placement="top-end">
                <i class="el-icon-info" style="color:#409eff;cursor:pointer;" />
              </el-tooltip>
            </div>
          </div>
          <visualize-panel :key="item.index" :ref="`chartInstance${item.i}`" :data="results[item.i]" :schema="getChartItem(item.i).content.allSelected" :chart-type.sync="getChartItem(item.i).content.chartType" :is-edit-mode="false" :chart-style="{height: `${item.h*30 + 10 * (item.h-1) - 60}px`}" />
        </el-card>
      </grid-item>
      <h1>123</h1>
    </grid-layout>
  </div>
</template>

<script>
import { GridLayout, GridItem } from 'vue-grid-layout'

export default {
  components: { GridLayout, GridItem },
  data () {
    return {
      show: true,
      layout: []
    }
  }
}
</script>

<style scoped>
  .content {
    position: absolute;
    top: 0%;
    left: 1%;
    display: flex;
    flex-direction: column;
    width: 3%;
    height: 15%;
  }
  .items {
    border: 1px solid black;
    width: 100%;
    height: 25%;
    box-shadow:5px 2px 6px #000;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    background: white;
    color:#888888
  }
  .slide-fade-enter-active {
    transition: all .3s ease;
  }
  .slide-fade-leave-active {
    transition: all .3s cubic-bezier(1.0, 0.5, 0.8, 1.0);
  }
  .slide-fade-enter, .slide-fade-leave-to
  /* .slide-fade-leave-active for below version 2.1.8 */ {
    transform: translateY(-10px);
    opacity: 0;
  }
</style>>
