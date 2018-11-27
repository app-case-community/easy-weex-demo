<template>
  <div class="wxc-demo">
    <title title="lc-map"></title>

    <category title="map组件"></category>
    <div style="flex-direction:row; width:750px; margin-top:10px;">
      <div class="func-btn" style="background-color:#f66;" @click="relocate">
        <text class="func-btn-text">重新定位</text>
      </div>
      <div class="func-btn" style="background-color:#6d6;" @click="getLocation">
        <text class="func-btn-text">获取位置接口</text>
      </div>
    </div>
    <div class="searchWrap">
        <input type="text" placeholder="搜索" class="input" @input="oninput"/>
        <text class="confirm" @click="searchLocation">确定</text>
    </div>
    <text class="warn">*JSN下需要打包才能预览效果</text>
    <lc-map ref="map" :mapHeight="600"
        @getAddInfo="getAddInfo"
        @getNearby="getNearby"
        @locatedStatus="locatedStatus"
        :searchRadius="800"
        :intervalTime="10000">
    </lc-map>

    <scroller style="height:300px;">
        <div v-for="(v,i) in result" :key="i">
          <text class="text">{{v}}</text>
        </div>
    </scroller>

  </div>
</template>

<style scoped>
  .wxc-demo {
    background-color: #FFFFFF;
  }
  .func-btn {
		flex: 1;
		height: 80px;
		justify-content: center;
	}

	.func-btn-text {
		font-size: 32px;
		color: aliceblue;
		text-align: center;
	}
  .text{ text-align: left; margin-top: 10px;}
  .warn{ color: crimson; margin: 10px; font-size: 26px;}
  .searchWrap{ display: flex; flex-direction: row; margin-top: 10px; margin-left: 20px; margin-right: 20px;}
  .input{ flex:1; border-width: 1px; border-color: #999; padding-left: 20px;}
  .confirm{ width: 100px; height: 50px; background-color: #ffd000; color: #FFFFFF; margin-left: 20px; text-align: center;}
</style>

<script>
  import { LcMap } from 'lighting-ui'
  import Category from '@components/lighting/_mods/category.vue'
  import Title from '@components/lighting/_mods/title.vue'
  const modal = weex.requireModule('modal')
  export default {
    components: { Title, Category, LcMap },
    data: () => ({
      result: '',
      searchValue: ''
    }),
    created () {
    },
    methods: {
      // 定位当前位置
      relocate () {
        this.$refs.map.relocate()
      },
      // 逆地址批量查询
      getLocation () {
        this.$refs.map.getLocation()
      },
      // 搜索
      searchLocation () {
        if (this.searchValue === '') {
          this.result = ''
          modal.toast({
            message: '搜索内容为空',
            duration: 1
          })
        }
        this.$refs.map.searchLocation(this.searchValue)
      },

      oninput (event) {
        this.searchValue = event.value
      },

      getAddInfo (inf) {
        this.result = ''
        this.result = inf
      },
      getNearby (nb) {
        this.result = ''
        this.result = nb
      },
      locatedStatus (val) {
        if (val === 'success') {
          console.log('success')
        } else if (val === 'failed') {
          console.log('failed')
        }
      }
    },
    mounted () {
    }
  }
</script>
