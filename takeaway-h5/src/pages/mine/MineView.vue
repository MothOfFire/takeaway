<template>
  <div class="mine">
    <div class="mine-content">个人中心</div>
    <TabBarView></TabBarView>
  </div>
</template>

<script setup>
import {} from "vue";

// 引入组件
import TabBarView from "../../components/tabs/TabBarView.vue";
// 声明组件中的选项
defineOptions({
  name: "MineView",
});
//向外暴露的变量和方法
defineExpose({});
</script>

<style lang="scss" scoped>
.mine {
  display: flex;
  flex-direction: column;
  height: 100%;

  .mine-content {
    flex: 1;
    overflow-y: auto;
  }
}
</style>
