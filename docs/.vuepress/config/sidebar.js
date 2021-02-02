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
  ],
  '/be-note/go-note/': [
    {
      title: 'Go学习笔记',
      collapsable: true, //是否展开
      children: [
        '',
        "0.语言基础",
        "1.面向对象",
        "2.Go语言的接口",
        "3.Context的使用",
        "4.协程机制",
        "5.Channel的使用",
        "6.并发模型",
        "7.反射机制",
        "8.异常处理",
        "9.包管理",
      ]
    },
  ],
  '/be-note/python-note/': [
    {
      title: 'Python学习笔记',
      collapsable: true, //是否展开
      children: [
        '',
        "pack/argparse",
      ]
    },
  ],
  '/be-note/be-tool/': [
    {
      title: '常用框架&类库汇总',
      collapsable: true, //是否展开
      children: [
        '',
        {title: 'Go框架&类库',
        collapsable: true, //是否展开
        children: [
          'go-tool/',
          'go-tool/grpc-gateway',
        ]
        },
      ]
    },
  ]
}

