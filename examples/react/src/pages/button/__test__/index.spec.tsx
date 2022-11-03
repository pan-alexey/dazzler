import React from 'react';
import { render, screen } from '@testing-library/react';
import { ThemeProvider } from '../../../context/theme';
import { Button } from '../';

test('Header contains correct text', () => {
  render(
    <div data-testid='root'>
      <ThemeProvider>
        <Button />
      </ThemeProvider>
    </div>,
  );
  const text = screen.getByTestId('root');

  expect(text).toBeInTheDocument();
});
