
<template>
  <div class="wxc-demo">
    <scroller class="scroller">
      <title title="lc-stepper"></title>
      <category title="使用案例"></category>
      <div class="demo">
        <text class="text">无配置:</text>
        <lc-stepper></lc-stepper>
      </div>
      <div class="demo">
        <text class="text">{min:2,max:10,step:2,defaultValue:4}</text>
        <lc-stepper :default-value="4"
                     step="2"
                     max="10"
                     min="2"
                     @LcStepperValueIsMinOver="LcStepperValueIsMinOver"
                     @LcStepperValueIsMaxOver="LcStepperValueIsMaxOver"
                     @LcStepperValueChanged="LcStepperValueChanged"></lc-stepper>
      </div>
      <div class="demo">
        <text class="text">禁用</text>
        <lc-stepper default-value="4"
                     step="2"
                     max="10"
                     min="2"
                     :disabled="isDisabled"></lc-stepper>
      </div>

      <div class="demo">
        <text class="text">input只读:</text>
        <lc-stepper :read-only="isOnlyRead"></lc-stepper>
      </div>
    </scroller>
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

  .scroller {
    flex: 1;
  }

  .demo {
    width: 750px;
    align-items: flex-start;
    padding-top: 60px;
    padding-left: 60px;
  }

  .text {
    margin-bottom: 30px;
  }
</style>

<script>
  import Title from '@components/lighting/_mods/title.vue'
  import Category from '@components/lighting/_mods/category.vue'
  import { LcStepper } from 'lighting-ui'
  const modal = weex.requireModule('modal')

  export default {
    components: { Title, Category, LcStepper },
    data: () => ({
      value: 4,
      isDisabled: true,
      isOnlyRead: true
    }),
    methods: {
      LcStepperValueChanged (e) {
        console.log(e.value)
      },
      LcStepperValueIsMaxOver () {
        modal.toast({
          message: '超过最大值啦'
        })
      },
      LcStepperValueIsMinOver () {
        modal.toast({
          message: '超过最小值啦'
        })
      }
    }
  }
</script>
