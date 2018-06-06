---
sidebar: auto
sidebarDepth: 2
datetime: 2018-05-16
---

# 优质的 Markdown-It 插件

## 前言

初识 markdown-it，是在 VuePress 中。

以前特别想自己定制 Markdown 的解析，试过 [marked.js](https://www.npmjs.com/package/marked)[^1]，但是功能较少，局限性很大，也不容易扩展。

玩了一阵 [Gitbook](https://www.npmjs.com/package/gitbook)[^2]，挺好用的，其本身是一个开源电子书托管平台，可以直接安装 npm 全局依赖，以创建基于 Markdown 的电子书，支持的插件也特别多，个人挺喜欢的，不过只适用于管理电子书，并不能做其他事情。

到了最近，打算使用 VuePress 搭建自己的静态网站，偶然发现其 Markdown 渲染引擎是 markdown-it，出于好奇，研究了一番，发现真不得了，不但本身功能强大，还支持丰富的扩展，开发自己的扩展也很容易。

下面，介绍一下我非常喜欢的一些 [markdown-it 插件](https://www.npmjs.com/search?q=keywords:markdown-it-plugin)。


## 标签型插件

### markdown-it-sup

使用 [markdown-it-sup](https://www.npmjs.com/package/markdown-it-sup) 生成上标标签。

```markdown
29^th^
```

输出

```html
<p>29<sup>th</sup></p>
```

渲染示例

29^th^

### markdown-it-sub

使用 [markdown-it-sub](https://www.npmjs.com/package/markdown-it-sub) 生成下标标签。

```markdown
H~2~0
```

输出

```html
<p>H<sub>2</sub>O</p>
```

渲染示例

H~2~0


### markdown-it-mark

使用 [markdown-it-sub](https://www.npmjs.com/package/markdown-it-mark) 生成高亮标签。

```markdown
==marked==
```

输出

```html
<p><mark>marked</mark></p>
```

渲染示例

==marked==


### markdown-it-ins

使用 [markdown-it-sub](https://www.npmjs.com/package/markdown-it-ins) 生成插入标签。

```markdown
++inserted++
```

输出

```html
<p><ins>inserted</ins></p>
```

渲染示例

++inserted++


### markdown-it-abbr

使用 [markdown-it-sub](https://www.npmjs.com/package/markdown-it-abbr) 生成缩写标签。

```markdown
*[HTML]: Hyper Text Markup Language
*[W3C]:  World Wide Web Consortium
The HTML specification
is maintained by the W3C.
```

输出

```html
<p>The <abbr title="Hyper Text Markup Language">HTML</abbr> specification
is maintained by the <abbr title="World Wide Web Consortium">W3C</abbr>.</p>
```

渲染示例

*[HTML]: Hyper Text Markup Language
*[W3C]:  World Wide Web Consortium
The HTML specification
is maintained by the W3C.


### markdown-it-kbd

使用 [markdown-it-sub](https://www.npmjs.com/package/markdown-it-kbd) 生成键位标签。

```markdown
[[x]]
```

输出

```html
<kbd>x</kbd>
```

渲染示例

[[x]]


### markdown-it-underline

通常情况下，`_a_` 的写法会渲染为加粗显示，使用 [markdown-it-underline](https://www.npmjs.com/package/markdown-it-underline) 插件，可以将之渲染为下划线。

```markdown
_a_
```

输出

```html
<u>underline</u>
```

渲染示例

_a_


### markdown-it-deflist

使用 [markdown-it-deflist](https://www.npmjs.com/package/markdown-it-deflist) 可以生成自定义列表，详见 [pandoc](http://pandoc.org/MANUAL.html#definition-lists)。

```markdown
Term 1

: Definition 1

Term 2 with *inline markup*

: Definition 2

Third paragraph of definition 2.
```

```markdown
Term 1
  ~ Definition 1

Term 2
  ~ Definition 2a
  ~ Definition 2b
```

```markdown
Term 1

:   Definition
with lazy continuation.

    Second paragraph of the definition.
```


### markdown-it-span

使用 [markdown-it-span](https://www.npmjs.com/package/markdown-it-span) 可以生成一个 span 标签。

```markdown
::spanned::
```


### markdown-it-checkbox

使用 [markdown-it-checkbox](https://www.npmjs.com/package/markdown-it-checkbox) 可以生成复选框。

```markdown
[ ] unchecked
[x] checked
```

[ ] unchecked
[x] checked


## 渲染型插件

### markdown-it-emoji

使用 [markdown-it-emoji](https://www.npmjs.com/package/markdown-it-emoji) 可以很方便的输入表情符号。

::: warning 注意
不要同 markdown-it-span 插件一起使用，否则会出现解析错误。
:::

官方定义的表情符号参见 [shortcuts.js](https://github.com/markdown-it/markdown-it-emoji/blob/master/lib/data/shortcuts.js)

```markdown
:tada: :100: :-( :") </3 <3 x-) :/ :'( :amphora: :alien: :D ,:( :*
```

渲染为

:tada: :100: :-( :") </3 <3 x-) :/ :'( :amphora: :alien: :D ,:( :*

也可以自定义表情符号，详见[配置](https://www.npmjs.com/package/markdown-it-emoji#use)

### markdown-it-task-checkbox

使用 [markdown-it-task-checkbox](https://www.npmjs.com/package/markdown-it-task-checkbox) 可以生成一个任务列表。

```markdown
- [x] unchecked
```

- [x] unchecked

### markdown-it-smartarrows

使用 [markdown-it-smartarrows](https://www.npmjs.com/package/markdown-it-smartarrows) 可以渲染简易的箭头。


```markdown
--> →
<-- ←
<--> ↔
==> ⇒
<== ⇐
<==> ⇔
```

### markdown-it-container

使用 [markdown-it-container](https://www.npmjs.com/package/markdown-it-container) 或者 [markdown-it-alerts](https://www.npmjs.com/package/markdown-it-alerts) 可以自定义引用内容。

```markdown
::: tip 提示
This is a tip
:::

::: warning 警告
This is a warning
:::

::: danger 危险
This is a dangerous warning
:::
```

渲染示例

::: tip 提示
This is a tip
:::


## 功能增强型插件

### markdown-it-anchor

使用 [markdown-it-anchor](https://www.npmjs.com/package/markdown-it-anchor) 可以在标题前加上链接符号。

参数

| Name              | Description                                                    | Default         |
| ----------------- | -------------------------------------------------------------- | --------------- |
| `level`           | Minimum level to apply anchors on or array of selected levels. | 1               |
| `permalink`       | Whether to add permalinks next to titles.                      | `false`         |
| `permalinkClass`  | The class of the permalink anchor.                             | `header-anchor` |
| `permalinkSymbol` | The symbol in the permalink anchor.                            | `¶`             |
| `permalinkBefore` | Place the permalink before the title.                          | `false`         |
| `callback`        | Called with token and info after rendering.                    | `undefined`     |


### markdown-it-table-of-contents

使用 [TOC](https://www.npmjs.com/package/markdown-it-table-of-contents) (table of contents) 可以提取当前 md 文件的标题，以生成目录树。

```markdown
[[TOC]]
```

参数

| Name             | Description                                         | Default             |
| ---------------- | --------------------------------------------------- | ------------------- |
| `includeLevel`   | Headings levels to use (2 for h2:s etc)             | [1, 2]              |
| `containerClass` | The class for the container DIV                     | "table-of-contents" |
| `markerPattern`  | Regex pattern of the marker to be replaced with TOC | `/^\[\[toc\]\]/im`  |
| `listType`       | Type of list (`ul` for unordered, `ol` for ordered) | `ul`                |
| `format`         | A function for formatting headings                  | `undefined`         |



### markdown-it-footnote

使用 [markdown-it-footnote](https://www.npmjs.com/package/markdown-it-footnote) 可以生成脚注。

```markdown
Here is a footnote reference,[^1] and another.[^longnote]

[^1]: Here is the footnote.

[^longnote]: Here's one with multiple blocks.
```


### markdown-it-imsize

使用 [markdown-it-imsize](https://www.npmjs.com/package/markdown-it-imsize) 可以指定图片大小，如果只填写第一个参数，则高度自适应。

```markdown
![test](/404.png =100x)
![test](/404.png =100x200)
```

### markdown-it-implicit-figures

使用 [markdown-it-implicit-figures](https://www.npmjs.com/package/markdown-it-implicit-figures) 可以在 img 标签外嵌套 figure 标签。

```markdown
[![](img.png)](page.html)
```

输出

```html
<figure><a href="page.html"><img src="img.png" alt=""></a></figure>
```

配置

```
dataType: true,  // 输出 <figure data-type="image">, default: false
figcaption: true,  // 输出 <figcaption>alternative text</figcaption>, default: false
tabindex: true, // 输出 <figure tabindex="1+n">..., default: false
link: true // 输出 <a href="img.png"><img src="img.png"></a>, default: false
```

### markdown-it-inline-comments

使用 [markdown-it-inline-comments](https://www.npmjs.com/package/markdown-it-inline-comments) 可以去除 md 文件中的注释，不渲染到 HTML 页面。

### markdown-it-attrs

使用 [markdown-it-attrs](https://www.npmjs.com/package/markdown-it-attrs) 可以方便的为指定内容添加属性。

```markdown
# header{.style-me}

paragraph{data-toggle=modal}

paragraph *style me*{.red} more text
```

输出

```html
<h1 class="style-me">header</h1>
<p data-toggle="modal">paragraph</p>
<p>paragraph <em class="red">style me</em> more text</p>
```

## 图表、时序图、数学公式

### markdown-it-math

使用 [markdown-it-math](https://www.npmjs.com/package/markdown-it-math) 可以创建数学公式，其他类似的插件如 [markdown-it-texmath](https://www.npmjs.com/package/markdown-it-texmath)、[markdown-it-asciimath](https://www.npmjs.com/package/markdown-it-asciimath) 也可实现类似功能。点击[这里](https://goessner.github.io/markdown-it-texmath/index.html)查看相关语法，通过[此页面](https://goessner.github.io/markdown-it-texmath/markdown-it-texmath-demo.html)进行测试。

```markdown
$$$
P(A | B) = (P(B | A)P(A)) / P(B)
$$$
```

输出

```html
<math display="block"><mi>P</mi><mfenced open="(" close=")"><mrow><mi>A</mi><mo stretchy="true" lspace="veryverythickmathspace" rspace="veryverythickmathspace">|</mo><mi>B</mi></mrow></mfenced><mo>=</mo><mfrac><mrow><mi>P</mi><mfenced open="(" close=")"><mrow><mi>B</mi><mo stretchy="true" lspace="veryverythickmathspace" rspace="veryverythickmathspace">|</mo><mi>A</mi></mrow></mfenced><mi>P</mi><mfenced open="(" close=")"><mi>A</mi></mfenced></mrow><mrow><mi>P</mi><mfenced open="(" close=")"><mi>B</mi></mfenced></mrow></mfrac></math>
```

### markdown-it-plantuml

使用 [markdown-it-plantuml](https://www.npmjs.com/package/markdown-it-plantuml) 可以创建时序图，详见 [plantuml](http://plantuml.com/)。

```
@startuml
Bob -> Alice : hello
@enduml
```

@startuml
Bob -> Alice : hello
@enduml


### markvis

可以使用 [markvis](https://www.npmjs.com/package/markvis) 创建图表。



## 参考资料

[^1]: [marked 官方文档](https://marked.js.org)
[^2]: [gitbook 官方网站](https://www.gitbook.com/)

