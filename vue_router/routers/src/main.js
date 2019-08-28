import Vue from 'vue'
import App from './App.vue'

import 'weui';
import {
  Tab,
  Tabs
} from 'vant';
import 'vant/lib/index.css';

Vue.use(Tab).use(Tabs);

Vue.config.productionTip = false

// 引入组件
import Home from './project/Home.vue'
import Cart from './project/Cart.vue'
import Login from './project/Login.vue'


// 路由
//  1,引入路由
import VueRouter from 'vue-router';

// 2,安装(使用)路由
Vue.use(VueRouter);

// 3,实例化router并配置参数
let router = new VueRouter({
  routes: [{
      // 当浏览器路由为/home时，渲染Home组件内容
      path: '/home',
      component: Home
    },
    {
      // 当浏览器路由为/cart时，渲染Cart组件内容
      path: '/cart',
      component: Cart
    }, {
      // 当浏览器路由为/login时，渲染Login组件内容
      path: '/login',
      component: Login
    }
  ]
});

new Vue({
  // 4,把router实例注入vue实例中
  router,
  render: h => h(App),
}).$mount('#app')