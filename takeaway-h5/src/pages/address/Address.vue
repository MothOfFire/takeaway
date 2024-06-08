<template>
  <div class="address">
    <Header title="地址管理" />
    <div class="content">
      <van-address-list
        :list="data.list"
        default-tag-text="默认"
        @add="onAdd"
        @edit="onEdit"
      />
    </div>
  </div>
</template>

<script setup>
import { reactive, onMounted } from "vue";
import { useRouter } from "vue-router";
import { useStore } from "vuex";

import Header from "../../components/header/Header.vue";
// 声明组件中的选项
defineOptions({
  name: "Address",
});

const store = useStore();
const router = useRouter();

const data = reactive({
  list: [],
});

// 初始化地址列表数据
const initAddressList = () => {
  const newList = store.state.userAddress.map((item) => {
    return {
      id: item.id,
      name: item.name,
      tel: item.tel,
      address: item.province + item.city + item.county + item.addressDetail,
      isDefault: !!item.isDefault,
    };
  });
  data.list = newList;
};

onMounted(() => {
  initAddressList();
});

// 添加地址方法
const onAdd = () => {
  router.push({
    path: "/addressedit",
    query: {
      type: "add",
    },
  });
};

// 编辑地址方法
const onEdit = (item) => {
  router.push({
    path: "/addressedit",
    query: {
      id: item.id,
      type: "change",
    },
  });
};
//向外暴露的变量和方法
defineExpose({});
</script>

<style lang="scss" scoped>
:deep(.van-tag) {
  background-color: #ffc400;
}
:deep(.van-address-list__add) {
  background-color: #ffc400;
  border-color: #ffc400;
}
:deep(.van-radio__icon) {
  display: none;
}
</style>
