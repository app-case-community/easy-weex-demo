
<template>
  <div class="wxc-demo">
    <scroller class="scroller">
      <title title="lc-lightbox" class="title"></title>
      <category title="常规轮播"></category>

      <lc-lightbox
        autoPlay="true"
        ref="lc-lightbox"
        :border-radius="20"
        height="400"
        interval="5000"
        showIndicator="true"
        :image-list="imageList"
        @lcImgClick="lcImgClick">
      </lc-lightbox>

      <category title="带文字说明"></category>
      <lc-lightbox autoPlay="true" ref="lc-lightbox"
                height="400"
                interval="5000"
                showIndicator="false"
                :image-list="imageList1"
                :imgInfoTextStyle="imgInfoTextStyle"
                @lcImgClick="lcImgClick">
            </lc-lightbox>
    </scroller>
  </div>
</template>

<style scoped>

  .wxc-demo {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: #FFFFFF;
  }

  .wrapper {
    align-items: center;
  }

  .scroller {
    flex: 1;
    align-items: center;
  }
</style>
<script>
  import Title from '@components/lighting/_mods/title.vue'
  import Category from '@components/lighting/_mods/category.vue'
  import { LcLightbox } from 'lighting-ui'

  export default {
    components: { Title, Category, LcLightbox },
    data: function () {
      return {
        imageList: [
          { src: require('./images/banner1.jpg') },
          { src: require('./images/banner2.jpg') },
          { src: require('./images/banner3.jpg') }
        ],
        imageList1: [
          {
            src: require('./images/banner1.jpg'),
            imgInfo: "'黑色星期一'后美股强力反弹'\n黑色星期一'后美股强力反弹'\n黑色星期一'后美股强力反弹'\n黑色星期一'后美股强力反弹" 
          },
          {
            src: require('./images/banner2.jpg'),
            imgInfo: '中国瘟鸡股市持续暴跌'
          }
        ],
        imgInfoTextStyle: {
          color: '#b9f4ec'
        }
      }
    },
    methods: {
      lcImgClick (e) {
        console.log('clicked' + e.index)
      }
    }
  }
</script>
