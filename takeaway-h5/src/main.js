import { createApp } from "vue";
import "./common/css/base.scss";
import App from "./App.vue";

// 导入路由
import router from "./router";

// vant 组件库
import { Icon } from "vant";

const app = createApp(App);

// 注册路由
app.use(router);

// 按需注册 vant 组件
app.use(Icon);

app.mount("#app");
