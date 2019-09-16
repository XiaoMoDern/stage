import Vue from 'vue'
import App from './App.vue'



import store from './store'

import router from './router'
import axios from 'axios';
import Router from 'vue-router'
const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

Vue.config.productionTip = false

// 利用axios实例（axios.create()）实现个性化配置
// 以下instance功能与axios一致
const nanshig = axios.create({
  // 默认配置
  baseURL: 'https://www.nanshig.com/mobile/index.php'
});
// 如果需要发起别的请求
// const nanshig = axios.create({
//   // 默认配置
//   baseURL: 'https://www.nanshig.com/mobile/index.php'
// });


// 把axios写入Vue原型，方便子组件调用
Vue.prototype.$axios = axios;
Vue.prototype.$nanshig = nanshig;


new Vue({
  // 把router实例注入到vue实例中
  router,
  // 把store注入Vue实例
  store,
  render: h => h(App),
}).$mount('#app')