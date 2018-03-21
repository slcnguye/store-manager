<template>
  <div class="order-items">
    <el-row style="flex: 1;">
      <el-col :xs="8" :sm="6" :md="4" :lg="4" :xl="2" v-for="item in itemsInCurrentCategory" :key="item.id">
        <order-item-card class="item-card" :item="item"></order-item-card>
      </el-col>
    </el-row>
    <el-row class="order-categories">
      <el-col :xs="8" :sm="6" :md="4" :lg="4" :xl="2" v-for="category in categories" :key="category.id">
        <order-category-card class="category-card" :category="category"></order-category-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'
import OrderItemCard from './order-item-card.vue'
import OrderCategoryCard from './order-category-card.vue'

export default {
  name: 'order-items',
  components: {
    OrderItemCard,
    OrderCategoryCard
  },
  computed: {
    ...mapState(['categories']),
    ...mapGetters(['itemsInCurrentCategory'])
  }
}
</script>

<style scoped>
  .order-items {
    height: 100%;
    display: flex;
    flex-direction: column;
  }

  .order-categories {
    border-top: 2px solid #DCDFE6;
  }

  .item-card, .category-card {
    margin: 5px;
  }
</style>
