<template>
<div class="flymeui">
    <scroller class="scroller">
        <div class="list">
            <template v-for="(component, idx) in demoList">
                <fm-item class="list-item"
                    :key="idx"
                    :title="component.name"
                    :summary="component.subname"
                    type="icon-small"
                    :imgSrc="component.icon"
                    occupying-color="#FFFFFF"
                    @fmItemClicked="jump(component.path)"></fm-item>
            </template>
        </div>
    </scroller>
</div>
</template>
<style scoped>
.flymeui {
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  background-color: #fafafa;
}

.scroller {
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  background-color: #fafafa;
}
.list-item {
  background-color: #ffffff;
}
</style>
<script>
import { FmItem } from 'weex-flymeui';
const navigator = weex.requireModule('navigator');
const env = weex.config.env;
const url = weex.config.bundleUrl;
export default {
  components: {
    FmItem
  },
  data() {
    return {
      demoList: [
        {
          name: "ui",
          subname: "weex-ui",
          icon: "http://p1nq9peby.bkt.clouddn.com/weex-flymeui/button.png",
          path: "ui"
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
          path: "amui"
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
