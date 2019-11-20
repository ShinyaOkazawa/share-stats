const fs = require('fs-extra')

fs.copy('./src/appsscript.json', './dist/appsscript.json')
  .then(() => console.log('copied appsscript.json!'))
  .catch(err => console.error(err))