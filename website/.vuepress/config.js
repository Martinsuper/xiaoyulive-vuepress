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
    ['link', { rel: 'manifest', href: '/manifest.json' }]
  ],
  themeConfig: {
    locales: {
      '/': {
        nav: [
          { text: '生活漫谈', link: '/articles/' },
          { text: '技术宅', link: '/technology/' },
          { text: '收藏夹', link: '/favorite/' },
          // { text: '测试', link: '/test/' },
          { text: '书籍', link: 'https://www.kancloud.cn/@xiaoyulive' },
          { text: '博客', link: 'http://blog.xiaoyulive.top/' },
          { text: 'GitHub', link: 'https://github.com/quanzaiyu' }
        ],
        sidebar: {
          '/test/': [
            {
              title: '测试',
              collapsable: false,
              children: [
                ['aaa/c', 'Explicit link text a'],
                ['aaa/bbb/d', 'Explicit link text b']
              ]
            }
          ]
        }
      }
    }
  }
}

