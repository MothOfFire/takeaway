<template>
  <div class="userinfo-edit">
    <Header title="账号管理" />
    <div class="content">
      <!-- 输入框 -->
      <div class="input-item">
        <van-cell-group inset>
          <van-field
            v-model="data.nickname"
            label="昵称"
            placeholder="请输入昵称"
          />
          <van-field
            v-model="data.describe"
            label="个性签名"
            placeholder="请输入签名"
          />
          <van-field
            v-model="data.repassword"
            label="修改密码"
            placeholder="请输入密码"
          />
        </van-cell-group>
      </div>
      <div class="btn-item">
        <van-button
          type="primary"
          block
          round
          color="#ffc400"
          @click="save"
          class="save-btn"
          >保存</van-button
        >
        <van-button
          type="primary"
          block
          round
          color="#ffc400"
          @click="loginOut"
          class="loginout-btn"
          >退出登入</van-button
        >
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive, onMounted } from "vue";
import { useRouter } from "vue-router";

import Header from "../../components/header/Header.vue";
import { showToast } from "vant";
// 声明组件中的选项
defineOptions({
  name: "UserInfoEdit",
});

const router = useRouter();

const data = reactive({
  nickname: "",
  describe: "",
  repassword: "",
});

// 初始化个性签名
const initDescribe = () => {
  const userInfo = JSON.parse(localStorage.getItem("userInfo"));
  data.describe = userInfo.describe;
};

// 保存
const save = () => {
  // 判断是否输入了昵称和密码
  if (data.nickname && data.repassword) {
    const userInfo = JSON.parse(localStorage.getItem("userInfo"));
    userInfo.nickname = data.nickname;
    userInfo.describe = data.describe;
    userInfo.password = data.repassword;
    localStorage.setItem("userInfo", JSON.stringify(userInfo));
    showToast("保存成功");
    router.push("/mine");
  } else {
    showToast("请输入修改的昵称和密码");
    return;
  }
};

// 退出登入
const loginOut = () => {
  // 移除localStorage中的登录标记 isLogin
  localStorage.removeItem("isLogin");
  showToast("退出登入成功");
  // 跳转到登入页面
  router.push("/login");
};

onMounted(() => {
  initDescribe();
});

//向外暴露的变量和方法
defineExpose({});
</script>

<style lang="scss" scoped>
.save-btn,
.loginout-btn {
  width: 80%;
  margin: 20px auto;
}
.loginout-btn {
  margin-top: 0;
}
</style>
