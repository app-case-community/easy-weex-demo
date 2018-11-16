# easy weex
  基于[easywebpack-weex-boilerplate](https://github.com/easy-team/easywebpack-weex-boilerplate)修改，再次减少配置。

## 使用

    yarn install
    yarn start
    yarn build

## 支持

* 增加temp功能（移植weex-toolkit），不用再配置entry入口
* 整理src目录，src/views是页面默认路径
* global.js：页面全局配置，比如web下读取url传参、native设置viewport
* 支持第三方weex组件，默认集成了[weex-ui](https://github.com/alibaba/weex-ui)、[weex-amui](https://github.com/hminghe/weex-amui)、[weex-flymeui](https://github.com/FlymeApps/weex-flymeui)，并支持按需加载

## 配置修改

  configs/config.js
  ```js
  const config = {
    template: 'web/layout.html',
    lib: [helper.rootNode('web/web.js')],
    pageDir: 'src/views', // 页面路径：仅编译这个目录下的vue文件
    templateDir: '.temp', // 将vue文件包装临时js文件的路径
    globalFilePath: 'global.js' // 页面全局配置
  }
  ```
## viewport 配置
* native

  global.js
  ```js
  // 设置viewport
  const meta = weex.requireModule('meta')
  meta.setViewport({
    width: 750
  })
  ```

* web

  web/layout.html

  ```html
  <meta name="weex-viewport" content="750" />
  ```