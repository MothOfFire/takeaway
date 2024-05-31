import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// 自动按需导入 vant 组件的插件
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import { VantResolver } from "@vant/auto-import-resolver";

// rem 适配移动端

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
});
