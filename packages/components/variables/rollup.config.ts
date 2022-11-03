import postcss from 'rollup-plugin-postcss';

const postCss = () => postcss({
  minimize: process.env.NODE_ENV === 'production',
  modules: true,
  extract: true,
});

export default [
  {
    input: 'src/varibles.ts',
    output: {
      file: 'varibles.js',
      format: 'esm',
      sourcemap: false,
    },
    plugins: [postCss()]
  },
  {
    input: 'src/color.main.ts',
    output: {
      file: 'color.main.js',
      format: 'esm',
      sourcemap: false,
    },
    plugins: [postCss()]
  },
  {
    input: 'src/color.light.ts',
    output: {
      file: 'color.light.js',
      format: 'esm',
      sourcemap: false,
    },
    plugins: [postCss()]
  },
  {
    input: 'src/color.dark.ts',
    output: {
      file: 'color.dark.js',
      format: 'esm',
      sourcemap: false,
    },
    plugins: [postCss()]
  },
  {
    input: 'src/style.ts',
    output: {
      file: 'style.js',
      format: 'esm',
      sourcemap: false,
    },
    plugins: [postCss()]
  },
]
