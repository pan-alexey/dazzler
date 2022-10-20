import postcss from 'rollup-plugin-postcss';

export default [
  {
    input: 'src/index.tsx',
    output: {
      file: 'index.js',
      format: 'esm',
      sourcemap: true,
    },
    plugins: [
      postcss({
        minimize: process.env.NODE_ENV === 'production',
        modules: true,
        extract: true,
      }),
    ]
  },
  {
    input: 'src/dark.tsx',
    output: {
      file: 'dark.js',
      format: 'esm',
      sourcemap: true,
    },
    plugins: [
      postcss({
        minimize: process.env.NODE_ENV === 'production',
        modules: true,
        extract: true,
      }),
    ]
  },
  {
    input: 'src/light.tsx',
    output: {
      file: 'light.js',
      format: 'esm',
      sourcemap: true,
    },
    plugins: [
      postcss({
        minimize: process.env.NODE_ENV === 'production',
        modules: true,
        extract: true,
      }),
    ]
  }
]
