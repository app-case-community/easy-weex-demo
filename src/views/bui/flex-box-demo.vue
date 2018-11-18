<template>
    <div>
        <bui-header
                title="布局(flexbox)"
                :leftItem="leftItem"
                @leftClick="back">
        </bui-header>

        <scroller style="padding: 10px;">
            <div>
                <text class="h4">flex-direction: row | 从左到右排列</text>
                <text class="h4">flex-direction: column | 从上到下排列(默认)</text>
                <div style="margin-top: 30px">
                    <bui-tip type="info" value="class=flex1~flex12"></bui-tip>
                    <div class="flex-row b-p5" style="align-items: stretch;justify-content: flex-start; height: 100px;">
                        <div class="flex1 c-y-f">1</div>
                        <div class="flex2 c-b-d">2</div>
                        <div class="flex3 c-g-d">3</div>
                        <div class="flex4 c-r-f">4</div>
                        <div class="flex5 c-b-d">5</div>
                        <div class="flex6 c-r-f">6</div>
                        <div class="flex7 c-b-d">7</div>
                        <div class="flex8 c-r-f">8</div>
                        <div class="flex9 c-b-d">9</div>
                        <div class="flex10 c-r-f">10</div>
                        <div class="flex11 c-b-d">11</div>
                        <div class="flex12 c-y-f">12</div>
                    </div>
                </div>

                <div style="margin-top: 30px">
                    <bui-tip type="info" value="justify-content: flex-start(默认值)，所有的 flex 成员项排列在容器的前部."></bui-tip>
                    <div class="flex-row b-p5" style="justify-content: flex-start;align-items: stretch; height: 100px;">
                        <div class="c-y-f" style="width:100px">flex1</div>
                        <div class="c-b-d" style="width:100px">flex2</div>
                        <div class="c-g-d" style="width:150px">flex3</div>
                        <div class="c-r-f" style="width:100px">flex4</div>
                    </div>
                </div>

                <div style="margin-top: 30px">
                    <bui-tip type="info" value="justify-content: flex-end; 所有的 flex 成员项排列在容器的后部."></bui-tip>
                    <div class="flex-row b-p5" style="justify-content: flex-end;align-items: stretch; height: 100px;">
                        <div class="c-y-f" style="width:100px">flex1</div>
                        <div class="c-b-d" style="width:100px">flex2</div>
                        <div class="c-g-d" style="width:150px">flex3</div>
                        <div class="c-r-f" style="width:100px">flex4</div>
                    </div>
                </div>

                <div style="margin-top: 30px">
                    <bui-tip type="info" value="justify-content: center; 所有的 flex 成员项排列在容器中间、两边留白."></bui-tip>
                    <div class="flex-row b-p5" style="justify-content: center; align-items: stretch; height: 100px;">
                        <div class="c-y-f" style="width:100px">flex1</div>
                        <div class="c-b-d" style="width:100px">flex2</div>
                        <div class="c-g-d" style="width:150px">flex3</div>
                        <div class="c-r-f" style="width:100px">flex4</div>
                    </div>
                </div>

                <div style="margin-top: 30px">
                    <bui-tip type="info" value="justify-content: space-between; 是两端对齐，空白均匀地填充到 flex 成员项之间."></bui-tip>
                    <div class="flex-row b-p5" style="justify-content: space-between; height: 100px;">
                        <div class="c-y-f" style="width:100px">flex1</div>
                        <div class="c-b-d" style="width:100px">flex2</div>
                        <div class="c-g-d" style="width:150px">flex3</div>
                        <div class="c-r-f" style="width:100px">flex4</div>
                    </div>
                </div>

                <div style="margin-top: 30px">
                    <bui-tip type="info" value="align-items: flex-start; 所有的成员项排列在容器顶部."></bui-tip>
                    <div class="flex-row b-p5" style="align-items: flex-start; height: 500px;">
                        <div class="flex6 c-y-f" style="height: 400px;">flex1</div>
                        <div class="flex3 c-b-d" style="height: 190px;">flex2</div>
                        <div class="flex3 c-g-d" style="height: 300px;">flex3</div>
                        <div class="flex5 c-r-f" style="height: 490px;">flex4</div>
                    </div>
                </div>

                <div style="margin-top: 30px">
                    <bui-tip type="info" value="align-items: flex-end; 所有的成员项排列在容器底部."></bui-tip>
                    <div class="flex-row b-p5" style="align-items: flex-end; height: 500px;">
                        <div class="flex6 c-y-f" style="height: 400px;">flex1</div>
                        <div class="flex3 c-b-d" style="height: 190px;">flex2</div>
                        <div class="flex3 c-g-d" style="height: 300px;">flex3</div>
                        <div class="flex5 c-r-f" style="height: 490px;">flex4</div>
                    </div>
                </div>

                <div style="margin-top: 30px">
                    <bui-tip type="info" value="align-items: center; 所有成员项都垂直居中显示."></bui-tip>
                    <div class="flex-row b-p5" style="align-items: center; height: 500px;">
                        <div class="flex6 c-y-f" style="height: 400px;">flex1</div>
                        <div class="flex3 c-b-d" style="height: 190px;">flex2</div>
                        <div class="flex3 c-g-d" style="height: 300px;">flex3</div>
                        <div class="flex5 c-r-f" style="height: 490px;">flex4</div>
                    </div>
                </div>

                <div style="margin-top: 30px">
                    <bui-tip type="info" value="align-items: stretch(默认值),即拉伸高度至 flex 容器的大小."></bui-tip>
                    <div class="flex-row b-p5" style="align-items: stretch; height: 200px;">
                        <div class="flex6 c-y-f">flex1</div>
                        <div class="flex3 c-b-d">flex2</div>
                        <div class="flex3 c-g-d">flex3</div>
                        <div class="flex5 c-r-f">flex4</div>
                    </div>
                </div>

                <div style="margin-top:30px">
                    <bui-tip type="info" value="网格布局"></bui-tip>
                    <div v-for="(v, i) in list" :key="i" class="flex-row" style="height: 80px;">
                        <div v-for="(text, k) in v" :key="k" class="center flex1"
                            style="border-width: 1px;border-color: #d7dde4">
                            <div>
                                <text>{{text}}</text>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </scroller>
    </div>
</template>

<style>
.b-p5 {
  background-color: #dddddd;
  padding: 5px;
}

.c-y-f {
  background-color: #fcf8e3;
}

.c-b-d {
  background-color: #d9edf7;
}

.c-g-d {
  background-color: #dff0d8;
}

.c-r-f {
  background-color: #f2dede;
}
</style>

<script>
import { BuiHeader, BuiTip } from "weex-bui";
export default {
  components: {
    BuiHeader,
    BuiTip
  },
  data: function() {
    return {
      leftItem: {
        icon: "ion-chevron-left"
      },
      list: [["A", "B", "C"], ["D", "E", "F"], ["G", "H", "I"]]
    };
  },
  methods: {
    back() {
      this.$pop();
    }
  }
};
</script>