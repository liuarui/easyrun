const program = require('commander')
const pkg = require('../package.json')

import { outputScripts } from './scripts'

program.version(`${pkg.version}`, '-V, --version', 'output the current version')

program.description(`
Desc:
    Let your script command run more simple!
    readme: https://github.com/liuarui/easyrun/blob/main/README.md
`)

program.usage('<command> [options]')

program
    .command('l')
    .description('console your project scripts')
    .action(() => outputScripts())

program.parse(process.argv)
