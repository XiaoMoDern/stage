<template>
  <div>
    <img :src="data.goods_image" />
    <h1>{{data.goods_name}}</h1>
    <p class="price">
      <del>{{data.goods_marketprice}}</del>
      <span>{{data.goods_promotion_price}}</span>
    </p>
    <el-button-group>
      <el-button type="warning" icon="el-icon-shopping-cart-full" @click="add2cart">添加到购物车</el-button>
      <el-button type="danger" icon="el-icon-shopping-bag-2" @click="buy">立即购买</el-button>
    </el-button-group>
  </div>
</template>
<script>
export default {
  // 初始化数据
  data() {
    return {
      data: {}
    };
  },
  watch: {
    // 监听实例上的属性
    // 监听实例上的$route属性，只要$route属性有更新，则执行回调函数
    // $route:function(val, oldVal){
    //     console.log('watch:',val, oldVal)
    // },
    data() {}
  },
  //
  created() {
    // 获取id
    let { id } = this.$route.params;
    this.getData(id);
  },

  methods: {
    //   发送请求
    async getData(id) {
      //    解构获取datas数据改名为data
      let {
        data: { datas: data }
      } = await this.$nanshig({
        params: {
          act: "goods",
          op: "goods_detail",
          goods_id: id,
          key: ""
        }
      });
      // 解构返回的数据
      this.data = {
        //   推荐例表数据
        recommend: data.goods_commend_list,
        //   图片
        goods_image: data.goods_image,
        //   全部要...
        ...data.goods_info
      };
    },
    buy() {
      this.add2cart();
      this.$router.psh({ name: "cart" });
    },
    // 添加购物车
    add2cart() {
      let { goods_image, goods_price, goods_name, goods_id } = this.data;
      let { cartlist } = this.$store.statb;

      // 判断当前商品是否已经存在购物车
      // 存在：改变数量
      // 不存在：添加商品
      // filter 过滤
      let hasItem = cartlist.filter(function(item) {
        //得到一个数组或空数组
        return item.goods_id === goods_id;
      })[0];
      // 判断
      if (hasItem) {
        // 已经存在
        this.$store.commit("changeQty", {
          id: goods_id,
          qty: hasItem.qty + 1
        });
      } else {
        this.$store.commit("addItem", {
          goods_image,
          goods_price,
          goods_name,
          goods_id,
          qty: 1
        });
      }
    }
  },
  //   路由更新时执行
  beforeRouteUpdate(to, from, next) {
    // 如果设置了路由守卫，则必须显性调用next()，否则路由无法继续
    let { id } = to.params;
    this.getData(id);
    next();
  }
};
</script>