<template lang="pug">
span
  a(:href='$ensureExt(link)' :target='target') {{title}}
</template>

<script>
export default {
  props: ['href', 'title'],
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

