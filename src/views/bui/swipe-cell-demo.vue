<template>
    <div>
        <bui-header
                title="滑动菜单"
                :leftItem="leftItem"
                @leftClick="back">
        </bui-header>

        <div style="padding: 10px;flex: 1">
            <scroller>
                <text class="h4 titleEx">简单滑动菜单-手势向左边滑动,菜单按钮操作</text>
                <bui-swipe-cell @actionClick="clickmenu"
                                :items="btnAry1"
                                :title="'腾讯新闻-今日头条'"></bui-swipe-cell>
                <text class="h4 titleEx mT50">滑动菜单-高度设置</text>
                <bui-swipe-cell @actionClick="clickmenu"
                                :height="'150px'"
                                :items="btnAry1"
                                :title="'腾讯新闻-今日头条'"></bui-swipe-cell>
                <text class="h4 titleEx mT50">场景1-组件扩展案例</text>
                <bui-swipe-cell :items="btnAry1"
                                :title="'腾讯新闻-今日头条'"
                                @click="fn">
                    <template slot="content">
                        <text>--腾讯新闻-今日头条--</text>
                    </template>
                </bui-swipe-cell>
                <text class="h4 titleEx mT50">场景2-与列表结合案例</text>
                <div v-for="(i, index) in items" :key="index">
                    <bui-swipe-cell :items="btnAry"
                                    :title="i.title"></bui-swipe-cell>
                </div>
            </scroller>
        </div>
    </div>

</template>
<style lang="scss" src="@bui/theme/css/buiweex.scss"></style>
<style scoped>
.titleEx {
  margin-bottom: 20px;
  background-color: #f8f8f8;
  padding: 8px;
}
.mT50 {
  margin-top: 50px;
}
</style>

<script>
  import { BuiHeader, BuiSwipeCell } from 'weex-bui'
  // var animation = weex.requireModule('animation')
  export default {
    components: {
      BuiHeader,
      BuiSwipeCell
    },
    data: function () {
      return {
        leftItem: {
          icon: 'ion-chevron-left'
        },
        btnAry1: [
          {
            title: '取消',
            bgcolor: '#c6c7c8'
          },
          {
            title: '标记',
            bgcolor: '#3399ff'
          }
        ],
        btnAry: [
          {
            title: '取消',
            bgcolor: '#c6c7c8'
          },
          {
            title: '删除',
            bgcolor: '#fa3300'
          },
          {
            title: '标记',
            bgcolor: '#3399ff'
          }
        ],
        items: [
          {
            title: '腾讯新闻'
          },
          {
            title: '网易新闻'
          },
          {
            title: '新浪微博'
          },
          {
            title: '搜狐门户'
          }
        ]
      }
    },
    methods: {
      back () {
        this.$pop()
      },

      fn () {
        this.$toast('点击click')
      },

      clickmenu (e) {
        if (e === 0) {
          this.$toast(this.btnAry1[e - 0].title)
        } else if (e === 1) {
          this.$toast(this.btnAry1[e - 0].title)
        }
      }
    }
  }
</script>
