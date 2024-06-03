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
import { reactive } from "vue";

import { useStore } from "vuex";
import { useRouter } from "vue-router";

import Header from "../../components/header/Header.vue";
import FoodList from "./components/FoodList.vue";
import { showFailToast, showToast } from "vant";

// 声明组件中的选项
defineOptions({
  name: "StoreDetail",
});

const data = reactive({
  title: "鱼拿酸菜",
  img: "https://img1.baidu.com/it/u=1599947592,1695977044&fm=253&fmt=auto&app=138&f=JPEG?w=640&h=440",
  storeData: [
    {
      name: "点菜",
      data: {
        name: "点菜",
        items: [
          {
            text: "热销榜",
            children: [
              {
                pic: "https://img1.baidu.com/it/u=1599947592,1695977044&fm=253&fmt=auto&app=138&f=JPEG?w=640&h=440",
                title: "招牌酸菜鱼",
                num: 0,
                price: 25.0,
                id: 0,
                add: true,
              },
              {
                pic: "https://img1.baidu.com/it/u=1599947592,1695977044&fm=253&fmt=auto&app=138&f=JPEG?w=640&h=440",
                title: "藤椒酸菜鱼",
                num: 0,
                price: 25.0,
                id: 1,
                add: true,
              },
            ],
          },
          {
            text: "澳洲肥牛",
            children: [
              {
                pic: "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fbkimg.cdn.bcebos.com%2Fpic%2F8694a4c27d1ed21b0ef4f3137f24cac451da80cb91b8&refer=http%3A%2F%2Fbkimg.cdn.bcebos.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1645407747&t=ea2c9f772ba0df3a2d1b00b962875460",
                title: "酸汤肥牛",
                num: 0,
                price: 25.0,
                id: 0,
                add: true,
              },
              {
                pic: "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fbkimg.cdn.bcebos.com%2Fpic%2F8694a4c27d1ed21b0ef4f3137f24cac451da80cb91b8&refer=http%3A%2F%2Fbkimg.cdn.bcebos.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1645407747&t=ea2c9f772ba0df3a2d1b00b962875460",
                title: "香辣肥牛",
                num: 0,
                price: 25.0,
                id: 1,
                add: true,
              },
            ],
          },
          {
            text: "超级折扣",
            children: [
              {
                pic: "https://img1.baidu.com/it/u=1599947592,1695977044&fm=253&fmt=auto&app=138&f=JPEG?w=640&h=440",
                title: "无骨酸菜鱼+肥牛双拼",
                num: 0,
                price: 25.0,
                id: 0,
                add: true,
              },
              {
                pic: "https://img1.baidu.com/it/u=1599947592,1695977044&fm=253&fmt=auto&app=138&f=JPEG?w=640&h=440",
                title: "藤椒酸菜鱼",
                num: 0,
                price: 25.0,
                id: 1,
                add: true,
              },
            ],
          },
        ],
      },
    },
    {
      name: "评价",
      data: {
        content: "123评价",
      },
    },
    {
      name: "商家",
      data: {
        content: "123商家",
      },
    },
  ],
});

// 声明 vuex 的store
const store = useStore();

const router = useRouter();

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
  // 判断是否为立即购买，是则跳转到订单页面
  type === "toBuy" ? toOrder() : "";
};

// 前往购物车
const toCart = () => {
  router.push("./cart");
};

// 立即购买点击事件
const toBuy = () => {
  // 将商品加入购物车
  handlerAddCart("toBuy");
};

// 跳转到订单页面
const toOrder = () => {
  router.push("./order");
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
