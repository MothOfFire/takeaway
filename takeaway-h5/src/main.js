import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";

//导入 rem 适配相关插件
import "amfe-flexible";

// 导入路由
import router from "./router";

// vant 组件库
import { Button } from "vant";

const app = createApp(App);

// 注册路由
app.use(router);

// 按需注册 vant 组件
app.use(Button);

app.mount("#app");
