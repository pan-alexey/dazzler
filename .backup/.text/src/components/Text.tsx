import React from 'react';
import style from './Text.module.css';
interface TextProps extends React.HTMLAttributes<HTMLSpanElement> {
  color?:
    | 'default'
    | 'regular'
    | 'primary'
    | 'success'
    | 'warning'
    | 'error'
    | 'secondary'
    | 'level-1'
    | 'level-2'
    | 'level-3'
    | 'level-4'
    | 'level-5'
    | 'level-6'
    | 'level-7'
    | 'level-8';
  size?: 'regular' | 'small' | 'large';
  bold?: boolean;
  align?: 'default' | 'start' | 'end' | 'center';
  uppercase?: boolean;
  lowercase?: boolean;
  ellipsis?: boolean;
  decoration?: 'under' | 'wavy' | 'through';
}

const Text = React.forwardRef<HTMLSpanElement, TextProps>((props, ref) => {
  const {
    size = 'default',
    color,
    bold,
    align,
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
        `Text_size_${size}`,
        color ? `Text_color_${color}` : '',
        align ? `Text_align_${align}` : '',
        bold ? `Text_style_bold` : '',
        uppercase ? `Text_style_uppercase` : '',
        lowercase ? `Text_style_lowercase` : '',
        ellipsis ? `Text_style_ellipsis` : '',
        decoration ? `Text_style_${decoration}` : '',
        className,
      ]
        .filter(Boolean)
        .join(' '),
    [color, size, bold, uppercase, lowercase, ellipsis, decoration, className],
  );

  return (
    <span ref={ref} {...restProps} className={memoClassName}>
      {children}
    </span>
  );
});
Text.displayName = 'Text';

export { Text };
