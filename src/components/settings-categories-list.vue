<template>
  <div class="settings-categories-list">
    <div class="pull-right">
      <el-button type='primary' @click="onCreateNewCategory">
        <i class="fa fa-plus fa-lg" aria-hidden="true"></i>
      </el-button>
    </div>
    <el-table :default-sort="{prop: 'name', order: 'ascending'}" :data="categories" stripe @row-click="onRowClicked">
      <el-table-column sortable class-name="pointer" prop="name" label="Name" width="250"></el-table-column>
      <el-table-column class-name="pointer" prop="color" label="Color">
        <template slot-scope="scope">
          <div :style="{'background-color': scope.row.color}" class="color-block"></div>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'settings-categories-list',
  computed: {
    selectableCategories () {
      return this.categories.filter((category) => {
        return category.id !== 0
      })
    },
    ...mapState(['categories'])
  },
  methods: {
    onRowClicked (row) {
      this.$router.push({name: 'settings-category-edit', params: { id: row.id }})
    },
    onCreateNewCategory () {
      this.$router.push({name: 'settings-category-create'})
    }
  }
}
</script>

<style scoped>
  .color-block {
    width: 25px;
    height: 25px;
  }
</style>
