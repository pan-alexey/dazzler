import commonjs from '@rollup/plugin-commonjs';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import postcss from 'rollup-plugin-postcss';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';

export default {
  input: 'src/index.js',
  output: [
    {
      format: 'cjs',
      sourcemap: true,
      name: 'react-lib',
      file: 'dist/index.js',
    },
  ],
  plugins: [
    peerDepsExternal(),
    nodeResolve(),
    postcss({
      modules: true,
      extract: 'style.global.css',
    }),
    commonjs(),
  ],
};
