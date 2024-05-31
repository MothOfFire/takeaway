<template>
  <div class="cart">
    <div class="cart-content">购物车页面</div>
    <TabBarView></TabBarView>
  </div>
</template>

<script setup>
import {} from "vue";

// 引入组件
import TabBarView from "../../components/tabs/TabBarView.vue";
// 声明组件中的选项
defineOptions({
  name: "MyCartView",
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
