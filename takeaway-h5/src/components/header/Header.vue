<template>
  <div class="header">
    <van-icon name="arrow-left" class="icon" @click="toBack" />
    <div>
      {{ title }}
    </div>
    <div class="edit" v-if="edit" @click="editClick">
      {{ store.state.edit ? "编辑" : "完成" }}
    </div>
  </div>
</template>

<script setup>
import {} from "vue";

import { useRouter } from "vue-router";
import emitter from "../../utils/evenBus";
import { showFailToast } from "vant";
import { useStore } from "vuex";

// 声明组件中的选项
defineOptions({
  name: "Header",
});

const { title, edit } = defineProps({
  title: {
    type: String,
    default: "标题",
  },
  edit: {
    type: Boolean,
    default: false,
  },
});

const router = useRouter();
const store = useStore();

// 返回按钮点击事件
const toBack = () => {
  router.back();
};

// 编辑按钮
const editClick = () => {
  if (store.state.cartList.length) {
    store.commit("editCart");
    emitter.emit("edit");
  } else {
    showFailToast("购物车空空如也");
  }
};

//向外暴露的变量和方法
defineExpose({});
</script>

<style lang="scss" scoped>
.header {
  background-color: #fff;
  height: 40px;
  font-size: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px soild #d7d7d7;

  .edit {
    font-size: 16px;
    position: absolute;
    right: 15px;
    font-weight: normal;
  }

  .icon {
    position: absolute;
    left: 10px;
  }
}
</style>
