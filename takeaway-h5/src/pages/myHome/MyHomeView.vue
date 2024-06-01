<template>
  <div class="home">
    <div class="home-content">
      <!-- Header -->
      <div class="header">
        <div class="text">外卖</div>
        <div class="location">
          <van-icon name="location-o" />
          <span>永福镇福里村人民路4号</span>
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
              <div v-for="(item, index) in bigClassify" :key="index">
                <SvgIcon :icon="item.icon" class="big-classify__svg" />
                <span>{{ item.name }}</span>
              </div>
            </div>
            <div class="small-classify">
              <div v-for="(item, index) in smallClassify" :key="index">
                <SvgIcon :icon="item.icon" class="small-classify__svg" />
                <span>{{ item.name }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <TabBarView></TabBarView>
  </div>
</template>

<script setup>
import { reactive } from "vue";

// 引入组件
import TabBarView from "../../components/tabs/TabBarView.vue";
// 声明组件中的选项
defineOptions({
  name: "MyHomeView",
});

// 声明组件中的变量
const bigClassify = reactive([
  {
    name: "美食外卖",
    icon: "icon-meishi",
  },
  {
    name: "甜点饮品",
    icon: "icon-tiandian",
  },
  {
    name: "超市便利",
    icon: "icon-shangjiadianpu",
  },
  {
    name: "生鲜果蔬",
    icon: "icon-shuiguo",
  },
  {
    name: "医药健康",
    icon: "icon-yaopin",
  },
]);

const smallClassify = reactive([
  {
    name: "粥粉面点",
    icon: "icon-mianshi1",
  },
  {
    name: "汉堡披萨",
    icon: "icon-hanbao",
  },
  {
    name: "休闲饮品",
    icon: "icon-naicha",
  },
  {
    name: "阳光酒会",
    icon: "icon-a-20230816meishitubiao_zhongcanyanhui-jiuhui",
  },
  {
    name: "炸鸡炸串",
    icon: "icon-shaokao",
  },
  {
    name: "新鲜水果",
    icon: "icon-chengzi-01",
  },
  {
    name: "生鲜鱼虾",
    icon: "icon-haixian",
  },
  {
    name: "日用百货",
    icon: "icon-xueshengchaoshixiaofei",
  },
  {
    name: "烧鸭卤味",
    icon: "icon-kaoya",
  },
  {
    name: "全部分类",
    icon: "icon-quanbu",
  },
]);

//向外暴露的变量和方法
defineExpose({});
</script>

<style lang="scss" scoped>
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
    }
  }
}
</style>
