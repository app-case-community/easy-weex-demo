<template>
  <div class="demo">
    <scroller>
      <title title="lc-badge"></title>
      <category title="徽标组件"></category>
      <lc-cell label="消息"
                title="[恭喜发财，大吉大利]"
                :link="link"
                :has-bottom-border="false"
                @LcCellClicked="LcCellClicked"
                :has-margin="false">
                  <lc-badge slot='value'></lc-badge>
      </lc-cell>
      <lc-cell label="订单"
                title="未处理"
                :link="link"
                :has-top-border="false"
                :has-bottom-border="false"
                @LcCellClicked="LcCellClicked"
                :has-margin="false">
                  <lc-badge text="8" slot='value'></lc-badge>
      </lc-cell>
      <lc-cell label="发现"
                title="好友"
                :link="link"
                :has-top-border="false"
                :has-bottom-border="false"
                @LcCellClicked="LcCellClicked"
                :has-margin="false">
                  <lc-badge text="99+" slot='value'></lc-badge>
      </lc-cell>
      <lc-cell label="发现"
                title="好友"
                :link="link"
                :has-top-border="false"
                @LcCellClicked="LcCellClicked"
                :has-margin="false">
                  <lc-badge text="NEW" slot='value'></lc-badge>
      </lc-cell>

    </scroller>
  </div>
</template>
<script>
  import Title from '@components/lighting/_mods/title.vue'
  import Category from '@components/lighting/_mods/category.vue'
  import { LcBadge, LcCell } from 'lighting-ui'

  export default {
    components: { LcBadge, LcCell, Title, Category },
    data () {
      return {
        link: '#/index'
      }
    },
    methods: {
      LcCellClicked () {
        console.log('clicked')
      }
    }
  }
</script>
<style lang="less">
</style>
