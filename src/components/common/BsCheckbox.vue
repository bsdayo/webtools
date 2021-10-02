<template>
  <div class="bs-checkbox">
    <label>
      <input
        type="checkbox"
        :checked="modelValue"
        @change="$emit('update:modelValue', $event.target.checked)">
      {{ $props.label }}
    </label>
  </div>
</template>

<script>
import { defineComponent, ref } from 'vue'

// import  from ''

export default defineComponent({
  name: 'BsCheckbox',
  props: {
    label: String,
    modelValue: Boolean,
  },
  emits: [ 'update:modelValue' ],
  components: {  },
  setup() {
    return {

    }
  }
})
</script>

<style lang="scss" scoped>

</style>