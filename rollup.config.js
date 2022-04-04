import babel from '@rollup/plugin-babel'
import commonjs from '@rollup/plugin-commonjs'
import resolve from '@rollup/plugin-node-resolve'
import external from 'rollup-plugin-peer-deps-external'
import json from '@rollup/plugin-json'
// Use this if contains any css import
// import postcss from 'rollup-plugin-postcss'

import packageJSON from './package.json'
const input = './src/index.js'

export default [
    {
        input,
        output: [
            {
                file: packageJSON.main,
                format: 'cjs',
            },
            {
                file: packageJSON.module,
                format: 'es',
            },
        ],
        plugins: [
            external(),
            babel({
                exclude: 'node_modules/**',
                babelHelpers: 'bundled',
            }),
            json(),
            resolve(),
            commonjs(),
        ],
    },
]
