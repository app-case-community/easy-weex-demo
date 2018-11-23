'use strict';
const path = require('path')
const merge = require('lodash.merge')
const buildPlugins = require('./configs/plugin')()

const CleanWebpackPlugin = require('clean-webpack-plugin')
const isProd = 'production' === process.env.NODE_ENV
const loaders = {}
const plugins = []

const urlOption = type => {
  return {
    useRelativePath: true,
    outputPath (file) {
      let webPos = file.indexOf(`/web/${type}/`)
      let weexPos = file.indexOf(`/weex/${type}/`)
      if (webPos > 0) {
        return file.substr(webPos + 1)
      }
      if (weexPos > 0) {
        return file.substr(weexPos + 1)
      }
      return file
    },
    publicPath (file) {
      const weexReg = /..\/views\/.+weex\//i
      const webReg = /..\/views\/.+web\//i
      if (webReg.test(file)) {
        return file.replace(webReg, '')
      }
      if (weexReg.test(file)) {
        return file.replace(weexReg, '')
      }
      return file
    }
  }
}
if (isProd) {
  plugins.push(new CleanWebpackPlugin(['dist']))

  // 支持资源相对路径
  merge(loaders, {
    urlimage: {
      options: urlOption('img')
    }
  })
}

const config = {
  framework: 'weex',
  port: 9090,
  buildPath: 'dist',
  publicPath: isProd ? './' : 'dist/',
  alias: {
    '@': 'src',
    '@views': 'src/views',
    '@components': 'src/components',
    '@bui': 'node_modules/weex-bui',
    '@xianyu': 'src/views/cases/xianyu',
    '@yanxuan': 'src/views/cases/yanxuan'
  },
  loaders,
  plugins,
  done() {}
};

module.exports = merge(buildPlugins, config)