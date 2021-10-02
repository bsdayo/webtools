<template>
  <a
    v-if="$props.type === 'link'"
    :class="[
      'bs-button',
      $props.color
        ? 'bg-' + $props.color
        : 'bg-white',
      $props.size
        ? 'bs-button-' + $props.size
        : 'bs-button-medium',
      $props.round
        ? 'bs-button-round'
        : ''
    ]"
    :href="$props.href ? $props.href : ''"
    :target="$props.target ? $props.target : '_blank'"
  >
    <fa-icon :icon="$props.icon ? $props.icon : 'link'"></fa-icon> <slot></slot>
  </a>

  <button
    v-else
    :class="[
      'bs-button',
      $props.color
        ? 'bg-' + $props.color
        : 'bg-white',
      $props.size
        ? 'bs-button-' + $props.size
        : 'bs-button-medium',
      $props.round
        ? 'bs-button-round'
        : ''
    ]"
    @click="$emit('click')"
  >
    <fa-icon :icon="$props.icon ? $props.icon : ''"></fa-icon> <slot></slot>
  </button>
</template>

<script>
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'BsButton',
  props: {
    type: String,
    color: String,
    size: String,
    icon: [String, Array],
    round: Boolean,
    href: String,
    target: String,
  },
  emits: [ 'click' ],
  setup() {
    return {
      isHover: ref(false)
    }
  }
})
</script>

<style lang="scss" scoped>
.bs-button {
  position: relative;
  display: inline-block;
  border: 0;
  border-radius: 4px;
  text-decoration: none;
  font-size: 1em;
  line-height: 1em;
  color: #000;
  box-shadow: 0 1px 5px #0003,0 2px 2px #00000024,0 3px 1px -2px #0000001f;
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;

  &.bs-button-small {
    padding: 4px !important;
  }

  &.bs-button-medium {
    padding: 8px !important;
  }

  &.bs-button-large {
    padding: 12px !important;
  }

  &.bs-button-round {
    border-radius: 1em !important;
  }
  
  &:not(.bg-white) {
    color: #fff;
  }

  &::before {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    border-radius: 4px;
    background-color: transparent;
    transition: background-color 0.1s;
  }

  &:hover::before &:focus::before {
    background-color: rgba(255, 255, 255, 0.2);
  }

  &:active::before {
    background-color: rgba(0, 0, 0, 0.2);
  }
}
</style>