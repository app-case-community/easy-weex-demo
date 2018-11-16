const fs = require('fs-extra');
const config = require('./config')
const helper = require('./helper')

let globalFilePath = helper.root(`${config.globalFile}.js`);

const getGlobalCode = vueFilePath => {
  let dir
  // xx.${dir}.vue
  const paths = vueFilePath.split('/')
  const names = paths[paths.length - 1].split('.')
  if (names.length > 2) {
    dir = names[names.length - 2]
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
    const dirGlobalFilePath = helper.root(`${config.globalFile}.${dir}.js`)
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
module.exports = {
  getGlobalCode
}