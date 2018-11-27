
<template>
  <div class="demo">
    <scroller class="scroller">
      <title title="lc-button-group"></title>
      <category title="默认按钮组"></category>
      <lc-button-group :buttons="buttons" style="margin-top:20px;"></lc-button-group>

    </scroller>
  </div>
</template>

<script>
  import Title from '@components/lighting/_mods/title.vue'
  import Category from '@components/lighting/_mods/category.vue'
  import { LcButtonGroup } from 'lighting-ui'

  export default {
    components: { Title, Category, LcButtonGroup },
    data () {
      return {
        buttons: [
          {
            text: 'Apple',
            clicked () {
              console.log('测试按钮1')
            }
          },
          {
            text: 'Banana',
            clicked () {
              console.log('测试按钮2')
            }
          },
          {
            text: 'Cat',
            clicked () {
              console.log('测试按钮3')
            }
          },
          {
            text: 'Dog',
            clicked () {
              console.log('测试按钮4')
            }
          }
        ]
      }
    }
  }
</script>
<style lang="less">

</style>
