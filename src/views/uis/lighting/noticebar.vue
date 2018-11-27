
<template>
  <div class="wxc-demo">
    <scroller class="scroller">
      <title title="lc-noticebar"></title>
      <category title="使用案例"></category>
      <div class="demo">
        <lc-noticebar notice="不配置参数的通告栏"></lc-noticebar>
      </div>
      <div class="demo">
        <lc-noticebar mode="link"
                       :notice-url="url"
                       notice="测试通告,可跳转"></lc-noticebar>
      </div>
      <div class="demo">
        <lc-noticebar :show="true"
                       mode="closable"
                       notice="测试通告，可关闭"></lc-noticebar>
      </div>
      <div class="demo">
        <lc-noticebar type="time"
                       notice="请在14分25秒内完成支付，超时将取消订单"></lc-noticebar>
      </div>
      <div class="demo">
        <lc-noticebar type="redbag"
                       notice="亲，你有很多很多红包可以用"></lc-noticebar>
      </div>
      <div class="demo">
        <lc-noticebar mode="link"
                       notice="一条测试通告,可跳转"
                       type="info"
                       @LcNoticebarLinkClicked="LcNoticebarLinkClicked"
                       :notice-url="url"></lc-noticebar>
      </div>
      <div class="demo">
        <lc-noticebar mode="closable"
                       notice="一条测试通告,关闭"
                       @LcNoticebarCloseClicked="LcNoticebarCloseClicked"
                       type="success"></lc-noticebar>
      </div>
      <div class="demo">
        <lc-noticebar mode="link"
                       notice="一行过长自动...的测试通告,可跳转测试通告,可跳转测试通告,可跳转可跳转测试通告,可跳转"
                       type="question"
                       :notice-url="url"></lc-noticebar>
      </div>
      <div class="demo last-demo">
        <lc-noticebar mode="closable"
                       notice="测试通告,可跳转测试通告,可跳转测试通告,可跳转测试通告,可跳转测试通告,可跳转"
                       :lines="2"
                       type="warn"></lc-noticebar>
      </div>
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

  .scroller {
    flex: 1;
  }

  .demo {
    margin-top: 40px;
  }

  .last-demo {
    margin-bottom: 40px;
  }

</style>

<script>
  import Title from '@components/lighting/_mods/title.vue'
  import Category from '@components/lighting/_mods/category.vue'
  import { LcNoticebar } from 'lighting-ui'
  const modal = weex.requireModule('modal')

  export default {
    components: { Title, Category, LcNoticebar },
    data: () => ({
      url: 'https://h5.m.taobao.com/trip/weex-ui/index.html?_wx_tpl=https%3A%2F%2Fh5.m.taobao.com%2Ftrip%2Fweex-ui%2Fdemo%2Findex.native-min.js'
    }),
    methods: {
      LcNoticebarCloseClicked (e) {
        console.log(e)
        modal.toast({ 'message': 'LcNoticebarCloseClicked', 'duration': 1 })
      },
      LcNoticebarLinkClicked (e) {
        console.log(e)
        modal.toast({ 'message': 'LcNoticebarLinkClicked', 'duration': 1 })
      }
    }
  }
</script>
