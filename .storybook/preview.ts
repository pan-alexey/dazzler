import { Preview } from '@storybook/react';
// import { create } from '@storybook/theming/create';

// const theme = create({
//   base: 'light',
//   brandTitle: 'My custom Storybook',
//   brandUrl: 'https://example.com',
//   brandImage: 'https://storybook.js.org/images/placeholders/350x150.png',
//   brandTarget: '_self',
// });

const preview: Preview = {
  parameters: {
    // docs: {
    //   theme
    // },
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export default preview;
