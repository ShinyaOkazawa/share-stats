const fs = require('fs-extra')

fs.remove('./dist')
  .then(() => {
    console.log('remove dist directory!')
  })
  .catch(err => {
    console.error(err)
  })