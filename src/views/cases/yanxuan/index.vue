<template>
    <div class="app-wrapper">
        <router-view class="r-box"></router-view>
        <tab-bar @tabTo="onTabTo"></tab-bar>
    </div>
</template>
<style>
    body{
        margin: 0;
        padding: 0;
        background-color: #f4f4f4;
        color:#333;
    }
</style>
<style scoped>
    .app-wrapper{
        background-color: #f4f4f4;
    }
    .r-box{
        position: absolute;
        top:0;
        left: 0;
        right: 0;
        bottom: 0;
    }

</style>

<script>
  import util from './assets/util'
  import tabBar from '@components/yanxuan/assets/components/tabBar.vue'
  // var modal = weex.requireModule('modal')
  export default {
    data () {
      return {
      }
    },
    components: {
      'tab-bar': tabBar
    },
    created () {
      util.initIconFont()
    },
    methods: {
      onTabTo (_result) {
        let _key = _result.data.key || ''
        this.$router && this.$router.push('/' + _key)
      }
    }
  }
</script>
