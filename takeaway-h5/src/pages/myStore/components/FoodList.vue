<template>
  <div class="food-list" v-if="index === 0">
    <van-tree-select
      height="88vw"
      :items="data.items"
      :main-active-index.sync="data.active"
      @click-nav="onNavClick"
    >
      <template #content>
        <div
          v-for="(item, index) in data.subItem"
          :key="index"
          class="food-item"
        >
          <FoodCard
            :cardData="item"
            :showAdd="true"
            :onAddClick="onAddClick"
            :onChange="onChange"
          />
        </div>
      </template>
    </van-tree-select>
  </div>
  <div v-else>{{ foodData.content }}</div>
</template>

<script setup>
import { reactive, onMounted } from "vue";

import FoodCard from "../../../components/food/FoodCard.vue";
// 声明组件中的选项
defineOptions({
  name: "FoodList",
});

const { index, foodData } = defineProps({
  index: Number,
  foodData: Object,
});

const data = reactive({
  active: 0,
  items: [],
  subItem: [],
});

// 将数据转换成组件需要的格式，数据的初始化
const init = () => {
  const i = [];
  foodData?.items?.map((item, index) => {
    i.push({ text: item.text });
    if (data.active === index) {
      data.subItem = item.children;
      //   console.log("subItem", data.subItem);
    }
  });
  data.items = i;
  //   console.log("dataitems", data.items);
};

// 挂载的时候初始化
onMounted(() => {
  init();
});

// 导航条点击事件
const onNavClick = (index) => {
  data.active = index;
  init();
};

// 添加图标点击事件
const onAddClick = (id) => {
  data.subItem.forEach((item) => {
    if (item.id === id) {
      // 隐藏添加图标，显示步进器
      item.add = false;
      // 数量加1
      item.num += 1;
    }
  });
};

// 步进器变化事件
const onChange = (value, detail) => {
  data.subItem.forEach((item) => {
    if (item.id === detail.name) {
      item.num = value;
    }
  });
  console.log(data.subItem);
};

//向外暴露的变量和方法
defineExpose({});
</script>

<style lang="scss" scoped>
:deep(.van-tree-select__item--active) {
  color: #ffc400;
}

:deep(.van-sidebar-item--select::before) {
  background-color: #ffc400;
}

.food-list {
  margin-top: 20px;

  .food-item {
    padding: 10px;
    margin-bottom: 5px;
  }
}
</style>
