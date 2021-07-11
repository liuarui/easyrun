<h1 align="center">easyrun</h1>

<div align="center">
Let your script command run more simple!

English | [简体中文](./README-zh_CN.md)

</div>

## desc

Do you have the same troubles like me?

-   Always can't remember what the project script names
-   Too lazy to run multiple commands
-   ... any about run scripts

## usage

-   step 1
    `npm install easyrun -g`

-   step 2
    `erun [command] [options]`

## command

### `erun [option]`

#### feat

-   output your project scripts list
-   exec script

#### options

-   `-r` Select a command from the list to execute
-   TODO: `-m` Follow-up to make a list of Multiple choice, one-click operation

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

## end

If you feel helpful, you can come to [Github](https://github.com/liuarui/easyrun) give me a star, your ✨ is the biggest encouragement to me ~

> If you really like, 🤓🤓🤓 you can ask the author to drink a cup of coffee☕️

 <img src="./coffee.jpg" alt="coffee" style="width:60px height:60px;" />
