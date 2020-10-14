---
title: VuePress文档编写规范
---

## 文档路径
所有文档应创建在docs目录下的对应的文件夹中，大致目录结构如下
```
.
├── docs
│   ├── .vuepress (可选的)
│   │   ├── ...
│   │   ├── config.js
│   ├── README.md
│   ├── guide1
│   │   └── README.md
│   │   └── First_docs.md
│   │   └── xxx.md
│   ├── guide2
│   │   └── README.md
│   │   └── First_docs.md
│   │   └── xxx.md
│ 
└── package.json
```

## 语法学习
文档全部使用Markdown进行编写，但是会有更多扩展, 详情查看以下站点了解:

[MardDown语法学习](https://www.runoob.com/markdown/md-tutorial.html)

[VuePress 扩展](https://vuepress.vuejs.org/zh/guide/markdown.html#header-anchors)

[MardDown + Ant Design](https://antdocs.seeyoz.cn/guide/using-antd.html)

## 手动维护目录

```js
// path: .vuepress/config/siderbar.js 目录定义
module.exports = {
  '/doc/': [
    {
      title: 'VuePress 文档编写',
      collapsable: true, //是否展开
      children: [
        '',
        "VuePress_install",
        "VuePress_write",
      ]
    },
  ]
}

//path: .vuepress/config.js 目录定义引用
  themeConfig: {
    smoothScroll: true,
    nav: require("./config/nav"),
    sidebar: require("./config/sidebar"),
    lastUpdated: "Last Updated",
    repo: "https://github.com/enbo-wang/vuepress",
    editLinks: false,
  },
```

## 自动生成目录
手动维护目录的方式随着规模的增大几乎无法维护，因此建议使用自动生成目录插件 

### 安装
```sh
npm i vuepress-plugin-auto-sidebar -D
```

### 使用
```sh
// **/.vuepress/config.js
module.exports = {
  plugins: {
    "vuepress-plugin-auto-sidebar": {}
  }
}
```

### 配置
[插件配置项](https://shanyuhai123.github.io/vuepress-plugin-auto-sidebar/features/)

:::tip
使用目录插件时文档分组维护依靠Front Matter进行维护：
  `title`表示此文件在目录中展示的名字；
  `autoGroup-1: 分组名称`配置会将多个文件归并到一组中
:::