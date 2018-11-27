<template>
  <div class="wxc-demo">
    <title title="lc-web"></title>

    <div class="container">

      <category title="点击弹出外部web"></category>

      <lc-button text="点击弹出外部web" type="normal" @LcButtonClicked="openWeb" style="margin-top:50px"></lc-button>
      <lc-web
            :show="show"
            :height="1000"
            title="百度"
            :src="src"
            @overlayClicked="overlayClicked"></lc-web>
    </div>

  </div>
</template>

<style scoped>
  .wxc-demo {
    background-color: #FFFFFF;
  }
  .container{
    flex-direction: column;
    align-items: center;
  }
</style>

<script>
  import { LcWeb, LcButton } from 'lighting-ui'
  import Category from '@components/lighting/_mods/category.vue'
  import Title from '@components/lighting/_mods/title.vue'

  export default {
    components: { Title, Category, LcWeb, LcButton },
    data: () => ({
      show: false,
      src: 'https://www.baidu.com/'
    }),
    created () {
    },
    methods: {
      openWeb () {
        this.show = true
      },
      overlayClicked () {
        this.show = false
      }
    }
  }
</script>
