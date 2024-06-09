<template>
  <div class="item" @click="toStore">
    <!-- 左边商品图片区 -->
    <img :src="data.pic" />
    <!-- 右边商品信息区 -->
    <div class="item-right">
      <div class="title">
        {{ data.title }}
      </div>
      <div class="sales">销售量: {{ data.sales }}</div>
      <div class="price">起送 ￥{{ data.price }} 免配送费</div>
      <div class="label">
        <div
          class="label-item"
          v-for="(item, index) in data.label"
          :key="index"
        >
          {{ item }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import {} from "vue";

import { useRouter } from "vue-router";

// 声明组件中的选项
defineOptions({
  name: "StoreItem",
});

const { data } = defineProps({
  data: Object,
});

const router = useRouter();

// 跳转店铺详情的方法
const toStore = () => {
  router.push({
    path: "/store",
    query: {
      title: data.title,
    },
  });
};

//向外暴露的变量和方法
defineExpose({});
</script>

<style lang="scss" scoped>
// 除第一个商品外，其他商品之间的间距
.item:not(:first-child) {
  margin-top: 10px;
}

.item {
  background-color: #fff;
  border-radius: 10px;
  display: flex;
  padding: 10px;

  img {
    width: 120px;
    height: 120px;
    border-radius: 10px;
    margin-right: 20px;
  }

  .item-right {
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    .title {
      font-size: 18px;
      font-weight: 400;
    }

    .label {
      display: flex;

      .label-item {
        background-color: #ffc400;
        padding: 2px 5px;
        border-radius: 5px;
      }

      .label-item:not(:first-child) {
        margin-left: 5px;
      }
    }
  }
}
</style>
