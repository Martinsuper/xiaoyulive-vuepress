<template lang="pug">
  nav.nav-links(v-if="userLinks.length || repoLink")
    .nav-item(v-for="item in userLinks" :key="item.link")
      DropdownLink(v-if="item.type === 'links'" :item="item")
      NavLink(v-else :item="item")
    a.repo-link(
      v-if="repoLink"
      :href="repoLink"
      target="_blank"
      rel="noopener noreferrer"
    ) {{ repoLabel }}
      OutboundLink
</template>

<script>
import { resolveNavLinkItem } from '../util'

export default {
  computed: {
    userNav () {
      return this.$themeLocaleConfig.nav || this.$site.themeConfig.nav || []
    },
    nav () {
      const { locales } = this.$site
      if (locales && Object.keys(locales).length > 1) {
        const currentLink = this.$page.path
        const routes = this.$router.options.routes
        const themeLocales = this.$site.themeConfig.locales || {}
        const languageDropdown = {
          text: this.$themeLocaleConfig.selectText || 'Languages',
          items: Object.keys(locales).map(path => {
            const locale = locales[path]
            const text = themeLocales[path] && themeLocales[path].label || locale.lang
            let link
            // Stay on the current page
            if (locale.lang === this.$lang) {
              link = currentLink
            } else {
              // Try to stay on the same page
              link = currentLink.replace(this.$localeConfig.path, path)
              // fallback to homepage
              if (!routes.some(route => route.path === link)) {
                link = path
              }
            }
            return { text, link }
          })
        }
        return [...this.userNav, languageDropdown]
      }
      return this.userNav
    },
    userLinks () {
      return (this.nav || []).map(link => {
        return Object.assign(resolveNavLinkItem(link), {
          items: (link.items || []).map(resolveNavLinkItem)
        })
      })
    },
    repoLink () {
      const { repo } = this.$site.themeConfig
      if (repo) {
        return /^https?:/.test(repo)
          ? repo
          : `https://github.com/${repo}`
      }
    },
    repoLabel () {
      if (!this.repoLink) return
      if (this.$site.themeConfig.repoLabel) {
        return this.$site.themeConfig.repoLabel
      }

      const repoHost = this.repoLink.match(/^https?:\/\/[^/]+/)[0]
      const platforms = ['GitHub', 'GitLab', 'Bitbucket']
      for (let i = 0; i < platforms.length; i++) {
        const platform = platforms[i]
        if (new RegExp(platform, 'i').test(repoHost)) {
          return platform
        }
      }

      return 'Source'
    }
  }
}
</script>

<style lang="stylus">
@import '../styles/config.styl'

.nav-links
  display inline-block
  a
    line-height 1.4rem
    color $navTextColor
  .nav-item
    cursor pointer
    position relative
    display inline-block
    margin-left 1.5rem
    line-height 2rem
  .repo-link
    margin-left 1.5rem

@media (max-width: $MQMobile)
  .nav-links
    .nav-item, .repo-link
      margin-left 0

@media (min-width: $MQMobile)
  .nav-item > a
    position relative
    cursor: pointer
    &::after
      content ''
      position absolute
      width 0
      left: 50%;
      height: 100%
      border-bottom: 2px solid lighten($accentColor, 8%)
      transition all .4s ease
      transform translateX(-50%)
    &:hover, &.router-link-active
      &::after
        width: 100%;
        transition-delay: 0.1s;
      // margin-bottom -2px
      // border-bottom 2px solid lighten($accentColor, 8%)
</style>
