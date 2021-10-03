<template>
  <q-item
    clickable
    :to="name"
  >
    <q-item-section
      v-if="icon"
      avatar
    >
      <q-icon :name="icon" />
    </q-item-section>

    <q-item-section>
      <q-item-label>{{ name }}</q-item-label>
      <q-item-label caption>
        {{ desc }}
      </q-item-label>
    </q-item-section>
  </q-item>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'ToolLink',
  props: {
    name: {
      type: String,
      required: true
    },

    desc: {
      type: String,
      default: ''
    },

    icon: {
      type: String,
      default: ''
    }
  }
})
</script>
