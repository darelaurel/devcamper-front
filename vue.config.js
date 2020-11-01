const path = require('path')
module.exports = {
  pluginOptions: {
    'style-resources-loader': {
      'preProcessor': 'scss',
      'patterns': [
        './src/assets/styles/style.scss',
        './src/assets/styles/variables.scss'
      ]
    },
    i18n: {
      locale: 'fr',
      fallbackLocale: 'fr',
      localeDir: 'locales',
      enableInSFC: false
    }

  }
}
