<template>
    <div>
        <bui-header
                title="弹出层(bui-popup)"
                :leftItem="leftItem"
                @leftClick="back">
        </bui-header>

        <div class="center" style="padding:10px;">
            <bui-button class="ex-btn" type="warning" value="下面弹出" @click="open1()"></bui-button>
            <bui-button class="ex-btn" type="warning" value="上面弹出" @click="open2()"></bui-button>
            <bui-button class="ex-btn" type="warning" value="左边弹出" @click="open3()"></bui-button>
            <bui-button class="ex-btn" type="warning" value="右边弹出" @click="open4()"></bui-button>
        </div>

        <bui-popup v-model="showPopup1" height="300">
            <text class="h4">下方弹出内容</text>
        </bui-popup>

        <bui-popup v-model="showPopup2" pos="top" backgroundColor="#ff9900" height="300">
            <text class="h4">上面弹出内容</text>
        </bui-popup>

        <bui-popup v-model="showPopup3" pos="left" backgroundColor="#ff4e24" width="300">
            <text class="h4">左边弹出内容</text>
        </bui-popup>

        <bui-popup v-model="showPopup4" pos="right" width="300">
            <text class="h4">右边弹出内容</text>
        </bui-popup>
    </div>

</template>
<style lang="scss" src="@bui/theme/css/buiweex.scss"></style>
<style>
.ex-btn {
  margin-bottom: 20px;
}
</style>

<script>
  import { BuiHeader, BuiButton, BuiPopup } from 'weex-bui'
  export default {
    components: {
      BuiHeader,
      BuiButton,
      BuiPopup
    },
    data: function () {
      return {
        leftItem: {
          icon: 'ion-chevron-left'
        },
        showPopup1: false,
        showPopup2: false,
        showPopup3: false,
        showPopup4: false,
        selectedValue: ['1', '2'],
        items: [
          { value: '1', title: '全部1' },
          { value: '2', title: '选项一' },
          { value: '3', title: '选项二' },
          { value: '4', title: '选项三' }
        ]
      }
    },
    methods: {
      back () {
        this.$pop()
      },
      open1 () {
        this.showPopup1 = true
      },
      open2 () {
        this.showPopup2 = true
      },
      open3 () {
        this.showPopup3 = true
      },
      open4 () {
        this.showPopup4 = true
      }
    }
  }
</script>
