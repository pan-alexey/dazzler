import * as React from 'react';
import './Figure.scss';

export type Ref = HTMLButtonElement;

export interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
  className?: string;
  kind?: 'default' | 'round' | 'circle';
  color?: 'default' | 'primary' | 'success' | 'warning' | 'error';
  size?: 'default' | 'large' | 'small';
  disable?: boolean;
}

const Figure = React.forwardRef<Ref, Props>((props, ref) => {
  const {
    kind = 'default',
    color = 'default',
    size = 'default',
    className = '',
    children,
    disable = false,
  } = props;

  const classNames = [
    'button',
    `button-${kind}`,
    `color-${color}`,
    `size-${size}`,
    disable || props.disabled ? 'disable' : '',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  const clearProps = Object.fromEntries(
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
  );

  return (
    <button ref={ref} {...clearProps} className={classNames}>
      {children}
    </button>
  );
});

Figure.displayName = 'Button';

export { Figure };
