<template lang='pug'>
  .home
    .title
      img(v-if="data.titleImage" :src="$withBase(data.titleImage)" alt="title")
      h1 {{ data.title || $title }}
      p.description {{ data.description || $description || 'Welcome to xiaoyulive.top' }}
      .action(v-if="data.actionText && data.actionLink && false")
        NavLink.action-button(:item="actionLink")
    .features(v-if="data.features && data.features.length")
      .feature(v-for="feature in data.features")
        router-link(:to="$ensureExt(feature.link)")
          .coverContent
            h2 {{ feature.title }}
            p {{ feature.details }}
          .cover: img(:src='"@/img/cover/00" + cover() + ".jpg"')
    Content(custom)
</template>

<script>
export default {
  computed: {
    data () {
      return this.$page.frontmatter
    },
    actionLink () {
      return {
        link: this.data.actionLink,
        text: this.data.actionText
      }
    }
  },
  methods: {
    cover () {
      return Math.ceil(Math.random() * 9)
    }
  }
}
</script>

<style lang="stylus">
@import '../styles/config.styl'

.home
  padding $navbarHeight 2rem 0
  max-width 960px
  min-height 1000px
  margin 0px auto
  .title
    text-align center
    img
      max-width 280px
      max-height 280px
      display block
      margin 3rem auto 1.5rem
      border-radius 1em
    h1
      font-size 2.4rem
    h1, .description, .action
      margin 1.8rem auto
    .description
      font-size 1.6rem
      line-height 1.3
      color lighten($textColor, 40%)
    .action-button
      display inline-block
      font-size 1.2rem
      color #fff
      background-color $accentColor
      padding 0.8rem 1.6rem
      border-radius 4px
      transition background-color .1s ease
      box-sizing border-box
      border-bottom 1px solid darken($accentColor, 10%)
      &:hover
        background-color lighten($accentColor, 10%)
  .features
    border-top 1px solid $borderColor
    padding 1.2rem 0
    margin-top 2.5rem
    display flex
    flex-wrap wrap
    align-items center
    align-content strech
    justify-content space-between
  .feature
    flex-grow 1
    flex-basis 30%
    max-width 30%
    width 300px
    height 200px
    overflow hidden
    position relative
    margin-bottom 1em
    &.feature:hover .coverContent
      top 0
      transition 1s top ease
    .coverContent
      position absolute
      z-index 1
      overflow hidden
      left 0
      right 0
      height 100%
      top 74%
      background-color rgba(0,0,0,.4)
      h2, p
        padding 0 .8rem
      h2
        font-size 1.2rem
        font-weight 500
        border-bottom none
        padding-bottom 0
        color #fff
      p
        color #fff
    .cover
      width 300px
      height 200px
      position absolute
      top 0
      left 0
      img
        width 100%
        height 100%
        filter opacity(.6)

@media (max-width: $MQMobile)
  .home
    .features
      flex-direction column
    .feature
      max-width 100%
      padding 0 0
      .coverContent
        top 0

@media (max-width: $MQMobileNarrow)
  .home
    padding-left 1.5rem
    padding-right 1.5rem
    .title
      img
        max-height 210px
        margin 2rem auto 1.2rem
      h1
        font-size 2rem
      h1, .description, .action
        margin 1.2rem auto
      .description
        font-size 1.2rem
      .action-button
        font-size 1rem
        padding 0.6rem 1.2rem
    .feature
      h2
        font-size 1.25rem
</style>
