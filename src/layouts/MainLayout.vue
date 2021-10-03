<template>
  <q-layout view="lHh Lpr lFf">
    <q-header :class="['bg-primary', $router.currentRoute.value.path === '/' ? 'shadow-4' : '']">
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title>
          <router-link to="/">
            b1acksoil's webtools
          </router-link>
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      bordered
    >
      <q-list>
        <q-item-label
          header
        >
          所有工具
        </q-item-label>

        <ToolLink
          v-for="(tool, index) in toolsData"
          :key="index"
          v-bind="tool"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from 'vue'

import ToolLink from '../components/ToolLink.vue'
import toolsData from '../data/tools.json'

export default defineComponent({
  name: 'MainLayout',
  components: {
    ToolLink
  },
  setup () {
    const leftDrawerOpen = ref(false)

    return {
      toolsData,
      leftDrawerOpen,
      toggleLeftDrawer () {
        leftDrawerOpen.value = !leftDrawerOpen.value
      }
    }
  }
})
</script>

<style lang="scss" scoped>
</style>
