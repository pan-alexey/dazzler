import * as React from 'react';
import './Divider.scss';

export type DividerRef = HTMLDivElement;
export interface DividerProps extends React.HTMLAttributes<HTMLDivElement> {
  align?: 'default' | 'start' | 'end' | 'center';
  variant?: 'default' | 'dashed';
  color?: 'default' | 'secondary';
}

const Divider = React.forwardRef<DividerRef, DividerProps>((props, ref) => {
  const {
    align = 'default',
    variant = 'default',
    color = 'default',
    className,
    children,
    ...restProps
  } = props;

  const memoClassName = React.useMemo(
    () =>
      [
        'dzl-divider',
        `dzl-align-${align}`,
        `dzl-variant-${variant}`,
        `dzl-color-${color}`,
        className,
      ]
        .filter(Boolean)
        .join(' '),
    [align, variant, color, className],
  );

  if (children === undefined) {
    return (
      <div ref={ref} className={memoClassName} {...restProps}>
        <div className='dzl-line' />
      </div>
    );
  }

  return (
    <div ref={ref} className={memoClassName} {...restProps}>
      <div className='dzl-line dzl-line-start' />
      <div className='dzl-content'>{children}</div>
      <div className='dzl-line dzl-line-end' />
    </div>
  );
});

Divider.displayName = 'Link';

export { Divider };
