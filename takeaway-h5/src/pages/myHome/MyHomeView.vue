<template>
  <div class="home">
    <div class="home-content"></div>
    <TabBarView></TabBarView>
  </div>
</template>

<script setup>
import {} from "vue";

// 引入组件
import TabBarView from "../../components/tabs/TabBarView.vue";
// 声明组件中的选项
defineOptions({
  name: "MyHomeView",
});
//向外暴露的变量和方法
defineExpose({});
</script>

<style lang="scss" scoped></style>
