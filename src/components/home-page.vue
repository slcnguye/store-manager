<template>
  <div class="homepage">
    <el-container>
      <el-header>
        <!--<router-link :to="'hello-world'" tag="el-button">Test</router-link>-->
        <!--<el-button type="warning">{{msg}}</el-button>-->
        <el-menu :default-active="activeIndex" class="el-menu" mode="horizontal" @select="handleSelect" :router="true">
          <el-menu-item index="home" route="/">Home</el-menu-item>
          <el-menu-item index="order">Order</el-menu-item>
          <el-menu-item index="hello-world">Hello World</el-menu-item>
          <el-menu-item index="documentation">Documentation</el-menu-item>
        </el-menu>
      </el-header>
      <el-main>
        <div>{{ count }}</div>
        <el-button type="primary" @click="incrementCount">Primary</el-button>
      </el-main>
    </el-container>
  </div>
</template>

<script>
export default {
  name: 'HomePage',
  data () {
    return {
      activeIndex: 'home',
      msg: 'Welcome to Your Vue.js App'
    }
  },
  computed: {
    count () {
      return this.$store.state.counter
    }
  },
  methods: {
    handleSelect (key, keyPath) {
      console.log(key, keyPath)
    },
    incrementCount () {
      this.$store.dispatch('incrementCounter')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
