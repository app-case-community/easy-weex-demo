<template>
<div>
    <am-nav-bar
        title="Easy Weex Demo"
        :left-btn="[]"
      ></am-nav-bar>
    <scroller>
        <am-list header="weex 开源组件">
            <template v-for="(component, idx) in openUiList">
                <am-list-item class="list-item" v-if="component.isWeb === undefined || !component.isWeb"
                    :key="idx"
                    :title="component.name"
                    :extra="component.subname"
                    :thumb="component.icon"
                    @click="jump(component.path)" />
            </template>
        </am-list>
        <am-list header="weex 插件">
            <template v-for="(component, idx) in openPluginList">
                <am-list-item class="list-item"
                    v-if="component.isSupport === undefined || component.isSupport === true"
                    :key="idx"
                    :title="component.name"
                    :extra="component.subname"
                    :thumb="component.icon"
                    @click="jump(component.path)" />
            </template>
        </am-list>
        <am-list header="weex 开源案例">
            <template v-for="(component, idx) in openCasesList">
                <am-list-item class="list-item"
                    :key="idx"
                    :title="component.name"
                    :extra="component.subname"
                    :thumb="component.icon"
                    @click="jump(component.path)" />
            </template>
        </am-list>
    </scroller>
</div>
</template>
<script>
  import { AmNavBar, AmList, AmListItem } from 'weex-amui'
  import GLog from '@/glog'
  const navigator = weex.requireModule('navigator')
  const env = weex.config.env
  const url = weex.config.bundleUrl
  export default {
    components: {
      AmNavBar,
      AmList,
      AmListItem
    },
    data () {
      return {
        openUiList: [
          {
            name: 'ui',
            subname: 'weex-ui',
            icon: 'https://qr0ros6qh.lightyy.com/images/icon/button.png',
            path: 'uis/ui'
          },
          {
            name: 'flymeui',
            subname: 'weex-flymeui',
            icon: 'https://qr0ros6qh.lightyy.com/images/icon/button.png',
            path: 'flyme'
          },
          {
            name: 'amui',
            subname: 'weex-amui',
            icon: 'https://qr0ros6qh.lightyy.com/images/icon/button.png',
            path: 'uis/amui'
          },
          {
            name: 'droplet',
            subname: 'weex-droplet-ui',
            icon: 'https://qr0ros6qh.lightyy.com/images/icon/button.png',
            path: 'uis/droplet'
          },
          {
            isWeb: env.platform === 'Web',
            name: 'bui',
            subname: 'bui-weex',
            icon: 'https://qr0ros6qh.lightyy.com/images/icon/button.png',
            path: 'bui'
          },
          {
            name: 'lighting',
            subname: 'lighting-ui',
            icon: 'https://qr0ros6qh.lightyy.com/images/icon/button.png',
            path: 'uis/lighting'
          },
          {
            name: 'progress',
            subname: 'wx-progress',
            icon: 'https://qr0ros6qh.lightyy.com/images/icon/button.png',
            path: 'uis/wx-progress'
          },
          {
            name: 'animation',
            subname: '动画',
            icon: 'https://qr0ros6qh.lightyy.com/images/icon/button.png',
            path: 'uis/animation'
          }
        ],
        openPluginList: [
          {
            isSupport: (weex.supports && weex.supports('@module/bindingx')) || false,
            name: 'BindingX',
            subname: 'bindingx',
            icon: 'https://qr0ros6qh.lightyy.com/images/icon/button.png',
            path: 'plugins/bindingx'
          },
          {
            isSupport: (weex.supports && weex.supports('@component/gcanvas')) || false,
            name: 'GCanvas',
            subname: 'gcanvas',
            icon: 'https://qr0ros6qh.lightyy.com/images/icon/button.png',
            path: 'plugins/gcanvas'
          },
          {
            isSupport: (weex.supports && weex.supports('@component/lottie')) || false,
            name: 'lottie',
            subname: 'lottie',
            icon: 'https://qr0ros6qh.lightyy.com/images/icon/button.png',
            path: 'plugins/lottie'
          },
          {
            isSupport: (weex.supports && weex.supports('@component/gcanvas')) || false,
            name: 'f2',
            subname: 'f2',
            icon: 'https://qr0ros6qh.lightyy.com/images/icon/button.png',
            path: 'plugins/f2'
          },
          {
            isSupport: false,
            name: 'login',
            subname: 'cross login',
            icon: 'https://qr0ros6qh.lightyy.com/images/icon/button.png',
            path: 'plugins/login'
          }
        ],
        openCasesList: [
          {
            name: '官方示例',
            subname: 'official',
            icon: 'https://qr0ros6qh.lightyy.com/images/icon/button.png',
            path: 'cases/official'
          },
          {
            name: 'Natjs',
            subname: 'nat-explorer',
            icon: 'https://qr0ros6qh.lightyy.com/images/icon/button.png',
            path: 'cases/nat-explorer'
          },
          {
            name: 'Rax',
            subname: 'raxjs',
            icon: 'https://qr0ros6qh.lightyy.com/images/icon/button.png',
            path: 'https://market.m.taobao.com/app/raxjs/universal-demo-app/pages/index?wh_weex=true'
          },
          {
            name: '咸鱼',
            subname: 'weex-xianyu',
            icon: 'https://qr0ros6qh.lightyy.com/images/icon/button.png',
            path: 'cases/xianyu'
          },
          {
            name: '严选',
            subname: 'weex-yanxuan',
            icon: 'https://qr0ros6qh.lightyy.com/images/icon/button.png',
            path: 'cases/yanxuan'
          }
        ]
      }
    },
    methods: {
      jump (path) {
        GLog.d('jump->' + path)
        if (env.platform === 'Web') {
          let url
          if (path.startsWith('http://') || path.startsWith('https://')) {
            url = path
          } else {
            if (window.location.href.indexOf('index.html') !== -1) {
              url = window.location.href.replace(
                'index.html',
                `${path}/index.html`
              )
            } else {
              url = window.location.href + '/' + path
              if (url.indexOf('/index.html') === -1) {
                url += '/index.html'
              }
            }
          }
          window.location.href = url
        } else {
          let target
          if (path.startsWith('http://') || path.startsWith('https://')) {
            target = path
          } else {
            target = url.replace('index.js', `${path}/index.js`)
          }
          navigator.push({
            key: target,
            url: target,
            router: path,
            animated: 'true'
          })
        }
      }
    }
  }
</script>
