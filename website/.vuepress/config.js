const path = require('path')

function resolve (dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  title: 'Hello VuePress',
  description: 'Just playing around',
  dest: 'dist',
  configureWebpack: {
    resolve: {
      alias: {
        '@': resolve('../static'),
        '@app': resolve('lib/app')
      }
    }
  }
}

