<template>
  <div class="lc-demo">
    <scroller class="scroller">
      <title title="lc-lightbox-full"></title>
      <category title="使用案例"></category>
      <div class="wrapper">
        <image class="demo-image"
              :src="require('./images/banner1.jpg')"
              @click="openLightBox"
              aria-label="点击按钮弹出全屏图片,这类情况不建议朗读给盲人" />
        <text class="image-text" :aria-hidden="true">点击图片弹出全屏图片</text>
        <div class="btn"
            @click="openLightBox"
            :accessible="true"
            aria-label="点击按钮弹出全屏图片,这类情况不建议朗读给盲人">
          <text class="btn-txt">点击按钮弹出全屏图片</text>
        </div>
      </div>
      <lc-lightbox-full
        ref="lc-lightbox"
        height="800"
        :image-list="imageList"
        @LcLightboxOverlayClicked="lightboxOverlayClick"
        :show="show">
      </lc-lightbox-full>
    </scroller>
  </div>
</template>

<style scoped>
  .lc-demo {
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
  .demo-image {
    width: 300px;
    height: 300px;
    margin-top: 100px;
  }
  .btn {
    width: 560px;
    height: 80px;
    margin-top: 100px;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    border-radius: 6px;
    background-color: #399DE2;
  }
  .image-text {
    font-size: 26px;
    color: #9B7B56;
    margin-top: 10px;
  }
  .btn-txt {
    color: #ffffff;
    font-size: 28px;
  }
</style>
<script>
  import Title from '@components/lighting/_mods/title.vue'
  import Category from '@components/lighting/_mods/category.vue'
  import { LcLightboxFull } from 'lighting-ui'
  export default {
    components: { Title, Category, LcLightboxFull },
    data: function () {
      return {
        imageList: [
          { src: require('./images/banner1.jpg') },
          { src: require('./images/banner2.jpg') },
          { src: require('./images/banner3.jpg') }
        ],
        show: false
      }
    },
    methods: {
      openLightBox () {
        this.show = true
      },
      lightboxOverlayClick () {
        this.show = false
      }
    }
  }
</script>
