<template>
  <q-page class="column justify-start items-center">
    <div id="index-face" class="text-weight-bold q-my-xl">; )</div>

    <div id="index-intro" class="text-center q-mb-xl">
      <p class="text-h5 text-weight-medium">欢迎！</p>
      <p class="text-subtitle1">这里是由 b1acksoil 制作的的网页工具集</p>
    </div>

    <q-btn
      class="q-mt-xl"
      type="a"
      href="https://github.com/b1acksoil/webtools/"
      target="_blank"
      icon="open_in_new"
      color="primary"
      push
      no-caps
      >&nbsp;GitHub</q-btn>
  </q-page>
</template>

<script>
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "IndexPage",
  setup() {
    return {};
  },
});
</script>

<style lang="scss" scoped>
#index-face {
  font-size: 20vh;
}
</style>
