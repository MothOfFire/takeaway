<template>
  <div class="register">
    <Header title="注册" />
    <div class="img">take</div>
    <div class="content">
      <van-form @submit="onSubmit">
        <van-cell-group inset>
          <van-field
            v-model="userInfo.username"
            name="用户名"
            label="用户名"
            placeholder="用户名"
            :rules="[{ required: true, message: '请填写用户名' }]"
          />
          <van-field
            v-model="userInfo.password"
            type="password"
            name="密码"
            label="密码"
            placeholder="密码"
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
// 声明组件中的选项
defineOptions({
  name: "Register",
});

const store = useStore();
const router = useRouter();

const userInfo = reactive({
  username: "",
  password: "",
});

// 注册按钮
const onSubmit = () => {
  console.log("register-submit", userInfo);
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
