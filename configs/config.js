const helper = require('./helper')
const config = {
  template: 'web/layout.html',
  lib: [helper.rootNode('web/web.js')],
  pageDir: 'src/views',
  templateDir: '.temp',
  globalFile: 'global'
}
module.exports = config