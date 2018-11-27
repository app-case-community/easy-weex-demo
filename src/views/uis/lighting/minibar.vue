
<template>
  <div class="wxc-demo">
    <scroller class="scroller">
      <title title="lc-minibar"></title>
      <category title="使用案例"></category>
      <div>
        <div class="demo">
          <lc-minibar title="Minibar"></lc-minibar>
        </div>

        <div class="demo">
          <lc-minibar @LcMinibarLeftButtonClicked="minibarLeftButtonClick"
                       @LcMinibarRightButtonClicked="minibarRightButtonClick"></lc-minibar>
        </div>

        <div class="demo">
          <lc-minibar title="导航栏标题"
                       right-text="更多"
                       @LcMinibarLeftButtonClicked="minibarLeftButtonClick"
                       @LcMinibarRightButtonClicked="minibarRightButtonClick"></lc-minibar>
        </div>
        <div class="demo">
          <lc-minibar title="右侧带文字的导航栏"
                       background-color="#000"
                       :left-button="leftButton"
                       @LcMinibarLeftButtonClicked="minibarLeftButtonClick"
                       @LcMinibarRightButtonClicked="minibarRightButtonClick"
                       right-text="更多"></lc-minibar>
        </div>
        <div class="demo">
          <lc-minibar title="右侧带icon的导航栏"
                      background-color="rgb(97, 154, 173)"
                       @LcMinibarLeftButtonClicked="minibarLeftButtonClick"
                       @LcMinibarRightButtonClicked="minibarRightButtonClick"
                       :right-button="rightButton"></lc-minibar>
        </div>
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
    width: 750px;
    height: 180px;
    align-items: flex-start;
    padding-top: 60px;
  }
</style>

<script>
  import Title from '@components/lighting/_mods/title.vue'
  import Category from '@components/lighting/_mods/category.vue'
  import { LcMinibar } from 'lighting-ui'
  import { CART_ICON, RETURN_ICON } from './lib/minibar.js'

  const modal = weex.requireModule('modal')

  export default {
    components: { Title, Category, LcMinibar },
    data: () => ({
      rightButton: CART_ICON,
      leftButton: RETURN_ICON
    }),
    methods: {
      minibarLeftButtonClick () {
      },
      minibarRightButtonClick () {
        modal.toast({ 'message': 'click rightButton!', 'duration': 1 })
      }
    }
  }
</script>
