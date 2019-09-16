import Vue from 'vue'

// 引入 
import Vuex from 'vuex';

// 安装
Vue.use(Vuex);

import cart from './cart';

// 实例化并配置参数
let store = new Vuex.Store({
    // store模块化
    modules: {
        cart,
        // common
    }
})

export default store;