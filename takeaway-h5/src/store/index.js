import { createStore } from "vuex";

export default createStore({
  state: {
    cartList: [], //购物车列表
    orderList: [], //订单列表
    edit: true, // 编辑的状态
  },
  mutations: {
    // 同步方法，使用 commit 调用
    // 加入购物车方法
    addCart(state, value) {
      state.cartList = value;
    },
    // 结算按钮
    pay(state, value) {
      state.orderList = value;
    },
    // 删除购物车
    updateCart(state, value) {
      state.cartList = value;
    },
    // 购物车编辑状态
    editCart(state) {
      state.edit = !state.edit;
    },
  },
  actions: {
    // 异步方法
  },
  getters: {},
});
