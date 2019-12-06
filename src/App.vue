<template>
  <div id="app">
    <div style="position:absolute;z-index:999">
      <router-link :to="{path:'/'}">
        <i class="el-icon-monitor" style="color:#409EFF"></i>
      </router-link>
      <router-link :to="{path:'/VisualTwo'}" style="text-decoration: none">
        <i class="el-icon-monitor" style="color:#67C23A"></i>
      </router-link>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  display:flex;
  width:100%;
  height:100%;
}
</style>
