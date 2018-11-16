<template>
  <div>
    <am-nav-bar
      title="WeexUI"
      :left-btn="[]"
    ></am-nav-bar>
    <scroller>
      <am-list header="布局">
        <am-list-item
          title="Button"
          @click="handleClick('button')"
        />
        <am-list-item
          title="Cell"
          @click="handleClick('cell')"
        />
        <am-list-item
          title="EpSlider"
          @click="handleClick('ep-slider')"
        />
        <am-list-item
          title="LightBox"
          @click="handleClick('lightbox')"
        />
        <am-list-item
          title="Overlay"
          @click="handleClick('overlay')"
        />
        <am-list-item
          title="Popover"
          @click="handleClick('popover')"
        />
        <am-list-item
          title="Popup"
          @click="handleClick('popup')"
        />
        <am-list-item
          title="Result"
          @click="handleClick('result')"
        />
        <am-list-item
          title="SlideNav"
          @click="handleClick('slide-nav')"
        />
      </am-list>
      <am-list header="导航">
        <am-list-item
          title="MiniBar"
          @click="handleClick('minibar')"
        />
        <am-list-item
          title="TabBar"
          @click="handleClick('tab-bar')"
        />
        <am-list-item
          title="TabPage"
          @click="handleClick('tab-page')"
        />
      </am-list>
      <am-list header="数据输入">
        <am-list-item
          title="CheckBox"
          @click="handleClick('checkbox')"
        />
        <am-list-item
          title="CountDown"
          @click="handleClick('countdown')"
        />
        <am-list-item
          title="GridSelect"
          @click="handleClick('grid-select')"
        />
        <am-list-item
          title="Radio"
          @click="handleClick('radio')"
        />
        <am-list-item
          title="SlideBar"
          @click="handleClick('slider-bar')"
        />
        <am-list-item
          title="Stepper"
          @click="handleClick('stepper')"
        />
        <am-list-item
          title="Searchbar"
          @click="handleClick('searchbar')"
        />
      </am-list>
      <am-list
        header="数据展示"
      >
        <am-list-item
          title="City"
          @click="handleClick('city')"
        />
        <am-list-item
          title="Icon"
          @click="handleClick('icon')"
        />
        <am-list-item
          title="IndexList"
          @click="handleClick('indexlist')"
        />
        <am-list-item
          title="PageCalendar"
          @click="handleClick('page-calendar')"
        />
        <am-list-item
          title="RichText"
          @click="handleClick('rich-text')"
        />
        <am-list-item
          title="SimpleFlow"
          @click="handleClick('simple-flow')"
        />
        <am-list-item
          title="Tag"
          @click="handleClick('tag')"
        />
      </am-list>
      <am-list
        header="反馈"
      >
        <am-list-item
          title="Dialog"
          @click="handleClick('dialog')"
        />
        <am-list-item
          title="Loading"
          @click="handleClick('loading')"
        />
        <am-list-item
          title="Mask"
          @click="handleClick('mask')"
        />
        <am-list-item
          title="Noticebar"
          @click="handleClick('noticebar')"
        />
        <am-list-item
          title="Progress"
          @click="handleClick('progress')"
        />
      </am-list>
      <am-list
        header="Game"
      >
      <am-list-item
          title="LotteryRain"
          @click="handleClick('lottery-rain')"
        />
      </am-list>
      <!-- <am-list
        header="Show Case"
      >
        <am-list-item
            title="VueFilter"
            @click="handleClick('vue')"
        />
      </am-list> -->
    </scroller>
  </div>
</template>

<script>
import { AmNavBar, AmList, AmListItem, Utils } from "weex-amui";
const navigator = weex.requireModule("navigator");

export default {
  components: { AmNavBar, AmList, AmListItem },
  data() {
    return {};
  },
  methods: {
    handleClick(name) {
      console.log(name);
      name = name.replace("am-", "");
      const suffix = Utils.isWeb() ? "html" : "js";
      let url = `${name}/index.${suffix}`;
      if (/\/$/.test(weex.config.bundleUrl)) {
        url = weex.config.bundleUrl = url;
      } else {
        url = weex.config.bundleUrl.replace(`index.${suffix}`, url);
      }
      console.log("url", url);
      navigator.push({
        url: `${url}?_wx_tpl=${url}`,
        animated: "true"
      });
    }
  }
};
</script>
