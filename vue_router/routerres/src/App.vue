<template>
  <div id="app">
     <el-row :gutter="20">
      <el-col :span="18">
      <!-- ElementUI参数
        router 
         @select事件
        -->
        <el-menu
          :default-active="active"
          class="el-menu-demo"
          mode="horizontal"
          router
          @select="changeActive"
        >
          <el-menu-item :index="item.path" v-for="item in menu" :key="item.name">
          <!-- 声明式导航实现跳转 <router-link> -->
            <!-- <router-link :to="item.path" tag="div" active-class="current"> -->
            <i :class="item.icon"></i>
            {{item.text}}
            <!-- </router-link> -->
          </el-menu-item>
        </el-menu>
      </el-col>
      <!-- offset 分栏偏移 -->
      <el-col :span="5" :offset="1">
        <el-row>
        <!--
        编程式跳转
          @click.native="goto('reg')" 点击跳转 
          native 修饰符 如果绑定在组件的话一定要用 ，
          监听组件根元素的原生事件
          -->
          <el-col :span="12" @click.native="goto('reg')">
            <i class="el-icon-s-custom"></i>
            注册
          </el-col>
          <el-col :span="12" @click.native="goto('login')">
            <i class="el-icon-user"></i>
            登录
          </el-col>
        </el-row>
      </el-col>
    </el-row>
    <router-view></router-view>
  </div>
</template>

<script>
// 引入ElementUI
import Vue from 'vue';
import ElementUI from 'element-ui';
Vue.use(ElementUI);

import "element-ui/lib/theme-chalk/index.css"

export default {
  name: 'app',
 data(){
   return{
     active:'/home',
     menu:[{
       name:'home',
       text:'首页',
       path:'/home',
       icon: "el-icon-s-home"
     },{
       name:'cart',
       text:'购物车',
       path:'/cart',
      icon: "el-icon-shopping-cart-full"
     },{
       name:'discover',
       text:'发现',
       path:'/discover',
       icon: "el-icon-star-on"
     },{
       name:'mine',
       text:'我的',
       path:'/mine',
      icon: "el-icon-user-solid"
     }]
   }
 },


methods:{
  // 点击事件
  changeActive(index, path){
     this.active = index;
  },
  goto(path){
    //   编程式跳转
    //方法： push() 等效于`<router-link :to="path"/>`
    this.$router.push({path})
  }
},
// 生命周期
created() {
  //this.$route获取当前路由信息
  this.active = this.$route.path;
},

}
</script>

<style>
.current {
  color: #f00;
}
.recommend{
  margin-top:5px;
}
</style>
