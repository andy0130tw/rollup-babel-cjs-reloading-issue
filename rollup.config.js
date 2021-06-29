import svelte from 'rollup-plugin-svelte'
import commonjs from '@rollup/plugin-commonjs'
import resolve from '@rollup/plugin-node-resolve'
import { babel } from '@rollup/plugin-babel'
import css from 'rollup-plugin-css-only'

export default {
  input: 'src/main.js',
  output: {
    format: 'cjs',
    dir: 'public/dist',
    exports: 'auto',
  },

  plugins: [
    svelte({
      compilerOptions: {
        dev: true,
      },
    }),

    css({ output: 'bundle.css' }),
    resolve({
      browser: true,
      dedupe: ['svelte'],
    }),
    commonjs(),

	babel({
      exclude: [/\/core-js\//],
      extensions: ['.js', '.mjs', '.svelte'],
      babelHelpers: 'bundled',
    }),

  ],

  watch: {
    clearScreen: false,
  },
}

