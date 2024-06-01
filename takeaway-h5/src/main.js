import { createApp } from "vue";
import "./common/css/base.scss";
import App from "./App.vue";

import "amfe-flexible";

// 引入 symbol 方式的阿里巴巴矢量图标库
import "./assets/font/iconfont.js";

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
