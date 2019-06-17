# plop-format-generator

[![js-standard-style](https://cdn.rawgit.com/feross/standard/master/badge.svg)](https://github.com/feross/standard)
[![build status](https://img.shields.io/travis/cracdev/plop-format-generator.svg?style=flat-square)](https://travis-ci.org/cracdev/plop-format-generator)
[![npm version](https://img.shields.io/npm/v/plop-format-generator.svg?style=flat-square)](https://www.npmjs.com/package/plop-format-generator)

> [Plop](http://github.com/amwmedia/plop) generator for ad format scaffolding. Generates your formats and components folders.

## Configuration
1. Install `plop` globally in your system.
```
npm install -g plop
```
2. Install `plop` and `plop-format-generator` locally in your project.
```
npm install --save-dev plop plop-format-generator
```
3. In your `plopfile.js`, require the `plop-format-generator` module and pass the `plop` object and optionally some configuration.
```js
var path = require('path');
module.exports = (plop) => {
  require('plop-format-generator', {
    basePath: path.resolve(__dirname, 'src', 'templates'),
    prefix: 'template'
  });
}
```

## Configuration object
| Attribute | Default   | Description                                       |
| --------- | --------- |-------------------------------------------------- |
| basePath  | src/templates | Path in which the generator will put the formats        |
| prefix    |           | Adds a prefix to each generator followed by a `:` |

## Usage
Run `plop` to see the list of generators, or run `plop [generator]` to use that generator.

## Available generators
1. `template:format`: generates the initial format folder and defaults files, use `index.js` to import components and elements for the specific format.

  ```
  > plop template:format
  > Format name: Test Format

  [CREATE] ./src/templates/testFormat/index.js
  [CREATE] ./src/templates/testFormat/components.js
  [CREATE] ./src/templates/testFormat/config.js
  [CREATE] ./src/templates/testFormat/mockdata.js
  [CREATE] ./src/templates/testFormat/index.scss
  ```
  
2. `template:component`: generates a component folder with a ES6 class.
  
  ```
  > plop template:component
  > Component name: myNewComponent
  > where would you like to put this component?
  > edrBox

  [CREATE] ./src/template/edrBox/components/myNewComponent/myNewComponent-view.js
  [CREATE] ./src/template/edrBox/components/myNewComponent/myNewComponent-styles.scss
  ```

## License
MIT
