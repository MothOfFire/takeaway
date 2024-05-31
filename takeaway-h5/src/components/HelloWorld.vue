<script setup>
defineOptions({
  name: "HelloWorld",
});
</script>

<template>
  <div class="hello">
    <div>仿美团项目</div>
    <van-button type="primary">主要按钮</van-button>
  </div>
</template>

<style lang="scss" scoped>
.hello {
  font-size: 20px;

  div {
    color: red;
  }
}
</style>
