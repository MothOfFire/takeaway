<template>
  <div class="store-list">
    <div
      v-for="(item, index) in storeList"
      :key="index"
      class="store-list_item"
    >
      <StoreItem :data="item" />
    </div>
  </div>
</template>

<script setup>
import {} from "vue";

import StoreItem from "./StoreItem.vue";
// 声明组件中的选项
defineOptions({
  name: "Store",
});

const { storeList } = defineProps({
  storeList: Array,
});
//向外暴露的变量和方法
defineExpose({});
</script>

<style lang="scss" scoped>
.store-list {
  &_item {
    margin-top: 10px;
  }
}
</style>
