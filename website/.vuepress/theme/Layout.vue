<template lang="pug">
  .theme-container(
    :class="pageClasses"
    @touchstart="onTouchStart"
    @touchend="onTouchEnd"
  )
    keep-alive
      Navbar(v-if="shouldShowNavbar" @toggle-sidebar="toggleSidebar")
      .sidebar-mask(@click="toggleSidebar(false)")
    keep-alive
      Sidebar(:items="sidebarItems" @toggle-sidebar="toggleSidebar")
        slot(name="sidebar-top" slot="top")
        slot(name="sidebar-bottom" slot="bottom")
    .custom-layout(v-if="$page.frontmatter.layout")
      component(:is="$page.frontmatter.layout")
    keep-alive(v-else-if="$page.frontmatter.home")
      Home
    keep-alive(v-else)
      Page(:sidebar-items="sidebarItems")
        slot(name="page-top" slot="top")
        slot(name="page-bottom" slot="bottom")
    .footers(v-if="data.footers && data.footers.length")
      p(v-for='footer in data.footers') {{ footer }}
</template>

<script>
import Vue from 'vue'
import nprogress from 'nprogress'
import { resolveSidebarItems } from './util'
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

  mounted () {
    window.addEventListener('scroll', this.onScroll)

    // configure progress bar
    nprogress.configure({ showSpinner: true })

    this.$router.beforeEach((to, from, next) => {
      if (to.path !== from.path && !Vue.component(to.name)) {
        nprogress.start()
      }
      next()
    })

    this.$router.afterEach(() => {
      nprogress.done()
      this.isSidebarOpen = false
    })
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
    }
  }
}
</script>

<style src="prismjs/themes/prism-tomorrow.css"></style>
<style src="./styles/theme.styl" lang="stylus"></style>
<style lang="stylus" scoped>
@import './styles/config.styl'
.footers
  background-color $navBgColor
  padding 2.5rem
  border-top 1px solid $borderColor
  text-align center
  color $navTextColor


</style>
