
<template>
  <div class="wxc-demo">
    <scroller class="scroller">
      <title title="lc-page-calendar" class="title"></title>
      <category title="使用案例"></category>

      <div class="button-list">
        <lc-button text="单程日历" class="btn-margin"
                      type="normal"
                      @LcButtonClicked="showCalendar"></lc-button>
        <lc-button text="往返日历" class="btn-margin"
                      type="normal"
                      @LcButtonClicked="showReturnCalendar"></lc-button>
      </div>

      <div class="panel">
        <text v-if="currentDate"
              class="text">当前日期: {{currentDate}}</text>
      </div>

      <lc-page-calendar :date-range="dateRange"
                         :selected-date="selectedDate"
                         :selected-note="selectedNote"
                         :is-range="isRange"
                         :needDestroy="false"
                         :minibar-cfg="minibarCfg"
                         :desc-list="descList"
                         @LcPageCalendarBackClicked="LcPageCalendarBackClicked"
                         @LcPageCalendarDateSelected="LcPageCalendarDateSelected"
                         ref="LcPageCalendar"></lc-page-calendar>
    </scroller>
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
  .button-list {
    padding-left: 24px;
  }
  .btn-margin {
    margin-top: 40px;
  }

  .scroller {
    flex: 1;
  }

  .btn {
    width: 600px;
    height: 80px;
    margin-top: 300px;
    flex-direction: row;
    align-items: center;
    align-self: center;
    justify-content: center;
    border-radius: 6px;
    background-color: rgb(92, 184, 92);
    border-color: rgb(76, 174, 76);
  }

  .text {
    font-size: 32px;
  }

  .yellow {
    background-color: #ffc300;
    border-color: #ffc300;
  }

  .btn-txt {
    font-size: 32px;
    color: #ffffff;
  }

  .btn-margin {
    margin-top: 40px;
  }

  .panel {
    align-self: center;
    height: 300px;
    margin-top: 40px;
  }

  .title {
    align-self: flex-start;
  }
</style>

<script>
  import Title from '@components/lighting/_mods/title.vue'
  import Category from '@components/lighting/_mods/category.vue'
  import { LcPageCalendar, LcButton } from 'lighting-ui'

  const modal = weex.requireModule('modal')

  export default {
    components: { Title, Category, LcButton, LcPageCalendar },
    data: () => ({
      currentDate: '',
      selectedDate: ['2017-12-20', '2017-12-30'],
      isRange: true,
      calendarTitle: '选择日期',
      dateRange: ['2017-08-01', '2018-07-30'],
      selectedNote: ['出发', '到达', '往返'],
      minibarCfg: {
        title: '日期选择'
      },
      descList: [
        { date: '2017-12-23', value: '￥200' },
        { date: '2017-12-24', value: '￥200' },
        { date: '2017-12-25', value: '￥200' },
        { date: '2017-12-26', value: '￥200' },
        { date: '2017-12-27', value: '￥222' },
        { date: '2017-12-28', value: '￥341' },
        { date: '2017-12-29', value: '￥230' },
        { date: '2017-12-06', value: '￥2000', emphasize: true }
      ]
    }),
    methods: {
      LcPageCalendarDateSelected (e) {
        this.selectedDate = e.date
        this.currentDate = e.date
      },
      LcPageCalendarBackClicked () {
        modal.toast({
          message: '你按了返回按钮'
        })
      },
      showCalendar () {
        this.isRange = false
        setTimeout(() => {
          this.$refs['LcPageCalendar'].show()
        }, 1)
      },
      showReturnCalendar () {
        this.isRange = true
        setTimeout(() => {
          this.$refs['LcPageCalendar'].show()
        }, 1)
      }
    }
  }
</script>
