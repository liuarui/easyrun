<h1 align="center">easyrun</h1>

<div align="center">
让你的 script 命令更快跑起来！

[English](./README.md) | 简体中文

</div>

## 简述

你是否有跟我一样的烦恼？

-   打开命令行，总是不记得项目有哪些命令可以跑
-   一个项目要重复跑多个命令
-   ... 任何于跑命令相关的

## 用法

-   步骤 1
    `npm install easyrun -g`

-   步骤 2
    `erun [command] [options]`

## 命令

### `erun [option]`

#### feat

-   output your project scripts list
-   执行命令

#### options

-   `-r` 选择一条 script 执行
-   TODO: `-m` 后续通过该参数输出一个多选列表，选择后一次性跑多个命令

#### example

-   `erun`

```

🆒 Your project has the following script.
-----------------------------------------
{
dev: 'rollup -c --watch',
build: 'rm -rf ./bin && rollup -c',
erun: 'node ./bin/erun.js'
}
-----------------------------------------
```

-   `erun -r`

```bash
 Please select the command you want to execute (Use arrow keys)
❯ dev
  build
  erun
  changelog
  prepublish

 ...
 npm run dev
```

### ... TODO

## CHANGELOG

[CHANGELOG](./CHANGELOG.md)

## 最后

如果觉得好用的话，可以来 [GitHub](https://github.com/liuarui/easyrun) 给我点个 star，你的 ✨ 是对我最大的鼓励～

> 实在喜欢到不得了的话，🤓🤓🤓，还可以请作者喝杯咖啡 ☕️

 <img src="./coffee.jpg" alt="coffee" style="width:60px height:60px;" />
