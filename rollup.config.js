import json from '@rollup/plugin-json'
import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import typescript from '@rollup/plugin-typescript'
export default {
    input: 'src/main.ts',
    output: {
        banner: '#!/usr/bin/env node',
        name: 'e run',
        file: 'bin/erun.js',
        format: 'umd',
    },
    plugins: [
        typescript(),
        resolve(),
        commonjs(),
        json(),
    ],

}
