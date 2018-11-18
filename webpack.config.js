'use strict';
const merge = require('lodash.merge')
const buildPlugins = require('./configs/plugin')()

const CleanWebpackPlugin = require('clean-webpack-plugin')

const loaders = {}
const plugins = []

if ('production' === process.env.NODE_ENV) {
  plugins.push(new CleanWebpackPlugin(['dist']))
}

const config = {
  framework: 'weex',
  port: 9090,
  buildPath: 'dist',
  publicPath: 'dist/',
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