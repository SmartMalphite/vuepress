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
  ],
  '/tech/': [
    {
      title: '技术方案',
      collapsable: true, //是否展开
      children: [
        '',
        "混沌测试",
        "故障注入",
        "前端自动化"
      ]
    },
  ]
}

