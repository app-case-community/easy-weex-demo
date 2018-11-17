<template>
<div>
    <am-nav-bar
        title="Easy Weex Demo"
        :left-btn="[]"
      ></am-nav-bar>
    <scroller>
        <am-list header="weex 开源组件">
            <template v-for="(component, idx) in openUiList">
                <am-list-item class="list-item"
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
import { AmNavBar, AmList, AmListItem, Utils } from "weex-amui";
const navigator = weex.requireModule('navigator');
const env = weex.config.env;
const url = weex.config.bundleUrl;
export default {
  components: {
    AmNavBar, 
    AmList, 
    AmListItem
  },
  data() {
    return {
      openUiList: [
        {
          name: "ui",
          subname: "weex-ui",
          icon: "http://p1nq9peby.bkt.clouddn.com/weex-flymeui/button.png",
          path: "uis/ui"
        },
        {
          name: "flymeui",
          subname: "weex-flymeui",
          icon: "http://p1nq9peby.bkt.clouddn.com/weex-flymeui/button.png",
          path: "flyme"
        },
        {
          name: "amui",
          subname: "weex-amui",
          icon: "http://p1nq9peby.bkt.clouddn.com/weex-flymeui/button.png",
          path: "uis/amui"
        },
        {
          name:'progress',
          subname: 'wx-progress',
          icon: "http://p1nq9peby.bkt.clouddn.com/weex-flymeui/button.png",
          path: "uis/wx-progress"
        }
      ],
      openCasesList: [
        {
          name: "咸鱼",
          subname: "weex-xianyu",
          icon: "http://p1nq9peby.bkt.clouddn.com/weex-flymeui/button.png",
          path: "cases/xianyu"
        },
        {
          name: "严选",
          subname: "weex-yanxuan",
          icon: "http://p1nq9peby.bkt.clouddn.com/weex-flymeui/button.png",
          path: "cases/yanxuan"
        }
      ]
    };
  },
  methods: {
    jump(path) {
      if (env.platform === "Web") {
        let url;
        if (window.location.href.indexOf("index.html") !== -1) {
          url = window.location.href.replace(
            "index.html",
            `${path}/index.html`
          );
        } else {
          url = window.location.href + path;
        }
        window.location.href = url;
      } else {
        let target = url.replace("index.js", `${path}/index.js`);
        if (path.startsWith("http")) {
          target = path;
        }
        navigator.push({
          key: target,
          url: target,
          router: path,
          animated: "true"
        });
      }
    }
  }
};
</script>
