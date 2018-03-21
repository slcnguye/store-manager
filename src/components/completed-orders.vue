<template>
  <div class="completed-orders">
    <el-container>
      <el-main>
        <el-date-picker
          v-model="date"
          type="date"
          placeholder="Pick a day">
        </el-date-picker>

        <div v-for="order in filteredOrders" :key="order.id">
          <completed-order-detail :order-detail="order"></completed-order-detail>
        </div>
        <div v-if="filteredOrders.length === 0">
          There are no completed orders for {{ readableFilterDate }}
        </div>
      </el-main>
    </el-container>
  </div>
</template>

<script>
import moment from 'moment'
import { mapState } from 'vuex'
import CompletedOrderDetail from './completed-order-detail.vue'

export default {
  components: {CompletedOrderDetail},
  name: 'completed-orders',
  data: function () {
    return {
      date: null
    }
  },
  computed: {
    filteredOrders () {
      if (!this.date) {
        return this.completedOrders
      } else {
        return this.completedOrders.filter((order) => {
          const filteredDate = moment(this.date)
          return filteredDate.isSame(order.timestamp, 'days')
        })
      }
    },
    readableFilterDate () {
      return this.date ? moment(this.date).format('ll') : ''
    },
    ...mapState(['completedOrders'])
  }
}
</script>
