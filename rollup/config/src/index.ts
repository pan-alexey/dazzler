import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from 'rollup-plugin-typescript2';
import mirror from '@dazzler/rollup-mirror';
const cssExternals = /\.css$/;

export default () => {
  return {
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
    external: [cssExternals],
    plugins: [
      peerDepsExternal(),
      resolve(),
      commonjs(),
      typescript(),
      mirror({
        src: './src',
        target: './dist',
        filter: (name) => {
          return cssExternals.test(name);
        },
      }),
    ],
  };
};
