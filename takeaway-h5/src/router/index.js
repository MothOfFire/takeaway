import { createRouter, createWebHashHistory } from "vue-router";

// 静态导入路由组件
// import MyHomeView from "../pages/myHome/MyHomeView.vue";
// import MyCartView from "../pages/myCart/MyCartView.vue";
// import MyOrderView from "../pages/myOrder/MyOrderView.vue";
// import MineView from "../pages/mine/MineView.vue";

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: "/",
      redirect: "/home",
    },
    {
      path: "/home",
      name: "home",
      component: () => import("../pages/myHome/MyHomeView.vue"), // 路由懒加载
    },
    {
      path: "/cart",
      name: "cart",
      component: () => import("../pages/myCart/MyCartView.vue"),
    },
    {
      path: "/order",
      name: "order",
      component: () => import("../pages/myOrder/MyOrderView.vue"),
    },
    {
      path: "/mine",
      name: "mine",
      component: () => import("../pages/mine/MineView.vue"),
    },
  ],
});

// 导出 router
export default router;