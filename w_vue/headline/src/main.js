import Vue from 'vue'
import App from './App.vue'
import 'weui'

import {
  Tab,
  Tabs
} from 'vant';

import 'vant/lib/index.css';

Vue.use(Tab).use(Tabs);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')