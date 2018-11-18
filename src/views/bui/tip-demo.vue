<template>
    <div class="span1">
        <bui-header
                title="提示(bui-tip)"
                :leftItem="leftItem"
                @leftClick="back">
        </bui-header>

        <scroller style="padding:10px;">
            <bui-tip value="bui-weex success tip."></bui-tip>
            <bui-tip type="info" value="bui-weex info tip."></bui-tip>
            <bui-tip type="warning" value="bui-weex warning tip."></bui-tip>
            <bui-tip type="danger" value="bui-weex 是专门为weex前端开发者打造的高质量UI组件"></bui-tip>
        </scroller>
    </div>

</template>

<script>
import { BuiHeader, BuiTip } from "weex-bui";
export default {
  components: {
    BuiHeader,
    BuiTip
  },
  data: function() {
    return {
      leftItem: {
        icon: "ion-chevron-left"
      }
    };
  },
  methods: {
    back() {
      this.$pop();
    }
  }
};
</script>