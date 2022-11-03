import React from 'react';
import type { HeadingProps } from './types';
import style from './style.module.css';
import colorStyle from '../../common/color.module.css';
import alignStyle from '../../common/align.module.css';
import subsetStyle from '../../common/subset.module.css';
import decorationStyle from '../../common/decoration.module.css';

const H4 = React.forwardRef<HTMLHeadingElement, HeadingProps>((props, ref) => {
  const {
    color = 'default',
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
        style.h4,
        colorStyle[color],
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
    [color, align, bold, uppercase, lowercase, ellipsis, decoration, className],
  );

  return (
    <h4 ref={ref} {...restProps} className={memoClassName}>
      {children}
    </h4>
  );
});
H4.displayName = 'H4';

export { H4 };
