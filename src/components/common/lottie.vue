<template>
  <div ref="lavContainer"></div>
</template>

<script>
  import lottie from 'lottie-web'

  export default {
    props: {
      options: Object,
      autoplay: {
        type: Boolean,
        default: false
      },
      loop: {
        type: [Boolean, String],
        default: true
      },
      src: String
    },
    mounted () {
      let otherOptions = {
        container: this.$refs.lavContainer.$el,
        renderer: 'svg',
        prerender: true,
        loop: this.loop !== false,
        autoplay: this.autoplay !== false,
        path: this.src
      }
      this.anim = lottie.loadAnimation(otherOptions)
      this.$emit('loaded')
    },
    beforeDestroy () {
      this.anim = null
      this.anim = undefined
    },
    methods: {
      play () {
        this.anim && this.anim.play()
      },
      pause () {
        this.anim && this.anim.pause()
      },
      reset () {
        this.anim && this.anim.reset()
      }
    }
  }
</script>
