<template>
  <div class="order-summary-pay">
    <div class="payment-button-group">
      <el-button @click="onCheckout(primaryMethod)" v-for="primaryMethod in primaryMethods" :key="primaryMethod.id"
                 type="success" v-bind:disabled="!hasOrder" class="payment-button">
        {{ primaryMethod.name }}
      </el-button>
      <el-button @click="paymentMethodModalVisible = true" type="success" v-bind:disabled="!hasOrder" class="payment-button">Pay</el-button>
    </div>

    <el-dialog title="Payment Method" :visible.sync="paymentMethodModalVisible">
      <el-row>
        <el-col :span="8" v-for="paymentMethod in paymentMethods" :key="paymentMethod.id" class="padding">
          <el-button @click="onCheckout(paymentMethod)" type="plain" class="payment-method"> {{ paymentMethod.name }} </el-button>
        </el-col>
      </el-row>
    </el-dialog>
  </div>
</template>

<script>
import { mapGetters, mapState } from 'vuex'

export default {
  name: 'order-summary-pay',
  data: function () {
    return {
      paymentMethodModalVisible: false
    }
  },
  computed: {
    hasOrder () {
      return this.orderSummary && this.orderSummary.length > 0
    },
    primaryMethods () {
      return this.paymentMethods.filter((method) => { return method.isPrimary })
    },
    ...mapGetters(['orderSummary']),
    ...mapState(['paymentMethods'])
  },
  methods: {
    onCheckout (paymentMethod) {
      this.paymentMethodModalVisible = false
      this.$store.dispatch('checkoutOrder', paymentMethod)
    }
  }
}
</script>

<style scoped>
  .payment-button-group {
    width: 100%;
    display: flex;
  }

  .payment-button {
    flex: 1;
    padding: 20px 10px;
  }

  .payment-method {
    padding: 20px 10px;
    width: 100%;
  }
</style>
