<template>
  <div class="container">
    <lc-indexlist :normal-list="list.normalList"
                   :hot-list-config="hotListConfig"
                   :city-location-config="cityLocationConfig"
                   @LcIndexlistItemClicked="LcIndexlistItemClicked"
                   :show-index="showIndex"></lc-indexlist>
  </div>
</template>

<style scoped>
  .container {
    width: 750px;
    align-items: center;
  }
</style>

<script>
  import { LcIndexlist } from 'lighting-ui'
  import dataList from './lib/indexlist'
  const modal = weex.requireModule('modal')

  export default {
    components: { LcIndexlist },
    data: () => ({
      list: dataList,
      showIndex: true,
      hotListConfig: {
        type: 'group',
        title: '热门',
        list: dataList.hotList
      },
      cityLocationConfig: {
        type: 'group',
        title: '定位',
        list: [{ name: '杭州', isLocation: true }]
      }
    }),
    methods: {
      LcIndexlistItemClicked (e) {
        modal.toast({ 'message': JSON.stringify(e.item), 'duration': 1 })
      }
    }
  }
</script>
