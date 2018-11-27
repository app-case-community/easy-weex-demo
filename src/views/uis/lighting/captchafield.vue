<template>
  <div class="wxc-demo">
    <title title="lc-captchafield"></title>

    <div class="container">

      <category title="发送验证码"></category>
      <div class="form">
        <lc-captchafield ref="input" :time=30 @sendCaptcha="sendHandler"></lc-captchafield>
      </div>

    </div>

  </div>
</template>

<style scoped>
  .wxc-demo {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: #FFFFFF;
  }
  .container{
    flex-direction: column;
    align-items: center;
  }
  .form{
    width: 600px;
  }
</style>

<script>
  import { LcCaptchafield } from 'lighting-ui'
  import Category from '@components/lighting/_mods/category.vue'
  import Title from '@components/lighting/_mods/title.vue'

  export default {
    components: { Title, Category, LcCaptchafield },
    data: () => ({
    }),
    created () {
    },
    methods: {
      sendHandler () {
        console.log('点击发送验证码')
        this.$refs['input'].countDown()
      }
    }
  }
</script>
