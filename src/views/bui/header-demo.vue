<template>
    <div>
        <bui-header
                title="头部(bui-header)"
                :leftItem="leftItem"
                :rightItem="rightItem"
                @leftClick="back"
                @rightClick="rightclick"
                @centerClick="centerclick">
        </bui-header>

        <scroller style="padding: 10px">
            <bui-header style="margin-bottom: 20px" :title="'开发者中心'"
                        backgroundColor="#00cc66"
                        :leftItem="leftItem"
                        :rightItem="rightMenu"
                        :useDefaultReturn=false>
            </bui-header>
            <bui-header
                    style="margin-bottom: 20px"
                    backgroundColor="#ff9900"
                    :leftItem="leftMenu"
                    :rightItem="rightMenu">
            </bui-header>
            <bui-header
                    style="margin-bottom: 20px"
                    backgroundColor="#ff4e24"
                    title="新闻标题很长很长很长很长很长"
                    :rightItem="rightMenu1">
            </bui-header>

            <bui-header
                    style="margin-bottom: 20px"
                    backgroundColor="#3399ff"
                    title=""
                    :leftItem="leftMenu1"
                    :rightItem="rightMenu1">
                <div slot="center" @click="open" style="flex-direction: row;align-items: center">
                    <text style="color:#ffffff">自定义内容</text>
                    <bui-icon name="ion-ios-arrow-down" color="#ffffff"></bui-icon>
                </div>
            </bui-header>
        </scroller>

        <bui-dropdown v-model="showDropdown" ref="dropdown" center>
          <bui-cell title="娱乐新闻"></bui-cell>
          <bui-cell title="体育新闻"></bui-cell>
          <bui-cell title="社交媒体"></bui-cell>
        </bui-dropdown>
    </div>

</template>
<style lang="scss" src="@bui/theme/css/buiweex.scss"></style>
<script>
  import { BuiHeader, BuiDropdown, BuiCell, BuiIcon } from 'weex-bui'
  export default {
    components: {
      BuiHeader,
      BuiDropdown,
      BuiCell,
      BuiIcon
    },
    data: function () {
      return {
        showDropdown: false,
        leftItem: {
          icon: 'ion-chevron-left'
        },
        rightItem: {
          text: '更多'
        },
        rightMenu: {
          icon: 'ion-navicon-round'
        },
        rightMenu1: {
          icon: 'ion-android-more-vertical'
        },
        leftMenu: {
          icon: 'ion-chevron-left',
          text: '新闻中心'
        },
        leftMenu1: {
          icon: 'ion-chevron-left',
          text: '返回'
        }
      }
    },
    methods: {
      back () {
        this.$pop()
      },
      rightclick () {
        this.$toast('right')
      },
      centerclick () {
        this.$toast('center')
      },
      open (e) {
        this.showDropdown = true
        this.$refs.dropdown.show(e)
      }
    }
  }
</script>
<style>
.pdl10 {
  padding-left: 10px;
}
</style>
