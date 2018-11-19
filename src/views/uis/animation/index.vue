<template>
    <div class="wrap">
        <text ref="text" class="animation-text">Weex Animation</text>
        <select-animation 
            :animations="animations" v-if="platform === 'Web'"
            @change="e => setAnimation(e.target.value)"></select-animation>
        <text v-else class="button" @click="pickAnimation">Select Animation</text>
    </div>
</template>
<style scoped>
.wrap {
  padding-top: 30px;
}

.animation-text {
  color: #f35626;
  text-align: center;
  margin-top: 50px;
  margin-bottom: 100px;
  opacity: 0;
}

.button {
  width: 500px;
  line-height: 60px;
  background-color: #f35626;
  color: #fff;
  align-self: center;
  text-align: center;
  border-radius: 10px;
}
</style>

<script>
import SelectAnimation from "@components/animation/SelectAnimation.vue";

import * as animation from './animation';

const modal = weex.requireModule("modal");
const picker = weex.requireModule("picker");

export default {
  name: "weex-animation",
  components: {
    SelectAnimation
  },
  data() {
    return {
      animations: Object.keys(animation).filter(item => item !== "transition"),
      platform: weex.config.env.platform
    };
  },
  mounted() {
    setTimeout(() => {
      animation.fadeIn(this.$refs.text);
    }, 500);
  },
  methods: {
    pickAnimation() {
      picker.pick(
        {
          index: 0,
          items: this.animations
        },
        event => {
          if (event.result === "success") {
            const index = event.data;
            this.setAnimation(this.animations[index]);
          }
        }
      );
    },
    async setAnimation(animationName) {
      await animation[animationName](this.$refs.text);
      await animation.transition(this.$refs.text, {
        styles: {
          opacity: 1,
          transform: "scale(1)"
        },
        duration: 0.0001,
        delay: 300
      });
      console.log(animationName);
      modal.toast({
        message: animationName,
        duration: 0.3
      });
    }
  }
};
</script>
