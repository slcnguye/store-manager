<template>
  <div class="order-category-card" @click="setCurrentCategory(category)">
    <el-card :body-style="{padding: '10px'}" :style="{ 'background-color': category.color, 'font-weight': 'bolder' }">
      <!--<img src="https://image.flaticon.com/icons/png/512/26/26476.png" class="item-image">-->
      <div class="category-name">{{category.name}}</div>
    </el-card>
  </div>
</template>

<script>
export default {
  name: 'order-category-card',
  props: ['category'],
  methods: {
    setCurrentCategory (category) {
      if (category) {
        this.$store.dispatch('setCategory', category.id)
      }
    }
  }
}
</script>

<style scoped>
  .order-category-card {
    cursor: pointer;
    position: relative;
    overflow: hidden;
    transform: translate3d(0, 0, 0);
  }

  .item-image {
    width: 100%;
    margin-bottom: 10px;
  }

  .category-name {
    display: flex;
    align-items: center;
    justify-content: center;
    user-select: none;
    overflow: hidden;
    text-overflow: ellipsis;
    line-height: 15px;
    height: 50px;
  }

  .order-category-card:after {
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

  .order-category-card:active:after {
    transform: scale(0,0);
    opacity: .2;
    transition: 0s;
  }

</style>
