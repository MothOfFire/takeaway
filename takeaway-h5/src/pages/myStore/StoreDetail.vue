<template>
  <div class="store-detail">
    <!-- Header -->
    <Header :title="data.title" />
    <!-- 主体区 -->
    <div class="content">
      <div class="img"></div>
      <div class="foodClassify">
        <div class="name">
          {{ data.title }}
          <img :src="data.img" class="store-img" />
        </div>
        <div class="classify">
          <van-tabs color="#ffc400">
            <van-tab
              v-for="(item, index) in data.storeData"
              :title="item.name"
              :key="index"
            >
              <FoodList :index="index" :foodData="item.data" />
            </van-tab>
          </van-tabs>
        </div>
      </div>
    </div>
    <!-- 底部导航栏 -->
    <van-action-bar>
      <van-action-bar-icon icon="chat-o" text="客服" @click="toChat" />
      <van-action-bar-icon
        icon="cart-o"
        text="购物车"
        :badge="store.state.cartList.length"
        @click="toCart"
      />
      <van-action-bar-button
        type="warning"
        text="加入购物车"
        @click="handlerAddCart"
      />
      <van-action-bar-button type="danger" text="立即购买" @click="toBuy" />
    </van-action-bar>
  </div>
</template>

<script setup>
import { reactive, onMounted } from "vue";
import { useStore } from "vuex";
import { useRouter, useRoute } from "vue-router";

import { getStoreData } from "../../api/api";

import Header from "../../components/header/Header.vue";
import FoodList from "./components/FoodList.vue";
import { showFailToast, showToast } from "vant";

// 声明组件中的选项
defineOptions({
  name: "StoreDetail",
});

const data = reactive({
  storeData: [],
  title: "",
  img: "",
});

// 声明 vuex 的store
const store = useStore();
const router = useRouter();
const route = useRoute();

// 数据请求
const getStore = () => {
  getStoreData().then((res) => {
    if (res.status === 200 && res.data.code === 0) {
      res.data.data.forEach((item) => {
        if (item.title === route.query.title) {
          data.storeData = item.storeData;
          data.title = item.title;
          data.img = item.img;
          console.log(data.storeData);
        }
      });
    }
  });
};

onMounted(() => {
  getStore();
});

// 跳转客服
const toChat = () => {
  showFailToast("客服正在赶来的路上放");
};

// 加入购物车
const handlerAddCart = (type) => {
  const newList = [];
  data.storeData.forEach((item) => {
    item.data.items?.forEach((item) => {
      item.children.forEach((item) => {
        if (item.num > 0) {
          newList.push(item);
        }
      });
    });
  });
  if (newList.length === 0) {
    showToast("请选择商品");
    return;
  }
  store.commit("addCart", newList);
};

// 前往购物车
const toCart = () => {
  router.push("./cart");
};

// 立即购买点击事件
const toBuy = () => {
  // 将商品加入订单列表
  const newList = [];
  data.storeData.forEach((item) => {
    item.data.items?.forEach((item) => {
      item.children.forEach((item) => {
        if (item.num > 0) {
          newList.push(item);
        }
      });
    });
  });
  if (newList.length === 0) {
    showToast("请选择商品");
    return;
  }
  store.commit("updateOrder", newList);
  // 跳转到订单生成页面
  router.push("./createorder");
};

//向外暴露的变量和方法
defineExpose({});
</script>

<style lang="scss" scoped>
.store-detail {
  height: 100%;
  display: flex;
  flex-direction: column;

  .content {
    flex: 1;
    overflow-y: auto;

    .img {
      background: url("../../assets//images/yuna.jpg") no-repeat center/cover;
      width: 100%;
      height: 150px;
    }

    .foodClassify {
      height: 500px;
      background-color: #fff;
      margin-top: -30px;
      border-radius: 20px 20px 0 0;

      .classify {
        margin-top: 10px;
      }

      .name {
        display: flex;
        padding: 20px;
        justify-content: space-between;

        .store-img {
          width: 80px;
          height: 80px;
          border-radius: 10px;
          margin-top: -30px;
        }
      }
    }
  }
}
</style>
