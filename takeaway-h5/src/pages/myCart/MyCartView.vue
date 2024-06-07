<template>
  <div class="cart">
    <div class="cart-content">
      <Header title="购物车" :edit="true" />
      <CartDetail v-if="isShow" :changeShow="changeShow" />
      <FoodBlank v-else />
    </div>
    <TabBarView></TabBarView>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useStore } from "vuex";

// 引入组件
import TabBarView from "../../components/tabs/TabBarView.vue";
import FoodBlank from "../../components/food/FoodBlank.vue";
import Header from "../../components/header/Header.vue";
import CartDetail from "./components/CartDetail.vue";

// 引入全局方法
// 声明组件中的选项
defineOptions({
  name: "MyCartView",
});

const isShow = ref(true);

const store = useStore();

const init = () => {
  if (store.state.cartList.length === 0) {
    isShow.value = false;
  }
};

// 修改商品信息组件是否展示
const changeShow = (value) => {
  isShow.value = value;
};

onMounted(() => {
  init();
});
//向外暴露的变量和方法
defineExpose({});
</script>

<style lang="scss" scoped>
.cart {
  display: flex;
  flex-direction: column;
  height: 100%;

  .cart-content {
    flex: 1;
    overflow-y: auto;
  }
}
</style>
