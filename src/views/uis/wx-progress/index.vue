<template>
  <div class="wxc-demo">
    <scroller class="scroller">
      <div class="demo cen">
        <text class="demo-text">使用案例</text>
      </div>
        
      <div class="demo">
        <wxProgress :percent='50' :bar_width='650'></wxProgress>
      </div>
      
      <div class="demo">
        <wxProgress :percent="70"
                    wx_color="#9B7B56"
                    :wx_height="16"
                    :wx_radius="8"
                    :wx_width="650"></wxProgress>
      </div>
      
      <div class="demo cen">
        <wxcProgress 
              :percent="60"
              :wxc_radius='100'>
          <div class="cen">
              <text class="demo-text">{{60}}%</text>
          </div>
        </wxcProgress>
      </div>
    </scroller>
  </div>
</template>


<script>
  import {wxProgress, wxcProgress} from '@components/wx-progress';
  
  export default {
    components: { wxProgress, wxcProgress }
  }
</script>

<style scoped>
  .wxc-demo {
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
  .demo {
    margin: 50px;
  }
  .cen {
    justify-content: center;
    align-items: center;
  }
  .demo-text {
    font-size: 28px;
  }
</style>