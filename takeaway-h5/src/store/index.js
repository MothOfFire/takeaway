import { createStore } from "vuex";

export default createStore({
  state: {
    cartList: [], //购物车列表
    orderList: [], //创建订单列表
    finishOrderList: [], //完成订单列表
    edit: true, // 编辑的状态
    userAddress: [
      {
        id: 1001, // id
        name: "张三", // 姓名
        tel: "1300000000", // 电话
        province: "广东省", // 省份
        city: "广州市", // 地级市
        county: "天河区", // 县区
        addressDetail: "XX小区", // 详细地址
        isDefault: true, // 是否为默认地址
        areaCode: "440106", // 地区编码
      },
    ], // 用户地址列表
  },
  mutations: {
    // 同步方法，使用 commit 调用
    // 加入购物车方法
    addCart(state, value) {
      state.cartList = value;
    },
    // 更改订单列表信息
    updateOrder(state, value) {
      state.orderList = value;
    },
    // 更改购物车列表信息
    updateCart(state, value) {
      state.cartList = value;
    },
    // 更改完成订单列表信息
    updateFinishOrder(state) {
      state.finishOrderList = state.finishOrderList.concat(state.orderList);
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
