<template>
  <div id="app" class="container-fluid">
    <h1>备忘录：</h1>
    <Todolist />
    <Search :data="city">
      查询
      <template v-slot:title>中国热门城市</template>
    </Search>
    <Search :data="web">
      搜索
      <!-- 插槽 -->
      <template v-slot:title>h5大前端所学知识</template>
    </Search>
  </div>
</template>

<script>
// 引入组件？导入模块
import Todolist from "./components/Todolist.vue";
import Search from "../src/components/Search.vue";

export default {
  name: "app",
  data() {
    return {
      city: ["北京", "上海", "广州", "东莞", "深圳", "武汉", "钦州"],
      web: ["html", "css", "javascript", "nodejs", "php", "mongodb", "mysql"]
    };
  },
  components: {
    // 注册为局部组件
    Todolist,
    Search
  }
};
</script>


