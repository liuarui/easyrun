import { cac } from 'cac'
import { outputScripts, execSingleScripts } from './scripts'

type CommandListOption = {
    r?: boolean,
    run?: boolean,
    m?: boolean,
    multiple?: boolean
}

const erun = cac('erun')

erun
    .command('[root]', 'run script')
    .alias('list')
    .alias('l')
    .option('-r, --run', `exec single script`)
    .option('-m, --multiple', `multiple choice script`)
    .action(async (root: string, option: CommandListOption) => {
        try {
            if (option.m) {
                console.log('TODO')
            } else if (option.r) {
                execSingleScripts()
            } else {
                outputScripts()
            }
        } catch (e) {
            process.exit(1)
        }
    })


erun.help()
erun.version(require('../package.json').version)
erun.parse()