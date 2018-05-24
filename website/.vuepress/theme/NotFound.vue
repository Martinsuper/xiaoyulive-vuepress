<template lang="pug">
  .theme-container
    .content
      h1 404 #[router-link.small(to="/") 返回首页]
      blockquote {{ getMsg() }}
      img(src='/404.png')
</template>


<script>
const msgs = [
  `页面找不到了!`,
  `发生了一些奇怪的事!`,
  `页面被火星劫持了!`,
  `链接已失效!`
]

export default {
  methods: {
    getMsg () {
      return msgs[Math.floor(Math.random() * msgs.length)]
    }
  }
}
</script>

<style lang="less" scoped>
.theme-container {
  background-color: #fff;
  .content {
    padding: 0;
  }
}
h1 {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 1em;
}
.small {
  font-size: 0.6em;
}
</style>
