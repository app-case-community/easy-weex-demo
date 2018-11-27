<template>
  <div class="rater-wrap" ref="rater" @touchstart="raterTouchStart" @touchmove="raterTouchmove" @touchend="raterTouchend">
    <div class="rater-star-bg">
      <image :class="starClz" :src="getBgImgs" />
      <image :class="starClz" :src="getBgImgs" />
      <image :class="starClz" :src="getBgImgs" />
      <image :class="starClz" :src="getBgImgs" />
      <image :class="starClz" :src="getBgImgs" />
    </div>
    <div class="rater-star" :style="wraperWidth">
      <image :class="starClz" v-for="(item, index) in getImgs" :key="index" :src="item" />
    </div>
  </div>
</template>

<style scoped>
  .rater-wrap {
    position: relative;
    flex-direction: row;
  }
  .rater-star {
    flex-direction: row;
    position: absolute;
    overflow: hidden;
    left: 0;
    top: 0;
  }
  .rater-star-bg {
    flex-direction: row;
  }
  .rater-star-cover {
    position: absolute;
    overflow: hidden;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
  }
  .star {
  }
  .star_small {
    width: 30px;
    height: 30px;
    margin: 0 3px;
  }
  .star_big {
    width: 60px;
    height: 60px;
    margin: 0 13px;
  }
</style>

<script>
  import STARS from './stars'
  const dom = weex.requireModule('dom')
  export default {
    name: 'LcRater',
    components: { },
    props: {
      score: {
        type: Number,
        default: 5
      },
      fullScore: {
        type: Number,
        default: 10
      },
      size: {
        type: String,
        default: 'big'
      },
      theme: {
        type: String,
        default: 'normal'
      },
      canChange: {
        type: Boolean,
        default: true
      },
      canSlide: {
        type: Boolean,
        default: true
      },
      starImg: {
        type: [Array, String],
        default: ''
      },
      bgImg: {
        type: String,
        default: ''
      }
    },
    data: () => ({
      offset_left: 0,
      starCount: 5,
      scoreRater: null
    }),
    watch: {
      score (val) {
        this.scoreRater = val
      }
    },
    computed: {
      starClz () {
        const clz = ['star']
        this.size === 'big' ? clz.push('star_big') : clz.push('star_small')
        return clz
      },
      wraperWidth () {
        var { scoreRater, fullScore, size } = this
        const HALF_STAR_WIDTH = size === 'big' ? 43 : 18
        const percent = scoreRater / fullScore
        let length = scoreRater <= 0 ? 0 : percent >= 1 ? 10 : percent.toFixed(1) * 10
        length = isNaN(length) ? 0 : length

        return !length ? {
          width: 1,
          opacity: 0
        } : {
          width: length * HALF_STAR_WIDTH + 'px',
          opacity: 1
        }
      },
      getImgs () {
        const { theme, starImg } = this
        let imgItem
        if (starImg) {
          if (Array.isArray(starImg)) { return starImg }
          imgItem = starImg
        } else if (theme === 'normal') {
          return STARS.NORMAL
        } else if (theme === 'special') {
          imgItem = STARS.SPECIAL
        } else if (theme === 'dark') {
          imgItem = STARS.DARK
        }
        const arr = []
        for (let i = 0; i < 5; i++) {
          arr.push(imgItem)
        }
        return arr
      },
      getBgImgs () {
        const { theme, bgImg } = this
        if (bgImg) { return bgImg }
        if (theme === 'normal' || theme === 'special') {
          return STARS.BG_NORMAL
        } else if (theme === 'dark') {
          return STARS.BG_DARK
        }
      }
    },
    methods: {
      raterTouchStart (e) {
        const { canChange, canSlide } = this
        if (!canChange || !canSlide) return
        this.calculateScore(e.changedTouches[0].pageX, true)
      },
      raterTouchmove (e) {
        const { canChange, canSlide } = this
        if (!canChange || !canSlide) return
        this.calculateScore(e.changedTouches[0].pageX, true)
      },
      raterTouchend (e) {
        const { canChange } = this
        if (!canChange) return
        this.calculateScore(e.changedTouches[0].pageX, true)
      },
      calculateScore (pageX, needEmit) {
        const { size, fullScore } = this
        if (weex.config.env.platform === 'Web') {
          pageX = pageX * 1.5 / 750 * 1080 - this.offset_left
        } else if (weex.config.env.platform === 'iOS') {
          pageX = pageX - this.offset_left
        }

        const HALF_STAR_WIDTH = size === 'big' ? 43 : 18
        const HALF_STAR_SCORE = fullScore / 10
        const STAR_NUM = (pageX / HALF_STAR_WIDTH).toFixed(0)
        const SCORE_PERCENT = STAR_NUM <= 0 ? 0 : STAR_NUM >= 10 ? 10 : STAR_NUM
        this.scoreRater = SCORE_PERCENT * HALF_STAR_SCORE
        needEmit && this.$emit('lcRaterScoreChanged', { score: this.scoreRater })
      }
    },
    mounted () {
      this.scoreRater = this.score
      if (weex.config.env.platform !== 'Android') {
        setTimeout(() => {
          dom.getComponentRect(this.$refs.rater, option => {
            this.offset_left = option.size.left
          })
        }, 50)
      }
    }
  }
</script>
