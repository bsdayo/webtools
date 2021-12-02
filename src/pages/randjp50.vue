<template>
  <q-page>
    <q-tabs align="center" v-model="currentTab" class="page-tabs bg-primary text-white shadow-4">
      <q-tab name="gen" label="生成" />
      <q-tab name="options" label="选项" />
    </q-tabs>

    <div class="page-content-with-tabs">
      <div id="gen-view" class="tab-view flex-center column" v-if="currentTab === 'gen'">
        <div class="text-h5 q-mb-lg">
          随机五十音练习
        </div>

        <q-card id="gen-content" class="bg-secondary q-py-xl q-mb-lg text-white text-center">
          <q-card-section class="text-h6">
            {{ questions.join('&emsp;') }}

            <div v-if="showAnswers">
              <q-separator dark class="q-my-md"></q-separator>
              {{ answers.join('&emsp;') }}
            </div>
          </q-card-section>
        </q-card>

        <div class="q-mb-lg">
          <q-btn class="q-mx-md" push color="indigo" @click="gen()">生成</q-btn>
          <q-btn class="q-mx-md" push color="blue" @click="showAnswers = !showAnswers">
            {{ showAnswers ? '隐藏答案' : '显示答案' }}
          </q-btn>
        </div>

        <q-card class="tool-help q-mt-xl">
          <q-card-section class="text-center">
            <span class="text-h6">使用说明</span>
            <q-separator class="q-my-md"></q-separator>
            <p>准备一张纸和一只笔，在“选项“中配置好练习范围和数量，点击生成按钮即可生成对应练习。<br>根据生成的假名(或发音)，在纸上默写对应的发音(或假名)，最后点击显示答案按钮对照批改，即可达到良好的练习效果。 </p>
          </q-card-section>
        </q-card>
      </div>


      <div id="options-view" class="tab-view flex-center column" v-if="currentTab === 'options'">
        <q-card class="option-card">
          <q-card-section>
            <span class="text-h6">范围</span>
            <q-separator></q-separator>
            <q-checkbox
              v-for="(row, index) in Object.keys(jpData)"
              :key="index"
              :val="row"
              :label="row"
              v-model="genRange">
            </q-checkbox>
          </q-card-section>
        </q-card>

        <q-card class="option-card">
          <q-card-section class="row items-center">
            <span class="text-h6 q-mr-lg">假名</span>
            <q-btn-toggle
              v-model="genKana"
              :options="[
                { label: '平假', value: 'hira' },
                { label: '片假', value: 'kata' }
              ]"
              push
            ></q-btn-toggle>
          </q-card-section>
        </q-card>

        <q-card class="option-card">
          <q-card-section class="row items-center">
            <span class="text-h6 q-mr-lg">模式</span>
            <q-btn-toggle
              v-model="genMode"
              :options="[
                { label: '假名 > 发音', value: 'kana2pron' },
                { label: '发音 > 假名', value: 'pron2kana' }
              ]"
              push
            ></q-btn-toggle>
          </q-card-section>
        </q-card>

        <q-card class="option-card">
          <q-card-section>
            <span class="text-h6">数量</span>
            <q-separator></q-separator>
            <q-slider
              v-model="genCount"
              :min="1"
              :max="20"
              label
              label-always
              class="q-mt-lg"
            ></q-slider>
          </q-card-section>
        </q-card>
      </div>
    </div>
  </q-page>
</template>

<script>
import { defineComponent, ref } from 'vue'

import jpData from '../data/randjp50/data.json'

export default defineComponent({
  name: 'randjp50Page',
  components: {  },
  setup() {
    // 生成选项
    const genRange = ref(['あ行'])       // 生成范围
    const genKana = ref('hira')         // 生成假名
    const genMode = ref('kana2pron')    // 生成模式
    const genCount = ref(5)             // 生成数量

    // 生成结果
    const questions = ref(['点击按钮生成练习'])
    const answers = ref([])
    const allQs = ref([])
    const allAs = ref([])
    const showAnswers = ref(false)

    // 生成函数
    function gen() {
      questions.value = []
      answers.value = []
      allQs.value = []
      allAs.value = []
      showAnswers.value = false

      genMode.value === 'kana2pron'
        ? _gen_kana2pron()
        : _gen_pron2kana()

      for (let n = 0; n < genCount.value; n++) {
        let r = Math.floor(Math.random() * allQs.value.length)
        questions.value.push(allQs.value[r])
        answers.value.push(allAs.value[r])
      }
    }

    function _gen_kana2pron() {
      for (let row of genRange.value) {
        for (let item of jpData[row]) {
          genKana.value === 'hira'
            ? allQs.value.push(item['hira'])
            : allQs.value.push(item['kata'])
          allAs.value.push(item['pron'])
        }
      }
    }

    function _gen_pron2kana() {
      for (let row of genRange.value) {
        for (let item of jpData[row]) {
          genKana.value === 'hira'
            ? allAs.value.push(item['hira'])
            : allAs.value.push(item['kata'])
          allQs.value.push(item['pron'])  
        }
      }
    }

    return {
      currentTab: ref('gen'),
      jpData,
      genRange,
      genKana,
      genMode,
      genCount,
      questions,
      answers,
      showAnswers,
      gen,
    }
  }
})
</script>

<style lang="scss" scoped>
#gen-content, .option-card, .tool-help {
  width: 100%;
  max-width: 700px;

  div {
    transition: max-height 0.4s;
  }
}

.option-card {
  margin-bottom: 20px;
}
</style>