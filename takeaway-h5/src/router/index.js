import { createRouter, createWebHashHistory } from "vue-router";

import { showToast } from "vant";

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
      meta: {
        // 需要登录才能访问
        requireAuth: true,
      },
    },
    {
      path: "/order",
      name: "order",
      component: () => import("../pages/myOrder/MyOrderView.vue"),
      meta: {
        // 需要登录才能访问
        requireAuth: true,
      },
    },
    {
      path: "/mine",
      name: "mine",
      component: () => import("../pages/mine/MineView.vue"),
      meta: {
        // 需要登录才能访问
        requireAuth: true,
      },
    },
    {
      path: "/login",
      name: "login",
      component: () => import("../pages/login/Login.vue"),
    },
    {
      path: "/register",
      name: "register",
      component: () => import("../pages/register/Register.vue"),
    },
    {
      path: "/store",
      name: "store",
      component: () => import("../pages/myStore/StoreDetail.vue"),
    },
    {
      path: "/createorder",
      name: "createorder",
      component: () => import("../pages/createOrder/CreateOrder.vue"),
      meta: {
        // 需要登录才能访问
        requireAuth: true,
      },
    },
    {
      path: "/address",
      name: "address",
      component: () => import("../pages/address/Address.vue"),
      meta: {
        // 需要登录才能访问
        requireAuth: true,
      },
    },
    {
      path: "/addressedit",
      name: "addressedit",
      component: () => import("../pages/address/AddressEdit.vue"),
      meta: {
        // 需要登录才能访问
        requireAuth: true,
      },
    },
    {
      path: "/userinfoedit",
      name: "userinfoedit",
      component: () => import("../pages/userInfoEdit/UserInfoEdit.vue"),
      meta: {
        // 需要登录才能访问
        requireAuth: true,
      },
    },
  ],
});

// 路由守卫
router.beforeEach((to, from, next) => {
  // 判断是否需要登录才能访问
  if (to.meta.requireAuth) {
    // 判断是否已经登录
    if (localStorage.getItem("isLogin") === "1") {
      next();
    } else {
      showToast("请先登录");
      router.push("/login");
    }
  } else {
    next();
  }
});

// 导出 router
export default router;
