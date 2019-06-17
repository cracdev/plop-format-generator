var path = require('path')

module.exports = (plop) => {
  require('../lib/index')(plop, {
    basePath: path.resolve(__dirname, 'src', 'templates'),
    prefix: 'template'
  })
}
