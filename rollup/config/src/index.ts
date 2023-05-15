import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from 'rollup-plugin-typescript2';
import mirror from './plugins/mirror';
import terser from '@rollup/plugin-terser';
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
    external: [cssExternals, 'react', 'react-dom'],
    plugins: [
      resolve(),
      commonjs(),
      typescript(),
      terser(),
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
