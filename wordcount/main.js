const app = new Vue({
    el: '#app',
    data: {
        inputContent: '',
    },
    computed: {
        wordCount: function () {
            wordArr = this.inputContent.split(' ')
            if (wordArr.length==1 && wordArr[0]=='') {
                return 0
            } else {
                return wordArr.length
            }
        },
        characterCount: function () {
            return this.inputContent.split('').length
        }
    }
})