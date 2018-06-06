<template lang="pug">
.container
  Content(custom)
</template>

<style lang="stylus" scoped>

@import '../styles/config.styl';
.container {
  max-width $navWidth
  min-height: 1000px;
  margin 0 auto;
  padding 0 1.5rem
}
</style>
