<template>
  <div class="wxc-demo">
    <title title="lc-keyboard"></title>
    <category title="使用案例"></category>
    <lc-keyboard ref="pwd" class="align-bottom" @complete="completeHandler" @forgetClicked="forgetHandler" :showError="isErr" :showForget="isForgot" :chance="chance"></lc-keyboard>
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

  .align-bottom{
    position: fixed;
    bottom: 0px;
    left: 0px;
    right: 0px;
  }

</style>

<script>
  import { LcPopup, LcKeyboard } from 'lighting-ui'
  import Category from '@components/lighting/_mods/category.vue'
  import Title from '@components/lighting/_mods/title.vue'

  export default {
    components: { Title, Category, LcPopup, LcKeyboard },
    data: () => ({
      isErr: false,
      isForgot: true,
      chance: 3
    }),
    created () {
    },
    methods: {
      completeHandler (data) {
        console.log('input complete with result: ')
        console.log(data)
        if (data.join('') !== '123456') {
          this.isErr = true
          setTimeout(() => {
            this.isErr = false
            this.$refs['pwd'].clear()
          }, 1500)
          this.chance--
        } else {
          console.log('密码正确')
        }
      },
      forgetHandler () {
        console.log('忘记密码了')
      }
    }
  }
</script>
