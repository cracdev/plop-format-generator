const path = require('path')

module.exports = (plop, config) => {
  plop.setGenerator(`${config.prefix}component`, {
    description: 'generate component folder',
    prompts: [{
      type: 'input',
      message: 'Component name',
      name: 'componentNameInput',
      validate: (value) => {
        const result = !!value.length || 'this field is required'
        return result
      }
    }, {
      type: 'directory',
      name: 'path',
      message: 'where would you like to put this component?',
      basePath: path.resolve(config.basePath)
    }],
    actions: answers => {
      var actions = [{
        type: 'add',
        path: '{{absPath path}}/{{> componentNamePascalCase }}/{{> componentName }}-view.js',
        templateFile: path.resolve(__dirname, 'es6.hbs')
      }, {
        type: 'add',
        path: '{{absPath path}}/{{> componentNamePascalCase }}/{{> componentName }}-style.scss',
        templateFile: path.resolve(__dirname, 'es6.styles.hbs')
      }]

      return actions
    }
  })
}
