<template>
  <div id="app">
    <Header />
    <Nav :data="titles"/>
    <Main />
  </div>
</template>

 <script>
import Header from "./components/Header.vue";
import Main from "./components/Main.vue";
import Nav from "./components/Nav.vue";

export default {
  name: "app",

  data(){
    return {
      titles: ["推荐", "检测", "重复", "这可", "能会", "导致", "更新", "错误"]
    }
  },
  // 引入组件在components注册
  components: {
    Header,
    Main,
    Nav
  }
};
</script>

<style>
</style>
