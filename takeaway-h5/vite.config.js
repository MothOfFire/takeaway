import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// 自动按需导入 vant 组件的插件
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import { VantResolver } from "@vant/auto-import-resolver";

// rem 适配移动端
import autoprefixer from "autoprefixer";
import postCssPxToRem from "postcss-pxtorem";

// 导入 vite 实现 commonjs 的插件
import commonjs from "vite-plugin-commonjs";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    commonjs(),
    vue(),
    AutoImport({
      resolvers: [VantResolver()],
    }),
    Components({
      resolvers: [VantResolver()],
    }),
  ],
  css: {
    postcss: {
      plugins: [
        autoprefixer({
          overrideBrowserslist: [
            "Android 4.1",
            "iOS 7.1",
            "Chrome > 31",
            "ff > 31",
            "ie >= 8",
          ],
        }),
        postCssPxToRem({
          // 自适应，px>rem转换
          rootValue: 37.5, // 37.5表示375设计稿
          propList: ["*"], // 需要转换的属性，这里选择全部都进行转换
          selectorBlackList: ["norem"], // 过滤掉norem-开头的class，不进行rem转换
        }),
      ],
    },
  },
});
