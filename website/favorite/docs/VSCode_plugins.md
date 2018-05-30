---
sidebar: auto
sidebarDepth: 2
---

# 优质的 VSCode 插件

## 前言

在我的编程生涯中，尝试过很多编辑器、IDE，有很多是非常不错的，不过随着技术的飞速发展，新的工具层出不穷，慢慢的，很多与我相伴多年的工具从我的生命中慢慢淡去，不是不好，而是这已成为我尘封与记忆之中一段难忘的经历，像一瓶老酒，回想起来滋味万千。

从最初的 editPlus，里面支持语法高亮，当时还在学习静态网页设计，用来写 HTML 再适合不过，这时已经支持代码片段了。

Notepad2，这是一款非常不错的软件，可以添加到右键菜单，也可以直接集成到系统，直接替换 Windows 自带的记事本，由于历史原因，记事本存在很多 bug，比如 BOM 头，回车换行符等。至今，只要一装系统，我必定会将之替换系统记事本。

用过 Linux 的童鞋，都接触过 vim，最初还是 vi 的时候，没有语法高亮，到了 vim，已经很强大了，还能集成各种好用的插件。不过用之开发大型项目还是不妥，稍微小修小改一些文件倒是还不错。

陪伴我最长的，是 Sublime，编辑器界的神器，不多讲，从事开发的都知道。Atom 我就不想说了，打开速度奇慢，个人不喜欢。

至于 IDE，都很强大，各种都玩过，不过我并不喜欢，因为打开速度奇慢，大部分界面丑，颜色主题都不是太入眼，除非开发指定环境下的应用程序我才会用到。

直至使用了 VSCode，我就基本不碰其他编辑器了，原因很简单，好用，算是微软最良心的一款作品了。

下面聊聊我比较喜欢的 VSCode 插件。



### 扩展包路径

系统集成软件包位于

```
D:\Program Files\Microsoft VS Code\resources\app\extensions
```

扩展软件包位于

```
C:\Users\Quanzaiyu\.vscode\extensions
```


## 功能增强型插件

### GitLens (Eric Amodio)

