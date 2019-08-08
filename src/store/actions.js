import {
  getHomeCasual,
  getHomeNav,
  getHomeShopList,
  getRecommendShopList,
  getSearchGoods
} from '../api'

import {
  HOME_CASUAL,
  HOME_NAV,
  HOME_SHOP_LIST,
  RECOMMEND_SHOP_LIST,
  SEARCH_GOODS
} from './mutation-types'

export default {
  // 1. 获取首页的轮播图
  async reqHomeCasual({commit}) {
    const result = await getHomeCasual();
    commit(HOME_CASUAL, {homecasual: result.data})
  },

  // 2. 获取首页的导航
  async reqHomeNav({commit}) {
    const result = await getHomeNav();
    commit(HOME_NAV, {homenav: result.data})
  },

  // 3. 获取首页的商品列表
  async reqHomeShopList({commit}) {
    const result = await getHomeShopList();
    commit(HOME_SHOP_LIST, {homeshoplist: result.goods_list})
  },

  // 4. 获取推荐的商品数据
  async reqRecommendShopList({commit},params) {
    const result = await getRecommendShopList(params);
    commit(RECOMMEND_SHOP_LIST, {recommendshoplist: result.data})
  },

  // 5. 获取推荐的商品数据
  async reqSearchGoods({commit}, callback) {
    const result = await getSearchGoods();
    commit(SEARCH_GOODS, {searchgoods: result.data})
    callback && callback();

  },
}
