<template>
  <div>
    <bui-header title="弹出框（bui-poptip）" :leftItem="leftItem" @leftClick="back">
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
    <bui-poptip :titleStyle="titleStyle" :contentStyle="contentStyle" @poptip-click="poptipClick" :title="title" :content="content" duration="100" :offsetX="0" :offsetY="0" arrowColor="#fff" :panelStyle="panelStyle" :maskStyle="maskStyle" width="400" height="300" :placement="placement" v-model="visible" :pos="pos">
    </bui-poptip>
  </div>
</template>
<style lang="scss" src="@bui/theme/css/buiweex.scss"></style>
<script>
  import { BuiHeader, BuiPoptip } from 'weex-bui'
  const dom = weex.requireModule('dom')
  export default {
    components: {
      BuiHeader,
      BuiPoptip
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
        pos: {},
        title: '电影简介',
        content:
          '《神奇动物在哪里》是由美国华纳兄弟影片公司、英国盛日影业公司联合出品的奇幻冒险电影，由英国导演大卫·叶茨执导，埃迪·雷德梅恩、凯瑟琳·沃特斯顿、艾莉森·苏朵儿、丹·福格勒、柯林·法瑞尔等联合主演。该片讲述了神奇动物学家纽特·斯卡曼德离开霍格沃兹魔法学校后，为了寻找和保护神奇动物踏入纽约所发生的一段惊心动魄的冒险故事。该片于2016年11月18日在美国上映，2016年11月25日在中国上映。'
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
      poptipClick () {
        this.close()
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
          opacity: 0.5
        }
      },
      panelStyle () {
        return {
          backgroundColor: '#fff'
        }
      },
      titleStyle () {
        return {
          fontSize: '34px',
          color: '#00B4FF'
        }
      },
      contentStyle () {
        return {
          fontSize: '26px'
        }
      }
    }
  }
</script>
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
