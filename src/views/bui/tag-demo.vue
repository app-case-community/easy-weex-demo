<template>
    <div>
        <bui-header
                title="标签(bui-tag)"
                :leftItem="leftItem"
                @leftClick="back">
        </bui-header>

        <div style="padding: 10px;" class="flex-row">
            <bui-tag class="mr10" value="默认标签"></bui-tag>
            <bui-tag class="mr10"
                    value="空心标签"
                    type="hollow"
                    closable></bui-tag>
            <bui-tag class="mr10" value="特殊标签"
                    type="special"
                    specialIcon="/image/star.png"
                    closable></bui-tag>
            <bui-tag value="图片标签"
                    type="image"
                    img="/image/pic.png"></bui-tag>
        </div>
    </div>
</template>
<style lang="scss" src="@bui/theme/css/buiweex.scss"></style>
<style scoped>
.mr10 {
  margin-right: 10px;
}
</style>

<script>
import { BuiHeader, BuiTag } from "weex-bui";
export default {
  components: {
    BuiHeader,
    BuiTag
  },
  data() {
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