const fs = require('fs')
const path = require('path')
const sass = require('sass')
const postcss = require('postcss')

const fileName = 'custom.scss'

module.exports = class {
  async data () {
    const rawFilepath = path.join(__dirname, `/_includes/theme/${fileName}`)

    return {
      permalink: `css/theme/${path.basename(fileName, '.scss')}.css`,
      rawFilepath
    }
  }

  async render ({ rawFilepath }) {
    console.log(rawFilepath)
    const compiledSass = sass.renderSync({
      file: rawFilepath,
      includePaths: [
        'node_modules/reveal.js/css/theme/source'
      ]
    })

    let postcssOpts = [
      require('autoprefixer')
    ]

    if (process.env.ELEVENTY_ENV === 'prod') {
      postcssOpts.push(require('cssnano'))
    }

    return await postcss(postcssOpts)
      .process(compiledSass.css, { from: rawFilepath })
      .then(result => result.css)
  }
}
