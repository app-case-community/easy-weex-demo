<template>
    <div class="wrapper">

        <scroller class="main-list" offset-accuracy="300px">
            <refresher></refresher>

    <div style="flex-direction:row;border-bottom-style:solid;border-bottom-width:1px;border-bottom-color:#ffda44;aligin-items:center;">
        <image style="width: 60px;height: 60px;flex:1" src="https://sukura7.github.io/vue-xianyu-demo/static/1.png" />

        <div style="flex:6;flex-direction:cloum;height:80px;">
            <text style="font-size:22px;padding:5px;">通知</text>
            <text style="color:#888;padding:5px;font-size:18px;">咸鱼奇葩说|18分钟前</text>

        </div>
            </div>
        </scroller>
    </div>
</template>
<style scoped>
body{
    background-color: white;
}
    .xyIconFont {
        font-family:xyIconFont;
    }
    .wrapper{
        background-color: white;
    }
    .main-list{
        margin-bottom: 90px;
        background-color: white;

    }
    .slogan{
        position: absolute;
        top:110px;
        width: 750px;
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
    }
    .i-slg{
        height: 66px;
        font-size: 26px;
        padding-top: 16px;
        flex: 1;
        text-align: center;
        color: #b4282d;
    }
    .shop-cart{

    }
    .cart-empty{
        height: 350px;
    }
    .img-empty{
        position: absolute;
        width: 750px;
        height: 230px;
        top:20px;
        left: 0;
    }
    .txt-empty{
        position: absolute;
        text-align: center;
        font-size: 30px;
        width: 750px;
        top:250px;
        color:#999;
    }
</style>

<script>
  import Header2 from '../components/Header2.vue'
  import Block3 from '../components/Block3.vue'
  //   import util from '@xianyu/assets/util'
  import refresher from '../components/refresh.vue'
  export default {
    components: {
      'header4': Header2,
      'refresher': refresher,
      'block-3': Block3
    },
    data () {
      return {
        rightBtn: {
          name: '编辑'
        },
        goods3: [
          { tlt: '日式和风敞口保温杯', img: 'http://yanxuan.nosdn.127.net/3aa67fee1c7d046a09f4ce878f4485ac.png?imageView&quality=85&thumbnail=330x330', info: '真空隔热，保温保冷', price: '32' },
          { tlt: '切尔西牛皮女靴', img: 'http://yanxuan.nosdn.127.net/0e9ddf1a0ed5af78e8ec12cb9489df17.png?imageView&quality=85&thumbnail=330x330', info: '经典牛皮切尔西，时尚帅气', price: '289' },
          { tlt: '小馒头 多色双肩包', img: 'http://yanxuan.nosdn.127.net/455eee1712358dbcb2e33d54ab287808.png?imageView&quality=85&thumbnail=330x330', info: '奶油色泽，小巧减龄', price: '79' },
          { tlt: '全棉色织磨毛四件套', img: 'http://yanxuan.nosdn.127.net/3e1c00ce7b49a78e645538a8c45cabcb.png?imageView&quality=85&thumbnail=330x330', info: '优雅色织，温暖磨毛', price: '299' },
          { tlt: '日式和风声波式电动牙刷', img: 'http://yanxuan.nosdn.127.net/e5474a8f4fd5748079e2ba2ead806b51.png?imageView&quality=85&thumbnail=330x330', info: '进口刷毛，专利技术', price: '119' },
          { tlt: '多功能商务双肩包', img: 'http://yanxuan.nosdn.127.net/795884dc6d995eca9a091a6358e3634d.png?imageView&quality=85&thumbnail=330x330', info: '17个功能分区，内置分层收纳', price: '334' },
          { tlt: '黑凤梨 20寸PC膜拉链登机箱', img: 'http://yanxuan.nosdn.127.net/3108aaae80416b1cf27c3d7cc5661cea.png?imageView&quality=85&thumbnail=330x330', info: '热卖9万只，网易人手1只', price: '185' },
          { tlt: '日式蓬软太鼓抱枕', img: 'http://yanxuan.nosdn.127.net/ad953e16ad8c33b714e7af941ce8cd56.png?imageView&quality=85&thumbnail=330x330', info: '萌趣太鼓造型 软糯轻柔回弹', price: '29' },
          { tlt: '可水洗抗菌防螨丝羽绒枕', img: 'http://yanxuan.nosdn.127.net/a6c9e142fd008b3734c690a71a78ae5b.png?imageView&quality=85&thumbnail=330x330', info: '进口防螨布，热销50万件', price: '99' },
          { tlt: '双宫茧桑蚕丝被 空调被', img: 'http://yanxuan.nosdn.127.net/6b341648f59d0c3eb48fa81e1d2de06e.png?imageView&quality=85&thumbnail=330x330', info: '一级桑蚕丝，吸湿透气柔软', price: '479' },
          { tlt: '怀抱休闲椅组合（皮款）', img: 'http://yanxuan.nosdn.127.net/b5289125e9b55cf72e9a9623d006415e.png?imageView&quality=85&thumbnail=330x330', info: '葛优躺神器皮款', price: '3999' },
          { tlt: '欧式哑光餐具套装', img: 'http://yanxuan.nosdn.127.net/431e86c88b4a6c9f065d1d8abea6b603.png?imageView&quality=85&thumbnail=330x330', info: '德化白瓷，坚实耐用', price: '189' },
          { tlt: '清新两用杯', img: 'http://yanxuan.nosdn.127.net/431f5d142e3dd9946dc8e38c2aa3cd34.png?imageView&quality=85&thumbnail=330x330', info: '办公杯优选 轻松饮茶', price: '52' },
          { tlt: '两带式男/女款拖鞋', img: 'http://yanxuan.nosdn.127.net/7d1c130c7d80edf824e4218c6829b7c8.png?imageView&quality=85&thumbnail=330x330', info: '鞋杯随脚型而变，舒适呵护', price: '69.9' }
        ],
        goodList: []
      }
    },

    methods: {
    }
  }
</script>
