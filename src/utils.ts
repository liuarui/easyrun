import { execSync } from 'child_process'
import chalk from 'chalk'

export function outputDividingLine() {
	console.log(chalk.bgBlackBright('*********************************************')
	)
}
export function execCommand(command, opts?) {
	try {
		outputDividingLine()
		console.log(chalk.bold.green('run script...'))
		execSync(command, Object.assign({
			stdio: 'inherit'
		}, opts))
		console.log(chalk.bold.green('script done'))
	} catch (e) {
		console.log(chalk.bold.red('erun exec script exit'))
	}
}
