<template lang="pug">
  router-link.nav-link(:to="link" v-if="!isExternal(link)" :exact="link === '/'") {{ item.text }}
  a.nav-link(v-else :href="link"
    :target="isMailto(link) || isTel(link) ? null : '_blank'"
    :rel="isMailto(link) || isTel(link) ? null : 'noopener noreferrer'"
  ) {{ item.text }}
</template>

<script>
import { isExternal, isMailto, isTel, ensureExt } from '../util'

export default {
  props: {
    item: {
      required: true
    }
  },
  computed: {
    link () {
      return ensureExt(this.item.link)
    }
  },
  methods: {
    isExternal,
    isMailto,
    isTel
  }
}
</script>
