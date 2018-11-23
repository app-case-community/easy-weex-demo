<template>
  <div>
    <bui-header title="弹出框（bui-popover）" :leftItem="leftItem" @leftClick="back">
    </bui-header>
		<list @scroll="scroll">
			<cell>

      <div class="panel__box" >
        <div class="panel__row" v-for="(item,i) in list" :key="i">
          <text @click="handleItemClick(inner)" :ref="inner.ref" class="panel__item" v-for="(inner,idx) in item" :key="idx">{{inner.text}}</text>
        </div>
      </div>

      <text class="target" ref="target">参照物</text>
			</cell>
		</list>

    <bui-popover duration="100" :offsetX="0" :offsetY="0" arrowColor="#fff" :panelStyle="panelStyle" :maskStyle="maskStyle" width="300" height="300" :placement="placement" v-model="visible" :pos="pos">
      <list style="flex:1">
        <cell>
          <text @click="close" v-for="i in 10" :key="i"  style="font-size:30px;">自定义内容区{{i}}</text>
        </cell>
      </list>
    </bui-popover>
  </div>
</template>
<script>
  import { BuiHeader, BuiPopover } from 'weex-bui'
  const dom = weex.requireModule('dom')
  export default {
    components: {
      BuiHeader,
      BuiPopover
    },
    data: function () {
      return {
        leftItem: {
          icon: 'ion-chevron-left'
        },
        list: [
          [
            {
              placement: 'top-start',
              text: '上左'
            },
            {
              placement: 'top',
              text: '上边'
            },
            {
              placement: 'top-end',
              text: '上右'
            }
          ],
          [
            {
              placement: 'bottom-start',
              text: '下左'
            },
            {
              placement: 'bottom',
              text: '下边'
            },
            {
              placement: 'bottom-end',
              text: '下右'
            }
          ],
          [
            {
              placement: 'left-start',
              text: '左上'
            },
            {
              placement: 'left',
              text: '左边'
            },
            {
              placement: 'left-end',
              text: '左下'
            }
          ],
          [
            {
              placement: 'right-start',
              text: '右上'
            },
            {
              placement: 'right',
              text: '右边'
            },
            {
              placement: 'right-end',
              text: '右下'
            }
          ]
        ],
        placement: 'bottom',
        visible: false,
        pos: {}
      }
    },
    methods: {
      back () {
        this.$pop()
      },
      handleItemClick ({ placement }) {
        this.placement = placement
        this.open()
      },
      open (e) {
        this.visible = true
      },
      close () {
        this.visible = false
      },
      scroll (e) {
        // 页面滚动跟随
        this.setPos(this.$refs.target, 'pos')
      },
      setPos (ref, pos) {
        setTimeout(() => {
          dom.getComponentRect(ref, option => {
            this[pos] = option.size
          })
        }, 50)
      }
    },
    created () {},
    mounted () {
      this.setPos(this.$refs.target, 'pos')
    },
    computed: {
      maskStyle () {
        return {
          opacity: 0.7
        }
      },
      panelStyle () {
        return {
          backgroundColor: '#fff'
        }
      }
    }
  }
</script>
<style lang="scss" src="@bui/theme/css/buiweex.scss"></style>
<style lang="scss">
.panel__row {
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
}
.panel__item {
  padding: 20px;
  color: #fff;
  font-size: 30px;
  text-align: center;
  background-color: #4ca4fe;
  margin-top: 20px;
  margin-bottom: 20px;
}
.target {
  width: 200px;
  height: 100px;
  text-align: center;
  line-height: 100px;
  margin-left: 275px;
  margin-right: 275px;
  margin-top: 200px;
  color: #fff;
  font-size: 30px;
  background-color: orange;
}
</style>
