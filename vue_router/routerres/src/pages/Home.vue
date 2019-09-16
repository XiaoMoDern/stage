<template>
  <div class="home">
    <!--  -->
    <el-carousel height="150px" class="recommend">
      <el-carousel-item v-for="item in recommend" :key="item.goods_id">
        <!-- 
    点击跳转到详情页@click="goto('goods',item.goods_id)" 
    传id
        -->
        <img :src="item.goods_image" @click="goto(item,item.goods_id)" />
      </el-carousel-item>
    </el-carousel>
    <!--  -->
    <div v-for="type in goodslist" :key="type.title">
      <h2>{{type.title}}</h2>
      <!-- gutter间距 -->
      <el-row :gutter="20" class="goodslist">
        <!--  -->
        <el-col
          :span="6"
          v-for="item in type.item"
          :key="item.goods_id"
          @click.native="goto(item.goods_id)"
        >
          <img :src="item.goods_image" />
          <h4 class="fn">{{item.goods_name}}</h4>
          <p class="price">
            <del>{{item.goods_price}}</del>
            <span>{{item.goods_promotion_price}}</span>
          </p>
        </el-col>
      </el-row>
    </div>
  </div>
</template>
<script>
// 使用axios发网络请求
// axios是一个封装了XMLHttpRequest和Promise的ajax请求工具
// import axios from "axios";

export default {
  // 初始化数据
  data() {
    return {
      recommend: [],
      goodslist: []
    };
  },
  methods: {
    goto(id) {
      // 跳转时传参
      // params  参数保留在$router中，刷新数据会丢失
      // 或者query 参数保留在url中，刷新不会丢失
      this.$router.push({ name:'goods', params: { id } });
    }
  },
  // 生命周期函数
  async created() {
    // 返回Promise对象 使用async和await
    let { data } = await this.$nanshig({
      // 传参 配置文件params
      params: {
        act: "index"
      }
    });
    // 请求数据 slice切割(截取5条数据)
    this.recommend = data.datas[1].goods.item.slice(0, 5);

    // 数据格式化
    this.goodslist = data.datas.slice(1).map(function(item) {
      return item.goods;
    });
    // [{goods:{item,title}},{goods:{item,title}}] -> [{item,title},{item,title}]
  },
  destroyed() {
      // 取消ajax请求
        // 清除定时器
  },
};
</script>
<style>

.recommend img {
  width: 100%;
}
.goodslist {
  padding: 15px;
}
.goodslist .el-col {
  height: 370px;
  overflow: hidden;
  /* margin: 5px; */
  text-align: center;
}
.goodslist img {
  width: 100%;
}

.price del::before,
.price span::before {
  content: "￥";
}
.price del {
  color: #999;
}
.price span {
  margin-left: 5px;
  color: #f00;
}
.fn {
  text-align: center;
  font-size: 14px;
  width: 240px;
  margin: 10px 0px 10px 35px;
}
.el-menu-item .is-active {
  color: #f00;
}

</style>