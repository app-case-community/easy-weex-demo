
<template>
  <div class="lc-demo">
    <scroller class="scroller">
      <title title="lc-tab-page"></title>
      <category title="纯文字可滚动"></category>
      <div class="demo">
        <lc-tab-page
          ref="lc-tab-page"
          :tab-titles="tabTitles"
          :tab-styles="tabStyles"
          title-type="icon"
          :needSlider="needSlider"
          :is-tab-view="isTabView"
          :tab-page-height="tabPageHeight"
          :spm-c="4307989"
          @LcTabPageCurrentTabSelected="LcTabPageCurrentTabSelected">
          <list v-for="(v,index) in tabList"
            :key="index"
            class="item-container">
            <cell class="border-cell"></cell>
            <cell v-for="(demo,key) in v"
              class="cell"
              :key="key"
              :accessible="true"
              aria-label="招商公路华能水电何以成为资金“新宠”">

                <lc-item image="http://img5.imgtn.bdimg.com/it/u=2306629954,650632153&fm=27&gp=0.jpg"
                  :image-text="tabTitles[index].title"
                  title="2018港股投资：不仅看“大而美”，中小市值公司“颜值”也不低"
                  :desc="desc"
                  :tags="tags"
                  price-desc="每日经济新闻 12-29 08:23">
                </lc-item>

            </cell>
          </list>
        </lc-tab-page>
      </div>

      <category title="图文可滚动"></category>
      <div class="demo">
        <lc-tab-page ref="lc-tab-page"
          :tab-titles="tabTitles1"
          :tab-styles="tabStyles1"
          title-type="icon"
          :needSlider="needSlider"
          :is-tab-view="isTabView"
          :tab-page-height="tabPageHeight"
          :spm-c="4307989"
          @LcTabPageCurrentTabSelected="LcTabPageCurrentTabSelected1">
          <list v-for="(v,index) in tabList1"
            :key="index"
            class="item-container">
            <cell class="border-cell"></cell>
            <cell v-for="(demo,key) in v"
              class="cell"
              :key="key"
              :accessible="true"
              aria-label="招商公路华能水电何以成为资金“新宠”">

                <lc-item image="http://img5.imgtn.bdimg.com/it/u=2306629954,650632153&fm=27&gp=0.jpg"
                  :image-text="tabTitles1[index].title"
                  title="2018港股投资：不仅看“大而美”，中小市值公司“颜值”也不低"
                  :desc="desc"
                  :tags="tags"
                  price-desc="每日经济新闻 12-29 08:23">
                </lc-item>

            </cell>
          </list>
        </lc-tab-page>
      </div>

      <category title="纯文字不可滚动-普通"></category>
      <div class="demo">
        <lc-tab-page type="normal"
          ref="lc-tab-page"
          :tab-titles="tabTitles2"
          title-type="text"
          :tab-page-height="tabPageHeight"
          :spm-c="4307989"
          @LcTabPageCurrentTabSelected="LcTabPageCurrentTabSelected2">
          <list v-for="(v,index) in tabList2"
            :key="index"
            class="item-container">
            <cell class="border-cell"></cell>
            <cell v-for="(demo,key) in v"
              class="cell"
              :key="key"
              :accessible="true"
              aria-label="招商公路华能水电何以成为资金“新宠”">

                <lc-item image="http://img5.imgtn.bdimg.com/it/u=2306629954,650632153&fm=27&gp=0.jpg"
                  :image-text="tabTitles2[index].title"
                  title="2018港股投资：不仅看“大而美”，中小市值公司“颜值”也不低"
                  :desc="desc"
                  :tags="tags"
                  price-desc="每日经济新闻 12-29 08:23">
                </lc-item>

            </cell>
          </list>
        </lc-tab-page>
      </div>

      <category title="纯文字不可滚动-卡片"></category>
      <div class="demo">
        <lc-tab-page type="card"
          ref="lc-tab-page"
          :tab-titles="tabTitles2"
          title-type="text"
          :tab-page-height="tabPageHeight"
          :spm-c="4307989"
          @LcTabPageCurrentTabSelected="LcTabPageCurrentTabSelected2">
          <list v-for="(v,index) in tabList2"
            :key="index"
            class="item-container">
            <cell class="border-cell"></cell>
            <cell v-for="(demo,key) in v"
              class="cell"
              :key="key"
              :accessible="true"
              aria-label="招商公路华能水电何以成为资金“新宠”">

                <lc-item image="http://img5.imgtn.bdimg.com/it/u=2306629954,650632153&fm=27&gp=0.jpg"
                  :image-text="tabTitles2[index].title"
                  title="2018港股投资：不仅看“大而美”，中小市值公司“颜值”也不低"
                  :desc="desc"
                  :tags="tags"
                  price-desc="每日经济新闻 12-29 08:23">
                </lc-item>

            </cell>
          </list>
        </lc-tab-page>
      </div>
    </scroller>
  </div>
