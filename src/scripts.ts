import { outputDividingLine, execCommand } from './utils'
import chalk from 'chalk'
const inquirer = require('inquirer')

export function getPackageJSONPath() {
	return `${process.cwd()}/package.json`
}

export function getScripts(packageJSONPath) {
	let scripts = {}
	try {
		const packageJSON = require(packageJSONPath)
		scripts = packageJSON.scripts || {}

	} catch (e) {
		outputDividingLine()
		console.log('sorry, I can\'t find your package.json file')
		console.log('Make sure the command is used in the right place')
		outputDividingLine()
	}
	return scripts
}

export async function execSingleScripts() {
	outputScripts()

	const choices = Object.keys(getScripts(getPackageJSONPath()))
	if (choices.length > 0) {
		const { scriptKey } = await inquirer.prompt([{
			type: 'list',
			message: 'Please select the command you want to execute',
			name: 'scriptKey',
			choices
		}])
		scriptKey && execCommand(`npm run ${scriptKey}`)
	}

}
export function outputScripts() {
	const scripts = getScripts(getPackageJSONPath())

	if (Object.keys(scripts).length === 0) {
		outputDividingLine()
		console.log('Sorry, Your project has no script.')
		outputDividingLine()

	} else {
		console.log(chalk.bold('🆒 Your project has the following script.'))
		outputDividingLine()
		console.log(scripts)
		outputDividingLine()
	}
}