<template>
  <svg :class="iconClass" aria-hidden="true" :width="width" :height="height">
    <use :xlink:href="iconName" :fill="color"></use>
  </svg>
</template>

<script setup>
import { computed } from "vue";
// 声明组件中的选项
defineOptions({
  name: "SvgIcon",
});

// props
const props = defineProps({
  // 图标名，必填
  icon: {
    type: String,
    required: true,
  },
  // 图标类
  iconClass: {
    type: String,
    default: "icon", //默认值
  },
  // 图标颜色
  color: {
    type: String,
    default: "", //默认值
  },
  width: {
    type: String,
    default: "32px", //默认值
  },
  height: {
    type: String,
    default: "32px", //默认值
  },
});

// 图标名拼接
const iconName = computed(() => `#${props.icon}`);
</script>

<style lang="scss" scoped></style>
