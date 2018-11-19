<template>
  <div :style="graphStyle">
    <div class="wx_bg" :style="bgStyle"></div>
    <div ref="wx_bar" class="wx_bar" :style="barStyle"></div>
  </div>
</template>

<script>
/* eslint-disable */
const animation = weex.requireModule("animation");

export default {
  props: {
    wx_color: {
      type: String,
      default: "#42b983"
    },
    wx_bgColor: {
      type: String,
      default: "#EEEEEE"
    },
    duration: {
      type: Number,
      default: 2000
    },
    percent: {
      type: Number,
      default: 0
    },
    wx_radius: {
      type: Number,
      default: 5
    },
    wx_width: {
      type: Number,
      default: 600
    },
    wx_height: {
      type: Number,
      default: 10
    }
  },
  computed: {
    graphStyle() {
      const { wx_width, wx_height } = this;
      return {
        width: `${wx_width}px`,
        height: `${wx_height}px`
      };
    },
    barStyle() {
      const { wx_radius, wx_height, wx_color } = this;
      return {
        height: `${wx_height}px`,
        width: `${0}px`,
        backgroundColor: wx_color,
        borderRadius: `${wx_radius}px`
      };
    },
    bgStyle() {
      const { wx_radius, wx_width, wx_height, wx_bgColor } = this;
      return {
        height: `${wx_height}px`,
        width: `${wx_width}px`,
        backgroundColor: wx_bgColor,
        borderRadius: `${wx_radius}px`
      };
    }
  },
  mounted() {
    this.percent =
      this.percent > 100 ? 100 : this.percent < 0 ? 0 : this.percent; // 校正数据
    // start
    this._anim();
  },
  methods: {
    _anim() {
      let _wx_bar = this.$refs.wx_bar;
      animation.transition(
        _wx_bar,
        {
          styles: {
            width: (this.wx_width * this.percent) / 100 + "px"
          },
          duration: this.duration,
          timingFunction: "linear",
          delay: 0 //ms
        },
        () => {
          //end
        }
      );
    }
  }
};
</script>

<style scoped>
.wx_bg {
  position: absolute;
}
.wx_bar {
  position: absolute;
}
</style>
