const helper = require('./helper')
const config = {
  template: 'web/layout.html',
  templateName: 'web/layout',
  lib: [helper.rootNode('web/web.js')],
  pageDir: 'src/views',
  templateDir: '.temp',
  globalName: 'global'
}
module.exports = config