</template>

<style scoped>
.lc-demo {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: #F9F9F9;
  }

  .scroller {
    flex: 1;
  }

  .demo {
    width: 750px;
    height: 380px;
    align-items: flex-start;
  }
  .item-container {
    width: 750px;
    height: 320px;
    background-color: #F9F9F9;
  }
  .border-cell {
    background-color: #F9F9F9;
    width: 750px;
    height: 24px;
    align-items: center;
    justify-content: center;
  }

  .cell {
    background-color: #ffffff;
    border-top-width: 1px;
    border-style: solid;
    border-color: #D7D7D7;
    border-bottom-width: 1px;
  }
</style>

<script>
  import Title from '@components/lighting/_mods/title.vue'
  import Category from '@components/lighting/_mods/category.vue'
  import Config from './lib/tabpage-config.js'
  import LcItem from '@components/lighting/tools/lc-item.vue'
  import Utils from '@components/lighting/tools/utils.js'

  import { LcTabPage } from 'lighting-ui'
  // const dom = weex.requireModule('dom')

  //   import { LcTabPage, LcPanItem, Utils } from '../../index';

  export default {
    components: { LcTabPage, LcItem, Title, Category },
    data: () => ({
      tabTitles: Config.tabTitles,
      tabTitles1: Config.tabTitles1,
      tabTitles2: Config.tabTitles2,
      tabTitles3: Config.tabTitles3,
      tabStyles: Config.tabStyles,
      tabStyles1: Config.tabStyles1,
      tabStyles2: Config.tabStyles2,
      tabStyles3: Config.tabStyles3,
      tabList: [],
      tabList1: [],
      tabList2: [],
      tabList3: [],
      needSlider: true,
      demoList: [1],
      supportSlide: true,
      isTabView: true,
      tabPageHeight: 380,
      desc: [{
        type: 'text',
        value: '',
        theme: 'gray'
      }],
      tags: [{
        type: 'tag',
        value: '国企金融版',
        theme: 'red'
      }]
    }),
    created () {
      // this.tabPageHeight = Utils.env.getPageHeight();
      this.tabList = [...Array(this.tabTitles.length).keys()].map(i => [])
      this.$set(this.tabList, 0, this.demoList)
      this.tabList1 = [...Array(this.tabTitles1.length).keys()].map(i => [])
      this.$set(this.tabList1, 0, this.demoList)
      this.tabList2 = [...Array(this.tabTitles2.length).keys()].map(i => [])
      this.$set(this.tabList2, 0, this.demoList)
      this.tabList3 = [...Array(this.tabTitles3.length).keys()].map(i => [])
      this.$set(this.tabList3, 0, this.demoList)
    },
    methods: {
      LcTabPageCurrentTabSelected (e) {
        const self = this
        const index = e.page
        /* 未加载tab模拟数据请求 */
        if (!Utils.isNonEmptyArray(self.tabList[index])) {
          setTimeout(() => {
            self.$set(self.tabList, index, self.demoList)
          }, 100)
        }
      },
      LcTabPageCurrentTabSelected1 (e) {
        const self1 = this
        const index1 = e.page
        /* 未加载tab模拟数据请求 */
        if (!Utils.isNonEmptyArray(self1.tabList1[index1])) {
          setTimeout(() => {
            self1.$set(self1.tabList1, index1, self1.demoList)
          }, 100)
        }
      },
      LcTabPageCurrentTabSelected2 (e) {
        const self2 = this
        const index2 = e.page
        /* 未加载tab模拟数据请求 */
        if (!Utils.isNonEmptyArray(self2.tabList2[index2])) {
          setTimeout(() => {
            self2.$set(self2.tabList2, index2, self2.demoList)
          }, 100)
        }
      },
      lcTabPageCurrentTabSelected3 (e) {
        const self3 = this
        const index3 = e.page
        /* 未加载tab模拟数据请求 */
        if (!Utils.isNonEmptyArray(self3.tabList3[index3])) {
          setTimeout(() => {
            self3.$set(self3.tabList3, index3, self3.demoList)
          }, 100)
        }
      },

      LcPanItemPan (e) {
        if (Utils.env.supportsEBForAndroid()) {
          this.$refs['lc-tab-page'].bindExp(e.element)
        }
      }
    }
  }
</script>
