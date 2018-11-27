
<template>
  <div class="wxc-demo">
    <scroller>
      <title title="lc-grid"></title>
      <category title="默认3列"></category>
      <lc-grid :list="all" @itemClicked="clickHandler1"></lc-grid>

      <category title="自定义列"></category>
      <lc-grid :cols="5" :list="text" @itemClicked="clickHandler2"></lc-grid>

      <category title="可有网格"></category>
      <lc-grid :cols="4" :list="img" :border="true" @itemClicked="clickHandler3"></lc-grid>

    </scroller>
  </div>
</template>

<script>
  import { LcGrid } from 'lighting-ui'
  import Title from '@components/lighting/_mods/title.vue'
  import Category from '@components/lighting/_mods/category.vue'

  export default {
    components: { Title, Category, LcGrid },
    data () {
      return {
        all: [
          {
            label: 'button',
            icon: 'https://i.loli.net/2017/12/19/5a387c4f536a1.png',
            path: '/index/button'
          },
          {
            label: 'select',
            icon: 'https://i.loli.net/2017/12/19/5a387c4f536a1.png',
            path: '/index/select'
          },
          {
            label: 'input',
            icon: 'https://i.loli.net/2017/12/19/5a387c4f536a1.png',
            path: '/index/input'
          },
          {
            label: 'slide',
            icon: 'https://i.loli.net/2017/12/19/5a387c4f536a1.png',
            path: '/index/slide'
          },
          {
            label: 'image',
            icon: 'https://i.loli.net/2017/12/19/5a387c4f536a1.png',
            path: '/index/image'
          },
          {
            label: 'radio',
            icon: 'https://i.loli.net/2017/12/19/5a387c4f536a1.png',
            path: '/index/radio'
          }
        ],
        text: [
          {
            label: 'button',
            path: '/index/button'
          },
          {
            label: 'select',
            path: '/index/select'
          },
          {
            label: 'input',
            path: '/index/input'
          },
          {
            label: 'slide',
            path: '/index/slide'
          },
          {
            label: 'image',
            path: '/index/image'
          },
          {
            label: 'radio',
            path: '/index/radio'
          }
        ],
        img: [
          {
            icon: 'https://i.loli.net/2017/12/19/5a387c4f536a1.png',
            path: '/index/button'
          },
          {
            icon: 'https://i.loli.net/2017/12/19/5a387c4f536a1.png',
            path: '/index/select'
          },
          {
            icon: 'https://i.loli.net/2017/12/19/5a387c4f536a1.png',
            path: '/index/input'
          },
          {
            icon: 'https://i.loli.net/2017/12/19/5a387c4f536a1.png',
            path: '/index/slide'
          },
          {
            icon: 'https://i.loli.net/2017/12/19/5a387c4f536a1.png',
            path: '/index/image'
          },
          {
            icon: 'https://i.loli.net/2017/12/19/5a387c4f536a1.png',
            path: '/index/radio'
          }
        ]
      }
    },
    methods: {
      clickHandler1 ({ item, index }) {
        console.log(item, index)
      },
      clickHandler2 ({ item, index }) {
        console.log(item, index)
      },
      clickHandler3 ({ item, index }) {
        console.log(item, index)
      }
    }
  }
</script>
<style lang="less">

</style>
