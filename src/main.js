import Vue from 'vue'
import App from './App'
import store from './store'
//引入路由器
import router from './router/index'
import LyTab from 'ly-tab'
import Mint from 'mint-ui'
import 'swiper/dist/css/swiper.min.css'

/* eslint-disable no-new */

Vue.use(LyTab);
Vue.use(Mint);

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
