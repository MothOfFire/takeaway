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
        tel: "16585645325", // 电话
        province: "广东省", // 省份
        city: "广州市", // 地级市
        county: "天河区", // 县区
        addressDetail: "XX小区", // 详细地址
        isDefault: true, // 是否为默认地址
        areaCode: "440106", // 地区编码
      },
      {
        id: 1002, // id
        name: "李四", // 姓名
        tel: "12365475214", // 电话
        province: "广东省", // 省份
        city: "佛山市", // 地级市
        county: "顺德区", // 县区
        addressDetail: "XX小区", // 详细地址
        isDefault: false, // 是否为默认地址
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
    // 添加用户地址
    addUserAddress(state, value) {
      state.userAddress.map((item) => {
        // 新增的地址是否为默认地址
        if (value.isDefault) {
          // 将用户地址列表中的地址全部设置为非默认
          item.isDefault = false;
        }
      });
      // 将新增的地址添加到用户地址列表中
      state.userAddress.push(value);
    },
    // 修改用户地址
    updateUserAddress(state, value) {
      state.userAddress = state.userAddress.map((item) => {
        // 修改的地址是否为默认地址
        if (value.isDefault) {
          // 将用户地址列表中的地址全部设置为非默认
          item.isDefault = false;
        }
        // 将修改的地址覆盖原来的信息
        return item.id === value.id ? value : item;
      });
    },
    // 删除用户地址
    deleteUserAddress(state, value) {
      state.userAddress = state.userAddress.filter(
        (item) => item.id !== value.id
      );
      if (value.isDefault && state.userAddress.length > 0) {
        state.userAddress[0].isDefault = true;
      }
    },
  },
  actions: {
    // 异步方法
  },
  getters: {},
});
