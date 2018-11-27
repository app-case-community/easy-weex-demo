<!-- 95735 新增lc-popover气泡菜单组件 -->

<template>
  <div class="lc-demo">
      <title title="lc-popover"></title>
      <category title="使用案例"></category>
      <div>

        <div class="demo">
          <lc-minibar title="点击右方拓展按钮"
                       background-color="#999"
                       @LcMinibarRightButtonClicked="minibarRightButtonClick"
                       right-text="..."></lc-minibar>
        </div>

        <div class="demo demo3">
          <lc-button text="向右弹出|无动画" type="normal" :btnStyle="btn3Style"  @LcButtonClicked="LcButtonClicked3"></lc-button>
          <lc-button text="向左弹出" type="normal" :btnStyle="btn4Style"  @LcButtonClicked="LcButtonClicked4"></lc-button>
        </div>

        <div class="demo demo2">
          <lc-button text="向上弹出" @LcButtonClicked="LcButtonClicked2"></lc-button>
        </div>

        <!-- demo 1 pop -->
        <lc-popover ref="lc-popover1"
                     :buttons="btns"
                     :position="popoverPosition"
                     :arrowPosition="popoverArrowPosition"
                     @LcPopoverButtonClicked="popoverButtonClicked"
        ></lc-popover>

        <!-- demo 2 pop -->
        <lc-popover ref="lc-popover2"
                     :buttons="btns2"
                     :position="popoverPosition2"
                     :arrowPosition="popoverArrowPosition2"
                     @LcPopoverButtonClicked="popoverButtonClicked"
        ></lc-popover>

        <!-- demo 3 pop -->
        <lc-popover ref="lc-popover3"
                     :buttons="btns3"
                     :position="popoverPosition3"
                     :hasAnimation="false"
                     :arrowPosition="popoverArrowPosition3"
                     @LcPopoverButtonClicked="popoverButtonClicked"
        ></lc-popover>

        <!-- demo 4 pop -->
        <lc-popover ref="lc-popover4"
                     :buttons="btns4"
                     :position="popoverPosition4"
                     :arrowPosition="popoverArrowPosition4"
                     @LcPopoverButtonClicked="popoverButtonClicked"
        ></lc-popover>
      </div>
  </div>
</template>

<style scoped>
  .lc-demo {
    background-color: #FFFFFF;
  }
  .scroller{height: 1000px;}
  .demo {
    width: 750px;
    padding-top: 60px;
  }

  .demo2 {
    margin-top: 50px;
    margin-left: 20px;
  }
  .demo3 {
    margin-top: 50px;
    margin-left: 20px;
  }
</style>

<script>
  import Title from '@components/lighting/_mods/title.vue'
  import Category from '@components/lighting/_mods/category.vue'
  import { LcMinibar, LcButton, LcPopover } from 'lighting-ui'

  import { WEEXUI_ICON, RETURN_ICON, SCAN_ICON, QRCODE_ICON, QUESTION_ICON } from './lib/popover.js'

  const modal = weex.requireModule('modal')

  export default {
    components: { Title, Category, LcMinibar, LcButton, LcPopover },
    data: () => ({
      leftButton: RETURN_ICON,
      btns: [
        {
          icon: SCAN_ICON,
          text: 'Scan',
          key: 'key-scan'
        },
        {
          icon: QRCODE_ICON,
          text: 'My Qrcode',
          key: 'key-qrcode'
        },
        {
          icon: QUESTION_ICON,
          text: 'Help',
          key: 'key-help'
        }
      ],
      popoverPosition: { x: -4, y: 360 },
      popoverArrowPosition: { pos: 'top', x: -26 },
      btns2: [

        {
          text: 'Popover Select 1',
          key: 's1'
        },
        {
          text: 'Popover Select 2',
          key: 's2'
        },
        {
          text: 'Popover Select 3',
          key: 's3'
        }
      ],
      popoverPosition2: { x: 200, y: 520 },
      popoverArrowPosition2: { pos: 'bottom', x: 160 },
      btns3: [
        { icon: WEEXUI_ICON, text: 'Item 1', key: 's1' },
        { icon: WEEXUI_ICON, text: 'Item 2', key: 's2' },
        { icon: WEEXUI_ICON, text: 'Item 3', key: 's3' }
      ],
      popoverPosition3: { x: 325, y: 550 },
      popoverArrowPosition3: { pos: 'left', y: 0 },
      btns4: [
        { icon: WEEXUI_ICON, text: 'Item 1', key: 's1' },
        { icon: WEEXUI_ICON, text: 'Item 2', key: 's2' },
        { icon: WEEXUI_ICON, text: 'Item 3', key: 's3' }
      ],
      popoverPosition4: { x: 175, y: 380 },
      popoverArrowPosition4: { pos: 'right', y: -50 },
      btn3Style: {
        height: '200px',
        width: '300px'
      },
      btn4Style: {
        position: 'absolute',
        right: '40px',
        top: '60px',
        height: '200px',
        width: '300px'
      }
    }),
    methods: {
      minibarRightButtonClick () {
        this.$refs['lc-popover1'].lcPopoverShow()
      },
      popoverButtonClicked (obj) {
        modal.toast({ 'message': `key:${obj.key}, index:${obj.index}`, 'duration': 1 })
      },
      LcButtonClicked3 () {
        this.$refs['lc-popover3'].lcPopoverShow()
      },
      LcButtonClicked4 () {
        this.$refs['lc-popover4'].lcPopoverShow()
      },
      LcButtonClicked2 () {
        this.$refs['lc-popover2'].lcPopoverShow()
      }
    }
  }
</script>
