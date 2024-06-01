import { createApp } from "vue";
import "./common/css/base.scss";
import App from "./App.vue";

import "amfe-flexible";

// 引入 symbol 方式的阿里巴巴矢量图标库
import "./assets/font/iconfont.js";

import SvgIcon from "./components/svgIcon/SvgIcon.vue";

// 导入路由
import router from "./router";

// vant 组件库
import { Icon, Tab, Tabs } from "vant";

const app = createApp(App);

// 注册路由
app.use(router);

// 注册 SvgIcon
app.component("SvgIcon", SvgIcon);

// 按需注册 vant 组件
app.use(Icon).use(Tab).use(Tabs);

app.mount("#app");
