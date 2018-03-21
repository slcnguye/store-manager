<template>
  <div id="app">
    <el-header class="header">
      <img style="height: calc( 100% - 20px );" src="./assets/logo.png">
      <span class="padding-left">Store Manager</span>
    </el-header>
    <div class="container">
      <el-menu :collapse="true" :router="true">
        <el-menu-item index="home" class="text-center">
          <i class="fa fa-home fa-lg"></i>
          <span slot="title">Home</span>
        </el-menu-item>
        <el-menu-item index="order" class="text-center">
          <i class="fa fa-shopping-cart fa-lg"></i>
          <span slot="title">Order</span>
        </el-menu-item>
        <el-menu-item index="documentation" class="text-center">
          <i class="fa fa-file fa-lg"></i>
          <span slot="title">Documentation</span>
        </el-menu-item>
      </el-menu>

      <router-view style="flex: 1;"/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style scoped>
  #app {
    height: 100%;
  }

  .header {
    display: flex;
    align-items: center;
    background-color: white;
    border-bottom: solid 1px #e6e6e6;
  }

  .container {
    height: calc( 100vh - 60px );
    display: flex;
  }
</style>
