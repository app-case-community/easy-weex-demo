<!-- CopyRight (C) 2017-2022 Alibaba Group Holding Limited. -->
<!-- Created by Tw93 on 17/03/31. -->

<template>
  <div class="lc-item">
    <image :src="image"
          class="item-image"
          resize="cover" />

    <div class="category-tag" v-if="categoryTag">
      <text class="tag-text">{{categoryTag}}</text>
    </div>

    <div class="image-desc" v-if="imageText">
      <text class="image-text">{{imageText}}</text>
    </div>

    <div class="item-content">
      <text class="item-text" v-if="isTitleString">{{title}}</text>
      <lc-special-rich-text :config-list="title" v-else></lc-special-rich-text>

      <lc-rich-text :config-list="desc" class="one-desc"></lc-rich-text>

      <lc-rich-text :config-list="tags"></lc-rich-text>

      <div class="item-price">
        <lc-rich-text :config-list="priceDesc"></lc-rich-text>
        <div class="price-num" v-if="price">
          <text class="yen">{{yenSymbol}}</text>
          <text class="price">{{price}}</text>
          <text class="postfix" v-if="postfix">起</text>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .lc-item {
    width: 750px;
    height: 246px;
    flex-direction: row;
    position: relative;
  }

  .item-image {
    width: 198px;
    height: 198px;
    margin-top: 24px;
    margin-left: 24px;
    margin-bottom: 24px;
    margin-right: 24px;
  }

  .image-desc {
    position: absolute;
    left: 24px;
    top: 186px;
    width: 198px;
    height: 36px;
    background-color: rgba(0, 0, 0, .8);
    align-items: center;
    justify-content: center;
  }

  .image-text {
    font-size: 24px;
    color: #ffffff;
  }

  .item-content {
    flex: 1;
    flex-direction: column;
    justify-content: space-between;
    padding-top: 24px;
    padding-right: 24px;
    padding-bottom: 18px;
    overflow: hidden;
  }

  .item-text {
    font-size: 28px;
    line-height: 40px;
    color: #333333;
    lines: 2;
    text-overflow: ellipsis;
    overflow: hidden;
  }

  .item-price {
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
    height: 36px;
  }

  .price-num {
    flex-direction: row;
    align-items: center;
  }

  .yen {
    color: #FF5E00;
    font-size: 24px;
    line-height: 26px;
    margin-right: 2px;
    margin-top: 4px;
  }

  .price {
    color: #FF5E00;
    font-size: 36px;
    line-height: 40px;
  }

  .postfix {
    font-size: 24px;
    line-height: 28px;
    color: #A5A5A5;
    margin-top: 6px;
    margin-left: 2px;
  }

  .one-desc {
    flex-direction: row;
    flex-wrap: wrap;
  }

  .category-tag {
    padding-right: 16px;
    padding-left: 12px;
    height: 36px;
    justify-content: center;
    border-top-right-radius: 0;
    border-bottom-right-radius: 24px;
    background-color: #FFC900;
    position: absolute;
    top: 24px;
    left: 24px;
  }

  .tag-text {
    color: #3d3d3d;
    font-size: 22px;
    line-height: 36px;
  }
</style>

<script>
  import { LcRichText } from 'lighting-ui'
  import Utils from './utils.js'
  // const expressionBinding = weex.requireModule('expressionBinding')

  export default {
    components: { LcRichText },
    props: {
      title: {
        type: [String, Array],
        default: ''
      },
      imageText: {
        type: String,
        default: ''
      },
      image: {
        type: String,
        default: ''
      },
      desc: {
        type: Array,
        default: () => ([])
      },
      priceDesc: {
        type: [String, Array],
        default: ''
      },
      price: {
        type: [String, Number],
        default: 0
      },
      tags: {
        type: [Array, String],
        default: () => ([])
      },
      postfix: {
        type: Boolean,
        default: false
      },
      categoryTag: {
        type: String,
        default: ''
      },
      extId: {
        type: [String, Number],
        default: 0
      }
    },
    data: () => ({
      yenSymbol: '\u00A5'
    }),
    computed: {
      isTitleString () {
        return Utils.isString(this.title)
      }
    }
  }
</script>
