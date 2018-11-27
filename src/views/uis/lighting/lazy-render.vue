<template>
    <div class="lc-demo">

        <title title="lc-lazy-render"></title>
        <category title="懒加载"></category>

        <lc-lazy-render :time="time1">
            <div class="lazy">
                <image :src="require('./images/p1.png')" class="lazy" style="width:50px;height:50px;" />
            </div>
        </lc-lazy-render>

        <lc-lazy-render :time="time2" @loaded="onLoad" :tip="tip" :maskStyle="maskStyle" :tipStyle="tipStyle">
            <div class="lazy">
                <text class="lazy">11111</text>
            </div>
        </lc-lazy-render>

    </div>
</template>

<script>
  import Title from '@components/lighting/_mods/title.vue'
  import Category from '@components/lighting/_mods/category.vue'
  import { LcLazyRender } from 'lighting-ui'
  // import LcLazyRender from '../res/index.vue'
  //   import LcLazyRender from 'lighting-ui/packages/lc-lazy-render';

  export default {
    components: { Title, Category, LcLazyRender },
    data () {
      return {
        time1: 1000,
        time2: 3000,
        tip: '加载中',
        maskStyle: { 'marginTop': '30px' },
        tipStyle: { 'color': 'red' }
      }
    },
    methods: {
      onLoad () {
        console.log('加载了')
      }
    }
  }
</script>
<style scoped>
.lazy{margin-top:50px;display: flex; align-items: center;}
</style>
