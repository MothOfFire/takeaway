import { createApp } from "vue";
import "./common/css/base.scss";
import App from "./App.vue";

import "amfe-flexible";

// 引入 symbol 方式的阿里巴巴矢量图标库
import "./assets/font/iconfont.js";

import SvgIcon from "./components/svgIcon/SvgIcon.vue";

// 导入路由
import router from "./router";

import store from "./store";

// vant 组件库
import {
  Icon,
  Tab,
  Tabs,
  Toast,
  TreeSelect,
  Stepper,
  ActionBar,
  ActionBarIcon,
  ActionBarButton,
} from "vant";
// 自动引入识别不出来，手动引入 toast 组件样式，
import "vant/es/toast/style";

const app = createApp(App);

// 注册路由
app.use(router);

app.use(store);

// 注册 SvgIcon
app.component("SvgIcon", SvgIcon);

// 按需注册 vant 组件
app
  .use(Icon)
  .use(Tab)
  .use(Tabs)
  .use(Toast)
  .use(TreeSelect)
  .use(Stepper)
  .use(ActionBar)
  .use(ActionBarIcon)
  .use(ActionBarButton);

app.mount("#app");
