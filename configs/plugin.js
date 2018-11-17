const path = require('path')
const { resolve } = path
const fs = require('fs-extra')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const { getGlobalCode } = require('./global')
const config = require('./config')
const helper = require('./helper')
const glob = require('glob');
const isWin = /^win/.test(process.platform);

const templateDir = helper.rootNode(config.templateDir)

const getEntryFileContent = (entryPath, vueFilePath) => {
  // *.vue 相对地址
  let relativeVuePath = path.relative(path.join(entryPath, '../'), vueFilePath);
  if (isWin) {
    relativeVuePath = relativeVuePath.replace(/\\/g, '\\\\');
  }
  // 拼接index.js 内容
  let contents = `import App from '${relativeVuePath}'\n\n`
  // 插入global代码
  const globalContents = getGlobalCode(vueFilePath)
  if (globalContents) {
    contents += globalContents + '\n'
  }
  // 导出new Vue
  contents += 'export default new Vue(Vue.util.extend({el: \'#root\'}, App));'
  return contents;
}

const getEntryFile = (dir) => {
  dir = dir || config.pageDir;
  let entrys = {}
  const entries = glob.sync(`${dir}/**/*.vue`, {})
  fs.removeSync(templateDir)
  entries.forEach(entry => {
    const extname = path.extname(entry);
    const basename = entry.replace(`${dir}/`, '').replace(extname, '')
    const templatePath = path.join(templateDir, basename + '.js')
    entrys[basename] = templatePath
    fs.outputFileSync(templatePath, getEntryFileContent(templatePath, entry));
  })
  return entrys
}


const loaders = {
  weex: {
    exclude: []
  },
  vue: {
    exclude: []
  }
}

const plugins = [
  {
    uglifyJs: false
  }
]

if ('production' === process.env.NODE_ENV) {
  plugins.push(new UglifyJsPlugin({
    parallel: 4
  }))
  // new UglifyJsPlugin({
  //   // 使用外部引入的新版本的js压缩工具
  //   parallel: 4,
  //   uglifyOptions: {
  //     ie8: false,
  //     ecma: 6,
  //     warnings: false,
  //     mangle: true, // debug false
  //     output: {
  //       comments: false,
  //       beautify: false // debug true
  //     },
  //     compress: {
  //       // 在UglifyJs删除没有用到的代码时不输出警告
  //       warnings: false,
  //       // 删除所有的 `console` 语句
  //       // 还可以兼容ie浏览器
  //       drop_console: true,
  //       // 内嵌定义了但是只用到一次的变量
  //       collapse_vars: true,
  //       // 提取出出现多次但是没有定义成变量去引用的静态值
  //       reduce_vars: true
  //     }
  //   }
  // })
}

const buildPlugins = () => {
  const entrys = getEntryFile()
  return {
    entry: entrys,
    template: config.template,
    lib: config.lib,
    loaders,
    plugins
  }
}

module.exports = buildPlugins