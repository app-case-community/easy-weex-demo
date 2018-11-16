'use strict';
const buildPlugins = require('./configs/plugin')()
const CleanWebpackPlugin = require('clean-webpack-plugin');

const config  = {
  framework: 'weex',
  port: 9090,
  buildPath: 'dist',
  publicPath: 'dist/',
  alias: {
    '@': 'src',
    '@views': 'src/views',
    '@components': 'src/components'
  },
  loaders: {
    weex: {
      exclude: []
    },
    vue: {
      exclude: []
    }
  },
  plugins: [
    new CleanWebpackPlugin(['dist'])
  ],
  done() {}
};

module.exports = Object.assign({}, buildPlugins, config)