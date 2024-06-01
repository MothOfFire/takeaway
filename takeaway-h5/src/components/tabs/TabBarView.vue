<template>
  <div class="tabbar">
    <div class="item">
      <router-link to="/home" class="nav-item" active-class="nav-color">
        <van-icon name="wap-home-o" size="30" />
        首页
      </router-link>
    </div>
    <div class="item">
      <router-link to="/cart" class="nav-item" active-class="nav-color">
        <van-icon name="cart-o" size="30" />
        购物车
      </router-link>
    </div>
    <div class="item">
      <router-link to="/order" class="nav-item" active-class="nav-color">
        <van-icon name="records-o" size="30" />
        订单
      </router-link>
    </div>
    <div class="item">
      <router-link to="/mine" class="nav-item" active-class="nav-color">
        <van-icon name="user-o" size="30" />
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

<style lang="scss" scoped>
.tabbar {
  display: flex;
  font-size: 12px;
  background-color: #fff;
  border-top: 0.5px solid #eee;
  padding-top: 10px;
  padding-bottom: 5px;

  .item {
    flex: 1;
    display: flex;
    justify-content: center;

    .nav-color {
      color: #ffc400;
    }
    .nav-item {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  }
}
</style>
