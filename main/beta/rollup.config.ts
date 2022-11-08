import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import terser from '@rollup/plugin-terser';
import typescript from '@rollup/plugin-typescript';
import postcss from 'rollup-plugin-postcss';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';

export default {
  input: 'src/index.ts',
  external: ['react'],
  output: [
    {
      file: 'dist/index.umd.js',
      format: 'umd',
      name: 'dazzler',
      sourcemap: true,
      globals: {
        react: 'React',
      },
    },
  ],
  plugins: [
    peerDepsExternal(),
    resolve(),
    typescript(),
    postcss({
      modules: true,
      extract: 'style.global.css',
    }),
    commonjs(),
    terser(),
  ],
  // input: 'src/index.ts',
  // output: [
  //   {
  //     file: 'dist/index.cjs.js',
  //     format: 'cjs',
  //     name: 'dazzler',
  //     sourcemap: true,
  //   },
  // ],
  // plugins: [
  //   peerDepsExternal(),
  //   resolve(),
  //   typescript({
  //     declaration: true,
  //     declarationDir: 'dist',
  //   }),
  //   postcss({
  //     modules: true,
  //     extract: 'style.global.css',
  //   }),
  //   commonjs(),
  // ],
};
