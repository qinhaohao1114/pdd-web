<template>
  <div class="recommend-container" v-if="recommendshoplist.length>0">
    <ul class="recommend">
      <!--<li class="recommend-item" v-for="(item,index) in recommendshoplist" :key="index">-->
        <!--<img :src="item.hd_thumb_url" v-if="item.hd_thumb_url" width="100%">-->
        <!--<h1 class="item-title">{{item.short_name}}</h1>-->
        <!--<div class="item-buttom">-->
            <!--<span class="item-price">¥{{item.price/100}}</span>-->
            <!--<span class="item-sales">{{item.sales_tip}}</span>-->
            <!--<button class="item-btn">发现 ></button>-->
        <!--</div>-->
      <!--</li>-->
      <shop-list
      tag="li"
      v-for="(item,index) in recommendshoplist"
      :item="item"
      :key="index"
      ></shop-list>
    </ul>


  </div>
</template>

<script>
  import {mapState} from 'vuex'
  import ShopList from './../../components/ShopList/ShopList'
  import BScroll from 'better-scroll';

  export default {
    name: "Recommend",
    data(){
      return{
        page: 1,
        count: 10
      }
    },
    components:{
      ShopList
    },
    mounted () {
      this.$store.dispatch('reqRecommendShopList');
    },
    computed:{
      ...mapState(['recommendshoplist'])
    },
    watch:{
      recommendshoplist(){
        this.$nextTick(()=>{
          this.page +=1;
          this._initBScroll();
        })
      }
    },
    methods:{
      _initBScroll(){
        this.listScroll = new BScroll('.recommend-container',{
          scrolly: true,
          probeType: 3
        });
        this.listScroll.on("touchEnd",(pos)=>{
          // console.log(pos);
          // console.log(this.listScroll.maxScrollY);

          if (pos.y>50){
            console.log("下拉刷新");
          }
          if (this.listScroll.maxScrollY>pos.y+80){
            console.log(this.page)
            console.log("上拉加载更多");

            this.$store.dispatch('reqRecommendShopList', {page: this.page, count: this.count, callback: ()=>{
                // Indicator.close();
                log.info("回掉函数")
              }});
          }
        });
        // 1.3 列表滚动结束
        this.listScroll.on('scrollEnd', () => {
          this.listScroll.refresh();
        });
      }
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
