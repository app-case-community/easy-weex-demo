<template>
    <div>
        <bui-header title="流程图-布局可扩展(bui-timeline)" :leftItem="leftItem" @leftClick="back"></bui-header>
        <div style="padding: 10px;flex:1">
            <scroller>
                <bui-timeline>
                    <bui-timeline-item first></bui-timeline-item>
                    <bui-timeline-item>
                        <text class="time">1984年</text>
                        <text class="content">发布 Macintosh</text>
                    </bui-timeline-item>
                    <bui-timeline-item>
                        <text class="time">2007年</text>
                        <text class="content">发布 iPhone</text>
                    </bui-timeline-item>
                    <bui-timeline-item>
                        <text class="time">2010年</text>
                        <text class="content">发布 iPad</text>
                    </bui-timeline-item>
                    <bui-timeline-item last>
                        <text class="time">2011年10月5日</text>
                        <text class="content">史蒂夫·乔布斯去世</text>
                    </bui-timeline-item>
                </bui-timeline>
            </scroller>
        </div>
    </div>
</template>
<style lang="scss" src="@bui/theme/css/buiweex.scss"></style>
<style>
.time {
  font-weight: 700;
  font-size: 32px;
  line-height: 32px;
  color: #464c5b;
  margin-bottom: 15px;
}
.content {
  font-size: 26px;
  color: #657180;
}
</style>
<script>
import { BuiHeader, BuiTimeline, BuiTimelineItem } from "weex-bui";
export default {
  components: {
    BuiHeader,
    BuiTimeline,
    BuiTimelineItem
  },
  data: function() {
    return {
      leftItem: {
        icon: "ion-chevron-left"
      }
    };
  },
  methods: {
    back() {
      this.$pop();
    }
  },
  created() {}
};
</script>
