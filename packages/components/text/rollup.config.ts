import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import copy from 'rollup-plugin-copy';

export default {
  input: 'src/index.ts',
  output: [
    {
      dir: 'dist',
      format: 'esm',
      preserveModules: true,
      sourcemap: true,
      preserveModulesRoot: 'src',
    },
  ],
  external: [/\.css$/],
  plugins: [
    peerDepsExternal(),
    resolve(),
    commonjs(),
    typescript({
      declaration: true,
      declarationDir: 'dist',
    }),
    copy({
      targets: [{ src: ['src/**/*.css'], dest: 'dist' }],
      flatten: false,
    }),
  ],
};
