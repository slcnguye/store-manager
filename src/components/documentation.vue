<template>
  <div class="documentation">
    <el-container>
      <el-main>
        <template>
          <el-table :data="links" stripe style="width: 100%">
            <el-table-column prop="name" label="Name" width="180">
            </el-table-column>
            <el-table-column label="Link">
              <template slot-scope="scope">
                <a target="_blank" :href="scope.row.url">{{scope.row.url}}</a>
              </template>
            </el-table-column>
          </el-table>
        </template>
      </el-main>
    </el-container>
  </div>
</template>

<script>
export default {
  name: 'documentation',
  data () {
    return {
      links: [
        {name: 'Vue.js', url: 'https://vuejs.org/v2/guide/syntax.html#v-bind-Shorthand'},
        {name: 'Vue.js Style Guide', url: 'https://vuejs.org/v2/style-guide/'},
        {name: 'Vue.js Router', url: 'https://router.vuejs.org/en'},
        {name: 'Element UI', url: 'http://element.eleme.io/#/en-US/component/layout'},
        {name: 'Awesome Vue', url: 'https://github.com/vuejs/awesome-vue#ui-components'},
        {name: 'Vuex', url: 'https://vuex.vuejs.org/en/installation.html'},
        {name: 'Build a MEVN', url: 'https://medium.com/@anaida07/mevn-stack-application-part-1-3a27b61dcae0'},
        {name: 'Font awesome', url: 'https://fontawesome.com/v4.7.0/icons/'}
      ]
    }
  }
}
</script>

<style scoped>
</style>
