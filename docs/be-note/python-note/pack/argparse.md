---
title: Argparse 使用
---

> 此模块是 Python 标准库中推荐的命令行解析模块，还有另外两个模块可以完成同样的任务，称为 getopt (对应于 C 语言中的 getopt() 函数) 和被弃用的 optparse。还要注意 argparse 是基于 optparse 的，因此用法与其非常相似。

## 基础代码
以下代码是实现一个命令行参数的最小代码
```python
import argparse

parser = argparse.ArgumentParser()

parser.parse_args()
```

## 位置参数
```python
parser = argparse.ArgumentParser()

parser.add_argument("echo",help="opt1",type=int)
args = parser.parse_args()

print args.echo 
```
执行结果
```
> python demo.py 123
123
```

## 可选参数
```python
parser = argparse.ArgumentParser()

parser.add_argument("-t","--test", help="test param",type=str)
args = parser.parse_args()

print args.test 
```
执行结果
```
> python demo.py --test abc
abc
```
### action: store_true
对于一个某些命令行工具，某个参数只作为一个flag使用，并不需要其后面跟有具体的参数，这是可以使用store_true参数
```python
parser = argparse.ArgumentParser()

parser.add_argument("-t","--test", help="test param",type=str,action="store_true")
args = parser.parse_args()

print args.test 
```
执行结果
```
> python demo.py --test
True
> python demo.py
False
```
### action: count
某些时候我们需要统计一个参数出现了几次，可以使用count实现
```python
import argparse
parser = argparse.ArgumentParser()
parser.add_argument("square", type=int,
                    help="display the square of a given number")
parser.add_argument("-v", "--verbosity", action="count",
                    help="increase output verbosity")
args = parser.parse_args()
answer = args.square**2
if args.verbosity == 2:
    print("the square of {} equals {}".format(args.square, answer))
elif args.verbosity == 1:
    print("{}^2 == {}".format(args.square, answer))
else:
    print(answer)
```
执行结果
```
> python demo002.py 2 -v
2^2 == 4
> python demo002.py 2 -vv
the square of 2 equals 4
```
## 附录
[参考文档](https://docs.python.org/zh-cn/3/howto/argparse.html)