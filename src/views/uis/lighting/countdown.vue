<template>
  <div class="wxc-demo">
    <scroller class="scroller">
      <title title="lc-countdown"></title>
      <category title="基础使用"></category>
      <text class="demo-desc">默认样式，时间戳传5秒后，倒计时完传回调</text>
      <div class="demo-3">
        <text class="cb-text">{{demoText}}:</text>
        <lc-countdown
          :time="demoTime"
          @wxcOnComplete="onCompletedTwo">
        </lc-countdown>
      </div>

      <category title="自定义配置"></category>
      <text class="demo-desc">配置样式，设置倒计时频率</text>

      <lc-countdown
        :interval="2000"
        tpl="{h}时"
        :timeBoxStyle="{backgroundColor: '#399DE2', height: '50px', width: '50px'}"
        :timeTextStyle="{fontSize: '24px', color: '#ffffff'}"
        :dotTextStyle="{color: '#399DE2', fontSize: '26px'}"
        :dotBoxStyle="{width: '30px'}"
        :style="{marginTop: '10px', justifyContent: 'center'}"
        :time="TIME">
      </lc-countdown>

      <lc-countdown
        :interval="2000"
        tpl="{m}分"
        :timeBoxStyle="{backgroundColor: '#399DE2', height: '50px', width: '70px'}"
        :timeTextStyle="{fontSize: '24px', color: '#ffffff'}"
        :dotTextStyle="{color: '#399DE2', fontSize: '26px'}"
        :dotBoxStyle="{width: '30px'}"
        :style="{marginTop: '10px', justifyContent: 'center'}"
        :time="TIME">
      </lc-countdown>

      <lc-countdown
        :interval="2000"
        tpl="{s}秒"
        :timeBoxStyle="{backgroundColor: '#399DE2', height: '50px', width: '80px'}"
        :timeTextStyle="{fontSize: '24px', color: '#ffffff'}"
        :dotTextStyle="{color: '#399DE2', fontSize: '26px'}"
        :dotBoxStyle="{width: '30px'}"
        :style="{marginTop: '10px', justifyContent: 'center'}"
        :time="TIME">
      </lc-countdown>

      <lc-countdown
        :interval="2000"
        tpl="{m}分{s}秒"
        :timeBoxStyle="{backgroundColor: '#399DE2', height: '50px', width: '50px'}"
        :timeTextStyle="{fontSize: '24px', color: '#ffffff'}"
        :dotTextStyle="{color: '#399DE2', fontSize: '26px'}"
        :dotBoxStyle="{width: '30px'}"
        :style="{marginTop: '10px', justifyContent: 'center'}"
        :time="TIME">
      </lc-countdown>

      <lc-countdown
        :interval="2000"
        tpl="{h}时{m}分"
        :timeBoxStyle="{backgroundColor: '#399DE2', height: '50px', width: '50px'}"
        :timeTextStyle="{fontSize: '24px', color: '#ffffff'}"
        :dotTextStyle="{color: '#399DE2', fontSize: '26px'}"
        :dotBoxStyle="{width: '30px'}"
        :style="{marginTop: '10px', justifyContent: 'center'}"
        :time="TIME">
      </lc-countdown>

      <lc-countdown
        :interval="2000"
        tpl="{h}时{m}分{s}秒"
        :timeBoxStyle="{backgroundColor: '#399DE2', height: '50px', width: '50px'}"
        :timeTextStyle="{fontSize: '24px', color: '#ffffff'}"
        :dotTextStyle="{color: '#399DE2', fontSize: '26px'}"
        :dotBoxStyle="{width: '30px'}"
        :style="{marginTop: '10px', justifyContent: 'center'}"
        :time="TIME">
      </lc-countdown>

      <lc-countdown
        :interval="2000"
        tpl="{d}天{h}时{m}分{s}秒"
        :timeBoxStyle="{backgroundColor: '#399DE2', height: '50px', width: '50px'}"
        :timeTextStyle="{fontSize: '24px', color: '#ffffff'}"
        :dotTextStyle="{color: '#399DE2', fontSize: '26px'}"
        :dotBoxStyle="{width: '30px'}"
        :style="{marginTop: '10px', justifyContent: 'center'}"
        :time="TIME">
      </lc-countdown>

      <lc-countdown
        :interval="2000"
        tpl="{d}天{h}:{m}:{s}"
        :timeBoxStyle="{backgroundColor: '#399DE2', height: '50px', width: '50px'}"
        :timeTextStyle="{fontSize: '24px', color: '#ffffff'}"
        :dotTextStyle="{color: '#399DE2', fontSize: '26px'}"
        :dotBoxStyle="{width: '30px'}"
        :style="{marginTop: '10px', justifyContent: 'center'}"
        :time="TIME">
      </lc-countdown>

    </scroller>
  </div>
</template>

<style scoped>
  .wxc-demo {
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    background-color: #fff;
  }
  .demo-desc {
    font-size: 32px;
    margin-top: 20px;
    margin-bottom: 10px;
    margin-left: 30px;
    margin-right: 30px;
    color: rgb(102, 102, 102);
    text-align: center;
  }
  .demo-3 {
    margin-top: 30px;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }

  .scroller {
    flex: 1;
  }
</style>

<script>
  import Title from '@components/lighting/_mods/title.vue'
  import Category from '@components/lighting/_mods/category.vue'

  import { LcCountdown } from 'lighting-ui'
  const modal = weex.requireModule('modal')

  export default {
    components: { Title, Category, LcCountdown },
    data: () => ({
      // TIME: new Date().getTime() + 86400000 + ''
      TIME: new Date().getTime() + 100000000,
      demoTime: new Date().getTime() + 5000,
      callbackText: '',
      demoText: '距离开始'
    }),
    methods: {
      onCompleted () {
        this.callbackText = '倒计时完成了'
        modal.toast({
          message: '倒计时完成了'
        })
      },
      onCompletedTwo () {
        this.demoTime = new Date().getTime() + 5000
        this.demoText = this.demoText === '距离开始' ? '距离结束' : '距离开始'
        modal.toast({
          message: '倒计时完成了'
        })
      }
    }
  }
</script>
