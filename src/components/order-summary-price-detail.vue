<template>
  <div class="order-summary-price-detail padding">
    <span class="name">{{name}}</span>
    <strong class="price-amount">{{price | currency}}</strong>
  </div>
</template>

<script>
export default {
  name: 'order-summary-price-detail',
  props: ['price', 'name']
}
</script>

<style scoped>
  .order-summary-price-detail {
    background-color: white;
    display: flex;
  }

  .name {
    flex: 1;
  }
</style>
