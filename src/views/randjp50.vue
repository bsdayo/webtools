<template>
  <div id="randjp50-view" class="page-view">
    <div id="randjp50-options" class="group">
      <h4 class="group-title">范围</h4>

      <BsCheckbox label="damedane" v-model="v" />

      {{ v }}
    </div>
  </div>
</template>

<script>
import { defineComponent, ref } from 'vue'

import BsButton from '../components/common/BsButton.vue'
import BsCheckbox from '../components/common/BsCheckbox.vue'

import jpData from '../assets/data/randjp50/data.json'

export default defineComponent({
  name: 'randjp50View',
  components: { BsButton, BsCheckbox },
  setup() {
    return {
      v: ref(false)
    }
  }
})
</script>

<style lang="scss" scoped>
@import '../assets/scss/vars.scss';

#randjp50-view {
  display: flex;
}

.group {
  position: relative;
  padding: 20px;
  border: 2px #555 solid;
  border-radius: 10px;

  .group-title {
    margin: 0 0 10px 0;
  }
}
</style>