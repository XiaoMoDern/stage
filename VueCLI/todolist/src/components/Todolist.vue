<template>
  <div class="todolist">
    <TodoForm v-on:add="addItem"></TodoForm>
    <TodoContent :datalist="datalist"></TodoContent>
  </div>
</template>

<script>
import "bootstrap/dist/css/bootstrap.css";

// 引入组件
import TodoForm from "./TodoForm.vue";

import TodoContent from "./TodoContent,vue";
// 导出组件
export default {};
</script>