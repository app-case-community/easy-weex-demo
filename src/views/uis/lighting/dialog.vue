<template>
  <div class="wxc-demo">
    <scroller class="scroller">
      <title title="lc-dialog"></title>
      <category title="基本用法"></category>
      <div class="button-list">
        <lc-button class="mt20" text="Alert" @LcButtonClicked="open1"></lc-button>
        <lc-button class="mt20" text="不带标题Alert" @LcButtonClicked="open2"></lc-button>
        <lc-button class="mt20" text="带图片Alert" @LcButtonClicked="open3"></lc-button>
        <lc-button class="mt20" text="Confirm" @LcButtonClicked="open4"></lc-button>
      </div>
      <lc-dialog :type="typeDemo"
                :title="titleDemo"
                :content="content"
                :img="imgDemo"
                :src="src"
                confirm-text="确认！"
                cancel-text="取消！"
                :show="showDemo"
                @LcDialogCancelBtnClicked="dialogCancelBtnClick"
                @LcDialogConfirmBtnClicked="dialogConfirmBtnClick"></lc-dialog>

      <category title="Dialog配置"></category>
      <lc-cell :has-top-border="false" :has-bottom-border="false" label="标题文案">
        <input class="input"
               slot="value"
               placeholder="请输入标题"
               :value="title"
               @input="title=$event.value"/>
      </lc-cell>
      <lc-cell :has-top-border="false" :has-bottom-border="false" label="说明文案">
        <input class="input"
               slot="value"
               placeholder="请输入说明内容"
               :value="content"
               @input="content=$event.value"/>
      </lc-cell>
      <lc-cell :has-top-border="false" :has-bottom-border="false" label="主按钮">
        <input class="input"
               slot="value"
               placeholder="确定按钮文案"
               :value="confirmText"
               @input="confirmText=$event.value"/>
      </lc-cell>
      <lc-cell :has-top-border="false" :has-bottom-border="false" label="副按钮">
        <input class="input"
               slot="value"
               placeholder="取消按钮文案"
               :value="cancelText"
               @input="cancelText=$event.value"/>
      </lc-cell>
      <lc-cell :has-top-border="false"
                :has-bottom-border="false"
                :auto-accessible="false"
                label="取消按钮">
        <switch :checked="type==='confirm'"
                slot="value"
                @change="type= type==='confirm' ?'alert' : 'confirm'"></switch>
      </lc-cell>
      <lc-cell :has-top-border="false"
                :auto-accessible="false"
                :has-bottom-border="false"
                label="显示图片">
        <switch :checked="img"
                slot="value"
                @change="img= !img"></switch>
      </lc-cell>
      <!-- <lc-cell :has-top-border="false"
                :auto-accessible="false"
                title="显示不再提示">
        <switch :checked="showNoPrompt"
                slot="value"
                @change="showNoPrompt= !showNoPrompt"></switch>
      </lc-cell>
      <lc-cell :has-top-border="false"
                :auto-accessible="false"
                title="不再提示是否勾选">
        <switch :checked="isChecked"
                slot="value"
                @change="isChecked= !isChecked"></switch>
      </lc-cell>
      <lc-cell :has-top-border="false"
                :auto-accessible="false"
                title="不再提示文案">
        <input class="input"
               slot="value"
               placeholder="取消按钮文案"
               :value="noPromptText"
               @input="noPromptText=$event.value"/>
      </lc-cell> -->
      <div class="btn" @click="openDialog()">
        <text class="btn-txt">打开Dialog试一试</text>
      </div>
    </scroller>
    <lc-dialog :type="type"
                :title="title"
                :content="content"
                :img="img"
                :src="src"
                :confirm-text="confirmText"
                :cancel-text="cancelText"
                :show="show"
                :is-checked="isChecked"
                :no-prompt-text="noPromptText"
                :show-no-prompt="showNoPrompt"
                @LcDialogCancelBtnClicked="dialogCancelBtnClick"
                @LcDialogConfirmBtnClicked="dialogConfirmBtnClick"
                @LcDialogNoPromptClicked="dialogNoPromptClick"></lc-dialog>
  </div>
</template>

<style scoped>
  .mt20{ margin-top:20px;}
  .button-list{padding-left: 30px;}
  .wxc-demo {
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

  .input {
    width: 460px;
    height: 80px;
    line-height: 80px;
    text-align: right;
    margin-right:30px;
  }

  .btn {
    width: 600px;
    height: 80px;
    margin-top: 40px;
    margin-bottom: 40px;
    margin-left: 75px;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    border-radius: 6px;
    background-color: #ffc300;
    border-color: #ffc300;
  }

  .btn-txt {
    font-size: 32px;
    color: #ffffff;
  }
</style>

<script>
  import Title from '@components/lighting/_mods/title.vue'
  import Category from '@components/lighting/_mods/category.vue'
  import { LcButton, LcCell, LcDialog } from 'lighting-ui'

  //   const modal = weex.requireModule('modal');

  export default {
    components: { Title, Category, LcDialog, LcCell, LcButton },
    data: function () {
      return {
        typeDemo: 'alert',
        titleDemo: '',
        showDemo: false,
        imgDemo: false,

        type: 'confirm',
        title: '标题',
        content: '用户需要阅读的内容，这是用户需要阅读的内容。',
        confirmText: '确定',
        cancelText: '取消',
        noPromptText: '不再提示',
        show: false,
        single: false,
        img: false,
        src: 'https://img.alicdn.com/tfs/TB1jkA5g9_I8KJjy0FoXXaFnVXa-320-320.png',
        showNoPrompt: false,
        isChecked: false
      }
    },
    methods: {
      openDialog () {
        const self = this
        self.show = true
      },
      open1 () {
        this.typeDemo = 'alert'
        this.showDemo = true
        this.titleDemo = '这是标题'
      },
      open2 () {
        this.typeDemo = 'alert'
        this.showDemo = true
        this.titleDemo = ''
      },
      open3 () {
        this.typeDemo = 'alert'
        this.showDemo = true
        this.titleDemo = ''
        this.imgDemo = true
      },
      open4 () {
        this.typeDemo = 'confirm'
        this.showDemo = true
        this.titleDemo = '这是确认框'
      },
      open5 () {
        this.showDemo = true
        this.typeDemo = 'toast'
        this.titleDemo = '这是确认框'
      },
      dialogCancelBtnClick () {
        const modal = weex.requireModule('modal')
        this.show = false
        this.showDemo = false
        this.imgDemo = false
        modal.toast({ 'message': '取消回调', 'duration': 1 })
      },
      dialogConfirmBtnClick () {
        const modal = weex.requireModule('modal')
        this.show = false
        this.showDemo = false
        this.imgDemo = false
        modal.toast({ 'message': '确认回调', 'duration': 1 })
      },
      dialogNoPromptClick (e) {
        const modal = weex.requireModule('modal')
        this.isChecked = e.isChecked
        modal.toast({ 'message': `noPrompt isChecked: ${e.isChecked}`, 'duration': 1 })
      }
    }
  }
</script>
