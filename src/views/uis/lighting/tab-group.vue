
<template>
  <div class="demo">
    <scroller class="scroller">
      <title title="lc-tab-group"></title>
      <category title="默认按钮组"></category>
      <lc-tab-group :groups="groups" @changeTab="clickGroup" :tabIndex="2" style="margin-top:20px;"></lc-tab-group>
      <category title="自定义按钮组"></category>
      <lc-tab-group :groups="groups" :tabStyles="tabStyles" style="margin-top:20px;"></lc-tab-group>

    </scroller>
  </div>
</template>

<script>
  import Title from '@components/lighting/_mods/title.vue'
  import Category from '@components/lighting/_mods/category.vue'
  import { LcTabGroup } from 'lighting-ui'

  export default {
    components: { Title, Category, LcTabGroup },
    data () {
      return {
        groups: [
          { text: '业务公告' },
          { text: '定期公告' },
          { text: '法律文件' },
          { text: '新闻资讯' }
        ],
        tabStyles: {
          width: 580,
          height: 80,
          fontSize: 28,
          titleColor: '#ffffff', // 默认文字颜色
          activeColor: '#FFE273', // 默认背景色 选中颜色
          borderColor: '#f8a065'// 边框颜色 选中背景色
        }
      }
    },
    methods: {
      clickGroup (index) {
        console.log(index)
      }
    }
  }
</script>
<style scoped>
</style>
