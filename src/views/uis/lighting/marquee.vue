<template>
  <div class="wxc-demo">
    <scroller>
      <title title="lc-marquee"></title>
      <category title="marquee"></category>

      <lc-marquee
        :list="marquee.list"
        :index='1'
        :interval="marquee.interval"
        :duration="marquee.duration"
        @marqueeChange="change">
      </lc-marquee>

    </scroller>
  </div>
</template>

<script>
  import { LcMarquee } from 'lighting-ui'
  import Title from '@components/lighting/_mods/title.vue'
  import Category from '@components/lighting/_mods/category.vue'
  import data from './lib/marquee.js'

  export default {
    components: { Title, Category, LcMarquee },
    data: function () {
      return {
        marquee: {
          duration: 1000,
          interval: 1000,
          list: data
        }
      }
    },
    methods: {
      change: function (e) {
        console.log(e)
      }
    }
  }
</script>

<style scoped>
  .wxc-demo {
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    background-color: #fff;
  }
  .margin{
    margin-top: 60px;
  }
  .mr{
    margin-right: 10px;
  }
</style>
