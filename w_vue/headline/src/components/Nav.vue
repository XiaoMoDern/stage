<template>
  <div class="nav">
    <van-tabs>
      <van-tab v-for="item in data " :title="item" :key="item">{{item}}</van-tab>
    </van-tabs>
    <div class="fn">＋</div>
  </div>
</template>
<script>
export default {
  props: ["data"]
};
</script>
<style>
.nav {
  width: 100%;

  position: relative;
}
.nav .van-tabs__content {
  display: none;
}

.nav .van-tabs__line {
  display: none;
}
.nav .van-ellipsis {
  font-size: 16px;
}
.nav .fn {
  width: 40px;
  height: 44px;
  font-size: 30px;
  color: red;
  position: absolute;
  right: 0px;
  top: 0px;
  background: #ccc;
  text-align: center;
  line-height: 40px;
}
.nav .van-tabs {
  background: #f1f1f1;
}
</style>