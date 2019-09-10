<!--94335 新增lc-icon组件，用于设置常用字体图标库-->
<template>
  <div class="wxc-demo">
    <scroller class="scroller">
      <title title="lc-icon"></title>
      <category title="基本类型"></category>
      <div class="icon-total" v-for="(item,index) in chunkArr" :key="index">
        <div v-for="(v,i) in item" :key="i" class="icon-item">
          <lc-icon :name="v" @LcIconClicked="clicked"></lc-icon>
          <text class="icon-text">{{v}}</text>
        </div>
      </div>
      <category title="自定义图标"></category>
      <div class="icon-total">
        <lc-icon :type="true" :name="name1" fontFamily="liconfont" :src="src"></lc-icon>
        <lc-icon :type="true" :name="name2" fontFamily="liconfont" :src="src" style="margin-left:80px;"></lc-icon>
      </div>

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
    background-color: #ffffff;
  }

  .scroller {
    flex: 1;
  }

  .icon-total {
    width: 750px;
    padding-left: 24px;
    justify-content: center;
    margin-top: 60px;
    flex-direction: row;
    margin-bottom: 60px;
  }

  .icon-item {
    width: 160px;
    height: 120px;
    align-items: center;
    margin-right: 18px;
  }

  .icon-text {
    margin-top: 16px;
    font-size: 24px;
    color: #666666;
  }
</style>

<script>

  import { Utils, LcIcon } from 'lighting-ui'
  import Title from '@components/lighting/_mods/title.vue'
  import Category from '@components/lighting/_mods/category.vue'

  const clipboard = weex.requireModule('clipboard')
  const modal = weex.requireModule('modal')

  export default {
    components: { LcIcon, Title, Category },
    data: () => ({
      name1: '\ue657',
      name2: '\ue642',
      src: 'https://at.alicdn.com/t/font_812100_h8uxy5g9brw.ttf',
      iconList: ['less', 'more_unfold', 'back', 'more', 'add', 'subtract', 'close', 'cry', 'search', 'delete', 'help', 'refresh', 'success', 'warning', 'wrong', 'clock', 'scanning', 'filter', 'map', 'play']
    }),
    created () {
      this.chunkArr = Utils.arrayChunk(this.iconList)
    },
    methods: {
      clicked (e) {
        clipboard && clipboard.setString(e.name)
        modal.toast({
          message: `${e.name} copied!`
        })
      }
    }
  }
</script>
