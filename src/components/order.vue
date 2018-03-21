<template>
  <div class="order">
    <el-container style="height: 100%;">
      <el-main style="display: flex;">
        <el-row style="flex: 1;">
          <el-col :sm="24" :md="14" :lg="16" :xl="18" style="height: 100%;">
            <order-items style="height: 100%;"></order-items>
          </el-col>
          <el-col :sm="24" :md="10" :lg="8" :xl="6" style="height: 100%; display: flex; flex-direction: column">
            <order-contact-info></order-contact-info>
            <order-summary style="flex: 1;"></order-summary>
          </el-col>
        </el-row>
      </el-main>
    </el-container>
  </div>
</template>

<script>
import OrderItems from './order-items.vue'
import OrderSummary from './order-summary.vue'
import OrderContactInfo from './order-contact-info.vue'

export default {
  name: 'Order',
  components: {
    OrderContactInfo,
    OrderItems,
    OrderSummary
  }
}
</script>

<style scoped>
  .order {
    height: 100%;
  }
</style>
