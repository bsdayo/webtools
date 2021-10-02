<template>
  <div id="nav">
    <router-link to="/home" id="nav-title">b1acksoil's webtools</router-link>

    <BsButton
      id="nav-menu-button"
      color="primary"
      @click="isMenuOpened = !isMenuOpened"
    >所有工具</BsButton>
  </div>

  <div id="tools-menu-mask" :class="{'opacity': !isMenuOpened}">
    <div id="tools-menu">
      <div id="tools-list">
        <router-link
          class="tool-item"
          v-for="(tool, index) in toolsData"
          :key="index"
          :to="'/' + tool.name"
          replace
          @click="isMenuOpened = false"
        >
          <p>{{ tool.name }}</p>
          {{ tool.desc }}
        </router-link>
      </div>
    </div>
  </div>

  <div id="page-container">
    <router-view/>
  </div>
</template>

<script>
import { defineComponent, ref } from 'vue'

import BsButton from './components/common/BsButton.vue'

import toolsData from './assets/data/tools.json'

export default defineComponent({
  name: 'App',
  components: { BsButton },
  setup() {
    return {
      isMenuOpened: ref(false),
      toolsData
    }
  }
})
</script>

<style lang="scss">
@import 'assets/scss/global.scss';
@import 'assets/scss/vars.scss';

#nav {
  position: fixed;
  display: flex;
  box-sizing: border-box;
  z-index: 999;
  width: 100%;
  height: $nav-height;
  top: 0;
  left: 0;
  padding: 0 30px;
  justify-content: space-between;
  align-items: center;
  background-color: $color-nav-bg;

  #nav-title {
    font-size: 24px;
    font-weight: 700;
    text-decoration: none;
  }
}

#tools-menu {
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  top: $nav-height + 20px;
  left: 50%;
  transform: translateX(-50%);
  height: 80%;
  width: 80%;
  max-width: 700px;
  border-radius: 10px;
  background-color: $color-page-bg;
  z-index: 900;

  #tools-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-content: flex-start;
    height: 88%;
    width: 90%;
    overflow: auto;

    .tool-item {
      display: block;
      box-sizing: border-box;
      width: 49%;
      padding: 10px 15px;
      margin-bottom: 13px;
      border: 2px #555 solid;
      transition: border 0.2s;
      border-radius: 4px;
      text-decoration: none;

      &:hover {
        border: 2px #ddd solid;
      }

      p {
        font-size: 1.2em;
        font-weight: 700;
        margin: 0 0 5px 0;
      }
    }
  }
}

#tools-menu-mask {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  opacity: 1;
  transition: opacity 0.2s;
  z-index: 800;
  

  &.opacity {
    opacity: 0;
    pointer-events: none;
  }
}

#page-container {
  margin-top: $nav-height;
}

@media screen and (max-width: 768px) {
  #tools-list {
    flex-direction: column !important;
    flex-wrap: nowrap !important;
    justify-content: unset !important;
    align-content: unset !important;

    .tool-item {
      width: 100% !important;
    }
  }
}
</style>
