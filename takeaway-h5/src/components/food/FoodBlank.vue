<template>
  <div class="blank-content">
    <SvgIcon icon="icon-kongxiangzi" width="50px" height="50px" class="icon" />
    <p>空空如也</p>
  </div>
</template>

<script setup>
import {} from "vue";

import SvgIcon from "../svgIcon/SvgIcon.vue";
// 声明组件中的选项
defineOptions({
  name: "FoodBlank",
});
//向外暴露的变量和方法
defineExpose({});
</script>

<style lang="scss" scoped>
.blank-content {
  flex: 1;
  margin: 20px;
  font-size: 16px;
  overflow-y: auto;
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  border-radius: 10px;
  height: 72vh;
  .icon {
    margin-bottom: 10px;
  }
}
</style>
