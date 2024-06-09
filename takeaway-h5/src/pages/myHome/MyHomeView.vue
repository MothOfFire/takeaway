<template>
  <div class="home">
    <div class="home-content">
      <!-- Header -->
      <div class="header">
        <div class="text">外卖</div>
        <div class="location">
          <van-icon name="location-o" />
          <span>{{ locationData }}</span>
          <van-icon name="arrow" />
        </div>
      </div>
      <!-- main -->
      <div class="main">
        <div class="main-bg">
          <div class="search">
            <input type="text" />
            <div class="search-text">搜索</div>
          </div>
          <div class="classify">
            <div class="big-classify">
              <div v-for="(item, index) in homeData.bigClassify" :key="index">
                <SvgIcon :icon="item.icon" class="big-classify__svg" />
                <span>{{ item.name }}</span>
              </div>
            </div>
            <div class="small-classify">
              <div v-for="(item, index) in homeData.smallClassify" :key="index">
                <SvgIcon :icon="item.icon" class="small-classify__svg" />
                <span>{{ item.name }}</span>
              </div>
            </div>
          </div>
        </div>
        <div class="main-content">
          <van-tabs class="van-tabs">
            <van-tab
              v-for="(item, index) in homeData.cententNavList"
              :title="item.tab"
              :key="index"
            >
              <Store :storeList="item.data" />
            </van-tab>
          </van-tabs>
        </div>
      </div>
    </div>
    <TabBarView></TabBarView>
  </div>
</template>

<script setup>
import { reactive, ref, onMounted } from "vue";

import { getHomeData } from "../../api/api";

// 引入组件
import TabBarView from "../../components/tabs/TabBarView.vue";
import Store from "./components/Store.vue";
// 声明组件中的选项
defineOptions({
  name: "MyHomeView",
});

// 声明组件中的变量
const homeData = reactive({
  bigClassify: [],
  smallClassify: [],
  cententNavList: [],
});

const locationData = ref("永福镇福里村人民路4号");

// 获取首页数据
const getHome = async () => {
  const res = await getHomeData();
  if (res.status === 200 && res.data.code === 0) {
    Object.assign(homeData, res.data.data);
    // console.log(homeData);
  }
};

onMounted(() => {
  getHome();
});
</script>

<style lang="scss" scoped>
// 深度选择器 sass 中使用/deep/会报错，::v-deep 已经弃用，改为 :deep()
:deep(.van-tabs__wrap) {
  border-radius: 10px;
}

.home {
  display: flex;
  flex-direction: column;
  height: 100%;
  font-size: 12px;

  .home-content {
    flex: 1;
    overflow-y: auto;

    .header {
      background-image: linear-gradient(#ffc400, #fff);
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 20px 20px 40px 20px;
      .text {
        font-size: 16px;
        font-weight: 600;
      }
      .location {
        span {
          margin: 0 5px;
        }
        font-size: 12px;
      }
    }

    .main {
      margin-top: -30px;
      .main-bg {
        background-image: linear-gradient(#fff, #f5f5f5);
        padding: 10px 20px 0 20px;
        border-radius: 30px 30px 0 0;
        position: relative;

        .search {
          position: relative;
          input {
            width: 100%;
            border: 1px solid #ffc400;
            border-radius: 20px;
            height: 30px;
          }

          .search-text {
            position: absolute;
            background-color: #ffc400;
            right: -6px;
            top: 1px;
            width: 50px;
            height: 32px;
            border-radius: 16px;
            text-align: center;
            line-height: 32px;
            font-size: 14px;
            font-weight: 600;
          }
        }

        .classify {
          padding: 20px 0;

          .big-classify {
            display: flex;

            div {
              flex: 1;
              display: flex;
              flex-direction: column;
              align-items: center;
              justify-content: center;
            }

            &__svg {
              width: 50px;
              height: 50px;
              margin-bottom: 5px;
            }
          }

          .small-classify {
            display: flex;
            flex-wrap: wrap;
            margin-top: 20px;

            div {
              display: flex;
              flex-direction: column;
              align-items: center;
              width: 20%;
            }

            &__svg {
              width: 30px;
              height: 30px;
              margin: 10px;
            }
          }
        }
      }

      .main-content {
        .van-tabs {
          padding: 0 20px 10px;
        }
      }
    }
  }
}
</style>
