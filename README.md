<h1 align="center">easyrun</h1>

<div align="center">
Let your script command run more simple!

English | [简体中文]('./README-zh_CN.md')

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

-   `erun l`
    output your project scripts list

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

    > TODO: `-r` Follow-up to make a list of options, one-click operation
    > TODO: `-m` Follow-up to make a list of Multiple choice, one-click operation

-   ... TODO
