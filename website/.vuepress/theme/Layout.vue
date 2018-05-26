<template lang="pug">
  .theme-container(
    :class="pageClasses"
    @touchstart="onTouchStart"
    @touchend="onTouchEnd"
  )
    Navbar(v-if="shouldShowNavbar" @toggle-sidebar="toggleSidebar")
    .sidebar-mask(@click="toggleSidebar(false)")
    Sidebar(:items="sidebarItems" @toggle-sidebar="toggleSidebar")
      slot(name="sidebar-top" slot="top")
      slot(name="sidebar-bottom" slot="bottom")
    .custom-layout(v-if="$page.frontmatter.layout")
      component(:is="$page.frontmatter.layout")
    Home(v-else-if="$page.frontmatter.home")
    Page(v-else :sidebar-items="sidebarItems")
      slot(name="page-top" slot="top")
      slot(name="page-bottom" slot="bottom")
    .footers(v-if="data.footers && data.footers.length")
      p(v-for='footer in data.footers') {{ footer }}
</template>

<script>
import Vue from 'vue'
import nprogress from 'nprogress'
import { pathToComponentName } from '@app/util'
import store from '@app/store'
import { resolveSidebarItems } from './util'
import throttle from 'lodash.throttle'
import particals from './partical'
import layouts from './layouts'
import util from './util'

export default {
  data () {
    return {
      data: {
        footers: [
          'MIT Licensed | Copyright © 2018-present  滇ICP备16006294号',
          'Design by Quanzaiyu | Power by VuePress'
        ]
      },
      isSidebarOpen: false
    }
  },

  computed: {
    shouldShowNavbar () {
      const { themeConfig } = this.$site
      const { frontmatter } = this.$page
      if (
        frontmatter.navbar === false ||
        themeConfig.navbar === false) {
        return false
      }
      return (
        this.$title ||
        themeConfig.logo ||
        themeConfig.repo ||
        themeConfig.nav ||
        this.$themeLocaleConfig.nav
      )
    },
    shouldShowSidebar () {
      const { frontmatter } = this.$page
      return (
        !frontmatter.layout &&
        !frontmatter.home &&
        frontmatter.sidebar !== false &&
        this.sidebarItems.length
      )
    },
    sidebarItems () {
      return resolveSidebarItems(
        this.$page,
        this.$route,
        this.$site,
        this.$localePath
      )
    },
    pageClasses () {
      const userPageClass = this.$page.frontmatter.pageClass
      return [
        {
          'no-navbar': !this.shouldShowNavbar,
          'sidebar-open': this.isSidebarOpen,
          'no-sidebar': !this.shouldShowSidebar
        },
        userPageClass
      ]
    }
  },

  beforeCreate () {
    Vue.use(particals)
    Vue.use(layouts)
    Vue.use(util)
  },
  created () {
    if (this.$ssrContext) {
      this.$ssrContext.title = this.$title
      this.$ssrContext.lang = this.$lang
      this.$ssrContext.description = this.$page.description || this.$description
    }
  },

  mounted () {
    // update title / meta tags
    this.currentMetaTags = []
    const updateMeta = () => {
      document.title = this.$title
      document.documentElement.lang = this.$lang
      const meta = [
        {
          name: 'description',
          content: this.$description
        },
        ...(this.$page.frontmatter.meta || [])
      ]
      this.currentMetaTags = updateMetaTags(meta, this.currentMetaTags)
    }
    this.$watch('$page', updateMeta)
    updateMeta()

    window.addEventListener('scroll', this.onScroll)

    // configure progress bar
    nprogress.configure({ showSpinner: false })

    this.$router.beforeEach((to, from, next) => {
      if (to.path !== from.path && !Vue.component(pathToComponentName(to.path))) {
        nprogress.start()
      }
      next()
    })

    this.$router.afterEach(() => {
      nprogress.done()
      this.isSidebarOpen = false
    })
  },

  beforeDestroy () {
    updateMetaTags(null, this.currentMetaTags)

    window.removeEventListener('scroll', this.onScroll)
  },

  methods: {
    toggleSidebar (to) {
      this.isSidebarOpen = typeof to === 'boolean' ? to : !this.isSidebarOpen
    },
    // side swipe
    onTouchStart (e) {
      this.touchStart = {
        x: e.changedTouches[0].clientX,
        y: e.changedTouches[0].clientY
      }
    },
    onTouchEnd (e) {
      const dx = e.changedTouches[0].clientX - this.touchStart.x
      const dy = e.changedTouches[0].clientY - this.touchStart.y
      if (Math.abs(dx) > Math.abs(dy) && Math.abs(dx) > 40) {
        if (dx > 0 && this.touchStart.x <= 80) {
          this.toggleSidebar(true)
        } else {
          this.toggleSidebar(false)
        }
      }
    },
    onScroll: throttle(function () {
      this.setActiveHash()
    }, 300),
    setActiveHash () {
      const sidebarLinks = [].slice.call(document.querySelectorAll('.sidebar-link'))
      const anchors = [].slice.call(document.querySelectorAll('.header-anchor'))
        .filter(anchor => sidebarLinks.some(sidebarLink => sidebarLink.hash === anchor.hash))

      const scrollTop = Math.max(window.pageYOffset, document.documentElement.scrollTop, document.body.scrollTop)

      for (let i = 0; i < anchors.length; i++) {
        const anchor = anchors[i]
        const nextAnchor = anchors[i + 1]

        const isActive = i === 0 && scrollTop === 0 ||
          (scrollTop >= anchor.parentElement.offsetTop + 10 &&
            (!nextAnchor || scrollTop < nextAnchor.parentElement.offsetTop - 10))

        if (isActive && this.$route.hash !== anchor.hash) {
          store.disableScrollBehavior = true
          this.$router.replace(anchor.hash, () => {
            // execute after scrollBehavior handler.
            this.$nextTick(() => {
              store.disableScrollBehavior = false
            })
          })
          return
        }
      }
    }
  }
}

function updateMetaTags (meta, current) {
  if (current) {
    current.forEach(c => {
      document.head.removeChild(c)
    })
  }
  if (meta) {
    return meta.map(m => {
      const tag = document.createElement('meta')
      Object.keys(m).forEach(key => {
        tag.setAttribute(key, m[key])
      })
      document.head.appendChild(tag)
      return tag
    })
  }
}
</script>

<style src="prismjs/themes/prism-tomorrow.css"></style>
<style src="./styles/theme.styl" lang="stylus"></style>
<style lang="stylus" scoped>
@import './styles/config.styl'
.footers
  position relative
  z-index 20
  background-color $navBgColor
  padding 2.5rem
  border-top 1px solid $borderColor
  text-align center
  color $navTextColor
</style>
