<template>
  <div class="recommend-container" v-if="recommendshoplist.length>0">
    <ul class="recommend">
      <li class="recommend-item" v-for="(item,index) in recommendshoplist" :key="index">
        <img :src="item.thumb_url" v-if="item.thumb_url" width="100%">
        <h1 class="item-title">{{item.short_name}}</h1>
        <div class="item-buttom">
            <span class="item-price">¥{{item.price/100}}</span>
            <span class="item-sales">{{item.sales}}</span>
            <button class="item-btn">找相关</button>
        </div>
      </li>
    </ul>


  </div>
</template>

<script>
  import {mapState} from 'vuex'
  export default {
    name: "Recommend",

    mounted () {
      this.$store.dispatch('reqRecommendShopList');
    },
    computed:{
      ...mapState(['recommendshoplist'])
    }
  }
</script>

<style scoped lang="stylus" type="text/stylus" ref="stylesheet/stylus">
  .recommend-container
    background goldenrod
    width 100%
    height 100%
    .recommend
      display flex
      flex-direction row
      flex-wrap wrap
      background #f5f5f5
      width 100%
      margin-bottom 50px
      .recommend-item::nth-child(2n-1)
        margin-right 1%
      .recommend-item
        width 49.5%
        background #fff
        padding-bottom 15px
        margin-bottom 15px
        .item-title
          line-height 20px
          font-size 13px
          font-weight lighter
          height 20px
          overflow hidden
          margin 5px 0
          padding 0 5px
        .item-buttom
          display flex
          flex-direction row
          align-items center
          padding 0 6px
          .item-price
            flex 2
            color red
            font-weight bolder
            font-size 12px
          .item-sales
            flex 4
            font-size 10px
            color #666666
          .item-btn
            flex 2
            border 1px solid orangered
            height 26px
            border-radius 7px
            font-size 10px
            background-color transparent
            color red
</style>
