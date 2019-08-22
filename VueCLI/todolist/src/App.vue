<template>
  <div id="app" class="container-fluid">
    
  </div>
</template>

<script>
// 引入组件？导入模块
import Todolist from './components/Todolist.vue';

export default {
  name: 'app',
  components: {
    // 注册为局部组件
   Todolist
  }
}
</script>


