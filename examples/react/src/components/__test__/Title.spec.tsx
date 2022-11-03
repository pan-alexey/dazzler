import React from 'react';
import { render, screen } from '@testing-library/react';
import { Title } from '../Title';

test('Header contains correct text', () => {
  render(
    <div data-testid='root'>
      <Title />
    </div>,
  );
  const text = screen.getByTestId('root');

  expect(text).toBeInTheDocument();
});
