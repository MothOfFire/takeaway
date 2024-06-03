import { createStore } from "vuex";

export default createStore({
  state: {
    cartList: [], //购物车列表
  },
  mutations: {
    // 同步方法，使用 commit 调用
    // 加入购物车方法
    addCart(state, value) {
      state.cartList = value;
    },
  },
  actions: {
    // 异步方法
  },
  getters: {},
});
