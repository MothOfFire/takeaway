import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";

//导入 rem 适配相关插件
import "amfe-flexible";

// vant 组件库
import { Button } from "vant";

const app = createApp(App);

app.use(Button);

app.mount("#app");
