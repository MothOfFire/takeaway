<template>
  <div class="order">
    <Header title="订单" />
    <div class="order-content">
      <van-tabs color="#ffc400">
        <van-tab
          v-for="(item, index) in data.navData"
          :key="index"
          :title="item"
        >
          <div
            class="card-list"
            v-for="(i, index) in store.state.finishOrderList"
            :key="index"
            v-if="item === '全部' && store.state.finishOrderList.length"
          >
            <van-card
              :num="i.num"
              :price="i.price"
              :title="i.title"
              :thumb="i.pic"
            />
          </div>
          <FoodBlank v-else />
        </van-tab>
      </van-tabs>
    </div>
    <TabBarView></TabBarView>
  </div>
</template>

<script setup>
import { reactive } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";

// 引入组件
import TabBarView from "../../components/tabs/TabBarView.vue";
import Header from "../../components/header/Header.vue";
import FoodBlank from "../../components/food/FoodBlank.vue";
// 声明组件中的选项
defineOptions({
  name: "MyOrderView",
});

const store = useStore();
const router = useRouter();

const data = reactive({
  navData: ["全部", "交易完成", "待付款", "待发货", "已发货"],
});
//向外暴露的变量和方法
defineExpose({});
</script>

<style lang="scss" scoped>
.order {
  display: flex;
  flex-direction: column;
  height: 100%;

  .order-content {
    flex: 1;
    overflow-y: auto;
  }
}
</style>
