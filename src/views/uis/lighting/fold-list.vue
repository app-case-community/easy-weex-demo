
<template>
  <div class="demo">
    <scroller class="scroller">
      <title title="lc-fold-list"></title>
      <category title="折叠列表"></category>

      <lc-fold-list
        :title="'折叠列表测试'"
        :desc="'更多'"
        :folded="true"
        @fold="foldHandler"
        @more="moreList"
      >
        <div slot="foldContent">
          <text>hello</text>
        </div>
      </lc-fold-list>

      <lc-fold-list
        :title="'折叠列表测试2'"
        :desc="'更多2'"
        :folded="false"
        @fold="foldHandler"
      >
        <div slot="foldContent">
          <text>这是另外一个折叠列表</text>
        </div>
      </lc-fold-list>
    </scroller>
  </div>
</template>

<script>
  import Title from '@components/lighting/_mods/title.vue'
  import Category from '@components/lighting/_mods/category.vue'
  import { LcFoldList } from 'lighting-ui'

  export default {
    components: { Title, Category, LcFoldList },
    data () {
      return {}
    },
    methods: {
      foldHandler (fold) {
        console.log(fold)
      },
      moreList () {
        // Light.navigate('dialog')
      }
    }
  }
</script>
<style lang="less">

</style>
