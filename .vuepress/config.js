const path = require('path')

module.exports = {
  title: 'Hello VuePress',
  description: 'Just playing around',
  configureWebpack: {
    resolve: {
      alias: {
        '@': path.resolve('static')
      }
    }
  }
}

