import path from 'path';
import resolve from '@rollup/plugin-node-resolve';
import replace from '@rollup/plugin-replace';
import commonjs from '@rollup/plugin-commonjs';
import url from '@rollup/plugin-url';
import svelte from 'rollup-plugin-svelte';
import babel from '@rollup/plugin-babel';
import { terser } from 'rollup-plugin-terser';
import typescript from "@rollup/plugin-typescript";
import svelteSVG from "rollup-plugin-svelte-svg";

import config from 'sapper/config/rollup.js';
import pkg from './package.json';

const svelteOptions = require("./svelte.config.js");

const mode = process.env.NODE_ENV;
const dev = mode === 'development';
const legacy = !!process.env.SAPPER_LEGACY_BUILD;

const onwarn = (warning, onwarn) =>
	(warning.code === 'MISSING_EXPORT' && /'preload'/.test(warning.message)) ||
	(warning.code === 'CIRCULAR_DEPENDENCY' && /[/\\]@sapper[/\\]/.test(warning.message)) ||
	(warning.code === 'THIS_IS_UNDEFINED') ||
	onwarn(warning);

export default {
	client: {
    input: config.client.input().replace(/\.js$/, ".ts"),
		output: config.client.output(),
		plugins: [
			replace({
				preventAssignment: true,
				values:{
					'process.browser': true,
					'process.env.NODE_ENV': JSON.stringify(mode)
				},
			}),
			svelte(svelteOptions),
			url({
				sourceDir: path.resolve(__dirname, 'src/node_modules/images'),
				publicPath: '/client/'
			}),
			resolve({
				browser: true,
				dedupe: ['svelte']
			}),
			commonjs(),
      typescript(),
      svelteSVG({ dev }),

			legacy && babel({
				extensions: ['.js', '.mjs', '.html', '.svelte'],
				babelHelpers: 'runtime',
				exclude: ['node_modules/@babel/**'],
				presets: [
					['@babel/preset-env', {
						targets: '> 0.25%, not dead'
					}]
				],
				plugins: [
					'@babel/plugin-syntax-dynamic-import',
					['@babel/plugin-transform-runtime', {
						useESModules: true
					}]
				]
			}),

			!dev && terser({
				module: true
			})
		],

		preserveEntrySignatures: false,
		onwarn,
	},

	server: {
    /**
     *? config.server.input returns an object instead of a string like the client does. Not sure if this is intended so I have it check the type before calling replace()
     */
    input: (typeof config.server.input() === "string"
      ? config.server.input()
      : config.server.input().server
    ).replace(/\.js$/, ".ts"),
		output: config.server.output(),
		plugins: [
			replace({
				preventAssignment: true,
				values:{
					'process.browser': false,
					'process.env.NODE_ENV': JSON.stringify(mode)
				},
			}),
			svelte({
        ...svelteOptions,
        compilerOptions: {
					...svelteOptions.compilerOptions,
					generate: "ssr"
				},
			}),
			url({
				sourceDir: path.resolve(__dirname, 'src/node_modules/images'),
				publicPath: '/client/',
				emitFiles: false // already emitted by client build
			}),
			resolve({
				dedupe: ['svelte']
			}),
			commonjs(),
      typescript(),
      svelteSVG({ generate: "ssr", dev }),
		],
		external: Object.keys(pkg.dependencies).concat(require('module').builtinModules),
		preserveEntrySignatures: 'strict',
		onwarn,
	},

	// serviceworker: {
	// 	input: config.serviceworker.input().replace(/\.js$/, '.ts'),
	// 	output: config.serviceworker.output(),
	// 	plugins: [
	// 		resolve(),
	// 		replace({
	// 			preventAssignment: true,
	// 			values:{
	// 				'process.browser': true,
	// 				'process.env.NODE_ENV': JSON.stringify(mode)
	// 			},
	// 		}),
	// 		commonjs(),
	// 		typescript(),
  //     svelteSVG(),
	// 		!dev && terser()
	// 	],
	// 	preserveEntrySignatures: false,
	// 	onwarn,
	// }
};
