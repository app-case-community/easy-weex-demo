<template>
  <div class="wxc-demo">
    <title title="lc-numberfield"></title>

    <div class="container">
      <category title="普通输入"></category>
      <div class="form">
        <lc-numberfield type="number"  placeholder="最小金额10元" maxlength=10 ></lc-numberfield>
      </div>

      <category title="显示货币"></category>
      <div class="form">
        <lc-numberfield type="number" :showIcon="true" placeholder="最小金额10元" maxlength=10 v-model="money"></lc-numberfield>
      </div>
    </div>

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
  .container{
    flex-direction: column;
    align-items: center;
  }
  .form{
    width: 600px;
  }
</style>

<script>
  import { LcNumberfield } from 'lighting-ui'
  import Category from '@components/lighting/_mods/category.vue'
  import Title from '@components/lighting/_mods/title.vue'

  export default {
    components: { Title, Category, LcNumberfield },
    data: () => ({
      money: 200
    }),
    created () {
    },
    methods: {

    },
    watch: {
      money (newVal, oldVal) {
        console.log(newVal, oldVal)
      }
    }
  }
</script>
