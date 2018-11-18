<template>
    <div>
        <bui-header
                title="图标(bui-icon)"
                :leftItem="leftItem"
                @leftClick="back">
        </bui-header>

        <scroller class="center" style="padding: 20px">
            <bui-icon name="ion-ios-bell"></bui-icon>
            <text>48px</text>
            <bui-icon name="ion-ios-bell" size=60></bui-icon>
            <text>60px</text>
            <bui-icon name="ion-ios-bell" size=80  color="#ff4e24"></bui-icon>
            <text>80px</text>
            <bui-icon name="ion-ios-bell" size=100  color="#ff9900"></bui-icon>
            <text>100px</text>
            <bui-icon name="ion-ios-bell" size=120  color="#00cc66"></bui-icon>
            <text>120px</text>

            <text>图标来源 : http://ionicons.com/</text>
        </scroller>
    </div>
</template>



<script>
import { BuiHeader, BuiIcon } from "weex-bui";
export default {
  components: {
    BuiHeader,
    BuiIcon
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

<style>
.icon-content {
  border-left-width: 1px;
  border-left-color: #d7dde4;
}

.icon-box {
  width: 160px;
  align-items: center;
  padding: 30px;
  padding-left: 5px;
  padding-right: 5px;
  border-width: 1px;
  border-color: #d7dde4;
  border-left-width: 0px;
  border-top-width: 0px;
}

.icon-text {
  font-size: 20px;
  text-align: center;
  color: #657180;
}

.mb20 {
  margin-bottom: 20px;
}
</style>