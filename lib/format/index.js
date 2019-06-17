const path = require('path')

module.exports = (plop, config) => {
  plop.setGenerator(`${config.prefix}format`, {
    description: 'generate scaffolding folder',
    prompts: [{
      type: 'input',
      message: 'Format name',
      name: 'formatNameInput',
      validate: (value) => {
        const result = !!value.length || 'this field is required'
        return result
      }
    }],
    actions: answers => {
      var actions = [{
        type: 'add',
        path: path.resolve(config.basePath, '{{> formatName }}', 'components.js'),
        templateFile: path.resolve(__dirname, 'components.hbs')
      }, {
        type: 'add',
        path: path.resolve(config.basePath, '{{> formatName }}', 'config.js'),
        templateFile: path.resolve(__dirname, 'config.hbs')
      }, {
        type: 'add',
        path: path.resolve(config.basePath, '{{> formatName }}', 'index.js'),
        templateFile: path.resolve(__dirname, 'index.hbs')
      }, {
        type: 'add',
        path: path.resolve(config.basePath, '{{> formatName }}', 'index.scss'),
        templateFile: path.resolve(__dirname, 'index.styles.hbs')
      }, {
        type: 'add',
        path: path.resolve(config.basePath, '{{> formatName }}', 'mockdata.js'),
        templateFile: path.resolve(__dirname, 'mockdata.hbs')
      }]
    //   answers.Features.forEach((feature) => {
    //     actions = actions.concat(plop.getGenerator(`${config.prefix}${feature}`).actions)
    //   })
      return actions
    }
  })
}
