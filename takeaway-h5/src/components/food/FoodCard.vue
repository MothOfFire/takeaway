<template>
  <div class="card-item">
    <!-- 左边图片信息区域 -->
    <div class="left">
      <van-checkbox
        :name="cardData.id"
        v-if="showCheckBox"
        checked-color="#ffc400"
      />
      <img :src="cardData.pic" alt="" />
      <div class="text">
        <div class="title">{{ cardData.title }}</div>
        <van-icon
          name="add-o"
          v-if="cardData.add && showAdd"
          @click="onAddClick(cardData.id)"
        />
        <van-stepper
          v-model="cardData.num"
          :min="1"
          :name="cardData.id"
          @change="onChange"
          v-else
        />
      </div>
    </div>
    <!-- 右边价格区域 -->
    <div class="price">￥ {{ cardData.price }}</div>
  </div>
</template>

<script setup>
import { ref } from "vue";
// 声明组件中的选项
defineOptions({
  name: "FoofCard",
});

// 接收父组件传递的参数
const { cardData, showAdd, onAddClick, onChange, showCheckBox } = defineProps({
  cardData: Object,
  showAdd: Boolean,
  onAddClick: Function,
  onChange: Function,
  showCheckBox: Boolean,
});

const value = ref(1);

//向外暴露的变量和方法
defineExpose({});
</script>

<style lang="scss" scoped>
.card-item {
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
  .price {
    font-size: 16px;
    font-weight: 600;
  }
  .left {
    display: flex;
    align-items: center;
    flex: 1;
    img {
      margin-left: 10px;
      width: 60px;
      height: 60px;
      margin-right: 10px;
      border-radius: 10px;
    }
    .text {
      display: flex;
      flex-flow: column;
      justify-content: space-between;
      height: 100%;
      position: relative;
      flex: 1;
      .title {
        font-size: 16px;
      }
      .van-icon {
        color: red;
        font-size: 20px;
        position: absolute;
        right: 4px;
        bottom: 4px;
      }
    }
  }
}
</style>
