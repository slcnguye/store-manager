<template>
  <div class="completed-order-detail">
    <span style="flex: 1;"> {{ toReadableDateTime(orderDetail.timestamp) }}</span>
    <span> {{ total | currency }} </span>
  </div>
</template>

<script>
import moment from 'moment'

export default {
  name: 'completed-order-detail',
  props: ['order-detail'],
  data: function () {
    return {
      taxPercentage: 13
    }
  },
  computed: {
    subTotal () {
      let total = 0
      this.orderDetail.orderSummary.forEach((orderItem) => {
        total += orderItem.quantity * orderItem.price
      })
      return total
    },
    taxTotal () {
      return this.subTotal * this.taxPercentage / 100
    },
    total () {
      return this.subTotal + this.taxTotal
    }
  },
  methods: {
    toReadableDateTime (timestamp) {
      return moment(timestamp).format('lll')
    }
  }
}
</script>

<style scoped>
  .completed-order-detail {
    display: flex;
    background-color: white;
    padding: 10px;
    border: 2px solid #DCDFE6;
  }
</style>
