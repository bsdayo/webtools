<template>
  <q-page class="page-content column justify-start items-center">
    <div class="text-h5 q-mb-md">常规</div>
    <q-card class="settings-card">
      <q-item>
        <q-item-section>暗色模式</q-item-section>
        <q-item-section avatar>
          <q-btn-toggle
            v-model='settings.darkmode'
            :toggle-color="$q.dark.isActive ? 'grey-9' : 'primary'"
            :options="[
              { label: '开启', value: true },
              { label: '关闭', value: false },
              { label: '自动', value: 'auto' }
            ]"
          />
        </q-item-section>
      </q-item>
      
      <q-item>
        <q-item-section>主题色</q-item-section>
        <q-item-section avatar>
          <q-avatar class="bg-primary" size="sm" />
        </q-item-section>
        <q-item-section avatar>
          <q-icon name="colorize" class="cursor-pointer">
            <q-popup-proxy transition-show="scale" transition-hide="scale">
              <q-color
                :model-value="settings.primaryColor"
                @change="val => { settings.primaryColor = val }"
              />
            </q-popup-proxy>
          </q-icon>
        </q-item-section>
      </q-item>
    </q-card>
  </q-page>
</template>

<script>
import { defineComponent, inject, watch, ref } from 'vue'

import { useQuasar } from 'quasar'

export default defineComponent({
  name: 'SettingsPage',
  components: {  },
  setup() {
    const $q = useQuasar()

    const settings = ref(inject('settings'))
    const applySettings = inject('applySettings')

    watch(settings, (val) => {
      $q.localStorage.set('settings', val)
      applySettings()
    }, {
      deep: true
    })

    return {
      settings,
    }
  }
})
</script>

<style lang="scss" scoped>
.settings-card {
  width: 100%;
  max-width: 768px;
}
</style>