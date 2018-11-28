<template>
<div>
    <am-nav-bar
        title="Easy Weex Demo"
        :left-btn="[]"
      ></am-nav-bar>
    <scroller>
        <am-list header="gcanvas 示例">
            <template v-for="(component, idx) in openUiList">
                <am-list-item class="list-item" v-if="component.isWeb === undefined || !component.isWeb"
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
            name: 'simple',
            subname: '官方simple',
            icon: 'https://qr0ros6qh.lightyy.com/images/icon/button.png',
            path: 'simple'
          }
        ]
      }
    },
    methods: {
      jump (path) {
        GLog.d('jump->' + path)
        if (env.platform === 'Web') {
          let url
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
          window.location.href = url
        } else {
          let target = url.replace('index.js', `${path}/index.js`)
          if (path.startsWith('http')) {
            target = path
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
