---
sidebar: auto
sidebarDepth: 2
---


# 关于 WeixinJSBridge is not defined 的深究及处理方案 

## 问题现象

最近做了一个前端JS脚本监控，会搜集用户在客户端使用滇医通时的一些报错信息，这些错误信息会提交到数据库，综合归纳最近的报错信息，报错量最多的是 `Uncaught ReferenceError: WeixinJSBridge is not defined`。

![](@/img/error/WeixinJSBridge_01.png)

![](@/img/error/WeixinJSBridge_02.png)

截图是 2018-05-31 的，统计了两天一来的错误数量，惊人的 16138，接下来分析一下此错误出现的原因。



## 问题原因

在网上一搜，有很多类似的文章，发现很多开发者都遇到类似的问题，归根究底，总结有以下的原因:

a) 没有用到微信JS-SDK, 为什么会报这个错呢？
答: 微信内置浏览器会有WeixinJSBridge，但是需要一定的加载时间。

b) 使用了微信JS-SDK, 但是为什么会出错呢？
答: 微信 webview 注入钩子有时序问题：在 WeixinJSBridge 还未注入之前，就已经成功注入其它依赖于 WeixinJSBridge 的其它XX模块。在XX模块中调用WeixinJSBridge就会失败。

关于这个问题的帖子从2014年开始就有了，然而到现在依然存在，可见微信一直没有修复好！



## 问题影响

a) 可能会出现页面不能正常显示一片空白

b) 可能会出现某些基于微信 JSSDK 的 API 不能正常执行



## 解决方案

a) 程序中改善 (试行)

网上有相关的程序解决方案，使用事件监听的方式确保微信 WeixinJSBridge 已加载完成，程序代码使用 jq 类似于:

```js
if (typeof window.WeixinJSBridge == "undefined"){
  $(document).on('WeixinJSBridgeReady',function(){ 
    $('#weiXinPay').click(); 
    }); } else { 
    $('#weiXinPay').click();
  }
}
```

此方案不确定有效，但可以一试，观察之后此错误出现的频次是否有所下降。


b) 督促微信修复相关问题，向微信发 issue 报告使用中出现的此类问题



## 参考资料

[“WeixinJSBridge is not defined” 的对用户是否造成影响以及产生的原因](https://segmentfault.com/q/1010000008000754)

[深究WeixinJSBridge未定义之因](https://segmentfault.com/a/1190000008408110)

[微信支付 WeixinJSBridge is not defined 报错](https://www.cnblogs.com/ottoman/p/7614419.html)
