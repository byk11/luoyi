import Vue from "vue";
import Vuex from "vuex"

// 1.安装插件
Vue.use(Vuex)

// 2.创建Store对象
const store = new Vuex.Store({
  state: {
    cartList: [],
  },
  mutations: {
    addCounter(state, payload) {
      payload.count++
    },
    addToCart(state, payload) {
      payload.checked = true
      state.cartList.push(payload)
    }
  },
  actions: {
    addCart(context, payload) {

      return new Promise((resolve, reject) => {
        // 1.查找之前数组中是否有该商品
        let product = context.state.cartList.find(item => item.iid === payload.iid)

        if (product) {
          context.commit('addCounter', product)
          resolve('当前的商品数量+1')
        } else {
          payload.count = 1
          context.commit('addToCart', payload)
          resolve("添加商品成功")
        }
        console.log(context.state.cartList);
      })
    }
  }
})

// 3.挂载Vue实例
export default store
