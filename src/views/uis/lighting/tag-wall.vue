<template>
    <div class="lc-demo">

        <scroller>
            <title title="lc-tag-wall"></title>
            <category title="基本态"></category>
            <lc-tag-wall title="基本态"
                        :list="tagData"
                        @lcTagWallSelected="onSelect"
                        @lcTagWallRightBtnClicked="rightClicked" />
            <category title="修改右边按钮"></category>
            <lc-tag-wall title="修改右边按钮"
                        :list="tagData"
                        @lcTagWallSelected="onSelect"
                        right-text="查看更多"
                        right-color="#FC5B23"
                        @lcTagWallRightBtnClicked="rightClicked" />
            <category title="自定义样式"></category>
            <lc-tag-wall title="自定义样式"
                        :list="tagData2"
                        @lcTagWallSelected="onSelect"
                        :custom-styles="customStyle"
                        @lcTagWallRightBtnClicked="rightClicked"></lc-tag-wall>
        </scroller>

    </div>
</template>

<script>
  import Title from '@components/lighting/_mods/title.vue'
  import Category from '@components/lighting/_mods/category.vue'
  import { LcTagWall } from 'lighting-ui'
  // import LcTagWall from '../res/lc-tag-wall.vue'
  const modal = weex.requireModule('modal')

  export default {
    components: { Title, Category, LcTagWall },
    data: () => ({
      tagData: [{
        title: '微信',
        color: '#3BC06B'
      }, {
        title: '摩拜单车',
        color: '#FC5B23'
      }, {
        title: '小睡眠'
      }, {
        title: '音乐'
      }, {
        title: '购物'
      }, {
        title: '时间管理'
      }, {
        title: '换机助手'
      }, {
        title: 'Flyme Design'
      }, {
        title: 'Creator'
      }],
      tagData2: [{
        title: '微信',
        backgroundColor: '#3BC06B'
      }, {
        title: '摩拜单车',
        backgroundColor: '#FC5B23'
      }, {
        title: '小睡眠'
      }, {
        title: '音乐'
      }, {
        title: '购物'
      }, {
        title: '时间管理'
      }, {
        title: '换机助手'
      }, {
        title: 'Flyme Design'
      }, {
        title: 'Creator'
      }],
      customStyle: {
        padding: 42,
        borderRadius: 100,
        borderWidth: 0,
        originBackgroundColor: 'rgba(0, 0, 0, 0.2)',
        originTitleColor: '#FFFFFF'
      }
    }),
    methods: {
      onSelect (e) {
        modal.toast({ message: `选中了 ${e.title}，选中的是第 ${e.index} 个` })
      },
      rightClicked (e) {
        modal.toast({ message: '点击了右边按钮' })
      }
    }
  }
</script>
<style scoped>
</style>
