<template>
  <div class="order-summary">
    <div class="item-details">
      <div v-for="itemDetail in orderSummary" :key="itemDetail.id" class="item-detail">
        <order-summary-item-detail :item-detail="itemDetail"></order-summary-item-detail>
      </div>
    </div>
    <hr>
    <div>
      <order-summary-price-detail class="price-detail" :price="subTotal" :name="'SubTotal'"></order-summary-price-detail>
      <order-summary-price-detail class="price-detail" :price="taxTotal" :name="'Tax (HST)'"></order-summary-price-detail>
      <order-summary-price-detail class="price-detail" :price="total" :name="'Total'"></order-summary-price-detail>
    </div>
    <el-row class="padding">
      <el-col :span="19">
        <el-button @click="onCheckout" type="success" v-bind:disabled="!hasOrder" class="action-button">Pay</el-button>
      </el-col>
      <el-col :span="4" :offset="1">
        <el-button @click="onClear" type="danger" class="action-button">Clear</el-button>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import OrderSummaryItemDetail from './order-summary-item-detail.vue'
import OrderSummaryPriceDetail from './order-summary-price-detail.vue'

export default {
  name: 'order-summary',
  components: {
    OrderSummaryItemDetail,
    OrderSummaryPriceDetail
  },
  data: function () {
    return {
      taxPercentage: 13
    }
  },
  computed: {
    subTotal () {
      let total = 0
      this.orderSummary.forEach((orderItem) => {
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
    hasOrder () {
      return this.orderSummary && this.orderSummary.length > 0
    },
    ...mapGetters(['orderSummary'])
  },
  methods: {
    onCheckout () {
      this.$store.dispatch('checkoutOrder')
    },
    onClear () {
      this.$store.dispatch('clearOrder')
    }
  }
}
</script>

<style scoped>
  .order-summary {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    border: 2px solid #DCDFE6;
  }

  .item-details {
    overflow-y: scroll;
    flex: 1;
  }

  .action-button {
    width: 100%;
    padding: 20px 10px;
  }

  .item-detail + .item-detail, .price-detail + .price-detail {
    margin-top: 2px;
  }

</style>
