const fs = require('fs')
const jsdoc2md = require('jsdoc-to-markdown')
jsdoc2md
  .render({ files: 'src/utils.js' })
  .then(res => fs.writeFile('spec/utils.md', res, {}, function() {}))
jsdoc2md
  .render({ files: 'src/browserUtils.js' })
  .then(res => fs.writeFile('spec/browserUtils.md', res, {}, function() {}))
