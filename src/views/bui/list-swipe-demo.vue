<template>
    <div>
        <bui-header
                title="左右滑动"
                :leftItem="leftItem"
                @leftClick="back">
        </bui-header>

        <div class="bui-list">
            <div class="bui-cell-large" v-for="(item, index) in items" :key="index">
                <div class="bui-list-swipe">
                    <div class="bui-list-swipe-btn" @click="cancleFn()"><text class="bui-list-swipe-btn-text">取消</text></div>
                    <div class="bui-list-swipe-btn bgRed" @click="deleteFn(index)"><text class="bui-list-swipe-btn-text">删除</text></div>
                </div>
                <div @click="cancleFn(index)" @swipe="swipe($event, index)" class="bui-list-main bui-list-swipe-main" ref="swipedom">
                    <div class="bui-list-main-left">
                        <text class="bui-list-title">{{item.title}}</text>
                        <text class="bui-list-desc">{{item.desc}}</text>
                    </div>
                    <div class="bui-list-right" v-if="item.date">
                        <text class="bui-list-desc">{{item.date}}</text>
                    </div>
                </div>
            </div>
        </div>
        <!--<bui-list-swipe-->
            <!--:items="list"></bui-list-swipe>-->
    </div>

</template>
<style lang="scss" src="@bui/theme/css/buiweex.scss"></style>
<script>
  import { BuiHeader } from 'weex-bui'
  var animation = weex.requireModule('animation')
  export default {
    components: {
      BuiHeader
    },
    data: function () {
      return {
        leftItem: {
          icon: 'ion-chevron-left'
        },
        items: [
          {
            title: '行无止尽',
            desc: '他们终究因为生活现实而走到终点,没有回头...',
            date: '昨天',
            dom: false
          },
          {
            title: '柠檬',
            desc: '每天的这个时间都是美好时光,小天使永远都是最快乐的~~',
            date: '上午',
            dom: false
          }
        ]
      }
    },
    methods: {
      cancleFn () {
        this.itemMap('translate(0px, 0px)', false)
      },
      deleteFn (index) {
        var $sel = this
        this.reAnimateion('translate(0px, 0px)', index, false, function () {
          $sel.items.splice(index, 1)
        })
      },
      swipe ($event, index) {
        var direction = $event.direction
        switch (direction) {
          case 'left':
            var a = 0
            this.items.map((item, i) => {
              if (item.swipeover) {
                this.reAnimateion('translate(0px, 0px)', i, false)
                return (a += 1)
              }
            })
            if (a >= 1) return
            this.reAnimateion('translate(-240px, 0px)', index, true)
            break
          case 'right':
            this.itemMap('translate(0px, 0px)', false)
            this.reAnimateion('translate(0px, 0px)', index, false)
            break
        }
      },

      // 遍历数据
      itemMap (translate, boolean, fn) {
        this.items.map((item, i) => {
          if (item.swipeover) {
            this.reAnimateion(translate, i, boolean, fn)
          }
        })
      },
      // 动画操作交互
      reAnimateion (translate, index, boolean, fn) {
        this.$nextTick(() => {
          var el = this.$refs.swipedom[index]
          var $sel = this
          this._animationFn(el, 1, translate, 'ease-in', function () {
            $sel.items[index].swipeover = boolean
            fn && fn()
          })
        })
      },

      // 动画
      _animationFn (el, opacity, translate, timing, fn) {
        animation.transition(
          el,
          {
            styles: {
              opacity: opacity,
              transform: translate,
              transformOrigin: 'center center'
            },
            duration: 200,
            timingFunction: timing,
            delay: 0
          },
          () => {
            fn && fn()
          }
        )
      },
      back () {
        this.$pop()
      }
    }
  }
</script>
