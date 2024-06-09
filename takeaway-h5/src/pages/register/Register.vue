<template>
  <div class="register">
    <Header title="注册" />
    <div class="img">take</div>
    <div class="content">
      <van-form @submit="onSubmit">
        <van-cell-group inset>
          <van-field
            v-model="userInfo.account"
            name="account"
            label="用户名"
            placeholder="请输入用户名"
            :rules="[{ required: true, message: '请填写用户名' }]"
          />
          <van-field
            v-model="userInfo.password"
            type="password"
            name="password"
            label="密码"
            placeholder="请输入密码"
            :rules="[{ required: true, message: '请填写密码' }]"
          />
        </van-cell-group>
        <div style="margin: 16px">
          <van-button
            round
            block
            type="primary"
            native-type="submit"
            color="#ffc400"
          >
            注册
          </van-button>

          <van-button
            round
            block
            type="primary"
            color="#ffc400"
            @click="toLogin"
            class="login-btn"
          >
            已有账号，去登录
          </van-button>
        </div>
      </van-form>
    </div>
  </div>
</template>

<script setup>
import { reactive, onMounted } from "vue";
import { useRouter } from "vue-router";
import { useStore } from "vuex";

import Header from "../../components/header/Header.vue";
import { showToast } from "vant";

// 声明组件中的选项
defineOptions({
  name: "Register",
});

const store = useStore();
const router = useRouter();

const userInfo = reactive({
  account: "",
  password: "",
});

// 注册按钮
const onSubmit = (value) => {
  // 判断localStorage中是否已经存在用户信息
  if (localStorage.getItem("userInfo")) {
    // 获取localStorage中的用户信息
    const userInfo = JSON.parse(localStorage.getItem("userInfo"));
    // 判断用户名是否已经存在
    if (userInfo.account === value.account) {
      showToast("用户名已存在");
      return;
    } else {
      register(value);
    }
  } else {
    register(value);
  }
};

// 注册方法
const register = (value) => {
  // 设置默认昵称、个性标签、头像
  value.nickname = "用户" + (Math.floor(Math.random() * 1000) + 1000);
  value.describe = "这个人很懒，什么都没有留下";
  value.avatar = "../../assets/images/header.jpg";
  // 将用户信息存储到localStorage中
  localStorage.setItem("userInfo", JSON.stringify(value));
  store.commit("addUserInfo", value);
  showToast("注册成功");
  // 跳转到登录页面
  router.push({
    path: "/login",
  });
};

const toLogin = () => {
  router.push({
    path: "/login",
  });
};

//向外暴露的变量和方法
defineExpose({});
</script>

<style lang="scss" scoped>
.register {
  .img {
    width: 200px;
    height: 200px;
    background-color: #ffc400;
    font-size: 50px;
    line-height: 200px;
    text-align: center;
    border-radius: 40px;
    margin: 20px auto;
  }

  .login-btn {
    margin-top: 20px;
  }
}
</style>
