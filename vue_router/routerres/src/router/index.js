import Vue from 'vue'

import Home from '../pages/Home.vue'
import Cart from '../pages/Cart.vue'
import Login from '../pages/Login.vue'
import Reg from '../pages/Reg.vue'
import Discover from '../pages/Discover.vue'
import Mine from '../pages/Mine.vue'
import Goods from '../pages/Goods.vue'

// 路由
// 引入路由
import  VueRouter from 'vue-router'

// 安装路由
Vue.use(VueRouter);

// 实例化router并配置参数
let router = new VueRouter({
      // mode:'history',// 默认hash
      routes: [{
          // 当浏览器路径为/home时，渲染Home组件内容
          name:'home',
          path:'/home',
          component:Home
      },{
          // 当浏览器路径为/，重定向到/home
          path:'/',
          redirect:{
              name:'home',
          }
      },{
          // 当浏览器路径为/home时，渲染Home组件内容
          name:'cart',
          path:'/cart',
          component:Cart
      },{
          // 当浏览器路径为/home时，渲染Home组件内容
          name:'login',
          path:'/login',
          component:Login
      },{
          
          name:'mine',
          path:'/mine',
          component:Mine
      },{
         
          name:'discover',
          path:'/discover',
          component:Discover
      },{
         
          name:'reg',
          path:'/reg',
          component:Reg
      },{
          
          name:'goods',
          path:'/goods',
          component:Goods
      }]
});
  // 定义组件时传参
        // props:{a:100,b:200}, //等效于<Mine v-bind="{a:100,b:200}"/> => <Mine v-bind:a="100" v-bind:b="200"/>
        // props:true, // 等效于<Mine v-bind="$route.params"/>
        // props:function($route){return {}}

export default router;
