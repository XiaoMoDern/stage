<template>
  <div>
    <!-- to -->
    <div class="he">
      <span class="message">
        <img :src="message" alt />
      </span>
      <h1>
        <img :src="logo" alt />
        <p>{{header}}</p>
      </h1>
      <span class="sv">
        <img :src="sv" alt />
      </span>
    </div>
    <!-- top -->

    <div class="nav">
      <van-tabs>
        <van-tab v-for="item in pages " :title="item" :key="item">{{item}}</van-tab>
      </van-tabs>
      <div class="fn">＋</div>
    </div>

    <!--  -->
    <div class="weui-panel" style="margin-top: 0px;">
      <div class="weui-panel__bd">
        <div class="weui-media-box weui-media-box_text">
          <h4 class="weui-media-box__title">标题一</h4>
          <p class="weui-media-box__desc">由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。</p>
          <ul class="weui-media-box__info">
            <li class="weui-media-box__info__meta">文字来源</li>
            <li class="weui-media-box__info__meta">时间</li>
            <li class="weui-media-box__info__meta weui-media-box__info__meta_extra">其它信息</li>
          </ul>
        </div>
      </div>
    </div>
    <!--  -->
  </div>
  <!-- -------------------------------- -->
</template>
<script>
import logo from "../assets/021.png";
import message from "../assets/03.png";
import sv from "../assets/04.png";
export default {
  data() {
    return {
      header: "今日头条",
      logo,
      message,
      sv,
      pages: ["推荐", "检测", "重复", "这可", "能会", "导致", "更新", "错误"]
    };
  }
};
</script>
<style>
.he {
  height: 2.75rem;
  width: 100%;
  background: #d43d3d;
  text-align: center;
  line-height: 2.75rem;
  display: flex;
}

.he h1 img {
  height: 1.325rem;
}
.he h1 {
  margin: 0px;
  height: 2.75rem;
  width: 100%;
}

.he p {
  text-indent: -624.9375rem;
}

span {
  height: 2.75rem;
}

.he .message img {
  margin-top: 0.5rem;
  margin-left: 0.725rem;
  width: 2rem;
}
.he .sv img {
  width: 1.475rem;
  margin-top: 0.8rem;
  margin-right: 0.725rem;
}
/* ----------------------- */
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
.nav .van-tab--active {
  color: red;
}

/* -------------------------- */
.weui-panel__bd {
  border-top: 1px solid #f1f1f1;
}
</style>