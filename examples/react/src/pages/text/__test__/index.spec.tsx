import React from 'react';
import { render, screen } from '@testing-library/react';
import { ThemeProvider } from '../../../context/theme';
import { TextPage } from '..';

test('Header contains correct text', () => {
  render(
    <div data-testid='root'>
      <ThemeProvider>
        <TextPage />
      </ThemeProvider>
    </div>,
  );
  const text = screen.getByTestId('root');

  expect(text).toBeInTheDocument();
});
