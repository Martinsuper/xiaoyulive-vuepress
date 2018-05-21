import Vue from 'vue'
Vue.component("Foo-Bar", () => import("D:\\Workplace\\__Blog__\\vuePress\\vuepress\\docs\\.vuepress\\components\\Foo\\Bar.vue"))
Vue.component("OtherComponent", () => import("D:\\Workplace\\__Blog__\\vuePress\\vuepress\\docs\\.vuepress\\components\\OtherComponent.vue"))
Vue.component("demo-1", () => import("D:\\Workplace\\__Blog__\\vuePress\\vuepress\\docs\\.vuepress\\components\\demo-1.vue"))

import ThemeLayout from '@themeLayout'
import ThemeNotFound from '@themeNotFound'
export const routes = [
  {
    path: "/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\Workplace\\__Blog__\\vuePress\\vuepress\\docs\\README.md").then(comp => {
        Vue.component("page-index", comp.default)
        next()
      })
    }
  },
  {
    path: "/index.html",
    redirect: "/"
  },
  {
    path: "/config/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\Workplace\\__Blog__\\vuePress\\vuepress\\docs\\config\\README.md").then(comp => {
        Vue.component("page-config-index", comp.default)
        next()
      })
    }
  },
  {
    path: "/config/index.html",
    redirect: "/config/"
  },
  {
    path: "/default-theme-config/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\Workplace\\__Blog__\\vuePress\\vuepress\\docs\\default-theme-config\\README.md").then(comp => {
        Vue.component("page-default-theme-config-index", comp.default)
        next()
      })
    }
  },
  {
    path: "/default-theme-config/index.html",
    redirect: "/default-theme-config/"
  },
  {
    path: "/guide/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\Workplace\\__Blog__\\vuePress\\vuepress\\docs\\guide\\README.md").then(comp => {
        Vue.component("page-guide-index", comp.default)
        next()
      })
    }
  },
  {
    path: "/guide/index.html",
    redirect: "/guide/"
  },
  {
    path: "/guide/assets.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\Workplace\\__Blog__\\vuePress\\vuepress\\docs\\guide\\assets.md").then(comp => {
        Vue.component("page-guide-assets", comp.default)
        next()
      })
    }
  },
  {
    path: "/guide/basic-config.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\Workplace\\__Blog__\\vuePress\\vuepress\\docs\\guide\\basic-config.md").then(comp => {
        Vue.component("page-guide-basic-config", comp.default)
        next()
      })
    }
  },
  {
    path: "/guide/custom-themes.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\Workplace\\__Blog__\\vuePress\\vuepress\\docs\\guide\\custom-themes.md").then(comp => {
        Vue.component("page-guide-custom-themes", comp.default)
        next()
      })
    }
  },
  {
    path: "/guide/deploy.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\Workplace\\__Blog__\\vuePress\\vuepress\\docs\\guide\\deploy.md").then(comp => {
        Vue.component("page-guide-deploy", comp.default)
        next()
      })
    }
  },
  {
    path: "/guide/getting-started.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\Workplace\\__Blog__\\vuePress\\vuepress\\docs\\guide\\getting-started.md").then(comp => {
        Vue.component("page-guide-getting-started", comp.default)
        next()
      })
    }
  },
  {
    path: "/guide/i18n.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\Workplace\\__Blog__\\vuePress\\vuepress\\docs\\guide\\i18n.md").then(comp => {
        Vue.component("page-guide-i18n", comp.default)
        next()
      })
    }
  },
  {
    path: "/guide/markdown.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\Workplace\\__Blog__\\vuePress\\vuepress\\docs\\guide\\markdown.md").then(comp => {
        Vue.component("page-guide-markdown", comp.default)
        next()
      })
    }
  },
  {
    path: "/guide/using-vue.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\Workplace\\__Blog__\\vuePress\\vuepress\\docs\\guide\\using-vue.md").then(comp => {
        Vue.component("page-guide-using-vue", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\Workplace\\__Blog__\\vuePress\\vuepress\\docs\\zh\\README.md").then(comp => {
        Vue.component("page-zh-index", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/index.html",
    redirect: "/zh/"
  },
  {
    path: "/zh/config/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\Workplace\\__Blog__\\vuePress\\vuepress\\docs\\zh\\config\\README.md").then(comp => {
        Vue.component("page-zh-config-index", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/config/index.html",
    redirect: "/zh/config/"
  },
  {
    path: "/zh/default-theme-config/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\Workplace\\__Blog__\\vuePress\\vuepress\\docs\\zh\\default-theme-config\\README.md").then(comp => {
        Vue.component("page-zh-default-theme-config-index", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/default-theme-config/index.html",
    redirect: "/zh/default-theme-config/"
  },
  {
    path: "/zh/guide/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\Workplace\\__Blog__\\vuePress\\vuepress\\docs\\zh\\guide\\README.md").then(comp => {
        Vue.component("page-zh-guide-index", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/guide/index.html",
    redirect: "/zh/guide/"
  },
  {
    path: "/zh/guide/assets.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\Workplace\\__Blog__\\vuePress\\vuepress\\docs\\zh\\guide\\assets.md").then(comp => {
        Vue.component("page-zh-guide-assets", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/guide/basic-config.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\Workplace\\__Blog__\\vuePress\\vuepress\\docs\\zh\\guide\\basic-config.md").then(comp => {
        Vue.component("page-zh-guide-basic-config", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/guide/custom-themes.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\Workplace\\__Blog__\\vuePress\\vuepress\\docs\\zh\\guide\\custom-themes.md").then(comp => {
        Vue.component("page-zh-guide-custom-themes", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/guide/deploy.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\Workplace\\__Blog__\\vuePress\\vuepress\\docs\\zh\\guide\\deploy.md").then(comp => {
        Vue.component("page-zh-guide-deploy", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/guide/getting-started.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\Workplace\\__Blog__\\vuePress\\vuepress\\docs\\zh\\guide\\getting-started.md").then(comp => {
        Vue.component("page-zh-guide-getting-started", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/guide/i18n.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\Workplace\\__Blog__\\vuePress\\vuepress\\docs\\zh\\guide\\i18n.md").then(comp => {
        Vue.component("page-zh-guide-i18n", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/guide/markdown.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\Workplace\\__Blog__\\vuePress\\vuepress\\docs\\zh\\guide\\markdown.md").then(comp => {
        Vue.component("page-zh-guide-markdown", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/guide/using-vue.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\Workplace\\__Blog__\\vuePress\\vuepress\\docs\\zh\\guide\\using-vue.md").then(comp => {
        Vue.component("page-zh-guide-using-vue", comp.default)
        next()
      })
    }
  },
  {
    path: '*',
    component: ThemeNotFound
  }
]