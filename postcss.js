const autoprefixer = require('autoprefixer')
const postcss = require('postcss')
/* const postcssNested = require('postcss-nested') */
const fs = require('fs')
const atImport = require("postcss-import")

fs.readFile('css/index.css', (err, css) => {
  postcss([
    autoprefixer
    ])
    .use(atImport())
    .process(css, { from: 'css/index.css', to: 'dest/app.css' })
    .then(result => {
      fs.writeFile('dest/app.css', result.css, () => true)
      if ( result.map ) {
        fs.writeFile('dest/app.css.map', result.map.toString(), () => true)
      }
    })
})