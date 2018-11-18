<template>
    <div>
        <bui-header
                title="搜索框(bui-searchbar)"
                :leftItem="leftItem"
                @leftClick="back">
        </bui-header>

        <div>
            <text class="h4">类型1</text>
            <bui-searchbar-center @search="onSearch" @focus="onfocus()" @blur="onblur()" @clear="onclear()"></bui-searchbar-center>
            <text class="h4">类型2</text>
            <bui-searchbar-left @search="onSearch" :autofocus=true></bui-searchbar-left>
        </div>
    </div>
</template>
<style lang="scss" src="@bui/theme/css/buiweex.scss"></style>
<script>
import { BuiHeader, BuiSearchbarCenter, BuiSearchbarLeft } from "weex-bui";
export default {
  components: {
    BuiHeader,
    BuiSearchbarCenter,
    BuiSearchbarLeft
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
    },
    onSearch(value) {
      this.$toast(value);
    },
    onfocus(e) {
      this.$toast("focus");
    },
    onblur(e) {
      this.$toast("blur");
    },
    onclear() {
      this.$toast("clear");
    }
  }
};
</script>