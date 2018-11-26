'use strict'
const merge = require('lodash.merge')
const buildPlugins = require('./configs/plugin')()
const { urlRelativeOption } = require('./configs/global')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const isProd = process.env.NODE_ENV === 'production'

const loaders = {}
const plugins = []

if (isProd) {
  plugins.push(new CleanWebpackPlugin(['dist']))

  // 支持资源相对路径
  merge(loaders, {
    urlimage: {
      options: urlRelativeOption('img')
    }
  })
}

const config = {
  framework: 'weex',
  port: 9090,
  buildPath: 'dist',
  publicPath: isProd ? 'dist/' : 'dist/',
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
  done () {}
}

module.exports = merge(buildPlugins, config)
