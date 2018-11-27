<template>
  <div class="lc-demo">
    <scroller class="scroller">
      <title title="lc-checkbox"></title>
      <category title="Checkbox"></category>
      <lc-checkbox label="默认"
        :has-top-border="true"></lc-checkbox>
      <lc-checkbox label="默认选中"
        :checked="true"></lc-checkbox>
      <lc-checkbox label="未选中不可更改"
        :disabled="true"></lc-checkbox>
      <lc-checkbox label="选中不可更改"
        :disabled="true"
        :checked="true"
        :has-bottom-border="true"></lc-checkbox>

      <!-- <div class="margin"> -->
        <category title="CheckboxList"></category>
        <text class="checked-text">选中项 {{checkedList.toString()}}</text>
        <lc-checkbox-list :list="list" :config="config"
          @LcCheckboxListChecked="LcCheckboxListChecked"></lc-checkbox-list>
      <!-- </div> -->
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

  .margin {
    margin-top: 60px;
  }

  .checked-text {
    font-size: 30px;
    color: #333;
    margin-top: 30px;
    margin-bottom: 30px;
    margin-left: 24px;
  }
</style>

<script>
  import Title from '@components/lighting/_mods/title.vue'
  import Category from '@components/lighting/_mods/category.vue'
  import { LcCheckbox, LcCheckboxList } from 'lighting-ui'

  export default {
    components: { Title, Category, LcCheckbox, LcCheckboxList },
    data: () => ({
      list: [
        { label: '选项1', value: 1 },
        { label: '选项2', value: 2, checked: true },
        { label: '选项3', value: 3 },
        { label: '选项4', value: 4 }
      ],
      checkedList: [2],
      config: {
        checkedColor: '#f63031',
        checkedIcon: 'https://img.alicdn.com/tps/TB1zBLaPXXXXXXeXXXXXXXXXXXX-121-59.svg'
      }
    }),
    methods: {
      LcCheckboxListChecked (e) {
        this.checkedList = e.checkedList
      }
    }
  }
</script>
