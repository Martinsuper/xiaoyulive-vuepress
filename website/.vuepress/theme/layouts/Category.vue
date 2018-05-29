<template lang="pug">
  .container
    h1.title {{data.title}}
    .categories
      .category(v-for='category in data.categoriesData' v-if='category.show')
        h2.category-title {{category.title}}
        .children
          .child(v-for='item in category.children' v-if='item.show')
            .child-name
              a(:href='$ensureExt(item.link)')
                .img: img(:src='$withBase(item.img)' v-if='item.img')
                .name {{item.name}}
</template>

<style lang="stylus" scoped>
@import '../styles/config.styl'
.container
  max-width $navWidth
  min-height 1000px
  margin 0 auto
  .title
    text-align center
  .categories
    .category-title
      padding-left 1em
    .children
      display flex
      justify-content flex-start
      flex-wrap wrap
      .child
        flex-basis 25%
        text-align center
        padding 2%
        box-sizing border-box
        .img
          width 160px
          height 160px
          margin 0 auto
          border-radius 1em
          box-shadow 1px 1px 2px 2px #ccc
          transition 1s all ease
          &:hover
            transform translate(2px, 2px)
          img
            width 100%
            border-radius 1em
        .name
          margin-top 0.4em
</style>


<script>
import { ensureExt } from '../util'
export default {
  computed: {
    data () {
      return this.$page.frontmatter
    }
  }
}
</script>

