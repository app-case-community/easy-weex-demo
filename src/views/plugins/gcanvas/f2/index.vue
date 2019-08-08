<template>
  <scroller>
    <gcanvas
      v-if="isWeex"
      ref="canvas_1"
      style="width:750px;height:400px;"
    ></gcanvas>
    <canvas
      v-if="!isWeex"
      ref="canvas_1"
      style="width:750px;height:400px;"
    ></canvas>

    <gcanvas
      v-if="isWeex"
      ref="canvas_2"
      style="width:750px;height:400px;"
      @panmove="touchstart"
      @panend="touchend"
    ></gcanvas>
    <canvas
      v-if="!isWeex"
      ref="canvas_2"
      style="width:750px;height:400px;"
      @panmove="touchstart"
      @panend="touchend"
    ></canvas>

    <gcanvas
      v-if="isWeex"
      ref="canvas_3"
      style="width:750px;height:400px;"
    ></gcanvas>
    <canvas
      v-if="!isWeex"
      ref="canvas_3"
      style="width:750px;height:400px;"
    ></canvas>

  </scroller>
</template>
<script>
import { enable, WeexBridge } from "gcanvas.js";
import F2 from "@components/f2/chart";
const isWeex = weex.config.env.platform !== "Web";
const data1 = [
  { genre: "2018-03-05", sold: 275 },
  { genre: "圆通", sold: 115 },
  { genre: "装载率", sold: 120 },
  { genre: "Shooter", sold: 350 },
  { genre: "Other", sold: 150 }
];
const data2 = [
  {
    time: "2016-08-08 00:00:00",
    tem: 10
  },
  {
    time: "2016-08-08 00:10:00",
    tem: 22
  },
  {
    time: "2016-08-08 00:30:00",
    tem: 20
  },
  {
    time: "2016-08-09 00:35:00",
    tem: 26
  },
  {
    time: "2016-08-09 01:00:00",
    tem: 20
  },
  {
    time: "2016-08-09 01:20:00",
    tem: 26
  },
  {
    time: "2016-08-10 01:40:00",
    tem: 28
  },
  {
    time: "2016-08-10 02:00:00",
    tem: 20
  },
  {
    time: "2016-08-10 02:20:00",
    tem: 18
  }
];
const data3 = [
  {
    name: "芳华",
    percent: 0.4,
    a: "1"
  },
  {
    name: "妖猫传",
    percent: 0.2,
    a: "1"
  },
  {
    name: "机器之血",
    percent: 0.18,
    a: "1"
  },
  {
    name: "心理罪",
    percent: 0.15,
    a: "1"
  },
  {
    name: "寻梦环游记",
    percent: 0.05,
    a: "1"
  },
  {
    name: "其他",
    percent: 0.02,
    a: "1"
  }
];
export default {
  data() {
    return {
      isWeex: isWeex,
      chart: null,
      timeStamp: 0
    };
  },
  mounted: function() {
    this.setBarChart();
    this.setLineChart();
    this.setPieChart();
  },
  methods: {
    setBarChart() {
      let ref = this.$refs.canvas_1;
      var size = isWeex
        ? {
            width: 750,
            height: 400
          }
        : {
            width: parseInt(ref.style.width),
            height: parseInt(ref.style.height)
          };
      if (!isWeex) {
        ref.width = size.width;
        ref.height = size.height;
      }
      if (isWeex) {
        ref = enable(ref, { bridge: WeexBridge });
      }
      let ctx = ref.getContext("2d");
      const canvas = new F2.Renderer(ctx);
      const chart = new F2.Chart({
        el: canvas, // 将第三步创建的 canvas 对象的上下文传入
        width: size.width, // 必选，图表宽度，同 canvas 的宽度相同
        height: size.height // 必选，图表高度，同 canvas 的高度相同
      });
      chart.source(data1);

      // Step 3：创建图形语法，绘制柱状图，由 genre 和 sold 两个属性决定图形位置，genre 映射至 x 轴，sold 映射至 y 轴
      chart
        .interval()
        .position("genre*sold")
        .color("genre");
      chart.legend("genre", {
        marker: {
          radius: 6 // 半径大小
        }
      });

      // Step 4: 渲染图表
      chart.render();
    },
    setLineChart() {
      let ref = this.$refs.canvas_2;
      var size = isWeex
        ? {
            width: 750,
            height: 400
          }
        : {
            width: parseInt(ref.style.width),
            height: parseInt(ref.style.height)
          };
      if (!isWeex) {
        ref.width = size.width;
        ref.height = size.height;
      }
      if (isWeex) {
        ref = enable(ref, { bridge: WeexBridge });
      }
      let ctx = ref.getContext("2d");
      const canvas = new F2.Renderer(ctx);
      const chart = new F2.Chart({
        el: canvas, // 将第三步创建的 canvas 对象的上下文传入
        width: size.width, // 必选，图表宽度，同 canvas 的宽度相同
        height: size.height // 必选，图表高度，同 canvas 的高度相同
      });
      this.chart = chart;
      let defs = {
        time: {
          type: "timeCat",
          mask: "MM/DD",
          range: [0, 1]
        },
        tem: {
          tickCount: 5,
          min: 0,
          alias: "日均温度"
        }
      };
      chart.source(data2, defs);
      chart.axis("time", {
        label: function label(text, index, total) {
          var textCfg = {};
          if (index === 0) {
            textCfg.textAlign = "left";
          } else if (index === total - 1) {
            textCfg.textAlign = "right";
          }
          return textCfg;
        }
      });
      chart.tooltip({
        showCrosshairs: true
      });
      chart
        .line()
        .position("time*tem")
        .shape("smooth")
        .size(4);
      chart
        .point()
        .position("time*tem")
        .shape("smooth")
        .size(5)
        .style({
          stroke: "#fff",
          lineWidth: 2
        });
      chart.render();
    },
    setPieChart() {
      let map = {
        芳华: "40%",
        妖猫传: "20%",
        机器之血: "18%",
        心理罪: "15%",
        寻梦环游记: "5%",
        其他: "2%"
      };
      let ref = this.$refs.canvas_3;
      var size = isWeex
        ? {
            width: 750,
            height: 400
          }
        : {
            width: parseInt(ref.style.width),
            height: parseInt(ref.style.height)
          };
      if (!isWeex) {
        ref.width = size.width;
        ref.height = size.height;
      }
      if (isWeex) {
        ref = enable(ref, { bridge: WeexBridge });
      }
      let ctx = ref.getContext("2d");
      const canvas = new F2.Renderer(ctx);
      const chart = new F2.Chart({
        el: canvas, // 将第三步创建的 canvas 对象的上下文传入
        width: size.width, // 必选，图表宽度，同 canvas 的宽度相同
        height: size.height // 必选，图表高度，同 canvas 的高度相同
      });

      chart.source(data3, {
        percent: {
          formatter: function formatter(val) {
            return val * 100 + "%";
          }
        }
      });
      chart.legend({
        position: "right",
        itemFormatter: function itemFormatter(val) {
          return val + "  " + map[val];
        }
      });
      chart.tooltip(false);
      chart.coord("polar", {
        transposed: true,
        radius: 0.85
      });
      chart.axis(false);
      chart
        .interval()
        .position("a*percent")
        .color("name", [
          "#1890FF",
          "#13C2C2",
          "#2FC25B",
          "#FACC14",
          "#F04864",
          "#8543E0"
        ])
        .adjust("stack")
        .style({
          lineWidth: 1,
          stroke: "#fff",
          lineJoin: "round",
          lineCap: "round"
        });

      chart.render();
    },
    touchstart(ev) {
      const plot = this.chart.get("plotRange");
      const { x, y } = F2.Util.createEvent(ev, this.chart);
      /*if (!(x >= plot.tl.x && x <= plot.tr.x && y >= plot.tl.y && y <= plot.br.y)) { // not in chart plot
                  this.chart.hideTooltip();
                  return;
                }*/
      const lastTimeStamp = this.timeStamp;
      const timeStamp = +new Date();
      if (timeStamp - lastTimeStamp > 16) {
        this.chart.showTooltip({ x, y });
        this.timeStamp = timeStamp;
      }
    },
    touchend(ev) {
      this.chart.hideTooltip();
    }
  }
};
</script>
