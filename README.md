# easy weex demo
  [easy weex](https://github.com/snice/easy-weex)的demo

## 扫码体验

    weex

![weex](https://oss.zhuzhe.wang/imgs/3071542550029_.pic_hd.png)

    web
    
![web](https://oss.zhuzhe.wang/imgs/3091542550275_.pic_hd.png)


## 集成了第三方weex ui

* weex-ui
* weex-amui
* weex-flymeui
* weex-bui (改自bui-weex)
* weex-droplet-ui
* wx-progress

## 集成了开源案例

* 咸鱼


## 问题

* 编译 OOM
    需要配置 node_modules/.bin/easy
    
    ```sh
    #!/usr/bin/env node --max-old-space-size=2048
    ```
