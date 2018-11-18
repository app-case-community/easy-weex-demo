<template>
    <div>
        <bui-header title="BUI-Sample" :leftItem="leftItem" @leftClick="back">
        </bui-header>
        <scroller>
            <catalog title="Layout"></catalog>
            <bui-cell @cellClick="jumpTo(item.url)" :title="item.name" :key="'0-' + index" v-for="(item, index) in layout">
                <bui-icon slot="action" name="ion-ios-arrow-right"></bui-icon>
            </bui-cell>
            <catalog title="Base"></catalog>
            <bui-cell @cellClick="jumpTo(item.url)" :title="item.name" :key="'1-' + index" v-for="(item, index) in base">
                <bui-icon slot="action" name="ion-ios-arrow-right"></bui-icon>
            </bui-cell>
            <catalog title="Form"></catalog>
            <bui-cell @cellClick="jumpTo(item.url)" :title="item.name" :key="'2-' + index" v-for="(item, index) in form">
                <bui-icon slot="action" name="ion-ios-arrow-right"></bui-icon>
            </bui-cell>
            <catalog title="Popup"></catalog>
            <bui-cell @cellClick="jumpTo(item.url)" :title="item.name" :key="'3-' + index" v-for="(item, index) in popup">
                <bui-icon slot="action" name="ion-ios-arrow-right"></bui-icon>
            </bui-cell>
            <catalog title="More"></catalog>
            <bui-cell @cellClick="jumpTo(item.url)" :title="item.name" :key="'4-' + index" v-for="(item, index) in more">
                <bui-icon slot="action" name="ion-ios-arrow-right"></bui-icon>
            </bui-cell>
        </scroller>
    </div>
</template>
<style lang="scss" src="@bui/theme/css/buiweex.scss"></style>
<script>
import catalog from "@components/bui/catalog.vue";
import { BuiHeader, BuiCell, BuiIcon } from "weex-bui";
const globalEvent = weex.requireModule("globalEvent");

export default {
  data: function() {
    return {
      leftItem: {
        icon: "ion-chevron-left"
      },
      layout: [{ name: "布局(flexbox)", text: "", url: "flex-box-demo" }],
      base: [
        { name: "按钮(bui-button)", text: "", url: "button-demo" },
        { name: "图标(bui-icon)", text: "", url: "icon-demo" },
        { name: "图片(bui-image)", text: "", url: "image-demo" },
        { name: "提示(bui-tip)", text: "", url: "tip-demo" },
        { name: "面板(bui-panel)", text: "", url: "panel-demo" },
        { name: "头部(bui-header)", text: "", url: "header-demo" },
        {
          name: "滑动菜单(bui-swipe-cell)",
          text: "",
          url: "swipe-cell-demo"
        },
        { name: "选项卡(bui-tabbar)", text: "", url: "tabbar-demo" },
        {
          name: "选项卡(bui-tabbar-scroller)",
          text: "",
          url: "tabbar-scroller-demo"
        },
        { name: "选项卡(bui-timeline)", text: "", url: "timeline-demo" }
      ],
      form: [
        { name: "单元格(bui-cell)", text: "", url: "cell-demo" },
        { name: "单选(bui-radio)", text: "", url: "radio-demo" },
        { name: "多选(bui-checkbox)", text: "", url: "checkbox-demo" },
        {
          name: "数字加减(bui-number-input)",
          text: "",
          url: "input-number-demo"
        }
      ],
      popup: [
        { name: "弹出框(bui-dialog)", text: "", url: "dialog-demo" },
        {
          name: "上拉菜单(bui-actionsheet)",
          text: "",
          url: "actionsheet-demo"
        },
        { name: "下拉菜单(bui-dropdown)", text: "", url: "dropdown-demo" },
        { name: "弹出层(bui-popup)", text: "", url: "popup-demo" },
        { name: "弹出框(bui-popover)", text: "", url: "popover-demo" },
        { name: "气泡提示(bui-poptip)", text: "", url: "poptip-demo" }
      ],
      more: [
        {
          name: "懒加载(bui-lazy-render)",
          text: "",
          url: "lazy-render-demo"
        },
        { name: "轮播图片(bui-image-slider)", text: "", url: "slider-demo" },
        { name: "搜索框(bui-searchbar)", text: "", url: "searchbar-demo" },
        { name: "富文本(bui-richcell)", text: "", url: "richcell-demo" },
        {
          name: "多格筛选(bui-grid-select)",
          text: "",
          url: "grid-select-demo"
        },
        { name: "流程图(bui-flow)", text: "", url: "flow-demo" },
        { name: "标签(bui-tag)", text: "", url: "tag-demo" },
        { name: "列表刷新(bui-dropload)", text: "", url: "dropload-demo" }
      ]
    };
  },
  components: {
    BuiHeader,
    BuiCell,
    BuiIcon,
    catalog
  },
  methods: {
    jumpTo(file) {
      if (file) {
        const suffix =
          "web" === weex.config.env.platform.toLowerCase() ? "html" : "js";
        var url = file + "." + suffix;
        this.$push(url);
      }
    },
    back() {
      this.$pop();
    }
  },
  mounted: function() {
    globalEvent.addEventListener("androidback", e => {
      this.$pop();
    });
  }
};
</script>
