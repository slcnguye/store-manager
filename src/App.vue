<template>
  <div id="app">
    <el-header class="header" v-if="showNavbar">
      <img style="height: calc( 100% - 20px );" src="./assets/logo.png">
      <span class="padding-left">Ékea Furniture Store</span>
    </el-header>
    <div class="container">
      <el-menu :collapse="true" :router="true" v-if="showMenu && tenantPrefix">
        <el-menu-item :index="withTenantPrefix('')" class="text-center">
          <i class="fa fa-home fa-lg"></i>
          <span slot="title">Home</span>
        </el-menu-item>
        <el-menu-item :index="withTenantPrefix('/order')" class="text-center">
          <i class="fa fa-shopping-cart fa-lg"></i>
          <span slot="title">Order</span>
        </el-menu-item>
        <el-menu-item :index="withTenantPrefix('/completed-orders')" class="text-center">
          <i class="fa fa-th-list" aria-hidden="true"></i>
          <span slot="title">Completed Orders</span>
        </el-menu-item>
        <el-menu-item :index="withTenantPrefix('/settings')" class="text-center">
          <i class="fa fa-cog fa-lg"></i>
          <span slot="title">Settings</span>
        </el-menu-item>
        <el-menu-item :index="withTenantPrefix('/documentation')" class="text-center">
          <i class="fa fa-file fa-lg"></i>
          <span slot="title">Documentation</span>
        </el-menu-item>
      </el-menu>

      <router-view style="flex: 1;"></router-view>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'App',
  computed: {
    showMenu () {
      return this.$route.meta.showMenu
    },
    showNavbar () {
      return this.$route.meta.showNavbar
    },
    tenantPrefix () {
      return this.session && this.session.tenant ? this.session.tenant.prefixUrl : null
    },
    ...mapState(['session'])
  },
  methods: {
    withTenantPrefix (suffixUrl) {
      return '/' + this.tenantPrefix + suffixUrl
    }
  }
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
