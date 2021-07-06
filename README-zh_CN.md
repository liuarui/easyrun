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

-   `erun l`
    输出你的项目的`scripts`列表

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

    > TODO: `-r` 后续通过该参数输出一个可选择列表，选择后运行该命令
    > TODO: `-m` 后续通过该参数输出一个多选列表，选择后一次性跑多个命令

-   ... TODO
