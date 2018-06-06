<template lang="pug">
div.alink
  a(:href='$ensureExt(link)' :target='target') {{title}}
  span.time(v-if='time') {{time}}
</template>

<script>
export default {
  props: ['href', 'title', 'time'],
  computed: {
    link () {
      return this.href || this.title
    },
    target () {
      if (!this.href) { return '_blank' }
    }
  }
}
</script>

<style lang="stylus" scoped>

.alink
  display grid
  grid-template-columns 2fr 1fr
  border 1px dashed #ccc
  margin-bottom 1em
  margin-right 1em
  padding .4em 1em
  border-radius .2em


</style>
