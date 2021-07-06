declare module 'package.json' {
    export default {
        version: string,
        scripts: {
            [key in string]?: string
        },
    }
}
