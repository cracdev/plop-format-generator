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
        path: '{{absPath (camelCase formatNameInput)}}/components/Header/header-view.js',
        templateFile: path.resolve(__dirname, 'header.hbs')
      }, {
        type: 'add',
        path: '{{absPath (camelCase formatNameInput)}}/components/Header/header-styles.scss',
        templateFile: path.resolve(__dirname, 'header.styles.hbs')
      }, {
        type: 'add',
        path: '{{absPath (camelCase formatNameInput)}}/components.js',
        templateFile: path.resolve(__dirname, 'components.hbs')
      }, {
        type: 'add',
        path: '{{absPath (camelCase formatNameInput)}}/config.json',
        templateFile: path.resolve(__dirname, 'config.hbs')
      }, {
        type: 'add',
        path: '{{absPath (camelCase formatNameInput)}}/index.js',
        templateFile: path.resolve(__dirname, 'index.hbs')
      }, {
        type: 'add',
        path: '{{absPath (camelCase formatNameInput)}}/index.scss',
        templateFile: path.resolve(__dirname, 'index.styles.hbs')
      }, {
        type: 'add',
        path: '{{absPath (camelCase formatNameInput)}}/mockdata.js',
        templateFile: path.resolve(__dirname, 'mockdata.hbs')
      }]
      return actions
    }
  })
}
