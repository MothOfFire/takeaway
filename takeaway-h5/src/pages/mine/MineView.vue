<template>
  <div class="mine">
    <Header title="个人中心" />
    <div class="mine-content">
      <div class="user-info">
        <div class="info">
          <img :src="userInfo.avatar" />
          <div class="user-desc">
            <span>昵称：{{ userInfo.nickname }}</span>
            <span class="name">个性签名：{{ userInfo.describe }}</span>
          </div>
        </div>
      </div>
      <ul class="user-list">
        <li class="van-hairline--bottom" @click="togo('./order')">
          <span>我的订单</span>
          <van-icon name="arrow" />
        </li>
        <li class="van-hairline--bottom" @click="togo('./address')">
          <span>地址管理</span>
          <van-icon name="arrow" />
        </li>
        <li class="van-hairline--bottom" @click="togo('./userinfoedit')">
          <span>账号管理</span>
          <van-icon name="arrow" />
        </li>
      </ul>
    </div>
    <TabBarView></TabBarView>
  </div>
</template>

<script setup>
import { reactive, onMounted } from "vue";
import { useRouter } from "vue-router";
import { useStore } from "vuex";

// 引入组件
import TabBarView from "../../components/tabs/TabBarView.vue";
import Header from "../../components/header/Header.vue";
// 声明组件中的选项
defineOptions({
  name: "MineView",
});

const store = useStore();
const router = useRouter();

const userInfo = reactive({
  nickname: "阿鸡",
  describe: "个性签名的信息",
  avatar: "../../assets/images/header.jpg",
});

// 初始化数据
const initUserInfo = () => {
  const localUserInfo = JSON.parse(localStorage.getItem("userInfo"));
  if (localUserInfo) {
    userInfo.nickname = localUserInfo.nickname;
    userInfo.describe = localUserInfo.describe;
    // userInfo.avatar = localUserInfo.avatar;
  }
};

// 路由跳转
const togo = (path) => {
  router.push(path);
};

onMounted(() => {
  initUserInfo();
});

//向外暴露的变量和方法
defineExpose({});
</script>

<style lang="scss" scoped>
.mine {
  height: 100%;
  display: flex;
  flex-flow: column;
  .mine-content {
    flex: 1;
    overflow-y: auto;
    .user-info {
      width: 94%;
      margin: 10px;
      height: 115px;
      background: linear-gradient(90deg, #ffc400, #c7c351);
      box-shadow: 0 2px 5px #ffc400;
      border-radius: 6px;
      .info {
        position: relative;
        display: flex;
        width: 100%;
        height: 100%;
        padding: 25px 20px;
        box-sizing: border-box;
        img {
          border-radius: 50%;
          margin-top: 4px;
        }
        .user-desc {
          display: flex;
          flex-direction: column;
          margin-left: 10px;
          line-height: 20px;
          font-size: 14px;
          color: #fff;
          justify-content: space-between;
          span {
            color: #fff;
            font-size: 14px;
            padding: 2px 0;
          }
        }
        .account-setting {
          position: absolute;
          top: 10px;
          right: 20px;
          font-size: 13px;
          color: #fff;
          .van-icon-setting-o {
            font-size: 16px;
            vertical-align: -3px;
            margin-right: 4px;
          }
        }
      }
    }
    .user-list {
      padding: 0 20px;
      margin-top: 20px;
      background-color: #fff;
      li {
        height: 40px;
        line-height: 40px;
        display: flex;
        justify-content: space-between;
        font-size: 14px;
        .van-icon-arrow {
          margin-top: 13px;
        }
      }
    }
  }
}
</style>
