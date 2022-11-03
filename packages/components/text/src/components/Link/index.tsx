import React from 'react';
import type { AnchorProps } from './types';
import style from './style.module.css';
import alignStyle from '../../common/align.module.css';
import subsetStyle from '../../common/subset.module.css';
import decorationStyle from '../../common/decoration.module.css';

const Anchor = React.forwardRef<HTMLAnchorElement, AnchorProps>(
  (props, ref) => {
    const {
      size,
      align,
      bold,
      uppercase,
      lowercase,
      ellipsis,
      decoration,
      className,
      children,
      ...restProps
    } = props;

    const memoClassName = React.useMemo(
      () =>
        [
          style.root,
          size ? style[size] : '',
          align ? alignStyle[`align-${align}`] : '',
          bold ? subsetStyle.bold : '',
          uppercase ? subsetStyle.uppercase : '',
          lowercase ? subsetStyle.lowercase : '',
          ellipsis ? subsetStyle.ellipsis : '',
          decoration ? decorationStyle[`decoration-${decoration}`] : '',
          className,
        ]
          .filter(Boolean)
          .join(' '),
      [size, align, bold, uppercase, lowercase, ellipsis, className],
    );

    return (
      <a ref={ref} {...restProps} className={memoClassName}>
        {children}
      </a>
    );
  },
);
Anchor.displayName = 'Anchor';

// Alias for usage
const A = Anchor;
export { Anchor, A };
