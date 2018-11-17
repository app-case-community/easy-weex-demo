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
          thumb="http://gw.alicdn.com/tfs/TB1_OC_c3vD8KJjy0FlXXagBFXa-64-64.png"
          @click="handleClick('button')"
        />
        <am-list-item
          title="Cell"
          thumb="http://gw.alicdn.com/tfs/TB12uu9c9_I8KJjy0FoXXaFnVXa-128-128.png"
          @click="handleClick('cell')"
        />
        <am-list-item v-if="isWeb"
          title="EpSlider"
          thumb="http://gw.alicdn.com/tfs/TB1Tgrbc46I8KJjy0FgXXXXzVXa-128-128.png"
          @click="handleClick('ep-slider')"
        />
        <am-list-item
          title="LightBox"
          thumb="http://gw.alicdn.com/tfs/TB1FCq7c4rI8KJjy0FpXXb5hVXa-128-128.png"
          @click="handleClick('lightbox')"
        />
        <am-list-item
          title="Overlay"
          thumb="http://gw.alicdn.com/tfs/TB1T_e9c26H8KJjy0FjXXaXepXa-64-64.png"
          @click="handleClick('overlay')"
        />
        <am-list-item
          title="Popover"
          thumb="http://gw.alicdn.com/tfs/TB1yM9BcqmWBuNjy1XaXXXCbXXa-200-200.png"
          @click="handleClick('popover')"
        />
        <am-list-item
          title="Popup"
          thumb="http://gw.alicdn.com/tfs/TB1D9q7c4rI8KJjy0FpXXb5hVXa-128-128.png"
          @click="handleClick('popup')"
        />
        <am-list-item
          title="Result"
          thumb="http://gw.alicdn.com/tfs/TB18iC_c3vD8KJjy0FlXXagBFXa-128-128.png"
          @click="handleClick('result')"
        />
        <am-list-item
          title="SlideNav"
          thumb="http://gw.alicdn.com/tfs/TB1r1jecY_I8KJjy1XaXXbsxpXa-40-40.png"
          @click="handleClick('slide-nav')"
        />
      </am-list>
      <am-list header="导航">
        <am-list-item
          title="MiniBar"
          thumb="http://gw.alicdn.com/tfs/TB10h1Ic0fJ8KJjy0FeXXXKEXXa-64-64.png"
          @click="handleClick('minibar')"
        />
        <am-list-item
          title="TabBar"
          thumb="http://gw.alicdn.com/tfs/TB16t0Wgb_I8KJjy1XaXXbsxpXa-128-128.png"
          @click="handleClick('tab-bar')"
        />
        <am-list-item
          title="TabPage"
          thumb="http://gw.alicdn.com/tfs/TB19Am5c8TH8KJjy0FiXXcRsXXa-64-64.png"
          @click="handleClick('tab-page')"
        />
      </am-list>
      <am-list header="数据输入">
        <am-list-item
          title="CheckBox"
          thumb="http://gw.alicdn.com/tfs/TB1Une9c26H8KJjy0FjXXaXepXa-128-128.png"
          @click="handleClick('checkbox')"
        />
        <am-list-item
          title="CountDown"
          thumb="http://gw.alicdn.com/tfs/TB10MK1cZrI8KJjy0FhXXbfnpXa-40-40.png"
          @click="handleClick('countdown')"
        />
        <am-list-item
          title="GridSelect"
          thumb="http://gw.alicdn.com/tfs/TB12gK1cZrI8KJjy0FhXXbfnpXa-128-128.png"
          @click="handleClick('grid-select')"
        />
        <am-list-item
          title="Radio"
          thumb="http://gw.alicdn.com/tfs/TB1TDe9c26H8KJjy0FjXXaXepXa-128-128.png"
          @click="handleClick('radio')"
        />
        <am-list-item v-if="isWeb"
          title="SlideBar"
          thumb="http://gw.alicdn.com/tfs/TB1UgK1cZrI8KJjy0FhXXbfnpXa-128-128.png"
          @click="handleClick('slider-bar')"
        />
        <am-list-item
          title="Stepper"
          thumb="http://gw.alicdn.com/tfs/TB1V_e9c26H8KJjy0FjXXaXepXa-128-128.png"
          @click="handleClick('stepper')"
        />
        <am-list-item
          title="Searchbar"
          thumb="http://gw.alicdn.com/tfs/TB1ESq7c4rI8KJjy0FpXXb5hVXa-64-64.png"
          @click="handleClick('searchbar')"
        />
      </am-list>
      <am-list
        header="数据展示"
      >
        <am-list-item
          title="City"
          thumb="http://gw.alicdn.com/tfs/TB10oPhcZLJ8KJjy0FnXXcFDpXa-128-128.png"
          @click="handleClick('city')"
        />
        <am-list-item
          title="Icon"
          thumb="http://gw.alicdn.com/tfs/TB1LxlxiyqAXuNjy1XdXXaYcVXa-200-200.png"
          @click="handleClick('icon')"
        />
        <am-list-item
          title="IndexList"
          thumb="http://gw.alicdn.com/tfs/TB1.Qm5c8TH8KJjy0FiXXcRsXXa-128-128.png"
          @click="handleClick('indexlist')"
        />
        <am-list-item
          title="PageCalendar"
          thumb="http://gw.alicdn.com/tfs/TB159Tcc2DH8KJjy1XcXXcpdXXa-128-128.png"
          @click="handleClick('page-calendar')"
        />
        <am-list-item
          title="RichText"
          thumb="http://gw.alicdn.com/tfs/TB1XiG_c3vD8KJjy0FlXXagBFXa-128-128.png"
          @click="handleClick('rich-text')"
        />
        <am-list-item
          title="SimpleFlow"
          thumb="http://gw.alicdn.com/tfs/TB10.PhcZLJ8KJjy0FnXXcFDpXa-128-128.png"
          @click="handleClick('simple-flow')"
        />
        <am-list-item
          title="Tag"
          thumb="http://gw.alicdn.com/tfs/TB1c7q5c8TH8KJjy0FiXXcRsXXa-128-128.png"
          @click="handleClick('tag')"
        />
      </am-list>
      <am-list
        header="反馈"
      >
        <am-list-item
          title="Dialog"
          thumb="http://gw.alicdn.com/tfs/TB155C_c3vD8KJjy0FlXXagBFXa-64-64.png"
          @click="handleClick('dialog')"
        />
        <am-list-item
          title="Loading"
          thumb="http://gw.alicdn.com/tfs/TB1_Qm5c8TH8KJjy0FiXXcRsXXa-64-64.png"
          @click="handleClick('loading')"
        />
        <am-list-item
          title="Mask"
          thumb="http://gw.alicdn.com/tfs/TB1UMrbc46I8KJjy0FgXXXXzVXa-64-64.png"
          @click="handleClick('mask')"
        />
        <am-list-item
          title="Noticebar"
          thumb="http://gw.alicdn.com/tfs/TB1ZgK1cZrI8KJjy0FhXXbfnpXa-64-64.png"
          @click="handleClick('noticebar')"
        />
        <am-list-item
          title="Progress"
          thumb="http://gw.alicdn.com/tfs/TB18EPhcZLJ8KJjy0FnXXcFDpXa-128-128.png"
          @click="handleClick('progress')"
        />
      </am-list>
      <am-list
        header="Game"
      >
      <am-list-item
          title="LotteryRain"
          thumb="http://gw.alicdn.com/tfs/TB1efm1c8HH8KJjy0FbXXcqlpXa-128-128.png"
          @click="handleClick('lottery-rain')"
        />
      </am-list>
    </scroller>
  </div>
</template>

<script>
import { AmNavBar, AmList, AmListItem, Utils } from "weex-amui";
const navigator = weex.requireModule("navigator");

export default {
  components: { AmNavBar, AmList, AmListItem },
  data() {
    return {
      isWeb: Utils.isWeb()
    };
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
