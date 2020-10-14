---
title: VuePress安装
---

## 环境部署

:::tip
VuePress 需要 Node.js >= 8.6
:::

Step.1 创建目录
```sh
mkdir docs && echo '# Hello VuePress' > docs/README.md
```

Step.2 环境初始化
```sh
yarn init # npm init
```

Step.3 安装VuePress

注意这里不推荐全局安装
```sh
yarn add -D vuepress # npm install -D vuepress
```

Step.4 创建示例文档
```sh
mkdir docs && echo '# Hello VuePress' > docs/README.md
```

Step.5 简单的配置

在 package.json 中添加一些 scripts
这一步骤是可选的，但推荐你完成它。
```json
{
  "scripts": {
    "docs:dev": "vuepress dev docs",
    "docs:build": "vuepress build docs"
  }
}
```

Step.6 服务启动
```sh
yarn docs:dev # npm run docs:dev
```
VuePress 会在 http://localhost:8080 启动一个热重载的开发服务器。


## 目录结构
```
.
├── docs
│   ├── .vuepress (可选的)
│   │   ├── components (可选的)
│   │   ├── theme (可选的)
│   │   │   └── Layout.vue
│   │   ├── public (可选的)
│   │   ├── styles (可选的)
│   │   │   ├── index.styl
│   │   │   └── palette.styl
│   │   ├── templates (可选的, 谨慎配置)
│   │   │   ├── dev.html
│   │   │   └── ssr.html
│   │   ├── config.js (可选的)
│   │   └── enhanceApp.js (可选的)
│   │ 
│   ├── README.md
│   ├── guide
│   │   └── README.md
│   └── config.md
│ 
└── package.json
```

* docs/.vuepress: 用于存放全局的配置、组件、静态资源等。
* docs/.vuepress/components: 该目录中的 Vue 组件将会被自动注册为全局组件。
* docs/.vuepress/theme: 用于存放本地主题。
* docs/.vuepress/styles: 用于存放样式相关的文件。
* docs/.vuepress/styles/index.styl: 将会被自动应用的全局样式文件，会生成在最终的 CSS 文件结尾，具有比默认样式更高的优先级。
* docs/.vuepress/styles/palette.styl: 用于重写默认颜色常量，或者设置新的 stylus 颜色常量。
* docs/.vuepress/public: 静态资源目录。
* docs/.vuepress/templates: 存储 HTML 模板文件。
* docs/.vuepress/templates/dev.html: 用于开发环境的 HTML 模板文件。
* docs/.vuepress/templates/ssr.html: 构建时基于 Vue SSR 的 HTML 模板文件。
* docs/.vuepress/config.js: 配置文件的入口文件，也可以是 YML 或 toml。
* docs/.vuepress/enhanceApp.js: 客户端应用的增强。

## 主题配置

> 这里以Antdocs主题为例，介绍如何使用主题

### 主题安装
```sh
yarn add vuepress-theme-antdocs #npm i vuepress-theme-antdocs
```

### 主题使用
打开 .vuepress/config.js 文件，然后在合适位置引用它：
```
module.exports = {
  ...
  theme: 'antdocs',
  ...
}
```
配置完毕后，你就可以直接 yarn run docs:dev 或 npm run docs:dev 查看效果。

![20200923234951](https://raw.githubusercontent.com/enbo-wang/PicBed/master/img/20200923234951.png)

## 使用VuePress-Creator 
VuePress-Creator 1.x 版本主要是用于快速创建 VuePress 项目。下面演示下怎么使用 VuePress-Creator 来创建带有 AntDocs 主题的模板

### 安装
我们需要在命令行中安装 VuePress-Creator 工具，这里推荐使用 yarn 进行全局安装：

```sh
yarn global add vuepress-creator
```

### 创建项目
```sh
vuepress-creator init myproject
```
其中，可以把 myproject 替换为你想要的名称。回车后，会跳出一个选项：
```sh
# 为 VuePress 选择一个主题？ 默认：Default
Pick a theme for VuePress?
> Default
  AntDocs (Ant Design style)
```

## 重要配置
### 1.docs/.vuepress/config.js
VuePress项目基础配置，包括页面信息配置、主题配置、插件配置等信息

### 2.docs/README.md
通过Front Matter配置页面Home页信息

![20200924000442](https://raw.githubusercontent.com/enbo-wang/PicBed/master/img/20200924000442.png)

## 相关文档
[VuePress 官方文档](https://vuepress.vuejs.org/zh/)

[AntDocs 官方文档](https://antdocs.seeyoz.cn/guide/)

[目录自动生成插件](https://shanyuhai123.github.io/vuepress-plugin-auto-sidebar/#%E4%BB%8B%E7%BB%8D%EF%BC%88introduction%EF%BC%89)