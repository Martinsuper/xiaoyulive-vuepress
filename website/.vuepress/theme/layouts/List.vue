<template lang="pug">
.container
  Content(custom v-if='!data.categoryData')
  .datalist(v-if='data.categoryData')
    h1 {{data.categoryData}}
    .dataItem(v-for='category in categories')
      aLink(
        :time='category.frontmatter.datetime'
        :href='category.path'
        :title='category.title'
      )
    p 注: #[b #[i 带 (迁) 的是从老博客迁移的文章]]
</template>

<script>
export default {
  data () {
    return {
      categories: []
    }
  },
  computed: {
    data () {
      return this.$page.frontmatter
    }
  },
  mounted () {
    this.compCates()
  },
  methods: {
    compCates () {
      // 过滤指定分类的所有文章
      this.categories = this.$documentFilter({
        category: this.data.categoryData
      }).sort((a, b) => {
        // 按时间排序
        return new Date(b.frontmatter.datetime) - new Date(a.frontmatter.datetime)
      })
    }
  },
  watch: {
    data () {
      this.compCates()
    }
  }
}
</script>


<style lang="stylus" scoped>

@import '../styles/config.styl';
.container {
  max-width $navWidth
  min-height: 1000px;
  margin 0 auto;
  padding 0 1.5rem
}
</style>
