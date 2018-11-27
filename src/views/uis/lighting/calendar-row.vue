<template>
  <div class="wxc-demo">
    <scroller style="height:1200px">
      <title title="calendar-row"></title>

      <lc-calendar-row @current="current" @chose="choseDate"></lc-calendar-row>
      <text>当前日期：{{currentDate}}</text>
      <text>选择了：{{userChose}}</text>
    </scroller>
  </div>
</template>

<script>

  import Title from '@components/lighting/_mods/title.vue'
  import { LcCalendarRow } from 'lighting-ui'

  export default {
    components: { Title, LcCalendarRow },
    data: function () {
      return {
        currentDate: '',
        userChose: ''
      }
    },
    methods: {
      choseDate (chose) {
        this.userChose = chose
      },
      current (cur) {
        this.currentDate = cur
      }

    }
  }
</script>

<style scoped>
.wxc-demo {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: #FFFFFF;
  }
</style>
