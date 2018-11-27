<template>
  <div class="wxc-demo">
    <title title="lc-bank"></title>
    <category title="使用案例"></category>

    <div class="btn" @click="openPopup">
        <text class="btn-txt">点击选择银行卡</text>
    </div>

    <lc-popup
            :show="isPopShow"
            pos="bottom"
            height="800">
      <lc-bank
        :list="cardList"
        @bankSelected="selectHandler"
      ></lc-bank>
    </lc-popup>

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
  .btn {
    width: 600px;
    height: 80px;
    margin-top: 150px;
    margin-left: 75px;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    border-radius: 6px;
    background-color: #399de2;
    border-color: #399de2;
  }
  .btn-txt{
    color: #ffffff;
    font-size: 26px;
  }
</style>

<script>
  import { LcPopup, LcBank } from 'lighting-ui'
  import Category from '@components/lighting/_mods/category.vue'
  import Title from '@components/lighting/_mods/title.vue'

  export default {
    components: { Title, Category, LcPopup, LcBank },
    data: () => ({
      cardList: [],
      isPopShow: false
    }),
    created () {
      this.cardList = [
        {
          bank: 'abc',
          num: '2314',
          balance: 136123.00,
          tradeLimit: 50,
          dayLimit: 100,
          special: '1折起',
          visa: false
        },
        {
          bank: 'cmb',
          num: '8732',
          balance: 136123.00,
          tradeLimit: 50,
          dayLimit: 100,
          visa: false
        },
        {
          bank: 'icbc',
          num: '8732',
          balance: 136123.00,
          tradeLimit: 50,
          dayLimit: 100,
          visa: true
        },
        {
          bank: 'boc',
          num: '3456',
          balance: 136123.00,
          tradeLimit: 50,
          dayLimit: 100,
          visa: true
        },
        {
          bank: 'cmbc',
          num: '7523',
          balance: 136123.00,
          tradeLimit: 50,
          dayLimit: 100,
          visa: true
        },
        {
          bank: 'psbc',
          num: '5654',
          balance: 136123.00,
          tradeLimit: 50,
          dayLimit: 100,
          visa: true
        }
      ]
    },
    methods: {
      selectHandler (data) {
        console.log(data)
      },
      openPopup () {
        this.isPopShow = true
      }
    }
  }
</script>
