const fs = require('fs-extra')
const path = require('path')
const config = require('./config')
const helper = require('./helper')

const getDirName = vueFilePath => {
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
  return dir
}

const getGlobalCode = vueFilePath => {
  let globalFilePath = helper.root(`${config.globalName}.js`)
  let dir = getDirName(vueFilePath)
  // global 配置
  let globalContents
  const defaultGlobal = () => {
    let content
    if (fs.existsSync(globalFilePath)) {
      content = fs.readFileSync(globalFilePath).toString()
    }
    return content
  }
  if (dir) {
    // global.${dir}.js
    const dirGlobalFilePath = helper.root(`${config.globalName}.${dir}.js`)
    if (fs.existsSync(dirGlobalFilePath)) {
      globalContents = fs.readFileSync(dirGlobalFilePath).toString()
    } else {
      globalContents = defaultGlobal()
    }
  } else {
    globalContents = defaultGlobal()
  }
  return globalContents
}

const getTemplateCode = (vueFilePath) => {
  let templateFilePath = helper.rootNode(`${config.templateName}.html`)
  let dir = getDirName(vueFilePath)
  let templateCode
  const defaultTemplate = () => {
    let content
    if (fs.existsSync(templateFilePath)) {
      content = fs.readFileSync(templateFilePath).toString()
    }
    return content
  }
  if (dir) {
    const dirTemplateFilePath = helper.rootNode(`${config.templateName}.${dir}.html`)
    if (fs.existsSync(dirTemplateFilePath)) {
      templateCode = fs.readFileSync(dirTemplateFilePath).toString()
    } else {
      templateCode = defaultTemplate()
    }
  } else {
    templateCode = defaultTemplate()
  }
  return templateCode
}

const urlRelativeOption = type => {
  return {
    publicPath (file, entryfile) {
      const isWeb = file.indexOf(`web/${type}/`) > -1
      const isWeex = file.indexOf(`weex/${type}/`) > -1
      const pos = entryfile.indexOf(config.templateDir + '/') + config.templateDir.length
      let entryPath = entryfile.substr(pos)
      // 删除文件名
      const lastPos = entryPath.lastIndexOf('/')
      entryPath = entryPath.substr(0, lastPos)

      let entryTargetPath = ''
      let urlFileEmitPath = ''

      if (isWeb) {
        entryTargetPath = helper.rootNode('dist/web/js' + entryPath)
        urlFileEmitPath = helper.rootNode('dist/' + file)
      }
      if (isWeex) {
        entryTargetPath = helper.rootNode('dist/weex/js' + entryPath)
        urlFileEmitPath = helper.rootNode('dist/' + file)
      }
      return path.relative(entryTargetPath, urlFileEmitPath)
    }
  }
}

module.exports = {
  getGlobalCode,
  getTemplateCode,
  urlRelativeOption
}
