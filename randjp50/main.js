const app = new Vue({
  el: '#app',
  data: {
    jpData,
    jpDataKeysCount: Object.keys(jpData).length,
    rowRange: ['あ行'],
    isAllSelected: false,
    genMode: 'kana2pron',
    count: 5,
    kana: '平假',
    ifAnswersSeen: false,
    practice: '点击按钮生成练习'
  },
  methods: {
    selectAll(val) {
      this.rowRange = val ? Object.keys(this.jpData) : ['あ行']
    },
    
    onRangeChange() {
      this.isAllSelected = this.rowRange.length == this.jpDataKeysCount
    },
    
    gen() {
      this.practice = ''
      this.answers = ''
      this.allQs = []
      this.allAs = []
      this.ifAnswersSeen = false

      if (this.genMode == 'kana2pron') {
        this.gen_kana2pron()
      } else if (this.genMode == 'pron2kana') {
        this.gen_pron2kana()
      }

      for (let n = 0; n < this.count; n++) {
        let num = Math.floor(Math.random() * this.allQs.length)
        this.practice += this.allQs[num] + '　'
        this.answers += this.allAs[num] + '　'
      }
      this.practice = this.practice.slice(0, -1)
      this.answers = this.answers.slice(0, -1)
    },

    gen_kana2pron() {
      // 假名 ‣ 发音
      for (let i of this.rowRange) {
        for (let c of this.jpData[i]) {
          if (this.kana == '平假') {
            this.allQs.push(c['hira'])
          } else if (this.kana == '片假') {
            this.allQs.push(c['kata'])
          }
          this.allAs.push(c['pron'])
        }
      }
    },

    gen_pron2kana() {
      // 发音 ‣ 假名
      for (let i of this.rowRange) {
        for (let c of this.jpData[i]) {
          if (this.kana == '平假') {
            this.allAs.push(c['hira'])
          } else if (this.kana == '片假') {
            this.allAs.push(c['kata'])
          }
          this.allQs.push(c['pron'])
        }
      }
    }
  }
})