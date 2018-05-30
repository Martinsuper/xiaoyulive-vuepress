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
        '@': resolve('../static')
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
          { text: '学无止境', link: '/technology/' },
          { text: '开发笔记', link: '/notes/' },
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
  },
  markdown: {
    anchor: { permalink: true, permalinkBefore: true, permalinkSymbol: '$' },
    toc: { includeLevel: [1, 2, 3] },
    config: md => {
      md.use(require('markdown-it-sub'))
      md.use(require('markdown-it-sup'))
      md.use(require('markdown-it-mark'))
      md.use(require('markdown-it-ins'))
      md.use(require('markdown-it-abbr'))
      md.use(require('markdown-it-kbd'))
      md.use(require('markdown-it-underline'))
      md.use(require('markdown-it-footnote'))
      md.use(require('markdown-it-checkbox'))
      md.use(require('markdown-it-task-checkbox'))
      md.use(require('markdown-it-deflist'))
      md.use(require('markdown-it-smartarrows'))
      md.use(require('markdown-it-imsize'))
      md.use(require('markdown-it-implicit-figures'))
      md.use(require('markdown-it-inline-comments'))
      md.use(require('markdown-it-attrs'))
      md.use(require('markdown-it-math'))
      md.use(require('markdown-it-plantuml'))
    }
  }
}