[GitLens](https://marketplace.visualstudio.com/items?itemName=eamodio.gitlens) 将 Git 的功能添加到 Visual Studio Code 中。它帮助您可视化代码的作者，通过Git的注释和代码的视角，无缝地导航和探索 Git 仓库，通过强大的比较命令获得有价值的见解，等等。

![GitLens](@/img/gitlens-logo.png)

常用配置

```json
"gitlens.gitExplorer.enabled": true,
"gitlens.historyExplorer.enabled": true,
"gitlens.gitExplorer.files.layout": "auto",
"gitlens.historyExplorer.location": "scm",
"gitlens.resultsExplorer.location": "scm",
"gitlens.gitExplorer.location": "scm",
```


### Code Outline (Patryk Zawadzki)

[Code Outline](https://marketplace.visualstudio.com/items?itemName=patrys.vscode-code-outline) 在浏览器窗格中显示一个代码大纲树。

![Code-Outline](@/img/Code-Outline.png =128x)

常用配置

```json
"symbolOutline.doSort": true,
"symbolOutline.expandNodes": [],
"symbolOutline.sortOrder": [],
"symbolOutline.topLevel": []
```


### Code Runner (Jun Han)

[Code Runner](https://marketplace.visualstudio.com/items?itemName=formulahendry.code-runner) 可以运行 C, C++, Java, JS, PHP, Python...

![](@/img/Code_Runner.png =128x)


### Document This

[Document This](https://marketplace.visualstudio.com/items?itemName=joelday.docthis) 可以帮助我们自动生成 JSDoc。

相关命令

[[Ctrl]] + [[Alt]] + [[D]] and again [[Ctrl]] + [[Alt]] + [[D]]



## JSON 相关插件

### Fix Json (Oliver Sturm)

[Fix Json](https://marketplace.visualstudio.com/items?itemName=oliversturm.fix-json) 使用 [jsonic](https://github.com/rjrodger/jsonic) 解析一些 "bad Json"，使之严格化。如

`{ foo:"bar", red:1, }` 将转化为 `{ "foo":"bar", "red":1 }`

![fix_json](@/img/fix_json.png =128x)

相关命令

```
Fix JSON
```

相关设置

```json
"fixJson.indentationSpaces": null
```


### vscode-json (Andy Aldo)

[vscode-json](https://marketplace.visualstudio.com/items?itemName=andyyaldoo.vscode-json) 可以对 JSON 文件进行压缩、格式化、验证等一些列操作。

相关命令和快捷键

命令前缀: `vscode-json`

- Validate: [[Ctrl]] + [[Alt]] + [[V]]
- Beautify: [[Ctrl]] + [[Alt]] + [[B]]
- Uglify: [[Ctrl]] + [[Alt]] + [[U]]
- Escape: [[Ctrl]] + [[Alt]] + [[']]
- Unescape: [[Ctrl]] + [[Alt]] + [[;]]


### Paste JSON as Code (quicktype)

[Paste JSON as Code](https://marketplace.visualstudio.com/items?itemName=quicktype.quicktype) 将 json 转化为代码。

相关命令

```
Paste JSON as Code
```


## 括号匹配

### Bracket Jumper (sashaweiss)

[Bracket Jumper](https://marketplace.visualstudio.com/items?itemName=sashaweiss.bracket-jumper) 可以在括号起始间跳转。

快捷键

- [[Ctrl]] + [[Alt]] + [[-->]]
- [[Ctrl]] + [[Alt]] + [[<--]]


### Bracket Pair Colorizer (CoenraadS)

[Bracket Pair Colorizer](https://marketplace.visualstudio.com/items?itemName=CoenraadS.bracket-pair-colorizer) 允许将匹配的括号标识为颜色。用户可以定义要匹配的字符，以及要使用哪些颜色。

![Bracket_Pair_Colorizer](@/img/Bracket_Pair_Colorizer.png =128x)

相关配置

```json
"bracketPairColorizer.colorMode": "Consecutive",
"bracketPairColorizer.consecutivePairColors": [
  "()",
  "[]",
  "{}",
  "<>",
  [
    "Gold",
    "Orchid",
    "LightSkyBlue"
  ],
  "Red"
],
"bracketPairColorizer.timeOut": 0,
```

### Subtle Brackets (Rafa Mel )

[Subtle Brackets](https://marketplace.visualstudio.com/items?itemName=rafamel.subtle-brackets) 可以在匹配的括号添加下划线。

![Subtle_Brackets](@/img/Subtle_Brackets.png)

相关配置

```json
subtleBrackets.bracketPairs: ["{}", "[]", "()"]
```


## 状态栏

### file-size (zhuang)

[file-size](https://marketplace.visualstudio.com/items?itemName=zh9528.file-size) 会在状态栏显示当前文件大小。

![file-size](@/img/file-size.png =128x)


### Active File In StatusBar (RoscoP)

[Active File In StatusBar](https://marketplace.visualstudio.com/items?itemName=RoscoP.ActiveFileInStatusBar) 将在状态栏显示当前文件的完整路径。

![Active_File_In_StatusBar](@/img/Active_File_In_StatusBar.png)

相关配置

```json
{
  "ActiveFileInStatusBar.enable": true,
  "ActiveFileInStatusBar.fullpath": true,
  "ActiveFileInStatusBar.revealFile": false
}
```


## 项目管理

### Project Manager (Alessandro Fragnani)

[Project Manager](https://marketplace.visualstudio.com/items?itemName=alefragnani.project-manager) 用于在 VSCode 中管理项目。轻松地访问和切换它们。您可以定义自己喜欢的项目，并自动检测 VSCode 项目、Git、Mercurial 和 SVN 储存库。

![project_manager](@/img/project_manager.png =128x)

常用命令

```
Project Manager: Edit Project
Project Manager: List Projects to Open
Project Manager: List Projects to Open in New Window
Project Manager: Refresh Projects
Project Manager: Save Project
```

项目管理文件像这样

```json
[
  {
    "name": "Numbered Bookmarks",
    "rootPath": "$home\\Documents\\GitHub\\vscode-numbered-bookmarks",
    "paths": [],
    "group": ""
  }
]
```

常用配置

```json
"projectManager.sortList": "Name",
"projectManager.groupList": true,
```

常用快捷键

- [[Alt]] + [[Shift]] + [[P]] 列出所有项目


### Git Project Manager (Felipe Caputo)

[Git Project Manager](https://marketplace.visualstudio.com/items?itemName=felipecaputo.git-project-manager) (GPM) 允许直接从 VSCode 窗口打开一个 Git 存储库的新窗口。

![GPM](@/img/GPM.png =128x)

常用命令

```
GPM: Open Git Project
GPM: Refresh Projects
```

常用配置

```json
{
  "gitProjectManager.openInNewWindow": false
}
```


## 标记型插件

### Todo Tree (Gruntfuggly)

[Todo Tree](https://marketplace.visualstudio.com/items?itemName=Gruntfuggly.todo-tree) 可以快速搜索您的工作空间，以获取注释标签，例如 TODO 和 FIXME，并在浏览器窗格中的树视图中显示它们。

![Todo_Tree](@/img/Todo_Tree.png =128x)

常用配置

```json
todo‑tree.tags: ["TODO","FIXME"],
todo‑tree.showInExplorer: true
```


### TODO-Highlight (Wayou Liu)

[TODO-Highlight](https://marketplace.visualstudio.com/items?itemName=wayou.vscode-todo-highlight) 在编辑器中高亮显示 `TODO:`、`FIXME:`。

![TODO_Highlight](@/img/TODO_Highlight.png =128x)


### Bookmarks (Alessandro Fragnani)

[Bookmarks](https://marketplace.visualstudio.com/items?itemName=alefragnani.Bookmarks) 在编辑器中标记行并轻松跳转到它们。

![bookmarks](@/img/bookmarks.png =128x)

常用命令

```
Bookmarks: Toggle
Bookmarks: Jump to Next
Bookmarks: Jump to Previous
Bookmarks: List
Bookmarks: List from All
Bookmarks: Clear
Bookmarks: Clear from All Files
Bookmarks (Selection): Select Lines
Bookmarks (Selection): Expand Selection to Next
Bookmarks (Selection): Expand Selection to Previous
Bookmarks (Selection): Shrink Selection Shrink
```

常用配置

```json
"bookmarks.navigateThroughAllFiles": true
"bookmarks.saveBookmarksInProject": true
"bookmarks.treeview.visible": true
```

常用快捷键

- [[Ctrl]] + [[Alt]] + [[K]] 添加/删除书签


### Todo+ (Fabio Spampinato)

[Todo+](https://marketplace.visualstudio.com/items?itemName=fabiospampinato.vscode-todo-plus) 轻松地管理待办事项列表。功能强大，易于使用和定制。

![Todo+](@/img/Todo+.png =128x)

相关命令

```
'Todo: Open' // Open or create your project's todo file
'Todo: Open Embedded' // Open embedded todos
'Todo: Toggle Box' // Toggle todo's box symbol
'Todo: Toggle Done' // Toggle todo's done symbol
'Todo: Toggle Cancelled' // Toggle todo's cancelled symbol
'Todo: Toggle Start' // Toggle a todo as started
'Todo: Archive' // Archive finished todos
```

快捷键

```
'Cmd/Ctrl+Enter' // Triggers Todo: Toggle Box
'Alt+D' // Triggers Todo: Toggle Done
'Alt+C' // Triggers Todo: Toggle Cancelled
'Alt+S' // Triggers Todo: Toggle Start
'Cmd/Ctrl+Shift+A' // Triggers  Todo: Archive
```

相关配置

````
"todo.file": "TODO",
"todo.symbols.box": "☐",
"todo.symbols.cancelled": "✘",
"todo.symbols.done": "✔",
"todo-tree.tags": [
  "TODO",
  "FIXME"
]
````


### VSNotes (Patrick Lee)

[VS Notes](https://marketplace.visualstudio.com/items?itemName=patricklee.vsnotes) 是一个简单的工具，它负责创建和管理纯文本注释.

![](@/img/VS_Notes.png =128x)



## 界面美化类插件

### Background (shalldie)

[Background](https://marketplace.visualstudio.com/items?itemName=shalldie.background) 在 vscode 中添加一个可爱的背景图像。

![background](@/img/background.png =128x)

::: warning 注意
此插件是通过修改 vscode 的 css 文件的方式运行，如果在 vscode 中提示软件已损坏，可以点击【不再显示】。
:::

常用配置

```json
"background.enabled": true,
"background.style": {
  "content": "''",
  "pointer-events": "none",
  "position": "absolute",
  "z-index": "99999",
  "width": "100%",
  "height": "100%",
  "background-position": "100% 100%",
  "background-repeat": "no-repeat",
  "opacity": 0.5
},
```

### Material Icon Theme (Philipp Kief)

个人非常喜欢的一款主题: [Material Icon Theme](https://marketplace.visualstudio.com/items?itemName=PKief.material-icon-theme)。

![](@/img/Material_Icon_Theme.png =128x)

File Icons

![](@/img/fileIcons.png)

Folder Icons

![](@/img/folderIcons.png)

配置主题颜色:

```json
"material-icon-theme.folders.color": "#ef5350",
"material-icon-theme.folders.theme": "specific",
```

相关命令:

```
Material Icons:
```


### Output Colorizer (IBM)

[Output Colorizer](https://marketplace.visualstudio.com/items?itemName=IBM.output-colorizer) 为输出/调试/扩展面板和`*.log` 文件添加语法着色。

![Output_Colorizer](@/img/Output_Colorizer.png =128x)


## 语言支持

### Markdown All In One (Yu Zhang)

所有需要的Markdown 功能都在 [Markdown All In One](https://marketplace.visualstudio.com/items?itemName=yzhang.markdown-all-in-one) (键盘快捷键，目录大纲，自动预览等)。

![markdown_all_in_one](@/img/markdown_all_in_one.png =128x)

常用快捷键

- [[Ctrl]] + [[B]] 加粗
- [[Ctrl]] + [[I]] 加斜
- [[Ctrl]] + [[Shift]] + [[[]] 减少标题级别
- [[Ctrl]] + [[Shift]] + [[]]] 增加标题级别
- [[Ctrl]] + [[Shift]] + [[V]] 打开预览
- [[Alt]] + [[S]] 删除线
- [[Alt]] + [[Shift]] + [[F]] 代码格式化(针对表格)，或右键执行

常用命令

```
markdown: 命令前缀
ctoc (Create Table of Contents) 创建 TOC
olp (Open Locked Preview to the Side) 打开侧边栏预览
```

创建列表的时候:

```
tab 缩进
backspace 反缩进
```


### Vetur (Pine Wu)

[Vetur](https://marketplace.visualstudio.com/items?itemName=octref.vetur) 用于 Vue 的语法支持。

参考文档: [官方文档](https://vuejs.github.io/vetur/setup.html)、[veturpack](https://github.com/octref/veturpack)、[Vue Language Server](https://github.com/vuejs/vetur/tree/master/server)

![vetur](@/img/vetur.png =128x)

### Sass (Robin Bentley)

[Sass](https://marketplace.visualstudio.com/items?itemName=robinbentley.sass-indented) 提供 Sass 语法高亮、自动完成、snippets 的支持。

![sass](@/img/sass.png =128x)


### Language Stylus (sysoev)

[Language Stylus](https://marketplace.visualstudio.com/items?itemName=sysoev.language-stylus) 提供 Stylus 语法高亮、自动完成、snippets 的支持。

![stylus](@/img/stylus.png =128x)


### npm (egamma)

[npm](https://marketplace.visualstudio.com/items?itemName=eg2.vscode-npm-script) 支持在包中运行定义的 npm 脚本，并根据 package.json 中定义的依赖项对已安装的模块进行验证。

![npm](@/img/npm.png =128x)

常用设置

```
npm.runInTerminal 定义命令是否在终端窗口中运行，或者是显示在输出窗口中。
```


### minapp (Mora Qiu)

[minapp](https://marketplace.visualstudio.com/items?itemName=qiu8310.minapp-vscode) 微信小程序标签、属性的智能补全。

![minapp](@/img/minapp.png =128x)


### .ejs (Qassim Farid)

[.ejs](https://marketplace.visualstudio.com/items?itemName=QassimFarid.ejs-language-support) 提供 `.ejs` 语法支持。


### Python (Microsoft)

[Python](https://marketplace.visualstudio.com/items?itemName=ms-python.python) 提供 python 的语法支持、单元测试、调试、验证、snippets、IntelliSense等。

![python](@/img/python.png =128x)

相关命令

```
Python: Select Interpreter
Python: Create Terminal
Python: Start REPL
Python: Run Python File in Terminal
Python: Select Linter
```


### weex (JaylinWang)

[weex](https://marketplace.visualstudio.com/items?itemName=jaylinwang.weex) 提供 weex 语法支持。

![weex](@/img/weex.png = 128x)


### 语言包

[Chinese (Simplified) Language Pack for VS Code](https://marketplace.visualstudio.com/items?itemName=MS-CEINTL.vscode-language-pack-zh-hans)


## 智能感知与自动完成

### Npm Intellisense (Christian Kohler)

[Npm Intellisense](https://marketplace.visualstudio.com/items?itemName=christian-kohler.npm-intellisense) 用于智能提示 NPM 模块。

![npm_intellisense](@/img/npm_intellisense.png =128x)

相关配置

```json
"npm-intellisense.importES6": true,
"npm-intellisense.importQuotes": "'",
"npm-intellisense.importLinebreak": ";\r\n",
"npm-intellisense.importDeclarationType": "const",
"npm-intellisense.scanDevDependencies": true,
```


### Path Intellisense (Christian Kohler)

[Path Intellisense](https://marketplace.visualstudio.com/items?itemName=christian-kohler.path-intellisense) 用于自动完成文件名。

![path_intellisense](@/img/path_intellisense.png =128x)

相关配置

定义绝对路径

```json
"path-intellisense.mappings": {
  "/": "${workspaceRoot}",
  "lib": "${workspaceRoot}/lib",
  "global": "/Users/dummy/globalLibs"
},
```


### Auto Close Tag (Jun Han)

如命，[Auto Close Tag](@/img/auto_close_tag.png =128x), 自动结束 HTML/XML 标签。

配置

```json
"auto-close-tag.enableAutoCloseTag": true,
"auto-close-tag.enableAutoCloseSelfClosingTag": true,
"auto-close-tag.activationOnLanguage": ["*"], // 使用 * 以包括以下语言的自动执行: xml、php、blade、ejs、jinja、javascript、javascriptreact、typescript、typescriptreact、plaintext、markdown、vue、liquid、erb、lang-cfml、cfml、HTML (Eex)
"auto-close-tag.fullMode": true, // 同时开启 Visual Studio 模式 和 Sublime Text 模式
```


### Auto Rename Tag (Jun Han)

[Auto Rename Tag](https://marketplace.visualstudio.com/items?itemName=formulahendry.auto-rename-tag) 自动重命名成对的HTML/XML标签。

![](@/img/Auto_Rename_Tag.png)

相关配置:

```json
"auto-rename-tag.activationOnLanguage": ["html", "xml", "php", "javascript"]
```


## 代码片段与输入型扩展

### :emojisense: (Matt Bierner)

[:emojisense:](https://marketplace.visualstudio.com/items?itemName=bierner.emojisense) 可以很方便地在 VSCode 中输入表情符号。

![emojisense](@/img/emojisense.png =128x)

相关配置

```
"emojisense.languages": {}
```

## 代码验证

### ESLint (Dirk Baeumer)

[ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) 参见文档: [英文文档](https://eslint.org/) 、 [中文文档](http://eslint.cn/)

![eslint](@/img/eslint.png =128x)

相关配置

```json
"eslint.options": { "configFile": "C:/mydirectory/.eslintrc.json" }
```


### TSlint (egamma)

[TSlint](https://marketplace.visualstudio.com/items?itemName=eg2.tslint) 参考文档: [英文文档](https://palantir.github.io/tslint/) 、 [GitHub](https://github.com/palantir/tslint)

![tslint](@/img/tslint.png =128x)


### Code Spell Checker (Street Side Software)

[Code Spell Checker](https://marketplace.visualstudio.com/items?itemName=streetsidesoftware.code-spell-checker) 会做拼写检查，支持驼峰命名(camelCase)和下划线风格(snake_case_words)的拼写。

![Code_Spell_Checker](@/img/Code_Spell_Checker.png =128x)

注释开启和关闭拼写检查

```html
Disable Checking
/* cSpell:disable */
/* spell-checker: disable */
/* spellchecker: disable */

Enable Checking
/* cSpell:enable */
/* spell-checker: enable */
/* spellchecker: enable */

Ignore Checking
// cSpell:ignore zaallano, wooorrdd
// cSpell:ignore zzooommmmmmmm

Add Words
// cSpell:words woorxs sweeetbeat

Enable / Disable compound words
// cSpell:enableCompoundWords
char * errormessage;  // Is ok with cSpell:enableCompoundWords
int    errornumber;   // Is also ok
```

项目字典

在当前项目中创建 `cSpell.json` 以配置当前项目的拼写检查:

```json
{
  "dictionaryDefinitions": [
    { "name": "medicalTerms", "path": "./dictionaries/medicalterms-en.txt"},
    { "name": "cities", "path": "./dictionaries/cities.txt"}
  ],
  "dictionaries": [
    "cities"
  ],
  "languageSettings": [
    { "languageId": "markdown", "dictionaries": ["medicalTerms"] },
    { "languageId": "plaintext", "dictionaries": ["medicalTerms"] }
  ]
}
```

配置详解: 在这个例子中，定义了两个字典: medicalTerms 和 cities，路径是相对于 cSpell.json 的位置，这允许将字典检入到项目中。cities 用于每个文件类型，因为它被添加到 dictionaries 中。medicalTerms 只在编辑 markdown 或 纯文本文件 时使用。


## 其他一些常用扩展

[XML Tools]

- 代码提示

[HTML CSS Support]

[IntelliSense for CSS class names in HTML]

[PHP IntelliSense]

[Less IntelliSense]

[eslint-disable-snippets]

[Pug (Jade) Snippets]

[vscode-wechat]

[Vue 2 Snippets]

[canvas-snippets]

[vscode weapp api]

[vscode wxml]

[vscode-wechat]

[Vue Vscode Snippets]

