<template>
  <div class="homepage">
    <el-container>
      <el-header>
      </el-header>
      <el-main>
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
  methods: {
    handleSelect (key, keyPath) {
      console.log(key, keyPath)
    }
  }
}
</script>
