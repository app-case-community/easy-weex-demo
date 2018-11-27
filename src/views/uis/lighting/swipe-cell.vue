<template>
    <div class="lc-demo">

        <title title="lc-swipe-cell"></title>

        <div>
            <scroller>
                <category title="简单滑动菜单-手势向左边滑动,菜单按钮操作"></category>
                <lc-swipe-cell @actionClick="clickmenu"
                                @swipeleft="swipeleft"
                                @swiperight="swiperight"
                                :items="btnAry1"
                                :title="'腾讯新闻-今日头条'"></lc-swipe-cell>

                <category title="滑动菜单-高度设置"></category>
                <lc-swipe-cell @actionClick="clickmenu"
                                :height="'150px'"
                                :items="btnAry1"
                                :title="'腾讯新闻-今日头条'"></lc-swipe-cell>

                <category title="场景1-组件扩展案例"></category>
                <lc-swipe-cell :items="btnAry1"
                                :title="'腾讯新闻-今日头条'"
                                @click="fn">

                        <text slot="content">--腾讯新闻-今日头条--</text>

                </lc-swipe-cell>

                <category title="场景2-与列表结合案例"></category>
                <div v-for="(i, index) in items" :key="index">
                    <lc-swipe-cell :items="btnAry" :title="i.title"></lc-swipe-cell>
                </div>

            </scroller>
        </div>

    </div>
</template>

<script>
  import Title from '@components/lighting/_mods/title.vue'
  import Category from '@components/lighting/_mods/category.vue'
  import { LcSwipeCell } from 'lighting-ui'
  // import { LcSwipeCell } from '../res/lc-swipe-cell.vue'
  var modal = weex.requireModule('modal')
  export default {
    components: { Title, Category, LcSwipeCell },
    data () {
      return {
        btnAry1: [
          {
            'title': '取消',
            'bgcolor': '#c6c7c8'
          },
          {
            'title': '标记',
            'bgcolor': '#3399ff'
          }
        ],
        btnAry: [
          {
            'title': '取消',
            'bgcolor': '#c6c7c8'
          },
          {
            'title': '删除',
            'bgcolor': '#fa3300'
          },
          {
            'title': '标记',
            'bgcolor': '#3399ff'
          }
        ],
        items: [
          {
            'title': '腾讯新闻'
          },
          {
            'title': '网易新闻'
          },
          {
            'title': '新浪微博'
          }
        ]
      }
    },
    methods: {
      fn () {
        modal.toast({ message: '点击click', duration: 0.3 })
      },
      clickmenu (e) {
        if (e === 0) {
          modal.toast({ message: this.btnAry1[e - 0].title, duration: 0.3 })
        } else if (e === 1) {
          modal.toast({ message: this.btnAry1[e - 0].title, duration: 0.3 })
        }
      },
      swipeleft () {
        modal.toast({ message: '左滑了', duration: 0.3 })
      },
      swiperight () {
        modal.toast({ message: '右滑了', duration: 0.3 })
      }
    }
  }
</script>
<style scoped>
</style>
