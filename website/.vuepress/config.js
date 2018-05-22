const path = require('path')

function resolve (dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  title: '小昱个人网站',
  description: '小昱个人网站',
  dest: 'dist',
  configureWebpack: {
    resolve: {
      alias: {
        '@': resolve('../static'),
        '@app': resolve('lib/app')
      }
    }
  },
  locales: {
    '/': {
      lang: 'zh-CN',
      title: '小昱个人网站',
      description: '小昱个人网站'
    }
  },
  head: [
    ['link', { rel: 'icon', href: `/logo.png` }],
    ['link', { rel: 'manifest', href: '/manifest.json' }],
    ['meta', { name: 'theme-color', content: '#f1f1f1' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['link', { rel: 'apple-touch-icon', href: `/icons/apple-touch-icon-152x152.png` }],
    ['link', { rel: 'mask-icon', href: '/icons/safari-pinned-tab.svg', color: '#3eaf7c' }],
    ['meta', { name: 'msapplication-TileImage', content: '/icons/msapplication-icon-144x144.png' }],
    ['meta', { name: 'msapplication-TileColor', content: '#000000' }]
  ],
  themeConfig: {
    locales: {
      '/': {
        nav: [
          { text: '文章', link: '/docs/articles/index', },
          { text: '书籍', link: 'https://www.kancloud.cn/@xiaoyulive' },
          { text: '博客', link: 'http://blog.xiaoyulive.top/' },
          { text: 'GitHub', link: 'https://github.com/quanzaiyu' }
        ]
      }
    }
  }
}
