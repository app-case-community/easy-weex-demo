<template>
    <div>
        <bui-header
                title="图片(bui-image)"
                :leftItem="leftItem"
                @leftClick="back">
        </bui-header>

        <scroller class="column-center-top">
            <text class="h4">远程图片</text>
            <bui-image width="260px" height="260px" :src="remote_pic"></bui-image>

            <text class="h4">工程目录的图片(固定放在/image/)</text>
            <bui-image src="/image/demo.png" width="260px" height="260px"></bui-image>

            <text class="h4">使用placeholder，加载默认图片</text>
            <bui-image width="260px" placeholder="/image/demo.png" height="260px" @load="onLoad()" :src="remote_no_pic"></bui-image>

            <text class="h4">圆角图片(radius="30px")</text>
            <bui-image width="260px" height="260px" radius="30px" :src="remote_pic"></bui-image>

        </scroller>
    </div>
</template>
<style lang="scss" src="@bui/theme/css/buiweex.scss"></style>
<script>
  import { BuiHeader, BuiImage } from 'weex-bui'
  export default {
    components: {
      BuiHeader,
      BuiImage
    },
    data () {
      return {
        leftItem: {
          icon: 'ion-chevron-left'
        },
        remote_pic:
          'https://img.alicdn.com/tps/TB1z.55OFXXXXcLXXXXXXXXXXXX-560-560.jpg',
        remote_no_pic: 'https://img.alicdn.com/tps/picture.jpg'
      }
    },
    methods: {
      back () {
        this.$pop()
      },
      onLoad (e) {
        this.$toast('image load finished.')
      }
    }
  }
</script>
