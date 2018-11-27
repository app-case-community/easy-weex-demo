
<template>
  <div class="lc-demo">
    <scroller class="scroller">
      <title title="lc-textarea"></title>
      <category title="八种基本用法"></category>

        <text class="title-text">默认</text>
        <lc-textarea placeholder="提示"></lc-textarea>

        <text class="title-text">自定义行数</text>
        <lc-textarea :rows="6" placeholder="提示"></lc-textarea>

        <text class="title-text">显示计数器</text>
        <lc-textarea placeholder="提示" :max="50"></lc-textarea>

        <text class="title-text">不显示计数器</text>
        <lc-textarea placeholder="提示" :show-counter="false"></lc-textarea>

        <text class="title-text">有标题</text>
        <lc-textarea label="标题" placeholder="提示"></lc-textarea>

        <text class="title-text">自动获得焦点</text>
        <lc-textarea label="标题" placeholder="提示" :autofocus="true"></lc-textarea>

        <text class="title-text">和input一起使用</text>
        <lc-input label="标题" placeholder="提示" :has-bottom-border="false"></lc-input>
        <lc-textarea label="标题" :has-top-border="false" style="margin-bottom:20px;"></lc-textarea>

      <category title="自定义标题样式"></category>
        <text class="title-text">label-width & label-align</text>
        <lc-textarea label="标题" placeholder="提示" label-width="140px" label-align="right"></lc-textarea>

        <text class="title-text">label-color</text>
        <lc-textarea label="标题" placeholder="提示" label-color="#0785DB"></lc-textarea>

      <category title="四种事件"></category>
        <text class="title-text">focus事件</text>
        <lc-textarea placeholder="提示" @onFocus="onEvent('focus')"></lc-textarea>

        <text class="title-text">blur事件</text>
        <lc-textarea placeholder="提示" @onBlur="onEvent('blur')"></lc-textarea>

        <text class="title-text">input事件</text>
        <lc-textarea placeholder="提示" @onInput="onEvent('input')"></lc-textarea>

        <text class="title-text">change事件</text>
        <lc-textarea placeholder="提示" @onChange="onEvent('change')"></lc-textarea>

    </scroller>
  </div>
</template>

<style scoped>
  .lc-demo {
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    background-color: #fff;
  }

  .scroller {
    flex: 1;
  }

  .title-text {
    font-size: 32px;
    margin-top: 30px;
    margin-bottom: 16px;
    padding-left: 30px;
    color: #4a4a4a;
  }

</style>

<script>
  import Title from '@components/lighting/_mods/title.vue'
  import Category from '@components/lighting/_mods/category.vue'
  import { LcTextarea, LcInput } from 'lighting-ui'

  const modal = weex.requireModule('modal')

  export default {
    components: { Title, Category, LcTextarea, LcInput },
    data: () => ({
      hasTopBorder: false
    }),
    methods: {
      onEvent (event) {
        modal.toast({
          message: `event:${event}`
        })
      }
    }
  }
</script>
