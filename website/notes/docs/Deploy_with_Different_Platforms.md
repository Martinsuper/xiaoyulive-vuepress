---
sidebar: auto
sidebarDepth: 0
datetime: 2018-06-05
---

# 使用不同的托管平台部署站点

## 前言

众所周知，GitHub 提供静态网站托管服务 GitHub Pages，甚至可以在你没有任何云服务和域名的情况下使用，非常人性化。

就在昨日，2018年6月5日，GitHub 换了主人，微软收购了 GitHub，这个全球最大的同性交友平台，今后的趋势不得而知。很多人都向 GitLab 迁移，我个人还是持比较乐观的态度，毕竟微软近几年为开源事业做出的贡献大家都有目共睹，2016年，微软在 GitHub 的贡献榜排名第一，微软已经不是当年封闭的微软。

## 使用不同的托管平台

在2016年之前，我唯 GitHub 独尊，虽然也了解过很多代码托管平台，不过都没尝试过使用。

从2016年开始，尝试使用不同的平台，先后使用过 Coding、Gitee、Gitlab等，发现都挺不错的，功能强悍，各有千秋。尤其是在天朝，使用 GitHub 总而言之一个字 - 慢。不过作为人类代码界的基因工程，GitHub 的地位无可撼动。

这里简述一下几种托管平台的站点部署服务。

## GitHub Pages

[GitHub Pages](https://help.github.com/articles/what-is-github-pages/) 是 GitHub 的静态网站托管服务，使用起来极其简单。

只需要创建一个与自己用户名相同的 `[username].github.io` 仓库即可，比如我的 GitHub 个人主页为 `https://github.com/quanzaiyu`，则只需要创建一个名叫 `quanzaiyu.github.io` 的仓库即可。

![](@/img/github/001.png)

![](@/img/github/002.png)

不需要额外的操作，此仓库即可作为一个服务启动，默认会访问此仓库下的 `index.html` 页面，如果找不到页面，会定位到此仓库下的 `404.html` 页面。

![](@/img/github/003.png)

可以自定义域名，如果已经做过域名解析，只需要在仓库根下创建一个 CNAME 即可，比如我的 `blog.xiaoyulive.top`。


## Gitee Pages

[Gitee Pages](http://git.mydoc.io/?t=154714) 是码云提供的静态网站，相比于 GitHub，部署更加轻松，功能更加强大。

Gitee 不但支持个人站点的部署，除此之外任何托管的项目都能进行部署。

1. 以根目录的形式访问

在 Gitee 中创建与自己个性地址相同的仓库，比如我的码云地址为 `https://gitee.com/quanzaiyu`，则建立一个名为`quanzaiyu`的仓库即可。

![](@/img/github/004.png)

![](@/img/github/005.png)

![](@/img/github/006.png)

可以看到，码云可以指定项目的部署目录，若不指定，则默认使用项目根路径。使用 `http://quanzaiyu.gitee.io` 即可访问。

2. 以项目的形式访问

码云还支持项目的部署，此时只需要使用使用 `http://quanzaiyu.gitee.io/projectName` 即可访问，并为项目指定演示地址。

不过现在我不知道 Gitee 如何进行 CNAME 域名绑定，貌似不支持。 


## Coding Pages

[Coding Pages](https://coding.net/help/doc/pages) 暂时没有研究，貌似功能非常强大，有时间研究下。

![](@/img/github/007.png)



