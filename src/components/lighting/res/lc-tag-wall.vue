<template>
  <div class="wall-wrap">
    <div class="title-wrap">
      <slot name="left">
        <text class="title-text" :style="{ color: titleColor }">{{ title }}</text>
      </slot>
      <slot name="right">
        <text class="title-rightBtn" :style="{ color: rightColor }" @click="btnClicked">{{ rightText }}</text>
      </slot>
    </div>
    <div class="tags-wrap">
      <item v-for="(item, index) in list"
            v-bind="Object.assign({}, customStyles, item)"
            :key="index"
            :index="index"
            @select="onSelect(index)" />
    </div>
  </div>
</template>

<style scoped>
  .wall-wrap {
    width: 750px;
  }
  .title-wrap {
    flex-direction: row;
    padding: 20px 40px;
    justify-content: space-between;
  }
  .title-text {
    font-family: sans-serif-medium;
    font-weight: 500;
    font-size: 26px;
  }
  .title-rightBtn {
    font-family: sans-serif-medium;
    font-weight: 500;
    font-size: 26px;
  }
  .tags-wrap {
    flex-direction: row;
    flex-wrap: wrap;
    padding: 0 40px;
  }
</style>

<script>
  import Item from './item.vue'
  // import Locale from 'weex-flymeui/lib/mixins/locale';
  // import { t } from 'weex-flymeui/lib/locale';
  export default {
    name: 'LcTagWall',
    //   mixins: [Locale],
    components: { Item },
    props: {
      list: {
        type: Array,
        default: () => ([])
      },
      title: {
        type: String,
        default () {
          return 'el.common.title'
        }
      },
      titleColor: {
        type: String,
        default: 'rgba(0, 0, 0, 0.4)'
      },
      rightText: {
        type: String,
        default: ''
      },
      rightColor: {
        type: String,
        default: '#198DED'
      },
      customStyles: {
        type: Object,
        default: () => ({})
      }
    },
    methods: {
      onSelect (index) {
        this.$emit('lcTagWallSelected', { title: this.list[index].title, index })
      },
      btnClicked () {
        this.$emit('lcTagWallRightBtnClicked')
      }
    }
  }
</script>
