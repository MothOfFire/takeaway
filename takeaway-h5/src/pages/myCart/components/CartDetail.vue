<template>
  <div class="cart-detail">
    <!-- 商品列表 -->
    <div class="content">
      <van-checkbox-group v-model="data.checkedList" @change="groupChecked">
        <div v-for="(item, index) in store.state.cartList" :key="index">
          <FoodCard
            :cardData="item"
            :onChange="onChange"
            :showCheckBox="true"
          />
        </div>
      </van-checkbox-group>
    </div>
    <!-- 结算 -->
    <van-submit-bar
      :price="totalPrice * 100"
      button-text="提交订单"
      @submit="onSubmit"
      class="submit-all"
      button-color="#ffc400"
    >
      <van-checkbox
        v-model="data.isChecked"
        checked-color="#ffc400"
        @click="choseAll"
      >
        全选
      </van-checkbox>
    </van-submit-bar>
  </div>
</template>

<script setup>
import { reactive, onMounted, computed } from "vue";
import { useStore } from "vuex";

import FoodCard from "../../../components/food/FoodCard.vue";
// 声明组件中的选项
defineOptions({
  name: "CartDetail",
});

const store = useStore();

const data = reactive({
  checkedList: [], //复选框选中的部分
  isChecked: true, //全选
});

// 总金额
const totalPrice = computed(() => {
  let totalList = store.state.cartList.filter((item) =>
    data.checkedList.includes(item.id)
  );
  let total = 0;
  totalList.forEach((item) => {
    total += item.price * item.num;
  });
  return total;
});

// 商品默认选中的初始化
const initChecked = () => {
  store.state.cartList.map((item) => {
    data.checkedList.push(item.id);
  });
};

onMounted(() => {
  initChecked();
});

// 商品数量的同步
const onChange = (value, detail) => {
  store.state.cartList.map((item) => {
    if (item.id === detail.name) {
      item.num = value;
    }
  });
};

// 全选按钮
const choseAll = () => {
  if (data.checkedList.length !== store.state.cartList.length) {
    initChecked();
  } else {
    data.checkedList = [];
  }
};

// 每个复选框的点机事件触发
const groupChecked = (result) => {
  if (result.length === store.state.cartList.length) {
    data.isChecked = true;
  } else {
    data.isChecked = false;
  }
};

// 结算按钮
const onSubmit = () => {};

//向外暴露的变量和方法
defineExpose({});
</script>

<style lang="scss" scoped>
.cart-detail {
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
