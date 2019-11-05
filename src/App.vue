<template>
  <div id="app">
    <el-button-group style="position: absolute;">
      <el-button type="primary" icon="el-icon-arrow-left">
        <router-link :to="{path:'/'}" style="text-decoration: none">
          上一页
        </router-link>
      </el-button>
      <el-button type="primary">
        <router-link :to="{path:'/VisualTwo'}" style="text-decoration: none">
          下一页
        </router-link><i class="el-icon-arrow-right el-icon--right"></i>
      </el-button>
    </el-button-group>
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
