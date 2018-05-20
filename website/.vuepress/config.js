const path = require('path')

module.exports = {
  title: 'Hello VuePress',
  description: 'Just playing around',
  dest: 'disti',
  configureWebpack: {
    resolve: {
      alias: {
        '@': path.resolve('static')
      }
    }
  }
}

