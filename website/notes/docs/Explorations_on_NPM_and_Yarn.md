---
sidebar: auto
sidebarDepth: 2
---

# 关于 npm 与 yarn 等一些 node 包管理工具的一些探索

## npm

npm是Node.js能够如此成功的主要原因之一。npm团队做了很多的工作，以确保npm保持向后兼容，并在不同的环境中保持一致[^1]。

npm是围绕着 [语义版本控制（semver）](http://semver.org/) 的思想而设计的，下面是从他们的网站摘抄过来的：

*给定一个版本号：主版本号.次版本号.补丁版本号， 以下这三种情况需要增加相应的版本号:*

- *主版本号： 当API发生改变，并与之前的版本不兼容的时候*
- *次版本号： 当增加了功能，但是向后兼容的时候*
- *补丁版本号： 当做了向后兼容的缺陷修复的时候*

`npm` 使用一个名为 `package.json` 的文件，用户可以通过 `npm i --save` 命令把项目里所有的依赖项保存在这个文件里，如果通过 `npm i --save-dev` 安装的依赖只在开发环境起效。(`i` 是 `install` 的缩写)

package.json 像这样

```json
{
  "dependencies": {},
  "devDependencies": {}
}
```

### 关于 `package.json` 中的版本号

一个 `package.json` 文件可能长这样:

```json
{
  "dependencies": {
      "lodash": "^4.17.4"
  }
}
```

在版本号 lodash 之前有个 `^` 字符。这个字符告诉 npm，安装主版本等于4的任意一个版本即可。所以如果我现在运行 npm 进行安装，npm 将安装 lodash 的主版本为4的最新版，可能是 lodash@4.25.5（@是npm约定用来确定包名的指定版本的）。可以在[此处](https://docs.npmjs.com/misc/semver)查看所有支持的字符。

理论上，次版本号的变化并不会影响向后兼容性。因此，安装最新版的依赖库应该是能正常工作的，而且能引入自4.17.4版本以后的重要错误和安全方面的修复。

但是，另一方面，即使不同的开发人员使用了相同的 package.json 文件，在他们自己的机器上也可能会安装同一个库的不同种版本，这样就会存在潜在的难以调试的错误和 “在我的电脑上…” 的情形。

大多数 npm 库都严重依赖于其他 npm 库，这会导致嵌套依赖关系，并增加无法匹配相应版本的几率。

虽然可以通过 `npm config set save-exact true` 命令关闭在版本号前面使用^的默认行为，但这个只会影响顶级依赖关系。由于每个依赖的库都有自己的 package.json 文件，而在它们自己的依赖关系前面可能会有^符号，所以无法通过 package.json 文件为嵌套依赖的内容提供保证。

为了解决这个问题，npm 提供了shrinkwrap 命令。此命令将生成一个 `npm-shrinkwrap.json` 文件，为所有库和所有嵌套依赖的库记录确切的版本。

然而，即使存在 npm-shrinkwrap.json 这个文件，npm 也只会锁定库的版本，而不是库的内容。即便 npm 现在也能阻止用户多次重复发布库的同一版本，但是 npm 管理员仍然具有强制更新某些库的权力。

这是引用自 shrinkwrap 文档的内容：

如果你希望锁定包中的特定字节，比如是为了保证能正确地重新部署或构建，那么你应该在源代码控制中检查依赖关系，或者采取一些其他的机制来校验内容，而不是靠校验版本。


### npm2

`npm 2` 会安装每一个包所依赖的所有依赖项。如果我们有这么一个项目，它依赖项目A，项目A依赖项目B，项目B依赖项目C，那么依赖树将如下所示：

```
node_modules
- package-A
-- node_modules
--- package-B
----- node_modules
------ package-C
-------- some-really-really-really-long-file-name-in-package-c.js
```

这个结构可能会很长。这对于基于 Unix 的操作系统来说只不过是一个小烦恼，但对于 Windows 来说却是个破坏性的东西，因为有很多程序无法处理超过 260 个字符的文件路径名。


### npm3

`npm 3`采用了扁平依赖关系树来解决这个问题，所以我们的3个项目结构现在看起来如下所示：

```
node_modules
- package-A
- package-B
- package-C
-- some-file-name-in-package-c.js
```

这样，一个原来很长的文件路径名就从 `./node_modules/package-A/node_modules/package-B/node-modules/some-file-name-in-package-c.js` 变成了 `/node_modules/some-file-name-in-package-c.js`。

可以在[这里](https://docs.npmjs.com/how-npm-works/npm3) 阅读到更多有关 NPM 3 依赖解析的工作原理。

这种方法的缺点是，npm 必须首先遍历所有的项目依赖关系，然后再决定如何生成扁平的 `node_modules` 目录结构。npm 必须为所有使用到的模块构建一个完整的依赖关系树，这是一个耗时的操作，是[npm安装速度慢的一个很重要的原因](https://github.com/npm/npm/issues/8826)。


### npm 的配置

查看当前配置 `npm config ls`

修改全局安装的包路径，也就是使用 `npm i -g xxx` 安装的包，使用命令 `npm config set prefix "D:\nodejs\modules"` 设置，跟上自定义的路径即可

注意，需要同时修改环境变量，否则不能在全局使用相关命令

修改缓存路径使用 `npm config set cache "D:\nodejs\cache"`

设置安装源，例如使用淘宝源: `npm config set registry `


### npm 脚本

在 `package.json` 中，有一个 `scripts` 字段，用于制定个性化的命令。

```json
{
  "scripts": {
    "build": "node build.js"
  }
}
```

比如在里面加入 `build` 命令，可以使用 `npm run build` 或 `yarn build` 来执行，实际执行的命令为 `node build.js`。

在 `scripts` 中有一个特殊的命令: `start`，可以直接使用 `npm start` 来执行。

```json
{
  "scripts": {
    "dev": "node server.js",
    "start": "npm run dev"
  }
}
```

此处，执行 `npm start`，实际执行的命令为 `node server.js`。

详细教程可以参考阮大大的 [《npm scripts 使用指南》](http://www.ruanyifeng.com/blog/2016/10/npm_scripts.html)，此处仅作为抛砖引玉。



## npm 与 yarn 的缓存策略对比

### npm 的缓存策略

npm 的缓存目录是通过 cache 变量指定的，一般默认是在 `~/.npm` 文件夹（Windows 系统在 `%AppData%/npm-cache` 文件夹），可以执行命令 `npm config get cache` 查看

在 npm@5 以前，每个缓存的模块在 `~/.npm` 文件夹中以模块名的形式直接存储，例如 koa 模块存储在 `~/.npm/koa` 文件夹中。而 npm@5 版本开始，数据存储在 `~/.npm/_cacache` 中，并且不是以模块名直接存放。

也可以通过 `npm config set cache path` 来手动指定 npm 缓存目录。

---

[npm cache](https://docs.npmjs.com/cli/cache)[^2] 提供了三个命令，分别是 `npm cache add`, `npm cache clean`, `npm cache verify`。

- `npm cache add` 官方解释说这个命令主要是 npm 内部使用，但是也可以用来手动给一个指定的 package 添加缓存。

- `npm cache clean` 删除缓存目录下的所有数据。从 npm@5 开始，为了保证缓存数据的有效性和完整性，需要加上 --force 参数。

- `npm cache verify` 验证缓存数据的有效性和完整性，清理垃圾数据。

---

npm 提供了离线安装模式，使用 `--offline`, `--prefer-offline`, `--prefer-online` 可以指定离线模式。

`--prefer-offline` / `--prefer-online` “离线优先/网络优先”模式。

如果设置为 `--prefer-offline` 则优先使用缓存数据，如果没有匹配的缓存数据，则从远程仓库下载。

如果设置为 `--prefer-online` 则优先使用网络数据，忽略缓存数据，这种模式可以及时获取最新的模块。

`--offline` 完全离线模式，安装过程不需要网络，直接使用匹配的缓存数据，一旦缓存数据不存在，则安装失败。

---

npm 的缓存是使用 pacote 模块进行下载和管理，基于 `cacache` 缓存存储。由于 npm 会维护缓存数据的完整性，一旦数据发生错误，就回重新获取。因此不推荐手动清理缓存，除非需要释放磁盘空间，这也是要强制加上 `--force` 参数的原因。

目前没有提供用户自己管理缓存数据的命令，随着你不断安装新的模块，缓存数据也会越来越多，因为 npm 不会自己删除数据。


### yarn 的缓存策略

Yarn 发布于 2016年10月，并在 Github 上迅速拥有了 2.4万个 Star。而 npm 只有 1.2万个 Star。这个项目由一些高级开发人员维护，包括了 Sebastian McKenzie（[Babel.js](https://babeljs.io/)）和Yehuda Katz（[Ember.js](https://www.emberjs.com/)、[Rust](https://www.rust-lang.org/en-US/)、[Bundler](http://bundler.io/)等）。

从我搜集到的情况来看，Yarn 一开始的主要目标是解决上一节中描述的由于语义版本控制而导致的 npm 安装的不确定性问题。虽然可以使用 `npm shrinkwrap` 来实现可预测的依赖关系树，但它并不是默认选项，而是取决于所有的开发人员知道并且启用这个选项。

Yarn 采取了不同的做法。每个 yarn 安装都会生成一个类似于 `npm-shrinkwrap.json` 的 `yarn.lock` 文件，而且它是默认创建的。除了常规信息之外，`yarn.lock` 文件还包含要安装的内容的校验和，以确保使用的库的版本相同。

由于 yarn 是崭新的经过重新设计的 npm 客户端，它能让开发人员并行化处理所有必须的操作，并添加了一些其他改进，这使得运行速度得到了显著的提升，整个安装时间也变得更少。我估计，速度提升是 yarn 受欢迎的主要原因。

像 npm 一样，yarn 使用本地缓存。与 npm 不同的是，yarn 无需互联网连接就能安装本地缓存的依赖项，它提供了 ==离线模式==。这个功能在 2012年的 npm 项目中就被提出来过，但一直没有实现。

yarn 缓存目录位于 `~/Library/Caches/Yarn` 文件夹中，每个缓存的模块被存放在独立的文件夹，文件夹名称包含了模块名称、版本号等信息。

[yarn cache](https://yarnpkg.com/en/docs/cli/cache) 提供了三个命令，分别是 `yarn cache ls`, `yarn cache dir`, `yarn cache clean`。

- `yarn cache ls` 列出当前缓存的包列表。

- `yarn cache dir` 显示缓存数据的目录。

- `yarn cache clean` 清除所有缓存数据。

yarn 还提供了一些其他改进，例如，它允许合并项目中使用到的所有的包的许可证，这一点让人很高兴。

---

yarn 也支持离线安装，yarn 默认会使用 `--prefer-online` 的模式，也就是先尝试从远程仓库下载，如果连接失败则尝试从缓存读取。yarn 也提供了 `--offline`参数，即通过 `yarn add --offline` 或 `--perfer-offline` 安装依赖，

另外 yarn 还支持配置离线镜像，通过以下命令设置离线缓存仓库。具体细节参照官方博客[《Running Yarn offline》](https://yarnpkg.com/blog/2016/11/24/offline-mirror/)。可设置为

```
yarn config set yarn-offline-mirror ./npm-packages-offline-cache
```

---

一个有趣的事情是，yarn 文档的态度开始针对 npm 发生改变，因为 yarn 项目变得流行起来。

最开始的 yarn 公告是这么介绍 yarn 的安装的：

最简单的入门方法是运行：

```
npm install -g yarn
```

现在的 yarn 安装页面是这么说的：

*注意：通常情况下不建议通过 npm 进行安装。npm 安装是非确定性的，程序包没有签名，并且 npm 除了做了基本的 SHA1哈希之外不执行任何完整性检查，这给安装系统程序带来了安全风险。*

*基于这些原因，强烈建议你通过最适合于你的操作系统的安装方法来安装 yarn。*

以这种速度发展下去的话，如果 yarn 要宣布他们自己的 registry，让开发者慢慢淘汰 npm 的话，我们一点都不会感到惊讶。

看起来似乎要感谢 yarn，npm 终于意识到他们需要更加关注一些大家强烈要求的问题了。当我在审核我之前提到的强烈要求的 “离线” 功能时，我注意到这个需求正在被积极地修复之中。


## pnpm

[pnpm](https://github.com/pnpm/pnpm)[^3] 是又一个 Node.js 包管理工具。它可以替换 npm， 而且 npm 更快更高效。

能有多快? *3 倍！* 可以在[这里](https://github.com/pnpm/node-package-manager-benchmark) 查看 benchmarks 。

为什么更高效？ 当你安装一个软件包，我们把它保存在你的机器上的一个全局存储目录中，然后我们创建一个硬链接而不是复制。 对于模块的每个版本，只会有一个副本保存在磁盘上。 例如，当使用 npm 或 yarn 时，如果有 100 个使用 lodash 的项目，你的磁盘上就会有有 100 份 lodash 的拷贝。pnpm 能帮助您节省千兆字节的磁盘空间！

安装 pnpm

```
npm install -g pnpm
```

pnpm 的使用同 npm

```
pnpm i foo
```

[github 仓库地址](https://github.com/pnpm/pnpm) 



### pnpm 的几个特性

1. **安全 **。 像 Yarn 一样，pnpm 有一个特殊的文件，其中包含所有安装包的校验码，以在代码执行之前验证每个已安装包的完整性。
2. **离线模式 **。 pnpm 将所有下载的软件包 tar 包保存在本地镜像仓库中。 当一个包在本地可用时，它从不发出请求。 使用 --offline 参数，HTTP 请求可以被完全禁止。
3. **速度 **。 pnpm 不仅比 npm 快，而且比 Yarn 还要快。 它比 cold 和 hot 缓存 Yarn 都快。 Yarn 从缓存拷贝文件，而 pnpm 只是从全局存储目录链接它们。

### pnpm 的目录树

与 npm@3 不同，pnpm 试图解决 npm@2 所具有的问题，而不是将依赖关系树展平。 在由 pnpm 创建的 node_modules 文件夹中，所有的软件包都有自己的依赖关系，但是目录树永远不会像 npm@2 那么深。 pnpm 保持所有依赖关系平坦，但使用符号链接将它们组合在一起。

```
-> - a symlink (or junction on Windows)

node_modules
├─ foo -> .registry.npmjs.org/foo/1.0.0/node_modules/foo
└─ .registry.npmjs.org
   ├─ foo/1.0.0/node_modules
   |  ├─ bar -> ../../bar/2.0.0/node_modules/bar
   |  └─ foo
   |     ├─ index.js
   |     └─ package.json
   └─ bar/2.0.0/node_modules
      └─ bar
         ├─ index.js
         └─ package.json
```

要查看实例，请访问 [示例 pnpm 项目](https://github.com/pnpm/sample-project)。





## 一些错误的探究

### [npm ERR!] write after end

今天安装 npm 依赖的时候，出现了 `write after end` 的错误，使用 yarn 没问题。查阅资料，解决方案如下:

```
npm i -g npm@5.6.0  
```

npm 高于 5.6 的时候容易出现此问题，降低版本即可，但我到现在并未探索出问题的原因，或许是npm自身版本的问题。

参考: 

https://github.com/npm/npm/issues/19989




## 参考资料

[^1]: [CSDN: 一文看懂npm、yarn、pnpm之间的区别](https://blog.csdn.net/qiansg123/article/details/80129453)

[^2]: [segmentFault: npm 和 yarn 缓存策略对比](https://segmentfault.com/a/1190000009709213)

[^3]: [为什么我们应该使用 pnpm（译）](https://segmentfault.com/a/1190000013214927)

[^4]: [NPM本地缓存方案](http://ju.outofmemory.cn/entry/64247)

