import * as React from 'react';
import './Link.scss';

export type AnchorRef = HTMLAnchorElement;
export interface AnchorProps extends React.HTMLAttributes<HTMLAnchorElement> {
  size?: 'default' | 'small' | 'large';
  bold?: boolean;
  align?: 'default' | 'start' | 'end' | 'center';
  uppercase?: boolean;
  lowercase?: boolean;
  ellipsis?: boolean;
}

const Link = React.forwardRef<AnchorRef, AnchorProps>((props, ref) => {
  const {
    color = 'default',
    size,
    align,
    bold,
    uppercase,
    lowercase,
    ellipsis,
    className,
    children,
    ...restProps
  } = props;

  const memoClassName = React.useMemo(
    () =>
      [
        'dzl-link',
        `dzl-size-${size}`,
        align ? `dzl-align-${align}` : '',
        bold ? `dzl-style-${bold}` : '',
        uppercase ? `dzl-style-${uppercase}` : '',
        lowercase ? `dzl-style-${lowercase}` : '',
        ellipsis ? `dzl-style-${ellipsis}` : '',
        className,
      ]
        .filter(Boolean)
        .join(' '),
    [color, align, bold, uppercase, lowercase, ellipsis, className],
  );

  return (
    <a ref={ref} className={memoClassName} {...restProps}>
      {children}
    </a>
  );
});

Link.displayName = 'Link';

export { Link };
