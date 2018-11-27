<template>
    <div class="lc-demo">

        <title title="lc-actionsheet"></title>
        <category title="弹出选择框"></category>

        <div style="align-items: center">
            <lc-button text="不带取消按钮" type="normal"  @LcButtonClicked="showSheet1 = true" class="mt20"></lc-button>

            <lc-button text="点击空白处不关闭" type="normal"  @LcButtonClicked="showSheet2 = true" class="mt20"></lc-button>
        </div>

        <lc-actionsheet
            v-model="showSheet1"
            :actions="actions1"
            cancelText=""
            titleText=""
            actionColor="#f00"
            actionFontSize="40px">
        </lc-actionsheet>

        <lc-actionsheet
            v-model="showSheet2"
            :actions="actions2"
            :closeOnClickMask="false"
            titleText="客服服务时间:工作日09:00-20:00"
            cancelColor="#f00"
            cancelFontSize="38px">
        </lc-actionsheet>

    </div>
</template>

<script>
  import Title from '@components/lighting/_mods/title.vue'
  import Category from '@components/lighting/_mods/category.vue'
  import { LcButton } from 'lighting-ui'
  import LcActionsheet from '@components/lighting/res/lc-actionsheet.vue'
  const modal = weex.requireModule('modal')

  export default {
    components: { Title, Category, LcButton, LcActionsheet },
    data () {
      return {
        showSheet1: false,
        showSheet2: false,
        actions1: [
          {
            name: '拍照',
            method: this.takePhoto
          },
          {
            name: '从相册中选择',
            method: this.openAlbum
          }
        ],
        actions2: [
          {
            name: '咨询服务热线:400-888-8888',
            method: this.callPhone
          },
          {
            name: '152-2926-7590',
            method: this.takeMobile
          }
        ]
      }
    },
    methods: {
      takePhoto () {
        modal.toast({ message: 'taking photo' })
      },

      openAlbum () {
        modal.toast({ message: 'opening album' })
      },

      callPhone (action) {
        modal.toast({ message: action.name })
      },

      takeMobile (action) {
        modal.toast({ message: action.name })
      }
    }
  }
</script>
<style scoped>
.button { margin-top: 100px; margin-left: 75px; }
.mt20{margin-top: 20px;}
</style>
