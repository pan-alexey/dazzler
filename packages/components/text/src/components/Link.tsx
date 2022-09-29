import * as React from 'react';
import './Link.scss';

export type AnchorRef = HTMLAnchorElement;
export interface AnchorProps extends React.HTMLAttributes<HTMLAnchorElement> {
  size?: 'default' | 'small' | 'large';
}

const Link = React.forwardRef<AnchorRef, AnchorProps>((props, ref) => {
  const { children, className, size = '' } = props;
  const sizeClassName: string = size ? `size-${size}` : '';

  const clearProps = Object.fromEntries(
    Object.entries(props).filter(
      ([key]) => !['size', 'className', 'children', 'ref'].includes(key),
    ),
  );

  return (
    <a
      ref={ref}
      {...clearProps}
      className={['link', className, sizeClassName].filter(Boolean).join(' ')}
    >
      {children}
    </a>
  );
});

Link.displayName = 'Link';

export { Link };
