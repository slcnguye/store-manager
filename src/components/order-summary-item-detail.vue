<template>
  <div class="order-summary-item-detail">
    <div @click="toggleExpanded" class="pointer item-detail">
      <strong>{{itemDetail.quantity}}</strong>
      <span class="item-name">{{itemDetail.name}}</span>
      <strong v-if="!isExpanded">{{itemDetail.price | currency}}</strong>
    </div>
    <div class="item-detail-actions" v-if="isExpanded">
      <el-button type="warning" v-if="itemDetail.quantity > 1" @click="decrementQuantity">
        <i class="fa fa-minus"></i>
      </el-button>
      <el-button type="danger" @click="removeItemDetail">
        <i class="fa fa-times"></i>
      </el-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'order-summary-item-detail',
  props: ['itemDetail'],
  data: function () {
    return {
      isExpanded: false
    }
  },
  methods: {
    toggleExpanded () {
      this.isExpanded = !this.isExpanded
    },
    decrementQuantity () {
      this.$store.dispatch('removeFromOrder', {id: this.itemDetail.id, quantity: 1})
        .then(() => {
          this.toggleExpanded ()
        })
    },
    removeItemDetail () {
      this.$store.dispatch('removeFromOrder', {id: this.itemDetail.id, quantity: this.itemDetail.quantity})
        .then(() => {
          this.toggleExpanded ()
        })
    }
  }
}
</script>

<style scoped>
  .order-summary-item-detail {
    display: flex;
    background-color: white;
  }

  .item-detail {
    flex: 1;
    display: flex;
    justify-content: center; /* align horizontal */
    align-items: center;
  }

  .item-name {
    flex: 1;
    padding: 0 10px;
  }
</style>
