import React from 'react';
import { useTheme } from '../../context/theme';

export const Button: React.FC = () => {
  const { theme } = useTheme();
  return <div>Button: {theme}</div>;
};
