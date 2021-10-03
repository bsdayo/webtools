<template>
  <q-page>
    <q-tabs align="center" v-model="currentTab" class="page-tabs bg-primary text-white shadow-4">
      <q-tab name="gen" label="生成" />
      <q-tab name="options" label="选项" />
    </q-tabs>

    <div class="page-content">
      <div id="gen-view" class="tab-view flex-center column" v-if="currentTab === 'gen'">
        <q-card id="gen-content" class="bg-secondary q-py-xl q-mb-lg text-white text-center">
          <q-card-section>
            sss
          </q-card-section>
        </q-card>

        <div>
        <q-btn class="q-mx-md" push color="indigo">生成</q-btn>
        <q-btn class="q-mx-md" push color="blue">显示答案</q-btn>
        </div>
      </div>

      <div id="options-view" class="tab-view" v-if="currentTab === 'options'">

      </div>
    </div>
  </q-page>
</template>

<script>
import { defineComponent, ref } from 'vue'

// import  from ''

export default defineComponent({
  name: 'Page',
  components: {  },
  setup() {
    return {
      currentTab: ref('gen')
    }
  }
})
</script>

<style lang="scss" scoped>
#gen-content {
  width: 100%;
  max-width: 700px;
}
</style>