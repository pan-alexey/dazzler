import * as React from 'react';
import styles from './divider.module.css';

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
        styles.root,
        styles[`align-${align}`],
        styles[`line-${variant}`],
        styles[`color-${color}`],
        className,
      ]
        .filter(Boolean)
        .join(' '),
    [align, variant, color, className],
  );

  if (children === undefined) {
    return (
      <div ref={ref} className={memoClassName} {...restProps}>
        <div className={styles.line} />
      </div>
    );
  }

  return (
    <div ref={ref} className={memoClassName} {...restProps}>
      <div className={[styles.line, styles['line-start']].join(' ')} />
      <div className={styles.content}>{children}</div>
      <div className={[styles.line, styles['line-end']].join(' ')} />
    </div>
  );
});

Divider.displayName = 'Divider';

export { Divider };
