---
sidebar: auto
sidebarDepth: 2
datetime: 2018-06-05
---

# JS 大数处理

## 问题现象

最近在开发过程中，遇到很多关于数值的问题。第一类是浮点数运算不精确，第二类是大数运算不精确。

浮点数不精确:

![](@/img/articles/001.png)

大数不精确:

![](@/img/articles/003.png)

总的来说，此类问题的产生都是由于计算机对于大数运算不精确造成的，跟语言无关。像 JAVA 这门语言，有 BigDecimal 的解决方案，而 JS，在查阅众多资料后，发现也有相关的解决方案。

## 解决方案

1. 关于浮点数，可以使用乘以倍数的解决方案

![](@/img/articles/002.png)

2. 关于大数，可以使用第三方库解决

decimal.js: [GitHub](https://github.com/MikeMcl/decimal.js)、[Doc](http://mikemcl.github.io/decimal.js/)

```js
new Decimal('5032485723458348569331745.33434346346912144534543')
new Decimal('4.321e+4')                  // '43210'
new Decimal('-0b10110100.1')             // '-180.5'
new Decimal('0xff.8')                    // '255.5'
new Decimal(Infinity)                    // 'Infinity'
new Decimal(NaN)                         // 'NaN'
```

原理就是将一个数值类型转化为一个字符串数组，重写其 toString() 将之转化为字符串。

当然，对于第一类问题，浮点数不精确的问题实际上也是属于大数不精确的问题，如法炮制即可。

