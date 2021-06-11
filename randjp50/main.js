const app = new Vue({
  el: '#app',
  data: {
    jpData,
    rowRange: ['あ行'],
    count: 5,
    allChars: [],
    kana: '平假',
    ifAnswersSeen: false,
    practice: '点击按钮生成练习',
    answers: ''
  },
  methods: {
    generate() {
      this.practice = ''
      this.answers = ''
      this.allChars = []
      this.allAnswers = []
      this.ifAnswersSeen = false

      for (let i of this.rowRange) {
        for (let c of this.jpData[i]) {
          if (this.kana == '平假') {
            this.allChars.push(c['hara'])
          }
          if (this.kana == '片假') {
            this.allChars.push(c['kata'])
          }
          this.allAnswers.push(c['pron'])
        }
      }

      for (let n = 0; n < this.count; n++) {
        let num = Math.floor(Math.random() * this.allChars.length)
        this.practice += this.allChars[num] + ' '
        this.answers += this.allAnswers[num] + ' '
      }
    }
  }
})