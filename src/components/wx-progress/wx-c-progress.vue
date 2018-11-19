<template>
  <div class="wx_c">
    <div class="wx_container" :style="containerStyle">
        <div ref="wx_circle" class="wx_circle" :style="circleStyle"></div>
        <div ref="wx_left" class="wx_left-box" :style="leftStyle"></div>
        <div ref="wx_right" class="wx_right-box" :style="rightStyle"></div>
        <div v-if="rightMask" class="wx_right-box" :style="rightStyle_mask"></div>
        <div class="wx_innerCircle" :style="innerCircleStyle">
            <slot></slot>
        </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
const animation = weex.requireModule("animation");

export default {
  data() {
    return {
      rightMask: false
    };
  },
  props: {
    wxc_color: {
      type: String,
      default: "#42b983"
    },
    wxc_bgColor: {
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
    wxc_radius: {
      type: Number,
      default: 100
    },
    wxc_stokenWidth: {
      type: Number,
      default: 4
    }
  },
  computed: {
    containerStyle() {
      const { wxc_radius } = this;
      return {
        height: `${wxc_radius * 2}px`,
        width: `${wxc_radius * 2}px`,
        borderRadius: `${wxc_radius}px`
      };
    },
    circleStyle() {
      const { wxc_radius, wxc_color } = this;
      return {
        height: `${wxc_radius * 2}px`,
        width: `${wxc_radius * 2}px`,
        backgroundColor: wxc_color,
        borderRadius: `${wxc_radius}px`
      };
    },
    innerCircleStyle() {
      const { wxc_radius, wxc_stokenWidth } = this;
      return {
        height: `${(wxc_radius - wxc_stokenWidth) * 2}px`,
        width: `${(wxc_radius - wxc_stokenWidth) * 2}px`,
        backgroundColor: "#FFFFFF",
        borderRadius: `${wxc_radius - wxc_stokenWidth}px`,
        top: `${wxc_stokenWidth}`,
        left: `${wxc_stokenWidth}`
      };
    },
    leftStyle() {
      const { wxc_radius, wxc_bgColor } = this;
      return {
        height: `${wxc_radius * 2}px`,
        width: `${wxc_radius}px`,
        backgroundColor: wxc_bgColor,
        borderTopLeftRadius: `${wxc_radius}px`,
        borderBottomLeftRadius: `${wxc_radius}px`
      };
    },
    rightStyle() {
      const { wxc_radius, wxc_bgColor } = this;
      return {
        height: `${wxc_radius * 2}px`,
        width: `${wxc_radius}px`,
        backgroundColor: wxc_bgColor,
        borderTopRightRadius: `${wxc_radius}px`,
        borderBottomRightRadius: `${wxc_radius}px`
      };
    },
    rightStyle_mask() {
      const { wxc_radius, wxc_color } = this;
      return {
        height: `${wxc_radius * 2}px`,
        width: `${wxc_radius}px`,
        backgroundColor: wxc_color,
        borderTopRightRadius: `${wxc_radius}px`,
        borderBottomRightRadius: `${wxc_radius}px`
      };
    }
  },
  mounted() {
    this.percent =
      this.percent > 100 ? 100 : this.percent < 0 ? 0 : this.percent; // 校正数据
    // start
    this.rightAnim(this.percent, false);
  },
  methods: {
    rightAnim(percent, end = false) {
      let rightTransformerDegree =
        (end ? 0 : (percent > 50 ? 50 : percent) * 3.6) + "deg";
      let _duration = this.duration * ((percent > 50 ? 50 : percent) / percent);
      let _right = this.$refs.wx_right;
      animation.transition(
        _right,
        {
          styles: {
            backgroundColor: end ? this.wxc_color : this.wxc_bgColor,
            transform: "rotate(" + rightTransformerDegree + ")",
            transformOrigin: "left center"
          },
          duration: end ? 0 : parseInt(_duration), //ms
          timingFunction: "linear",
          delay: 0 //ms
        },
        () => {
          if (percent >= 50) {
            if (end) {
              if (weex.config.env.platform.toLowerCase() == "ios") {
                this.rightMask = true;
              }
              this.leftAnim(percent);
            } else {
              this.rightAnim(percent, true);
            }
          }
        }
      );
    },
    leftAnim(percent) {
      let leftTransformerDegree = (percent - 50) * 3.6 + "deg";
      let _duration = (this.duration * (percent - 50)) / percent;
      let _left = this.$refs.wx_left;
      animation.transition(
        _left,
        {
          styles: {
            backgroundColor: this.wxc_bgColor,
            transform: "rotate(" + leftTransformerDegree + ")",
            transformOrigin: "right center"
          },
          duration: parseInt(_duration), //ms
          timingFunction: "linear",
          delay: 0 //ms
        },
        () => {
          // end
        }
      );
    }
  }
};
</script>

<style scoped>
.wx_c {
  justify-content: center;
  align-items: center;
}
.wx_container {
  justify-content: center;
  align-items: center;
  overflow: hidden;
}
.wx_circle {
  justify-content: center;
  align-items: center;
  overflow: hidden;
}
.wx_innerCircle {
  justify-content: center;
  align-items: center;
  overflow: hidden;
  position: absolute;
}
.wx_left-box {
  overflow: hidden;
  position: absolute;
  top: 0;
  left: 0;
}
.wx_right-box {
  overflow: hidden;
  position: absolute;
  top: 0;
  right: 0;
}
</style>
