<template>
    <div>
        <bui-header
                title="下拉菜单(bui-dropdown)"
                :leftItem="leftItem"
                @centerClick="centerClick"
                @leftClick="back">
        </bui-header>

        <div class="center" style="padding: 10px">
            <bui-button type="warning" value="气泡向下菜单(箭头居中)" @click="open"></bui-button>
        </div>

        <bui-dropdown ref="dropdown" :center=true>
            <bui-cell @click="cellClick" title="娱乐新闻"></bui-cell>
            <bui-cell @click="cellClick" title="体育新闻"></bui-cell>
            <bui-cell @click="cellClick" title="社交媒体"></bui-cell>
        </bui-dropdown>

        <div class="center" style="padding: 10px">
            <bui-button type="warning" value="气泡向下菜单(箭头居左)" @click="open2"></bui-button>
        </div>

        <bui-dropdown ref="dropdown2">
            <bui-cell @click="cellClick" title="娱乐新闻"></bui-cell>
            <bui-cell @click="cellClick" title="体育新闻"></bui-cell>
            <bui-cell @click="cellClick" title="社交媒体"></bui-cell>
        </bui-dropdown>

        <div class="center" style="padding: 10px">
            <bui-button type="warning" value="气泡向下菜单(箭头居左宽度固定)" @click="open3"></bui-button>
        </div>

        <bui-dropdown ref="dropdown3"
                      :autoWidth="false">
            <bui-cell @click="cellClick" title="娱乐新闻"></bui-cell>
            <bui-cell @click="cellClick" title="体育新闻"></bui-cell>
            <bui-cell @click="cellClick" title="社交媒体"></bui-cell>
        </bui-dropdown>

        <div class="center" style="padding: 10px">
            <bui-button type="warning" value="气泡向上菜单" @click="openUp"></bui-button>
        </div>
        <bui-dropdown ref="upshows" :up="true" :center=true>
            <bui-cell @click="cellClick" title="娱乐新闻"></bui-cell>
            <bui-cell @click="cellClick" title="体育新闻"></bui-cell>
            <bui-cell @click="cellClick" title="社交媒体"></bui-cell>
        </bui-dropdown>

    </div>
</template>
<style lang="scss" src="@bui/theme/css/buiweex.scss"></style>
<script>
  import { BuiHeader, BuiButton, BuiCell, BuiDropdown } from 'weex-bui'
  export default {
    components: {
      BuiHeader,
      BuiButton,
      BuiCell,
      BuiDropdown
    },
    data: function () {
      return {
        leftItem: {
          icon: 'ion-chevron-left'
        },
        showUp: false
      }
    },
    methods: {
      back () {
        this.$pop()
      },
      open (event) {
        this.$refs.dropdown.show(event)
      },
      open2 (event) {
        this.$refs.dropdown2.show(event)
      },
      open3 (event) {
        this.$refs.dropdown3.show(event)
      },
      openUp (event) {
        this.$refs.upshows.show(event, 323)
      },
      cellClick () {
        this.$refs.upshows.hide()
      }
    }
  }
</script>
<style>
</style>
