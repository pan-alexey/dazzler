import * as React from 'react';
import './Figure.scss';

export type Ref = HTMLButtonElement;

export interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
  className?: string;
  kind?: 'default' | 'dashed' | 'outline' | 'text';
  color?: 'default' | 'primary' | 'success' | 'warning' | 'error';
  size?: 'default' | 'large' | 'small';
  disable?: boolean;
}

const Button = React.forwardRef<Ref, Props>((props, ref) => {
  const {
    kind = 'default',
    color = 'default',
    size = 'default',
    className = '',
    children,
    disable = false,
  } = props;

  const memoClassName = React.useMemo(
    () =>
      [
        'figure-button',
        `button-${kind}`,
        `color-${color}`,
        `size-${size}`,
        disable || props.disabled ? 'disable' : '',
        className,
      ]
        .filter(Boolean)
        .join(' '),
    [props],
  );

  const clearProps = React.useMemo(
    () =>
      Object.fromEntries(
        Object.entries(props).filter(
          ([key]) =>
            ![
              'kind',
              'color',
              'size',
              'className',
              'children',
              'ref',
              'disable',
            ].includes(key),
        ),
      ),
    [props],
  );

  return (
    <button ref={ref} {...clearProps} className={memoClassName}>
      {children}
    </button>
  );
});

Button.displayName = 'Button';

export { Button };
