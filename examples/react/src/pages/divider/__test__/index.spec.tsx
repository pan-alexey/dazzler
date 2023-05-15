import React from 'react';
import { render, screen } from '@testing-library/react';
import { ThemeProvider } from '../../../context/theme';
import { DividerPage } from '..';

test('Header contains correct text', () => {
  render(
    <div data-testid='root'>
      <ThemeProvider>
        <DividerPage />
      </ThemeProvider>
    </div>,
  );
  const text = screen.getByTestId('root');

  expect(text).toBeInTheDocument();
});
