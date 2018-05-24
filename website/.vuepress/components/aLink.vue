<template lang="pug">
div
  a(:href='$ensureExt(href)') {{title}}
</template>

<script>
export default {
  props: ['href', 'title']
}
</script>

