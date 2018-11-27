<template>
  <div class="lc-demo">
    <title title="lc-date-picker"></title>
    <category title="选择器Picker"></category>
    <div style="align-items: center">
        <text class="mt20">pick value: {{value}}</text>
        <lc-button text="normalpick" type="normal"  @LcButtonClicked="normalpick" class="mt20"></lc-button>
        <lc-button text="pickDate" type="normal"  @LcButtonClicked="pickDate" class="mt20"></lc-button>
        <lc-button text="pickTime" type="normal"  @LcButtonClicked="pickTime" class="mt20"></lc-button>
    </div>
    <category title="按钮组件"></category>
    <lc-input
            type="date"
            placeholder="select date"
            :autofocus="false"
            value=""
            class="mt20"
            :input-style="inputStyle"
            onchange="onchange"
            :max = "2029-11-28"
            :min = "2015-11-28"/>
    <lc-input
        type="time"
        class="mt20"
        placeholder="select time"
        :autofocus="false"
        value=""
        onchange="onchange"
        :input-style="inputStyle"
    />
  </div>
</template>

<style>
  .mt20{margin-top: 20px;}
  .lc-demo {
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    background-color: #fff;
  }
</style>

<script>
  import Title from '@components/lighting/_mods/title.vue'
  import Category from '@components/lighting/_mods/category.vue'
  import { LcButton, LcInput } from 'lighting-ui'

  module.exports = {
    data: () => ({
      value: '',
      txtChange: '',
      inputStyle: {
        fontSize: '36px',
        textAlign: 'center'
      }
    }),
    components: { Title, Category, LcButton, LcInput },
    methods: {
      normalpick: function () {
        const picker = weex.requireModule('picker')
        var self = this
        picker.pick({
          height: '300px',
          items: [1, 2, 3, 4]
        }, function (ret) {
          var result = ret.result
          if (result === 'success') {
            self.value = ret.data
          }
        })
      },
      pickDate: function (e) {
        const picker = weex.requireModule('picker')
        var self = this
        picker.pickDate({
          'value': '2017-12-15',
          'max': '2022-12-30',
          'min': '2000-12-30'
        }, function (ret) {
          var result = ret.result
          if (result === 'success') {
            self.value = ret.data
          }
        })
      },
      pickTime: function () {
        const picker = weex.requireModule('picker')
        var self = this
        picker.pickTime({
        }, function (ret) {
          var result = ret.result
          if (result === 'success') {
            self.value = ret.data
          }
        })
      },
      onchange: function (event) {
        this.txtChange = event.value
      }
    }
  }
</script>
