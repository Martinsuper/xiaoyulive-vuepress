<template lang="pug">
  header.navbar
    .navbar-content
      SidebarButton(@toggle-sidebar="$emit('toggle-sidebar')")
      router-link.home-link(:to="$localePath")
        img.logo(
          v-if="$site.themeConfig.logo"
          :src="$withBase($site.themeConfig.logo)"
        )
        span.site-name(
          v-if="$siteTitle"
          :class="{ 'can-hide': $site.themeConfig.logo }"
        ) {{ $siteTitle }}
      .links
        NavLinks.can-hide
        AlgoliaSearchBox(v-if="isAlgoliaSearch" :options="algolia")
        SearchBox(v-else-if="$site.themeConfig.search !== false")
</template>

<script>
import SidebarButton from './SidebarButton.vue'
import AlgoliaSearchBox from '@AlgoliaSearchBox'
import SearchBox from './SearchBox.vue'
import NavLinks from './NavLinks.vue'

export default {
  components: { SidebarButton, NavLinks, SearchBox, AlgoliaSearchBox },
  computed: {
    algolia () {
      return this.$themeLocaleConfig.algolia || this.$site.themeConfig.algolia || {}
    },
    isAlgoliaSearch () {
      return this.algolia && this.algolia.apiKey && this.algolia.indexName
    }
  }
}
</script>

<style lang="stylus">
@import './styles/config.styl'

.navbar
  padding 0.7rem 1.5rem
  line-height $navbarHeight - 1.4rem
  position relative
  .navbar-content
    width $navWidth
    margin 0 auto
    display flex
    position relative
    a, span, img
      display inline-block
    .logo
      height $navbarHeight - 1.4rem
      min-width $navbarHeight - 1.4rem
      margin-right 0.8rem
      vertical-align top
    .site-name
      font-size 1.3rem
      font-weight 600
      color $navTextColor
      position relative
    .links
      font-size 0.9rem
      position absolute
      right 0
      transition all 1s ease

@media (max-width: $MQMobile)
  .navbar
    padding-left 4rem
    .can-hide
      display none


@media (max-width: $navWidth + 200px)
  .navbar
    .navbar-content
      width 100%
      display block
      position static
      .links
        right 1.5rem
        top 0.7rem
</style>
