<template>
  <div class="settings-items-list">
    <div class="pull-right">
      <el-button type='primary' @click="onCreateNewItem">
        <i class="fa fa-plus fa-lg" aria-hidden="true"></i>
      </el-button>
    </div>
    <el-table :default-sort="{prop: 'name', order: 'ascending'}" :data="items" stripe @row-click="onRowClicked">
      <el-table-column sortable class-name="pointer" prop="name" label="Name" width="250"></el-table-column>
      <el-table-column sortable class-name="pointer" prop="price" label="Price" width="180">
        <template slot-scope="scope">
          <span> {{ scope.row.price | currency }} </span>
        </template>
      </el-table-column>
      <el-table-column class-name="pointer" label="Category">
        <template slot-scope="scope">
          <span> {{ getCategoryName(scope.row.categoryId) }} </span>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'settings-items-list',
  computed: {
    ...mapState(['items', 'categories'])
  },
  methods: {
    getCategoryName (categoryId) {
      const category = this.categories.find((category) => {
        if (category.id === categoryId) {
          return category
        }
      })

      if (category) {
        return category.name
      }
    },
    onRowClicked (row) {
      this.$router.push({name: 'settings-item-edit', params: { id: row.id }})
    },
    onCreateNewItem () {
      this.$router.push({name: 'settings-item-create'})
    }
  }
}
</script>
