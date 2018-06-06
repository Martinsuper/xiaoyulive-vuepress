---
sidebar: auto
sidebarDepth: 2
datetime: 2018-06-06
---

# Vue 返回时不刷新页面

## 前言

最近项目中有那么一个需求: 从列表页进入详情后，返回列表页时停留在列表页之前浏览到的位置。

如果从传统的 js 角度思考，必然需要在状态管理中存储一个浏览位置高度的百分百，再次返回此页面时移动到偏移的位置。

不过，这样的话，所有页面几乎都得设置那么一个标记，非常麻烦，有没有一种更加简单的方式，可以一劳永逸?

查了一些资料，发现 Vue 中提供 `keep-alive` 组件，就可实现这一需求。

## 使用 keep-alive

通常情况下，一个 Vue 组件都会依次执行其生命周期函数，也就是 `beforeCreate` - `created` - `beforeMount` - `mounted` - `beforeUpdate` - `updated` - `beforeDestory` - `destoryed`。

如果我们想要在一个组件只是第一次进入的时候执行完整的生命周期，之后进入的话从缓存中取页面，只监控其 `update` 相关的生命周期函数，这时，使用 `keep-alive` 再适合不过。而且由于页面不需要重新渲染，返回的时候会停留在上一次浏览到的位置，再好不过。

## 一个简单的测试

在我的一个叫 `Home.vue` 的组件里面，有如下逻辑结构

```js
export default {
  beforeCreate () {
    console.log('beforeCreate')
  },
  created () {
    console.log('created')
  },
  beforeMount () {
    console.log('beforeMount')
  },
  mounted () {
    console.log('mounted')
  },
  beforeUpdate () {
    console.log('beforeUpdate')
  },
  updated () {
    console.log('updated')
  },
  beforeDestroy () {
    console.log('beforeDestroy')
  },
  destroyed () {
    console.log('destroyed')
  }
}
```

### 正常情况

在没有使用 keep-alive 的时候，父组件结构如下:

```pug
<template lang="pug">
  .container
    Home
</template>
```

第一次进入首页，控制台打出

```
beforeCreate
created
beforeMount
mounted
```

跳转到其他页面，控制台打出

```
beforeDestroy
destroyed
updated
```

再次返回首页，控制台打出

```
beforeCreate
created
beforeMount
mounted
```

可以看出，整个生命周期完整执行，当跳转到其他页面的时候，组件被销毁，调用其 `destroy` 相关的生命周期函数。 


### 使用 keep-alive

使用了 `keep-alive` 后的父组件结构:

```pug
<template lang="pug">
  .container
    keep-alive
      Home
</template>
```

第一次进入首页，控制台打出

```
beforeCreate
created
beforeMount
mounted
```

跳转到其他页面，控制台打出

```
beforeUpdate
updated
```

再次返回首页，控制台打出

```
beforeUpdate
updated
```

可以看到，只有第一次进入的时候，`create` 和 `mount` 相关的生命周期函数才执行，而 `destroy` 相关的生命周期函数始终没有执行，说明此组件始终缓存着，没有销毁。


## 参考资料

[实例生命周期钩子 - vue.js](https://cn.vuejs.org/v2/guide/instance.html#%E5%AE%9E%E4%BE%8B%E7%94%9F%E5%91%BD%E5%91%A8%E6%9C%9F%E9%92%A9%E5%AD%90)

[keep-alive - vue.js](https://cn.vuejs.org/v2/api/#keep-alive)
