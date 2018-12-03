<template>
    <web ref="webview" @pagefinish="pagefinish" :src="localSrc" />
</template>
<script>
  const webview = weex.requireModule('webview')
  const isWeb = weex.config.env.platform === 'Web'
  export default {
    props: {
      data: {
        type: Array,
        default () {
          return []
        }
      },
      type: {
        type: String,
        default: 'index'
      }
    },
    data () {
      return {
        isFinish: false
      }
    },
    computed: {
      localSrc () {
        if (isWeb) {
          return `https://oss.zhuzhe.wang/f2/${this.type}.html`
        }
        return `local://f2/${this.type}.html`
      }
    },
    methods: {
      pagefinish () {
        this.isFinish = true
        this.sendMsg('setData', this.data)
        this.render()
      },
      sendMsg (type, data) {
        let webElement = this.$refs.webview
        if (isWeb) {
          let iframeWindow = webElement.$el.contentWindow
          iframeWindow.postMessage({
            type,
            data
          }, this.localSrc)
        } else {
          webview.postMessage && webview.postMessage(webElement, {
            type,
            data
          })
        }
      },
      render () {
        this.sendMsg('render')
      }
    },
    watch: {
      data (val) {
        if (this.isFinish) {
          this.sendMsg('setData', val)
          this.sendMsg('render')
        }
      }
    }
  }
</script>
