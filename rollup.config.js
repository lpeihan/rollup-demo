import babel from 'rollup-plugin-babel';
import commonjs from 'rollup-plugin-commonjs';
import resolve from 'rollup-plugin-node-resolve';
import vue from 'rollup-plugin-vue';
import pkg from './package.json';

export default {
    input: './app.vue',
    output: [
      {
        file: pkg.module,
        format: 'es'
      },
      {
        file: pkg.main,
        format: 'cjs'
      },
      // browser-friendly UMD build
      {
        name: "bundle",
        file: pkg.unpkg,
        format: 'umd'
      }
    ],
    plugins: [
      vue({
        css: true
      }),
      babel({
        exclude: 'node_modules/**'
      }),
      commonjs(), // so rollup can convert commonjs to an ES module
      resolve() // so rollup can find node_modules
    ],
    external: ['vue']
  };