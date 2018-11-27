
<template>
  <div class="wxc-demo">
    <lc-result  :icon="icon"
                :title="title"
                :desc="desc"
                padding-top="232"
                @onResultClick="resultClicked"
                class="result"
                ></lc-result>
  </div>
</template>

<style scoped>
  .wxc-demo {
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    background-color: #fff;
  }
  .result{
    background-color: rgb(242, 243, 244);
  }
</style>

<script>
  import { LcResult } from 'lighting-ui'

  import TYPE from './lib/result.js'
  const modal = weex.requireModule('modal')

  export default {
    components: { LcResult },
    data: () => ({
      icon: TYPE['error']['icon'],
      title: TYPE['error']['title'],
      desc: TYPE['error']['desc']
    }),
    methods: {
      resultClicked (e) {
        modal.toast({
          'message': e.title,
          'duration': 2
        })
      }
    }
  }
</script>
