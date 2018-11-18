<template>
    <div>
        <bui-header
                title="流程图(bui-flow)"
                :leftItem="leftItem"
                @centerClick="centerClick"
                @leftClick="back">
        </bui-header>

        <div style="padding: 10px;flex:1">
            <scroller>
                <text class="h4 titleEx">含标题、描述、时间的流程图</text>
                <bui-flow
                        :items="testData"
                        @click="_click"></bui-flow>
                <text class="h4 titleEx mT50">可只显示标题，也支持显示多个高亮</text>
                <bui-flow
                        :items="testData2"
                        @click="_click"></bui-flow>
                <text class="h4 titleEx mT50">可配置主题色(默认-标题、截点、线的颜色, 高亮-标题、截点颜色)</text>
                <bui-flow
                        :items="testData"
                        :customStyles="customStyles"
                        @click="_click2"></bui-flow>
                <text class="h4 titleEx mT50">场景1-与弹出框结合案例</text>
                <text style="text-align: center;background-color: #ff9900;padding: 30px;border-radius: 10px;color: #fff;" @click="showDialog=true">弹出框流程图</text>

                <text class="h4 titleEx mT50">场景2-支持流程图数据更新案例</text>
                <text style="text-align: center;background-color: #ff9900;padding: 30px;border-radius: 10px;color: #fff;" @click="update = !update">点击数据更新</text>
                <bui-flow
                        :items="update ? testData : testData.slice(0,2)"
                        @click="_click3"></bui-flow>
            </scroller>
        </div>
        <bui-dialog v-model="showDialog"
                    :buttons="'关闭'"
                    :title="''"
                    :height="'800px'"
                    :top="'100px'"
                    @btnClick="showDialog=false">
            <bui-flow
                    :items="testData"
                    @click="_click4"></bui-flow>
        </bui-dialog>


    </div>
</template>


<style scoped>
.titleEx {
  margin-bottom: 20px;
  background-color: #f8f8f8;
  padding: 8px;
}
.mT50 {
  margin-top: 50px;
}
</style>

<script>
import { BuiHeader, BuiFlow, BuiDialog } from "weex-bui";
export default {
  components: {
    BuiHeader,
    BuiFlow,
    BuiDialog
  },
  data: function() {
    return {
      leftItem: {
        icon: "ion-chevron-left"
      },
      update: false,
      showDialog: false,
      testData: [
        {
          // 'date': '2017-05-24 21:10:29',
          // 'desc': '结束',
          highlight: true,
          title: "页面交互输出"
        },
        {
          date: "2017-05-24 21:10:29",
          desc: "回流到客户确认",
          title: "设计稿上传"
        },
        {
          date: "2017-05-24 19:54:28",
          desc: "产品经理需跟业务与设计相关人员确认",
          title: "产品经理确认"
        },
        {
          date: "2017-05-24 19:50:21",
          desc: "以需求方案输出产品原型,需要客户确认",
          title: "产品原型图"
        },
        {
          date: "2017-05-24 19:49:03",
          desc: "业务员根据客户的需要制定产品解决方案",
          title: "客户提出需求方案"
        }
      ],
      testData2: [
        {
          highlight: true,
          title: "页面交互输出"
        },
        {
          highlight: true,
          title: "设计稿上传"
        },
        {
          title: "产品经理确认"
        },
        {
          title: "产品原型图"
        },
        {
          title: "客户提出需求方案"
        }
      ],
      customStyles: {
        highlightTitleColor: "#EE9900",
        highlightPointInnerColor: "#EE9900",
        highlightPointBorderColor: "#FFE78D"
      }
    };
  },
  methods: {
    back() {
      this.$pop();
    },
    _click(e) {
      this.$toast(e);
    },
    _click2(e) {
      this.$toast(e);
    },
    _click3(e) {
      this.$toast(e);
    },
    _click4(e) {
      this.$toast(e);
    },
    centerClick () {

    },
    overLimit(e) {
      this.$toast(`最多选择${e}个`);
    }
  }
};
</script>
<style>
</style>