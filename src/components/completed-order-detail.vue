<template>
  <div class="completed-order-detail">
    <el-collapse v-model="activeName" accordion>
      <el-collapse-item name="accordion-item">
        <template slot="title">
          <span class="padding-left text-medium"> {{ toReadableDateTime(orderDetail.timestamp) }} </span>
          <span v-if="isCollapsed" class="text-medium pull-right padding-right"> {{ total | currency }} </span>
        </template>
        <div class="padding-left text-medium">
          <el-row style="display: flex;">
            <el-col :span="12" class="padding-left padding-right">
              <div v-for="orderItemSummary in orderDetail.orderSummary" :key="orderItemSummary.id" class="order-summary-item">
                <order-summary-item-detail :item-detail="orderItemSummary"></order-summary-item-detail>
              </div>
            </el-col>
            <el-col :span="12" class="total-summary-section padding-left padding-right" style="flex: 1;">
              <order-summary-price-detail class="price-detail" :price="subTotal" :name="'SubTotal'"></order-summary-price-detail>
              <order-summary-price-detail class="price-detail" :price="taxTotal" :name="'Tax (HST)'"></order-summary-price-detail>
              <order-summary-price-detail class="price-detail" :price="total" :name="'Total'"></order-summary-price-detail>
            </el-col>
          </el-row>
        </div>
      </el-collapse-item>
    </el-collapse>
  </div>
</template>

<script>
import moment from 'moment'
import OrderSummaryItemDetail from './order-summary-item-detail.vue'
import OrderSummaryPriceDetail from './order-summary-price-detail.vue'

export default {
  components: {
    OrderSummaryPriceDetail,
    OrderSummaryItemDetail},
  name: 'completed-order-detail',
  props: ['order-detail'],
  data: function () {
    return {
      taxPercentage: 13,
      activeName: 'accordion-item'
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
    },
    isCollapsed () {
      return !this.activeName
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
  .order-summary-item, .price-detail {
    border-bottom: 1px solid #DCDFE6;
  }

  .total-summary-section {
    border-left: 1px solid #DCDFE6;
  }
</style>
