<template>
  <div class="demo">
    <scroller>
      <title title="lc-process"></title>
      <category title="普通状态"></category>
      <lc-process :processList="processList"></lc-process>
      <category title="错误状态"></category>
      <lc-process :processList="processList1"></lc-process>
      <category title="取消状态"></category>
      <lc-process :processList="processList2"></lc-process>
      <category title="金钱状态"></category>
      <lc-process :processList="processList3"></lc-process>
    </scroller>
  </div>
</template>
<script>
  import Title from '@components/lighting/_mods/title.vue'
  import Category from '@components/lighting/_mods/category.vue'
  import { LcProcess } from 'lighting-ui'

  export default {
    components: { Category, Title, LcProcess },
    data () {
      return {
        processList: [
          {
            name: '申请受理',
            data: '09-20 星期一 18:00',
            state: ''
          },
          {
            name: '份额确认',
            data: '09-22 星期三',
            state: 'success'
          },
          {
            name: '份额确认2',
            data: '09-22 星期五',
            state: 'normal'
          }
        ],
        processList1: [
          {
            name: '申请受理',
            data: '09-20 星期一 18:00',
            state: ''
          },
          {
            name: '份额确认',
            data: '09-22 星期三',
            state: 'error'
          }
        ],
        processList2: [
          {
            name: '申请受理',
            data: '09-20 星期一 18:00',
            state: ''
          },
          {
            name: '份额确认',
            data: '09-22 星期三',
            state: 'cancel'
          }
        ],
        processList3: [
          {
            name: '申请受理',
            data: '09-20 星期一 18:00',
            state: ''
          },
          {
            name: '份额确认',
            data: '09-22 星期三',
            state: 'money'
          }
        ]

      }
    },
    methods: {

    }
  }
</script>
<style scoped>
</style>
