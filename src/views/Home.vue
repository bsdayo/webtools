<template>
  <div id="home-view" class="page-view">
    <div id="greeting">
      <div id="greeting-face">; )</div>

      欢迎 !
      <br>
      这里是由 b1acksoil 创建的网页工具集
    </div>

    <div id="random-recommend">

    </div>

    <div id="gh-link">
      <BsButton
        type="link"
        href="https://github.com/b1acksoil/webtools"
        color="primary"
        :icon="['fab', 'github']"
        >GitHub</BsButton>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue'

import BsButton from '../components/common/BsButton.vue'

export default defineComponent({
  name: 'HomeView',
  components: { BsButton },
  setup() {
    return {

    }
  }
})
</script>

<style lang="scss" scoped>
#greeting {
  text-align: center;
  padding: 70px 0;

  #greeting-face {
    font-weight: 700;
    font-size: 100px;
    margin-bottom: 40px;
  }
}

#gh-link {
  text-align: center;
}
</style>