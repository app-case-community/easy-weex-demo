<template>
    <div>
        <bui-header
                title="面板(bui-panel)"
                :leftItem="leftItem"
                @leftClick="back">
        </bui-header>

        <scroller>
                <bui-panel title="Default Panel" border="1">
                    <text>Default Panel</text>
                    <text>Default Panel</text>
                    <text>Default Panel</text>
                    <text>Default Panel</text>
                </bui-panel>
                <bui-panel title="Primary Panel" type="primary" border="1">
                    <text>Primary Panel</text>
                </bui-panel>
                <bui-panel title="Success Panel" type="success" border="1">
                    <text>Success Panel</text>
                </bui-panel>
                <bui-panel title="Info Panel" type="info" border="1">
                    <text>Info Panel</text>
                </bui-panel>
                <bui-panel title="Warning Panel" type="warning" border="1">
                    <text>Warning Panel</text>
                </bui-panel>
                <bui-panel title="Danger Panel" type="danger" border="1">
                    <text>Danger Panel</text>
                </bui-panel>

        </scroller>
    </div>
</template>
<style lang="scss" src="@bui/theme/css/buiweex.scss"></style>
<script>
import { BuiHeader, BuiPanel } from "weex-bui";
export default {
  components: {
    BuiHeader,
    BuiPanel
  },
  data: function() {
    return {
      leftItem: {
        icon: "ion-chevron-left"
      },
      testData1: [
        {
          title: "云应用平台"
        },
        {
          title: "云应用产品",
          selected: true
        },
        {
          title: "轨道交通"
        },
        {
          title: "轨道交通"
        },
        {
          title: "财政"
        },
        {
          title: "人力资源"
        },
        {
          title: "最多展示两行内容"
        },
        {
          title: "超过两行文本将被截断展示"
        },
        {
          title: "超过两行文本将被截断展示"
        },
        {
          title: "轨道交通"
        }
      ]
    };
  },
  methods: {
    back() {
      this.$pop();
    }
  }
};
</script>