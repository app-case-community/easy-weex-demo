<template>
    <scroller class="cell" show-scrollbar="false">
        <wx-cell 
            v-for="(name, idx) in componentNameArr"
            :key="idx"
            :text="name" 
            icon=""
            height="100px"
            textColor="#333"
            textFontSize="32px"
            @wxClick="go(name)">
        </wx-cell>
    </scroller>
</template>
<style type="text/css">
.cell {
  width: 690px;
  margin-left: 30px;
}
</style>
<script>
import { WxCell } from "weex-droplet-ui";
const navigator = weex.requireModule("navigator");
const modal = weex.requireModule("modal");

let componentNameArr = [
  'WxButton',
  'WxDialog',
  'WxHeader',
  'WxNavbar',
  'WxTabbar',
  'WxCell',
  'WxCheckbox',
  'WxCheckboxList',
  'WxRadio',
  'WxField',
  'WxInput',
  'WxPopup',
  'WxActionsheet',
  'WxLoading',
  'WxSearch',
  'WxIcon',
  'WxIndexlist',
  'WxScrollerbar',
  'WxProgress',
  'WxRange',
  'WxPicker',
  'WxSwitch',
  'WxMarquee'
].map(item => {
  return item.toLowerCase().replace("wx", "");
});
componentNameArr = componentNameArr.filter(name => name !== "checkboxlist");

export default {
  components: { WxCell },
  data() {
    return {
      url: weex.config.bundleUrl,
      componentNameArr: componentNameArr,
      isWeb: "web" === weex.config.env.platform.toLowerCase()
    };
  },

  methods: {
    go(name) {
      name = name.replace("am-", "");
      const suffix = this.isWeb ? "html" : "js";
      let url = `${name}/index.${suffix}`;
      if (/\/$/.test(weex.config.bundleUrl)) {
        url = weex.config.bundleUrl = url;
      } else {
        url = weex.config.bundleUrl.replace(`index.${suffix}`, url);
      }
      if (!url.endsWith("." + suffix)) {
        url += "/index." + suffix;
      }
      navigator.push({
        url: `${url}?_wx_tpl=${url}`,
        animated: "true"
      });
    }
  }
};
</script>
