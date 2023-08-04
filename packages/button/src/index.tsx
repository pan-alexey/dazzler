import React from 'react';
import './styles.css';

interface ButtonProps {
  primary?: boolean;
  backgroundColor?: string;
  size?: 'l' | 'xl';
  children?: React.ReactNode;
}

const Button: React.FC<ButtonProps> = function ({ primary, backgroundColor, children, size }) {
  const mode = primary ? 'storybook-button--primary' : 'storybook-button--secondary';

  return (
    <div
      className={['storybook-button', `storybook-button--${size}`, mode].join(' ')}
    >
      {children}12
    </div>
  );
};

Button.displayName = 'Button';

export default Button;