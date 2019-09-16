import axios from 'axios'

export default {
    // 数据储存
    state: {
        cartlist: [{
            goods_id: 1,
            goods_name: '普通函数调用(默认绑定)',
            qty: 1,
            goods_price: 50000
        }]
    },
    getters: {
        // 购物车计算总价格
        totalprice: function (state) {
            /**reduce的使用方法和语法
             * array.reduce(function(prev, item,          currentIndex, arr), initialValue);
             * 
             *  prev: 必需。初始值, 或者计算结束后的返回值。
                item 必需。当前元素。
                currentIndex： 可选。当前元素的索引；              
                arr： 可选。当前元素所属的数组对象。
                initialValue: 可选。传递给函数的初始值，相当于total的初始值。
            */
            //    遍历
            return state.cartlist.reduce(function (prev, item) {
                // prev：前一次reduce的返回值
                return prev + item.goods_price * item.qty
            }, 0)
        }
    },

    //修改state的唯一方式：mutations
    // 触发mutation: store.commit('addItem',{})
    mutations: {
        // 添加push
        addItem(state, goods) {
            state.cartlist.push(goods)
        },
        // 删除需要传id
        // filter过滤
        removeItem(state, id) {
            state.cartlist = state.cartlist.filter(item => item.goods_id != id);
        },
        // 修改
        changeQty(state, {
            qty,
            id
        }) {
            state.cartlist = state.cartlist.map(item => {
                if (item.goods_id == id) {
                    item.qty = qty;
                }
                return item;
            })
        },
        // 清空购物车
        clearCart(state) {
            state.cartlist = []
        }
    },
    actions: {
        changeQtyAsync(context, {
            id,
            qty
        }) {
            axios.get('http://localhost:1906/goods/kucun').then(({
                data
            }) => {
                let kucun = data.data;

                if (qty > kucun) {
                    qty = kucun;
                }
                context.commit('changeQty', {
                    id,
                    qty
                })
            })
            return qty;
        }
    }

}