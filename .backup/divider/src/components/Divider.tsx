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
        'Divider',
        `Divider_align_${align}`,
        `Divider_variant_${variant}`,
        `Divider_color_${color}`,
        className,
      ]
        .filter(Boolean)
        .join(' '),
    [align, variant, color, className],
  );

  if (children === undefined) {
    return (
      <div ref={ref} className={memoClassName} {...restProps}>
        <div className='Divider__line' />
      </div>
    );
  }

  return (
    <div ref={ref} className={memoClassName} {...restProps}>
      <div className='Divider__line Divider__line_start' />
      <div className='Divider__content'>{children}</div>
      <div className='Divider__line Divider__line_end' />
    </div>
  );
});

Divider.displayName = 'Divider';

export { Divider };
