<template>
  <div class="cart-detail">
    <!-- 商品列表 -->
    <div class="content">
      <van-checkbox-group v-model="data.checked">
        <div v-for="(item, index) in store.state.cartList" :key="index">
          <FoodCard
            :cardData="item"
            :onAddClick="onAddClick"
            :showCheckBox="true"
          />
        </div>
      </van-checkbox-group>
    </div>
    <!-- 结算 -->
  </div>
</template>

<script setup>
import { reactive } from "vue";
import { useStore } from "vuex";

import FoodCard from "../../../components/food/FoodCard.vue";
// 声明组件中的选项
defineOptions({
  name: "CartDetail",
});

const store = useStore();

const data = reactive({
  checked: [0], //复选框选中的部分
});

const onAddClick = () => {};

//向外暴露的变量和方法
defineExpose({});
</script>

<style lang="scss" scoped>
.cart-details {
  font-size: 14px;
  flex: 1;
  position: relative;
  overflow-y: auto;
  padding: 20px 20px 55px;
  .submit-all {
    position: fixed;
    bottom: 48px;
  }

  .buy {
    position: fixed;
    bottom: 48px;
    right: 0;
    display: flex;
    justify-content: space-between;
    width: 100%;
    background-color: #fff;
    border-radius: 10px;
    height: 50px;
    align-items: center;
    padding: 0 16px;
    box-sizing: border-box;
    .left {
      display: flex;
      align-items: center;
    }
    .delete {
      color: #fff;
      background-color: #ffc400;
      border-radius: 20px;
      font-size: 14px;
      font-weight: 600;
      width: 110px;
      height: 40px;
      text-align: center;
      line-height: 40px;
    }
  }

  .content {
    padding: 10px;
    background-color: #fff;
    border-radius: 10px;
  }
}
</style>
