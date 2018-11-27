<template>
    <scroller>
        <div class="wrapper">
            <div class="logo-wrap">
                <image :src="require('./images/icon/logo.png')" class="logo" />
                <text class="logo-text">一个基于 Weex 的富交互、轻量级、高性能、三端统一的 金融 UI 组件库</text>
            </div>
            <div v-for="(data,index) in datas" :key="index" >
                <text class="title">{{data.title}}</text>
                <lc-cell :cell-style="style"
                    :has-bottom-border="hasBottomBorder(index)"
                    :has-top-border="hasTopBorder(index)"
                    v-for="(d,i) in data.comp" :key="i"
                    :label="d.label"
                    @LcCellClicked="LcCellClicked(d.path,d.label)"
                    :icon="d.icon"
                    :icon-style="iconStyle"
                ></lc-cell>
            </div>
        </div>
    </scroller>
</template>

<script>
  import { LcCell } from 'lighting-ui'
  import datas from './lib/DATA.js'
  const navigator = weex.requireModule('navigator')
  export default {
    components: { LcCell },
    data: () => ({
      datas: datas,
      style: {
      },
      iconStyle: {
        width: '50px',
        height: '50px'
      }
    }),
    methods: {
      hasTopBorder (i) {
        return i === this.datas.length - 1
      },
      hasBottomBorder (i) {
        return i !== this.datas.length - 1
      },
      LcCellClicked (src, title) {
        const name = src.replace('#/', '')
        const isWeb = weex.config.env.platform === 'Web'
        const suffix = isWeb ? 'html' : 'js'
        let url = `${name}.${suffix}`
        if (/\/$/.test(weex.config.bundleUrl)) {
          url = weex.config.bundleUrl = url
        } else {
          url = weex.config.bundleUrl.replace(`index.${suffix}`, url)
        }
        if (!url.endsWith('.' + suffix)) {
          url += '/index.' + suffix
        }
        navigator.push({
          url: `${url}?_wx_tpl=${url}`,
          animated: 'true'
        })
        // Light.navigate(src, {}, { title: title })
      }

    },
    mounted () {
      console.log(this.datas.comp)
    }
  }
</script>
<style scoped>
.logo-wrap{ align-items: center; background-color: #fafafa; padding: 30px;}
.logo{ width: 325px; height: 105px;}
.logo-text{ color: #646464; font-size: 28px; width: 535px; text-align: center; margin-top: 20px;}
.title{ height: 75px; line-height: 75px; padding-left: 30px; font-weight: bold; background-color: #f2f2f2; color: #666;}
</style>
