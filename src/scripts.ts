import { outputDividingLine } from './utils'
export function getScripts(packageJSONPath) {
	let scripts = {}
	try {
		// @ts-ignore
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

export function outputScripts() {
	const scripts = getScripts(`${process.cwd()}/package.json`)
	if (Object.keys(scripts).length === 0) {
		outputDividingLine()
		console.log('Sorry, Your project has no script.')
		outputDividingLine()

	} else {
		console.log('🆒 Your project has the following script.')
		outputDividingLine()
		console.log(scripts)
		outputDividingLine()
	}
}