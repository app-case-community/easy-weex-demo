const path = require('path')
const fs = require('fs-extra');
const config = require('./config')
const helper = require('./helper')
const glob = require('glob');
const isWin = /^win/.test(process.platform);

const templateDir = helper.rootNode(config.templateDir)
let globalFilePath = helper.root(config.globalFilePath);

const getGlobalCode = vueFilePath => {
  let dir
  // xx.${dir}.vue
  const paths = vueFilePath.split('/')
  const names = paths[paths.length - 1].split('.')
  if (names.length > 2) {
    dir = names[names.length - 2]
    console.log(vueFilePath, dir)
  }
  if (!dir) {
    // 文件夹 src/views/${dir}
    const pageDir = (config.pageDir.endsWith('/') ? config.pageDir : config.pageDir + '/')
    dir = vueFilePath.replace(pageDir, '').split('/')[0]
    if (dir.endsWith('.vue')) {
      dir = undefined
    }
  }
  // global 配置
  let globalContents
  const defaultGlobal = () => {
    let content
    if (fs.existsSync(globalFilePath)) {
      content = fs.readFileSync(globalFilePath).toString();
    }
    return content
  }
  if (dir) {
    // global.${dir}.js
    const dirGlobalFilePath = helper.root(`global.${dir}.js`)
    if (fs.existsSync(dirGlobalFilePath)) {
      globalContents = fs.readFileSync(dirGlobalFilePath).toString();
    } else {
      globalContents = defaultGlobal()
    }
  } else {
    globalContents = defaultGlobal()
  }
  return globalContents
}

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