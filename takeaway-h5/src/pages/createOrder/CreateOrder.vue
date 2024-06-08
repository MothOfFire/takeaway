<template>
  <div class="create-order">
    <!-- 头部 -->
    <Header title="创建订单" />
    <!-- 联系人卡片 -->
    <van-contact-card
      type="edit"
      :tel="data.currentContact.tel"
      :name="data.currentContact.name"
      @click="onEdit"
    />
    <!-- 内容 -->
    <div class="content">
      <!-- 商品卡片 -->
      <div
        class="card-list"
        v-for="(item, index) in store.state.orderList"
        :key="index"
      >
        <van-card
          :num="item.num"
          :price="item.price"
          :title="item.title"
          :thumb="item.pic"
        />
      </div>
    </div>
    <div class="pay-wrap">
      <div class="price">
        <span>商品金额</span>
        <span>￥ {{ data.allPrice }}</span>
      </div>
      <div class="pay-button">
        <van-button
          type="primary"
          @click="handleCreateOrder"
          color="#ffc400"
          block
          >生成订单</van-button
        >
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive, onMounted } from "vue";
import { useStore } from "vuex";
import { useRouter, useRoute } from "vue-router";

import Header from "../../components/header/Header.vue";
import { showDialog } from "vant";

// 声明组件中的选项
defineOptions({
  name: "CreateOrder",
});

const store = useStore();
const router = useRouter();
const route = useRoute();

let data = reactive({
  currentContact: {
    name: "",
    tel: "",
  },
  allPrice: 0,
});

// 联系人卡片修改事件
const onEdit = () => {
  //   console.log("修改联系人");
  router.push({
    path: "/address",
  });
};

// 用户信息初始化
const initUserInfo = () => {
  store.state.userAddress.forEach((item) => {
    // 判断是否为默认地址
    if (item.isDefault) {
      data.currentContact.name = item.name;
      data.currentContact.tel = item.tel;
    }
  });
};

// 初始化价格
const initPrice = () => {
  let price = 0;
  if (store.state.orderList.length) {
    store.state.orderList.forEach((item) => {
      price += item.price * item.num;
    });
    data.allPrice = price;
    // console.log(price, data.allPrice);
  }
};

onMounted(() => {
  initPrice();
  initUserInfo();
});

// 生成订单按钮
const handleCreateOrder = () => {
  // 弹窗
  showDialog({
    title: "提示",
    message: "您的订单已生成，为您跳转到订单页面",
    theme: "round-button",
  }).then(() => {
    // 删除购物车列表中生成订单的商品
    const newList = store.state.cartList.filter((item) => {
      return !route.query.list.includes(item.id + "");
    });
    store.commit("updateCart", newList);
    // 更新完成订单列表信息
    store.commit("updateFinishOrder");
    // 跳转到订单页面
    router.push("./order");
  });
};

//向外暴露的变量和方法
defineExpose({});
</script>

<style lang="scss" scoped>
.create-order {
  display: flex;
  flex-flow: column;
  height: 100%;
  .content {
    flex: 1;
    overflow-y: auto;
  }
  .pay-wrap {
    padding: 10px 0;
    width: 100%;
    background: #fff;
    border-top: 1px solid #e9e9e9;
    > div {
      display: flex;
      justify-content: space-between;
      padding: 0 5%;
      margin: 10px 0;
      font-size: 14px;
      span:nth-child(2) {
        color: red;
        font-size: 18px;
      }
    }
    .pay-btn {
      width: 90%;
      margin: 0 auto;
    }
  }
}
</style>
