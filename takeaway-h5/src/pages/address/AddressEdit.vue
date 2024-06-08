<template>
  <div class="address-edit">
    <Header :title="addressTitle" />
    <div class="content">
      <van-address-edit
        :area-list="data.areaList"
        show-delete
        show-set-default
        :address-info="data.addressInfo"
        :area-columns-placeholder="['请选择', '请选择', '请选择']"
        @save="onSave"
        @delete="onDelete"
      />
    </div>
  </div>
</template>

<script setup>
import { reactive, onMounted, computed } from "vue";
import { useStore } from "vuex";
import { useRoute, useRouter } from "vue-router";

import { showToast } from "vant";
import Header from "../../components/header/Header.vue";
// 声明组件中的选项
defineOptions({
  name: "AddressEdit",
});

const store = useStore();
const route = useRoute();
const router = useRouter();

const data = reactive({
  areaList: {
    province_list: {
      110000: "广东省",
      120000: "浙江省",
    },
    city_list: {
      110100: "广州市",
      110200: "深圳市",
      120100: "杭州市",
      120200: "宁波市",
    },
    county_list: {
      110101: "天河区",
      110102: "海珠区",
      120102: "上城区",
      130102: "下城区",
    },
  },
  addressInfo: {},
});

// 标题
const addressTitle = computed(() => {
  return route.query.type === "add" ? "新增地址" : "编辑地址";
});

// addressInfo 初始化
const initAddressInfo = () => {
  store.state.userAddress.forEach((item) => {
    if (item.id === Number(route.query.id)) {
      data.addressInfo = item;
    }
  });
};

// 保存按钮
const onSave = (content) => {
  // 判断是新增还是修改
  if (route.query.type === "add") {
    // 新增
    store.commit("addUserAddress", content);
  } else {
    // 修改
    store.commit("updateUserAddress", content);
  }
  showToast("保存成功");
  setTimeout(() => {
    router.back();
  }, 1000);
};

// 删除按钮
const onDelete = (content) => {
  store.commit("deleteUserAddress", content);
  showToast("删除成功");
  setTimeout(() => {
    router.back();
  }, 1000);
};

onMounted(() => {
  initAddressInfo();
});

//向外暴露的变量和方法
defineExpose({});
</script>

<style lang="scss" scoped>
:deep(.van-switch--on) {
  background-color: #ffc400;
}
:deep(.van-button--primary) {
  background-color: #ffc400;
  border-color: #ffc400;
}
</style>
