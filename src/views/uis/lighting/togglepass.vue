
<template>
    <div>
        <input type="text" @input="change(text1)" v-if="type=='text'" v-model="text1"/>
        <input type="password" @input="change(text2)" v-if="type=='password'" v-model="text2"/>
        <button @click="toggle">切换</button>
    </div>
</template>
<script>
  let text = ''
  export default {
    data () {
      return {
        text1: '',
        text2: '',
        type: 'password'
      }
    },
    methods: {
      toggle () {
        console.log(text)
        const that = this
        if (this.type === 'password') {
          this.type = 'text'
          that.text1 = ''
          this.$nextTick(function () {
            that.text1 = text
          })
        } else {
          this.type = 'password'
          that.text2 = ''
          this.$nextTick(function () {
            that.text2 = text
          })
        }
      },
      // 必须有这个
      change (t) {
        console.log(t)
        text = t
      }
    }
  }
</script>
<style scoped>

</style>
