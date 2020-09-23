module.exports = {
  theme:"antdocs",
  title: "WEB Doc | 在线文档",
  description: "A VuePress project Create by enbo.wang.",
  base: "/vuepress/",
  head: [
    ["link",{ rel: "icon",href: "/assets/logo.png" }]
  ],
  markdown: {
    lineNumbers: false,
  },
  themeConfig: {
    smoothScroll: true,
    nav: require("./config/nav"),
    sidebar: require("./config/sidebar"),
    lastUpdated: "Last Updated",
    repo: "https://github.com/enbo-wang/vuepress",
    editLinks: false,
  },
};
