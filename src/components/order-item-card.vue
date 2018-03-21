<template>
  <div class="order-item-card" @click="addOrderItem(item)">
    <el-card :body-style="{padding: '10px'}" :style="{ 'border-top': '5px solid ' + item.color }">
      <!--<img src="https://image.flaticon.com/icons/png/512/26/26476.png" class="item-image">-->
      <div class="item-name">{{item.name}}</div>
    </el-card>
  </div>
</template>

<script>
export default {
  name: 'order-item-card',
  props: ['item'],
  methods: {
    addOrderItem (item) {
      this.$store.dispatch('addToOrder', item.id)
    }
  }
}
</script>

<style scoped>
  .order-item-card {
    cursor: pointer;
    position: relative;
    overflow: hidden;
    transform: translate3d(0, 0, 0);
  }

  .item-image {
    width: 100%;
    margin-bottom: 10px;
  }

  .item-name {
    display: flex;
    align-items: center;
    justify-content: center;
    user-select: none;
    overflow: hidden;
    text-overflow: ellipsis;
    line-height: 15px;
    height: 50px;
  }

  .order-item-card:after {
    content: "";
    display: block;
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    pointer-events: none;
    background: radial-gradient(circle, #000 10%, transparent 10.01%) no-repeat 50%;
    transform: scale(10,10);
    opacity: 0;
    transition: transform .5s, opacity 1s;
  }

  .order-item-card:active:after {
    transform: scale(0,0);
    opacity: .2;
    transition: 0s;
  }
</style>
