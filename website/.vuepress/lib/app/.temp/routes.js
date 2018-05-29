import Vue from 'vue'
Vue.component("aLink", () => import("D:\\Workplace\\__Blog__\\vuePress\\my_blogs\\blog-new\\website\\.vuepress\\components\\aLink.vue"))
import ThemeLayout from '@themeLayout'
import ThemeNotFound from '@themeNotFound'
import { injectMixins } from '@app/util'
import rootMixins from '@app/root-mixins'

injectMixins(ThemeLayout, rootMixins)
injectMixins(ThemeNotFound, rootMixins)

export const routes = [
  {
    name: "v-aab20e9ae114c",
    path: "/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\Workplace\\__Blog__\\vuePress\\my_blogs\\blog-new\\website\\README.md").then(comp => {
        Vue.component("v-aab20e9ae114c", comp.default)
        next()
      })
    }
  },
  {
    path: "/index.html",
    redirect: "/"
  },
  {
    name: "v-c32a5b2436248",
    path: "/articles/docs/My_blog_journey.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\Workplace\\__Blog__\\vuePress\\my_blogs\\blog-new\\website\\articles\\docs\\My_blog_journey.md").then(comp => {
        Vue.component("v-c32a5b2436248", comp.default)
        next()
      })
    }
  },
  {
    name: "v-2957b7e90e14",
    path: "/articles/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\Workplace\\__Blog__\\vuePress\\my_blogs\\blog-new\\website\\articles\\index.md").then(comp => {
        Vue.component("v-2957b7e90e14", comp.default)
        next()
      })
    }
  },
  {
    path: "/articles/index.html",
    redirect: "/articles/"
  },
  {
    name: "v-2e5aab52fa7fa",
    path: "/favorite/docs/Markdown_it_plugins.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\Workplace\\__Blog__\\vuePress\\my_blogs\\blog-new\\website\\favorite\\docs\\Markdown_it_plugins.md").then(comp => {
        Vue.component("v-2e5aab52fa7fa", comp.default)
        next()
      })
    }
  },
  {
    name: "v-640dd8b57c29e",
    path: "/favorite/docs/VSCode_plugins.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\Workplace\\__Blog__\\vuePress\\my_blogs\\blog-new\\website\\favorite\\docs\\VSCode_plugins.md").then(comp => {
        Vue.component("v-640dd8b57c29e", comp.default)
        next()
      })
    }
  },
  {
    name: "v-65db1357e1a68",
    path: "/favorite/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\Workplace\\__Blog__\\vuePress\\my_blogs\\blog-new\\website\\favorite\\index.md").then(comp => {
        Vue.component("v-65db1357e1a68", comp.default)
        next()
      })
    }
  },
  {
    path: "/favorite/index.html",
    redirect: "/favorite/"
  },
  {
    name: "v-21f9633a68ae4",
    path: "/single/welcome.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\Workplace\\__Blog__\\vuePress\\my_blogs\\blog-new\\website\\single\\welcome.md").then(comp => {
        Vue.component("v-21f9633a68ae4", comp.default)
        next()
      })
    }
  },
  {
    name: "v-f8fdc27bd7c52",
    path: "/technology/automation/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\Workplace\\__Blog__\\vuePress\\my_blogs\\blog-new\\website\\technology\\automation\\index.md").then(comp => {
        Vue.component("v-f8fdc27bd7c52", comp.default)
        next()
      })
    }
  },
  {
    path: "/technology/automation/index.html",
    redirect: "/technology/automation/"
  },
  {
    name: "v-221597879b831",
    path: "/technology/automation/webpack.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\Workplace\\__Blog__\\vuePress\\my_blogs\\blog-new\\website\\technology\\automation\\webpack.md").then(comp => {
        Vue.component("v-221597879b831", comp.default)
        next()
      })
    }
  },
  {
    name: "v-63a4098c3071d",
    path: "/technology/back-end/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\Workplace\\__Blog__\\vuePress\\my_blogs\\blog-new\\website\\technology\\back-end\\index.md").then(comp => {
        Vue.component("v-63a4098c3071d", comp.default)
        next()
      })
    }
  },
  {
    path: "/technology/back-end/index.html",
    redirect: "/technology/back-end/"
  },
  {
    name: "v-3080042306e39",
    path: "/technology/back-end/node.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\Workplace\\__Blog__\\vuePress\\my_blogs\\blog-new\\website\\technology\\back-end\\node.md").then(comp => {
        Vue.component("v-3080042306e39", comp.default)
        next()
      })
    }
  },
  {
    name: "v-25062a4b61c01",
    path: "/technology/back-end/php.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\Workplace\\__Blog__\\vuePress\\my_blogs\\blog-new\\website\\technology\\back-end\\php.md").then(comp => {
        Vue.component("v-25062a4b61c01", comp.default)
        next()
      })
    }
  },
  {
    name: "v-580bee3bbc9c5",
    path: "/technology/back-end/thinkphp.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\Workplace\\__Blog__\\vuePress\\my_blogs\\blog-new\\website\\technology\\back-end\\thinkphp.md").then(comp => {
        Vue.component("v-580bee3bbc9c5", comp.default)
        next()
      })
    }
  },
  {
    name: "v-4a29ee2de40bf",
    path: "/technology/database/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\Workplace\\__Blog__\\vuePress\\my_blogs\\blog-new\\website\\technology\\database\\index.md").then(comp => {
        Vue.component("v-4a29ee2de40bf", comp.default)
        next()
      })
    }
  },
  {
    path: "/technology/database/index.html",
    redirect: "/technology/database/"
  },
  {
    name: "v-dea555df7c8f1",
    path: "/technology/database/mysql.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\Workplace\\__Blog__\\vuePress\\my_blogs\\blog-new\\website\\technology\\database\\mysql.md").then(comp => {
        Vue.component("v-dea555df7c8f1", comp.default)
        next()
      })
    }
  },
  {
    name: "v-fe48f1b277055",
    path: "/technology/front-end/css.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\Workplace\\__Blog__\\vuePress\\my_blogs\\blog-new\\website\\technology\\front-end\\css.md").then(comp => {
        Vue.component("v-fe48f1b277055", comp.default)
        next()
      })
    }
  },
  {
    name: "v-afe5eee7a7b44",
    path: "/technology/front-end/html.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\Workplace\\__Blog__\\vuePress\\my_blogs\\blog-new\\website\\technology\\front-end\\html.md").then(comp => {
        Vue.component("v-afe5eee7a7b44", comp.default)
        next()
      })
    }
  },
  {
    name: "v-3a8abcf9655d2",
    path: "/technology/front-end/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\Workplace\\__Blog__\\vuePress\\my_blogs\\blog-new\\website\\technology\\front-end\\index.md").then(comp => {
        Vue.component("v-3a8abcf9655d2", comp.default)
        next()
      })
    }
  },
  {
    path: "/technology/front-end/index.html",
    redirect: "/technology/front-end/"
  },
  {
    name: "v-671e70b668661",
    path: "/technology/front-end/js.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\Workplace\\__Blog__\\vuePress\\my_blogs\\blog-new\\website\\technology\\front-end\\js.md").then(comp => {
        Vue.component("v-671e70b668661", comp.default)
        next()
      })
    }
  },
  {
    name: "v-398061e626d17",
    path: "/technology/front-end/vue.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\Workplace\\__Blog__\\vuePress\\my_blogs\\blog-new\\website\\technology\\front-end\\vue.md").then(comp => {
        Vue.component("v-398061e626d17", comp.default)
        next()
      })
    }
  },
  {
    name: "v-888c0aa44bbba",
    path: "/technology/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\Workplace\\__Blog__\\vuePress\\my_blogs\\blog-new\\website\\technology\\index.md").then(comp => {
        Vue.component("v-888c0aa44bbba", comp.default)
        next()
      })
    }
  },
  {
    path: "/technology/index.html",
    redirect: "/technology/"
  },
  {
    name: "v-031f2a5c80a84",
    path: "/technology/services/apache.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\Workplace\\__Blog__\\vuePress\\my_blogs\\blog-new\\website\\technology\\services\\apache.md").then(comp => {
        Vue.component("v-031f2a5c80a84", comp.default)
        next()
      })
    }
  },
  {
    name: "v-cd62cd4aa0a95",
    path: "/technology/services/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\Workplace\\__Blog__\\vuePress\\my_blogs\\blog-new\\website\\technology\\services\\index.md").then(comp => {
        Vue.component("v-cd62cd4aa0a95", comp.default)
        next()
      })
    }
  },
  {
    path: "/technology/services/index.html",
    redirect: "/technology/services/"
  },
  {
    name: "v-be8226e0fe68a",
    path: "/technology/services/linux.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\Workplace\\__Blog__\\vuePress\\my_blogs\\blog-new\\website\\technology\\services\\linux.md").then(comp => {
        Vue.component("v-be8226e0fe68a", comp.default)
        next()
      })
    }
  },
  {
    name: "v-39259c73002d",
    path: "/technology/services/nginx.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\Workplace\\__Blog__\\vuePress\\my_blogs\\blog-new\\website\\technology\\services\\nginx.md").then(comp => {
        Vue.component("v-39259c73002d", comp.default)
        next()
      })
    }
  },
  {
    name: "v-d58bfac4e6423",
    path: "/technology/tools/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\Workplace\\__Blog__\\vuePress\\my_blogs\\blog-new\\website\\technology\\tools\\index.md").then(comp => {
        Vue.component("v-d58bfac4e6423", comp.default)
        next()
      })
    }
  },
  {
    path: "/technology/tools/index.html",
    redirect: "/technology/tools/"
  },
  {
    name: "v-f4fbf4af83d98",
    path: "/technology/tools/vscode.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\Workplace\\__Blog__\\vuePress\\my_blogs\\blog-new\\website\\technology\\tools\\vscode.md").then(comp => {
        Vue.component("v-f4fbf4af83d98", comp.default)
        next()
      })
    }
  },
  {
    name: "v-48a7ea454e539",
    path: "/test/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\Workplace\\__Blog__\\vuePress\\my_blogs\\blog-new\\website\\test\\README.md").then(comp => {
        Vue.component("v-48a7ea454e539", comp.default)
        next()
      })
    }
  },
  {
    path: "/test/index.html",
    redirect: "/test/"
  },
  {
    name: "v-36d6d84de2275",
    path: "/test/a.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\Workplace\\__Blog__\\vuePress\\my_blogs\\blog-new\\website\\test\\a.md").then(comp => {
        Vue.component("v-36d6d84de2275", comp.default)
        next()
      })
    }
  },
  {
    name: "v-43410cb007132",
    path: "/test/aaa/bbb/d.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\Workplace\\__Blog__\\vuePress\\my_blogs\\blog-new\\website\\test\\aaa\\bbb\\d.md").then(comp => {
        Vue.component("v-43410cb007132", comp.default)
        next()
      })
    }
  },
  {
    name: "v-b0954abc1495c",
    path: "/test/aaa/c.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\Workplace\\__Blog__\\vuePress\\my_blogs\\blog-new\\website\\test\\aaa\\c.md").then(comp => {
        Vue.component("v-b0954abc1495c", comp.default)
        next()
      })
    }
  },
  {
    name: "v-3166b26f28bec",
    path: "/test/b.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\Workplace\\__Blog__\\vuePress\\my_blogs\\blog-new\\website\\test\\b.md").then(comp => {
        Vue.component("v-3166b26f28bec", comp.default)
        next()
      })
    }
  },
  {
    path: '*',
    component: ThemeNotFound
  }
]