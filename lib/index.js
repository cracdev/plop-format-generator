const path = require('path')

module.exports = (plop, config) => {
  // Config defaults.
  config = config || {}
  config.basePath = config.basePath || './'
  config.prefix = config.prefix ? config.prefix + ':' : ''

  // Helpers.
  plop.addHelper('indexOf', (array, item, options) => {
    if (array.indexOf(item) !== -1) {
      return options.fn(this)
    }
    return options.inverse(this)
  })

  plop.addHelper('absPath', function (p) {
    return path.resolve(config.basePath, p)
  })

  // Prompt.
  plop.addPrompt('directory', require('inquirer-directory'))

  // Partials.
  plop.addPartial('componentName', '{{ camelCase componentNameInput }}')
  plop.addPartial('componentNamePascalCase', '{{properCase componentNameInput }}')
  plop.addPartial('formatName', '{{ camelCase formatNameInput }}')

  // Generators.
  require('./format')(plop, config)
  require('./component')(plop, config)
}
