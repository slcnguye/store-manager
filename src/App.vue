<template>
  <div id="app">
    <el-header class="header" v-if="showNavbar">
      <div class="header-left">
        <img style="height: 40px;" src="./assets/logo.png">
        <span class="padding-left" v-if="tenant">{{ tenant.name }}</span>
      </div>
      <el-button @click="signOut">
        Sign out
        <i class="fa fa-sign-out fa-lg"></i>
      </el-button>
    </el-header>
    <div class="container" :class="{ 'container-with-header': showNavbar }">
      <el-menu :collapse="true" :router="true" v-if="showMenu && tenantPrefix">
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
    tenant () {
      return this.session ? this.session.tenant : null
    },
    tenantPrefix () {
      return this.tenant ? this.tenant.prefixUrl : null
    },
    ...mapState(['session'])
  },
  methods: {
    withTenantPrefix (suffixUrl) {
      return '/' + this.tenantPrefix + suffixUrl
    },
    signOut () {
      this.$store.dispatch('setUser', null)
      this.$router.push({name: 'login'})
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

  .header-left {
    display: flex;
    align-items: center;
    flex: 1;
  }

  .container {
    height: 100vh;
    display: flex;
  }

  .container-with-header {
    height: calc( 100vh - 60px );
  }
</style>
