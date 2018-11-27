<!-- CopyRight (C) 2017-2022 Alibaba Group Holding Limited. -->
<!-- Created by Tw93 on 17/10/31. -->
<!-- 处理android上面有点击时候事件不传递问题!-->
<!--需要是lc-ep-slider组件中接受LcPanItemPan，事件同时判断是android下调用bindExp-->

<template>
  <div :ref="`lc-pan-item-${extId}`"
       :prevent-move-event="true"
       @horizontalpan="dispatchPan"
       @appear="onItemAppear"
       @disappear="onItemDisAppear"
       @click="itemClicked">
    <slot></slot>
  </div>
</template>

<script>
  import Utils from './utils'
  const expressionBinding = weex.requireModule('expressionBinding')

  export default {
    props: {
      extId: {
        type: [String, Number],
        default: 0
      },
      url: {
        type: String,
        default: ''
      }
    },
    data: () => ({
      isPanning: false,
      appearMap: []
    }),
    mounted () {
      setTimeout(() => {
        if (Utils.env.supportsEBForAndroid()) {
          const element = this.$refs['lc-pan-item']
          element && expressionBinding.enableBinding(element.ref, 'pan')
        }
      }, 300)
    },
    methods: {
      itemClicked () {
        if (this.isPanning) {
          return
        }
        this.url && Utils.goToH5Page(this.url, true)
        this.$emit('LcPanItemClicked', { extId: this.extId })
      },
      onItemAppear () {
        const extId = this.extId
        if (!this.appearMap[extId] && Utils.env.supportsEBForAndroid()) {
          this.appearMap[extId] = true
          expressionBinding.enableBinding(this.$refs[`lc-pan-item-${extId}`].ref, 'pan')
        }
      },
      onItemDisAppear () {
        const extId = this.extId
        if (this.appearMap[extId] && Utils.env.supportsEBForAndroid()) {
          this.appearMap[extId] = false
          expressionBinding.disableBinding(this.$refs[`lc-pan-item-${extId}`].ref, 'pan')
        }
      },
      dispatchPan (e) {
        const extId = this.extId
        if (Utils.env.supportsEBForAndroid()) {
          if (e.state === 'start') {
            this.isPanning = true
            const element = this.$refs[`lc-pan-item-${extId}`]
            element && this.$emit('LcPanItemPan', { element })
          } else if (e.state === 'end') {
            setTimeout(() => {
              this.isPanning = false
            }, 50)
          }
        }
      }
    }
  }
</script>
