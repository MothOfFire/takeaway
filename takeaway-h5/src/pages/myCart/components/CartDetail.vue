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
      button-text="结算"
      @submit="onSubmit"
      class="submit-all"
      button-color="#ffc400"
      v-if="data.isDelete"
    >
      <van-checkbox
        v-model="data.isChecked"
        checked-color="#ffc400"
        @click="choseAll"
      >
        全选
      </van-checkbox>
    </van-submit-bar>
    <!-- 编辑的删除导航 -->
    <div class="edit" v-else>
      <div class="left">
        <van-checkbox
          v-model="data.isChecked"
          checked-color="#ffc400"
          @click="choseAll"
        >
          全选
        </van-checkbox>
      </div>
      <div class="delete" @click="deleteClick">删除</div>
    </div>
  </div>
</template>

<script setup>
import { reactive, onMounted, computed } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";

import FoodCard from "../../../components/food/FoodCard.vue";
import { showFailToast } from "vant";
import emitter from "../../../utils/evenBus";
// 声明组件中的选项
defineOptions({
  name: "CartDetail",
});

const store = useStore();
const router = useRouter();

// 接收父组件传递的数据
const { changeShow } = defineProps({
  changeShow: Function,
});

const data = reactive({
  checkedList: [], //复选框选中的部分
  isChecked: true, //全选
  isDelete: true, //编辑状态
});

// 总金额
const totalPrice = computed(() => {
  let totalList = updateData(2);
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

// 更新数据
const updateData = (type) => {
  return store.state.cartList.filter((item) => {
    return type === 2
      ? data.checkedList.includes(item.id)
      : !data.checkedList.includes(item.id);
  });
};

// 结算按钮
const onSubmit = () => {
  if (data.checkedList.length !== 0) {
    store.commit("updateOrder", updateData(2));
    // 跳转到订单生成页面
    router.push({
      path: "/createorder",
      query: {
        list: data.checkedList,
      },
    });
  } else {
    showFailToast("请选择要结算的商品");
  }
};

// 监听编辑的点击
emitter.on("edit", () => {
  data.isDelete = !data.isDelete;
});

// 删除按钮
const deleteClick = () => {
  if (data.checkedList.length) {
    // 更新删除后购物车的数据
    store.commit("updateCart", updateData(1));

    // 删除成功后，复选框的选中状态也要更新
    data.checkedList = [];

    // 购物车无数据时展示空状态
    if (store.state.cartList.length === 0) {
      // 修改编辑状态
      store.commit("editCart");
      changeShow(false);
    }
  } else {
    // 没有选中的逻辑
    showFailToast("请选择要删除的商品");
  }
};

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

  .edit {
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
