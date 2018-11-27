<template>
  <div class="demo">
    <scroller>
      <title title="lc-switch"></title>
      <category title="switch组件"></category>
      <lc-cell :has-top-border="true"
                :auto-accessible="false"
                label="默认样式">
            <lc-switch slot="value" :autoSwitch="autoSwitch" :opened="opened1"
            :title="title" @toggle="toggleHandle"></lc-switch>
      </lc-cell>
      <category title="自定义样式"></category>
      <lc-cell :has-top-border="false" :has-bottom-border="false" label="打开颜色">
        <input class="input"
               slot="value"
               placeholder="打开颜色"
               v-model="checkedtBgc"
               @input="checkedtBgc=$event.value"/>
      </lc-cell>
      <lc-cell :has-top-border="false" :has-bottom-border="false" label="关闭颜色">
        <input class="input"
               slot="value"
               placeholder="关闭颜色"
               v-model="defaultBgc"
               @input="defaultBgc=$event.value"/>
      </lc-cell>
      <lc-cell :has-top-border="false" :has-bottom-border="false" label="">
            <lc-switch slot="value" :opened="opened2" @toggle="toggleHandle"
                 :checkedtBgc="checkedtBgc" :height="height" :defaultBgc="defaultBgc">
            </lc-switch>
      </lc-cell>
    </scroller>
  </div>
</template>
<script>
  import Title from '@components/lighting/_mods/title.vue'
  import Category from '@components/lighting/_mods/category.vue'
  import { LcCell, LcSwitch } from 'lighting-ui'

  export default {
    components: { LcSwitch, LcCell, Title, Category },
    data () {
      return {
        checkedtBgc: '#05B93A',
        defaultBgc: '#999999',
        height: 40,
        opened1: true,
        opened2: false,
        autoSwitch: false,

        title: '确定执行吗?'
      }
    },
    methods: {
      toggleHandle (isOpen) {
        console.log(isOpen)
      }
    }
  }
</script>
<style scoped>
  .input {
    width: 300px;
    text-align: right;
    font-size: 28px;
  }
</style>
