<template>
  <div class="tabbar">
    <div>
      <router-link to="/home">
        <van-icon name="wap-home-o" />
        首页
      </router-link>
    </div>
    <div>
      <router-link to="/cart">
        <van-icon name="cart-o" />
        购物车
      </router-link>
    </div>
    <div>
      <router-link to="/order">
        <van-icon name="records-o" />
        订单
      </router-link>
    </div>
    <div>
      <router-link to="/mine">
        <van-icon name="user-o" />
        我的
      </router-link>
    </div>
  </div>
</template>

<script setup>
import {} from "vue";
// 声明组件中的选项
defineOptions({
  name: "TabBarView",
});
//向外暴露的变量和方法
defineExpose({});
</script>

<style lang="scss" scoped></style>
