<template>
    <div class="food">
        我是食品板块
    </div>
</template>

<script>
  import {
    getHomeCasual,
    getHomeNav,
    getHomeShopList,
    getRecommendShopList,
    getSearchGoods
  } from '../../../api'

    export default {
        name: "Food"
    }
</script>

<style scoped lang="stylus" type="text/stylus" ref="stylesheet/stylus">
    .food
      width 100%
      height 100%
      background red
      display flex
      justify-content center
      align-items center
</style>
