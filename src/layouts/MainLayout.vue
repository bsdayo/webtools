<template>
  <q-layout view="hHh Lpr lFf">
    <q-header :class="[$q.dark.isActive ? 'bg-dark' : 'bg-primary', currentTool === '' ? 'shadow-4' : '']">
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Tools"
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title>
          <router-link to="/">
            b1acksoil's webtools
          </router-link>
          {{ currentTool === '' ? '' : `- ${currentTool}` }}
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      bordered
      behavior="mobile"
      class="column justify-between"
    >
      <q-list>
        <q-item clickable v-ripple to="settings">
          <q-item-section avatar>
            <q-icon name="settings" />
          </q-item-section>
          <q-item-section :class="$q.dark.isActive ? 'text-white' : 'text-black'">
            设置
          </q-item-section>
        </q-item>

        <q-item-label class="q-mt-md" header>
          所有工具
        </q-item-label>
        
        <ToolLink
          v-for="(tool, index) in toolsData"
          :key="index"
          v-bind="tool"
          @click="toggleLeftDrawer"
        />
      </q-list>

      <div class="q-py-lg q-px-md flex justify-around">
        <q-btn
          type="a"
          href="https://github.com/b1acksoil/webtools/"
          target="_blank"
          color="primary"
          push
          no-caps
        >&nbsp;GitHub</q-btn>
        <q-btn
          type="a"
          href="https://blacksoil.top/"
          target="_blank"
          color="blue-8"
          push
          no-caps
        >&nbsp;b1acksoil的博客</q-btn>
      </div>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent, ref, computed, provide } from 'vue'
import { useRouter } from 'vue-router'
import { useQuasar, setCssVar } from 'quasar'

import ToolLink from '../components/ToolLink.vue'
import toolsData from '../data/tools.json'

export default defineComponent({
  name: 'MainLayout',
  components: {
    ToolLink
  },
  setup () {
    const router = useRouter()
    const leftDrawerOpen = ref(false)
    const $q = useQuasar()

    const currentTool = computed(() => {
      let temp = router.currentRoute.value.path.slice(1)
      temp = temp.charAt(temp.length - 1) === '/'
        ? temp.substring(0, temp.length-1)
        : temp
      return temp
    })

    // Settings
    const defaultSettings = {
      darkmode: false,
      primaryColor: '#145ea8'
    }

    if (!$q.localStorage.has('settings')) {
      $q.localStorage.set('settings', defaultSettings)
    }

    const settings = Object.assign(defaultSettings, $q.localStorage.getItem('settings'))

    function applySettings() {
      $q.dark.set(settings.darkmode)
      setCssVar('primary', settings.primaryColor)
    }

    provide('settings', settings)
    provide('applySettings', applySettings)

    applySettings()

    return {
      toolsData,
      leftDrawerOpen,
      toggleLeftDrawer () {
        leftDrawerOpen.value = !leftDrawerOpen.value
      },
      currentTool
    }
  }
})
</script>

<style lang="scss" scoped>
</style>
