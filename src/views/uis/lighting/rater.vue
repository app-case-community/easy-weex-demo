<template>
    <div class="lc-demo">

        <scroller class="scroller">
            <title title="lc-rater"></title>
            <category title="不同大小"></category>
            <div class="container">
                <lc-rater :score="score1" @lcRaterScoreChanged="scoreChanged"></lc-rater>
                <text class="sc"> {{score}} 分</text>
            </div>
            <div class="container">
                <lc-rater size="small"></lc-rater>
            </div>
            <category title="不同主题颜色"></category>
            <div class="container">
                <lc-rater theme="normal"></lc-rater>
            </div>
            <div class="container">
                <lc-rater theme="normal" size='small'></lc-rater>
            </div>
            <div class="container">
                <lc-rater theme="special"></lc-rater>
            </div>
            <div class="container">
                <lc-rater theme="special" size='small'></lc-rater>
            </div>
            <div class="container dark">
                <lc-rater theme="dark"></lc-rater>
            </div>
            <div class="container dark">
                <lc-rater theme="dark" size='small'></lc-rater>
            </div>
            <div class="container">
                <lc-rater size='small'></lc-rater>
            </div>
            <category title="不同的初始化分数"></category>
            <div class="container">
                <lc-rater :score="2" :canChange="false"></lc-rater>
            </div>
            <div class="container">
                <lc-rater :score="4" :canChange="false"></lc-rater>
            </div>
            <div class="container">
                <lc-rater :score="6" :canChange="false"></lc-rater>
            </div>
            <category title="分数更改后回调"></category>
            <div class="container">
                <lc-rater @lcRaterScoreChanged="scoreChanged1"></lc-rater>
            </div>
        </scroller>

    </div>
</template>

<script>
  import Title from '@components/lighting/_mods/title.vue'
  import Category from '@components/lighting/_mods/category.vue'
  import { LcRater } from 'lighting-ui'
  // import { LcRater } from '../res/lc-rater.vue'
  const modal = weex.requireModule('modal')

  export default {
    components: { Title, Category, LcRater },
    data () {
      return {
        score1: 2,
        score: null
      }
    },
    methods: {
      scoreChanged (e) {
        this.score = e.score
      },
      scoreChanged1 (e) {
        modal.toast({ message: e.score })
      }
    },
    mounted () {
      this.score = this.score1
    }
  }
</script>
<style scoped>
  .container {
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin-top: 50px;
  }
  .dark {
    background-color: rgb(74, 74, 74);
  }
  .sc{ font-size: 40px; color: orange; font-weight: bold;}
</style>
