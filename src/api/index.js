import ajax from './ajax'

// 1. 基础路径
const BASE_URL = '/static/data/';

// 2. 请求方法

// 2.1 请求首页的轮播图
export const getHomeCasual = ()=>ajax(BASE_URL + 'homecasual.json');

// 2.2 请求首页的导航
export const getHomeNav = ()=>ajax(BASE_URL + 'homenav.json');

// 2.3 请求首页的商品数据
export const getHomeShopList = ()=>ajax(BASE_URL + 'shopList.json');

// 2.4 请求推荐的商品数据
export const getRecommendShopList = ()=>ajax("http://localhost:8099/good-recommend");

// 2.5 请求搜索的列表数据
export const getSearchGoods = ()=>ajax(BASE_URL + 'search.json');

// 2.6 发送短信验证码
export const sendCode = phone => ajax(BASE_URL + '/api/sendcode', {phone});




