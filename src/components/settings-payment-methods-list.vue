<template>
  <div class="settings-payment-methods-list">
    <div class="pull-right">
      <el-button type='primary' @click="onCreateNewCategory">
        <i class="fa fa-plus fa-lg" aria-hidden="true"></i>
      </el-button>
    </div>
    <el-table :default-sort="{prop: 'name', order: 'ascending'}" :data="paymentMethods" stripe @row-click="onRowClicked">
      <el-table-column sortable class-name="pointer" prop="name" label="Name"></el-table-column>
    </el-table>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'settings-payment-methods-list',
  computed: {
    ...mapState(['paymentMethods'])
  },
  methods: {
    onRowClicked (row) {
      this.$router.push({name: 'settings-payment-method-edit', params: { id: row.id }})
    },
    onCreateNewCategory () {
      this.$router.push({name: 'settings-payment-method-create'})
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
