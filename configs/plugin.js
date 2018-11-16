const path = require('path')
const fs = require('fs-extra');
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

const buildPlugins = () => {
  const entrys = getEntryFile()
  return {
    entry: entrys,
    template: config.template,
    lib: config.lib
  }
}

module.exports = buildPlugins