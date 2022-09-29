import postcss from 'rollup-plugin-postcss';
import rollupPluginDelete from 'rollup-plugin-delete';

const plugins = [
  rollupPluginDelete(),
  postcss({
    minimize: process.env.NODE_ENV === 'production',
    modules: true,
    extract: true,
  }),
];

export default [
  {
    input: 'src/index.tsx',
    output: {
      file: 'index.js',
      format: 'esm',
      sourcemap: true,
    },
    plugins,
  },
  {
    input: 'src/dark.tsx',
    output: {
      file: 'dark.js',
      format: 'esm',
      sourcemap: true,
    },
    plugins,
  },
  {
    input: 'src/light.tsx',
    output: {
      file: 'light.js',
      format: 'esm',
      sourcemap: true,
    },
    plugins,
  }
]
