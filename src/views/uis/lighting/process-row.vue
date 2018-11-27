<template>
  <div class="demo">
    <scroller>
      <title title="lc-process-row"></title>
      <category title="普通状态"></category>
      <lc-process-row :processList="processList"></lc-process-row>
      <category title="错误状态"></category>
      <lc-process-row :processList="processList1"></lc-process-row>
      <category title="取消状态"></category>
      <lc-process-row :processList="processList2"></lc-process-row>
    </scroller>
  </div>
</template>
<script>
  import Title from '@components/lighting/_mods/title.vue'
  import Category from '@components/lighting/_mods/category.vue'
  import { LcProcessRow } from 'lighting-ui'

  export default {
    components: { Category, Title, LcProcessRow },
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
        ]

      }
    },
    methods: {

    }
  }
</script>
<style scoped>
</style>
