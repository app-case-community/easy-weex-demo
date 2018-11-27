
<template>
  <div class="lc-demo">
    <scroller class="scroller">
      <title title="lc-progress"></title>
      <category title="使用案例"></category>
      <div class="demo first-demo">
        <text class="demo-text">默认</text>
        <lc-progress></lc-progress>
      </div>
      <div class="demo">
        <text class="demo-text">设置value</text>
        <lc-progress :value="50" :bar-width="600"></lc-progress>
      </div>
      <div class="demo">
        <text class="demo-text">自定义</text>
        <lc-progress :value="70"
          bar-color='#399DE2'
          border-color="#399DE2"
          bg-color="#bfbdbb"
          :bar-height="20"
          :bar-width="640"></lc-progress>
      </div>

      <div class="btn"
           @click="uploadFile">
        <text class="btn-txt">上传文件</text>
      </div>
      <div class="up-demo" v-if="progressVisible">
        <text class="progress-text left">0</text>
        <lc-progress :value="value" :bar-width="540"></lc-progress>
        <text class="progress-text right">{{value}}</text>
      </div>
    </scroller>
  </div>
</template>

<style scoped>
  .lc-demo {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #ffffff;
  }

  .scroller {
    flex: 1;
  }

  .first-demo {
    margin-top: 80px;
  }

  .demo {
    margin-bottom: 50px;
    padding-left: 75px;
  }

  .demo-text {
    margin-bottom: 20px;
  }

  .up-demo {
    flex-direction: row;
    justify-content: center;
    align-items: center;
    /* margin-left: 32px; */
  }

  .progress-text {
    font-size: 24px;
    color: #44B825;
  }

  .left {
    margin-right: 10px;
  }

  .right {
    margin-left: 10px;
  }

  .btn {
    width: 600px;
    height: 80px;
    margin-top: 60px;
    margin-bottom: 50px;
    margin-left: 75px;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    border-radius: 6px;
    background-color: #399DE2;
    border-color: #399DE2;
  }

  .btn-txt {
    font-size: 32px;
    color: #ffffff;
  }
</style>

<script>
  import Title from '@components/lighting/_mods/title.vue'
  import Category from '@components/lighting/_mods/category.vue'
  import { LcProgress } from 'lighting-ui'

  export default {
    components: { Title, Category, LcProgress },
    data: () => ({
      value: 0,
      uploading: false,
      progressVisible: false,
      timer: null
    }),
    methods: {
      uploadFile () {
        if (!this.uploading) {
          this.value = 0
          this.uploading = true
          this.progressVisible = true
          this.timer = setInterval(() => {
            if (this.value < 100) {
              this.value++
            } else {
              this.uploading = false
              setTimeout(() => {
                this.progressVisible = false
              }, 500)
              clearTimeout(this.timer)
            }
          }, 100)
        }
      }
    }
  }
</script>
