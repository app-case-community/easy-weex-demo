<template>
    <div>
        <bui-header
                title="富文本(bui-richcell)"
                :leftItem="leftItem"
                @leftClick="back">
        </bui-header>
        <div style="padding:10px;">
            <bui-richcell :content='content' @click="richClick"></bui-richcell>
        </div>
    </div>
</template>
<style lang="scss" src="@bui/theme/css/buiweex.scss"></style>
<script>
  import { BuiHeader, BuiRichcell } from 'weex-bui'
  export default {
    components: {
      BuiHeader,
      BuiRichcell
    },
    data: function () {
      return {
        leftItem: {
          icon: 'ion-chevron-left'
        },
        content: []
      }
    },
    methods: {
      back () {
        this.$pop()
      },
      richClick (e, obj) {
        this.$toast(JSON.stringify(obj))
      }
    },
    mounted () {
      var content = []
      // 第一段
      content.push({
        type: 'text',
        value: '@张指导',
        theme: 'blue'
      })
      // 第二段
      var text = '今天去深圳市局开会,与会人数近30人'
      for (var i = 0; i < text.length; i++) {
        var obj = {
          type: 'text',
          value: text.charAt(i)
        }
        content.push(obj)
      }
      // 第三段
      content.push({
        type: 'text',
        value: '@张无忌',
        theme: 'red'
      })
      // 第四段
      text = '务必在年前抓紧完成云智慧系统的建设'
      for (var i = 0; i < text.length; i++) {
        var obj = {
          type: 'text',
          value: text.charAt(i)
        }
        content.push(obj)
      }
      this.content = content
    }
  }
</script>
