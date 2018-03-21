<template>
  <div class="order-summary-item-detail padding">
    <strong>{{itemDetail.quantity}}</strong>
    <span class="item-name">{{itemDetail.name}}</span>
    <strong>{{itemDetail.price | currency}}</strong>
  </div>
</template>

<script>
export default {
  name: 'order-summary-item-detail',
  props: ['itemDetail']
}
</script>

<style scoped>
  .order-summary-item-detail {
    display: flex;
    background-color: white;
  }

  .item-name {
    flex: 1;
    padding: 0 10px;
  }
</style>
