<template>
    <div ref="test" style="background-color: #1ba1e2">
        <gcanvas @touchstart="touchstart" @touchmove="touchmove" @touchend="touchend" ref="gcanvess"
                style="width: 650px;height: 1000px;background-color: yellow;margin-left: 50px"></gcanvas>
    </div>
</template>
<style type="text/css" scoped>
</style>
<script>
var libGCanvas = require("weex-gcanvas");
// libGCanvas.htmlPlugin.init(weex);
var modal = weex.requireModule("modal");
export default {
  data: {
    startX: 0,
    startY: 0,
    currentX: 0,
    currentY: 0,
    context: {},
    canvasObj: {}
  },
  methods: {
    touchstart(event) {
      this.startX = event.changedTouches[0].pageX;
      this.startY = event.changedTouches[0].pageY;
      this.context.strokeStyle = "#17acf6"; //设置线的颜色状态
      this.context.lineWidth = 10; //设置线宽状态
    },
    touchmove(event) {
      this.currentX = event.changedTouches[0].pageX;
      this.currentY = event.changedTouches[0].pageY;
      //进行绘制
      this.context.moveTo(this.startX, this.startY);
      this.context.lineTo(this.currentX, this.currentY);
      this.context.stroke();

      this.startX = event.changedTouches[0].pageX;
      this.startY = event.changedTouches[0].pageY;
    },
    touchend(event) {}
  },
  created() {
    var self = this;
    var globalEvent = weex.requireModule("globalEvent");
    globalEvent.addEventListener("onPageInit", function(e) {
      //以下是核心代代码，需在合适的时机调用，我这里在自己定义的界面加载完成的全局事件中调用了
      /*获取元素引用*/
    //   var ref = self.$refs.gcanvess;
    //   /*通过元素引用获取canvas对象*/
    //   self.canvasObj = libGCanvas.start(ref);
    //   /*获取绘图所需的上下文，目前不支持3d*/
    //   self.context = self.canvasObj.getContext("2d");
    //   /*设置字体大小*/
    //   self.context.font = "34px";
    //   /*在指定位置绘制文字*/
    //   self.context.fillText("Hello Word", 200, 100);
    //   /*指定绘制图形的线的宽度*/
    //   self.context.lineWidth = 10;
    //   /*在指定位置绘制矩形*/
    //   self.context.strokeRect(200, 200, 200, 90);
    //   /*绘制三角形*/
    //   self.context.beginPath();
    });
  }
};
</script>