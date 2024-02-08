import { StorybookConfig } from '@storybook/react-webpack5';
import webpack from 'webpack';

const config: StorybookConfig = {
  stories: [
    "./docs/storybook.mdx",
    "../packages/**/*.stories.@(js|jsx|mjs|ts|tsx)",
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-onboarding",
    "@storybook/addon-interactions",
  ],
  framework: {
    name: "@storybook/react-webpack5",
    options: {},
  },
  docs: {
    autodocs: "tag",
  },
  webpackFinal: async (config: webpack.Configuration) => {
    config.module?.rules?.push({
      test: /\.(ts|tsx)$/,
      loader: require.resolve('babel-loader'),
      options: {
        "presets": [
          [
            "@babel/preset-env",
          ],
          "@babel/preset-react",
          "@babel/preset-typescript"
        ],
      }
    });

    config.resolve?.extensions?.push('.ts', '.tsx');
    return config;
  },
};

export default config;
