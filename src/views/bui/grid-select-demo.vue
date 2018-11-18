<template>
    <div>
        <bui-header
                title="多格筛选(bui-grid-select)"
                :leftItem="leftItem"
                @centerClick="centerClick"
                @leftClick="back">
        </bui-header>

        <div style="padding: 10px;flex:1">
            <scroller>
                <text class="h4 titleEx">单选</text>
                <bui-grid-select
                        :items="testData1"
                        :single=true
                        @overLimit="onOverLimit"
                        @select="_click">
                </bui-grid-select>
                <text class="h4 titleEx mT50">多选</text>
                <bui-grid-select
                        :items="testData2"
                        :limit="3"
                        @overLimit="overLimit"
                        @select="_click2">
                </bui-grid-select>
                <text class="h4 titleEx mT50">自定义样式(默认、选中的边框颜色,背景颜色,字体颜色。选中的图标,宽高)</text>
                <bui-grid-select
                        :cols="5"
                        :single=true
                        :items="testData3"
                        :customStyles="customStyles"
                        @select="_click3"></bui-grid-select>
                <text class="h4 titleEx mT50">三列布局</text>
                <bui-grid-select
                        :cols="3"
                        :customStyles="customStyles2"
                        :single=true
                        :items="testData4"
                        @select="_click3"></bui-grid-select>
                <text class="h4 titleEx mT50">两列布局</text>
                <bui-grid-select
                        :cols="2"
                        :customStyles="customStyles3"
                        :single=true
                        :items="testData5"
                        @select="_click3"></bui-grid-select>
            </scroller>
        </div>


    </div>
</template>
<style lang="scss" src="@bui/theme/css/buiweex.scss"></style>
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
import { BuiHeader, BuiGridSelect } from "weex-bui";
export default {
  components: {
    BuiHeader,
    BuiGridSelect
  },
  data: function() {
    return {
      leftItem: {
        icon: "ion-chevron-left"
      },
      testData1: [
        {
          title: "云应用平台",
          disabled: true
        },
        {
          title: "云应用产品",
          selected: true
        },
        {
          title: "轨道交通"
        },
        {
          title: "轨道交通"
        },
        {
          title: "财政"
        },
        {
          title: "人力资源"
        },
        {
          title: "展示一行"
        },
        {
          title: "超过一行文本将被截断展示"
        },
        {
          title: "超过一行文本将被截断展示"
        },
        {
          title: "轨道交通"
        }
      ],
      testData2: [
        {
          disabled: true,
          title: "云应用平台"
        },
        {
          title: "云应用产品",
          selected: true
        },
        {
          title: "轨道交通"
        },
        {
          title: "轨道交通"
        },
        {
          title: "财政"
        },
        {
          title: "人力资源"
        },
        {
          title: "展示一行"
        },
        {
          title: "超过一行文本将被截断展示"
        },
        {
          title: "超过一行文本将被截断展示"
        },
        {
          title: "轨道交通"
        }
      ],
      testData3: [
        {
          title: "云应用平台"
        },
        {
          title: "云应用产品"
        },
        {
          title: "轨道交通"
        },
        {
          title: "轨道交通",
          selected: true
        },
        {
          title: "财政"
        },
        {
          title: "人力资源"
        },
        {
          title: "展示一行"
        }
      ],
      testData4: [
        {
          title: "云应用平台"
        },
        {
          title: "云应用产品",
          selected: true
        },
        {
          title: "轨道交通"
        },
        {
          title: "轨道交通"
        },
        {
          title: "财政"
        },
        {
          title: "人力资源"
        },
        {
          title: "展示一行"
        },
        {
          title: "超过一行文本将被截断展示"
        },
        {
          title: "超过一行文本将被截断展示"
        },
        {
          title: "轨道交通"
        }
      ],
      testData5: [
        {
          title: "云应用平台"
        },
        {
          title: "云应用产品",
          selected: true
        },
        {
          title: "轨道交通"
        },
        {
          title: "轨道交通"
        },
        {
          title: "财政"
        },
        {
          title: "人力资源"
        },
        {
          title: "展示一行"
        },
        {
          title: "超过一行文本将被截断展示"
        },
        {
          title: "轨道交通"
        }
      ],
      customStyles: {
        lineSpacing: "20px",
        width: "130px",
        height: "50px",
        icon: "",
        color: "#333333",
        selectedColor: "#ffffff",
        disabledColor: "#eeeeee",
        borderColor: "#e8e8e8",
        selectedBorderColor: "#3399ff",
        backgroundColor: "#ffffff",
        selectedBackgroundColor: "#3399ff"
      },
      customStyles2: {
        width: "235px"
      },
      customStyles3: {
        width: "360px"
      }
    };
  },
  methods: {
    back() {
      this.$pop();
    },
    centerClick () {

    },
    onOverLimit () {

    },
    _click(e) {
      this.$toast(e.selectedList[0].title);
    },
    _click2(e) {
      this.$toast(this.testData2[e.selectIndex].title);
    },
    _click3(e) {
      this.$toast(this.testData3[e.selectIndex].title);
    },
    overLimit(e) {
      this.$toast(`最多选择${e}个`);
    }
  }
};
</script>
<style>
</style>