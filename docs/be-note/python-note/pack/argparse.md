---
title: Argparse 使用
---

> 此模块是 Python 标准库中推荐的命令行解析模块，还有另外两个模块可以完成同样的任务，称为 getopt (对应于 C 语言中的 getopt() 函数) 和被弃用的 optparse。还要注意 argparse 是基于 optparse 的，因此用法与其非常相似。

## 基础代码
以下代码是实现一个命令行参数的最小代码
"""
import argparse
parser = argparse.ArgumentParser()
parser.parse_args()
"""

## 位置参数
"""
import argparse
parser = argparse.ArgumentParser()
parser.add_argument("echo")
args = parser.parse_args()
print(args.echo)
"""
执行结果
"""
> python demo.py 123
> 123
"""

