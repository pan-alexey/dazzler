import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import terser from '@rollup/plugin-terser';
import typescript from '@rollup/plugin-typescript';
import postcss from 'rollup-plugin-postcss';

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
    resolve(),
    typescript(),
    postcss({
      modules: true,
      extract: 'style.global.css',
    }),
    commonjs(),
    terser(),
  ],
};
