<template>
  <div class="login">
    <Header title="登录" />
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
            登录
          </van-button>

          <van-button
            round
            block
            type="primary"
            color="#ffc400"
            @click="toRegister"
            class="register-btn"
          >
            去注册
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
  name: "Login",
});

const store = useStore();
const router = useRouter();

const userInfo = reactive({
  account: "",
  password: "",
});

// 登录
const onSubmit = (value) => {
  // 判断localStorage中是否有用户信息
  if (!localStorage.getItem("userInfo")) {
    showToast("账号未注册");
    return;
  } else {
    const userInfo = JSON.parse(localStorage.getItem("userInfo"));
    // 判断账号是否正确
    if (userInfo.account === value.account) {
      // 判断账号密码是否正确
      if (
        userInfo.account === value.account &&
        userInfo.password === value.password
      ) {
        // 将 isLogin 设置为 1，标记为登录
        localStorage.setItem("isLogin", 1);
        showToast("登录成功");
        // 跳转到首页
        router.push({
          path: "/",
        });
      } else {
        showToast("密码错误");
        return;
      }
    } else {
      showToast("账号不存在或输入错误");
      return;
    }
  }
};

// 注册按钮
const toRegister = () => {
  router.push({
    path: "/register",
  });
};

//向外暴露的变量和方法
defineExpose({});
</script>

<style lang="scss" scoped>
.login {
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
  .register-btn {
    margin-top: 20px;
  }
}
</style>
