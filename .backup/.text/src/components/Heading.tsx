import React from 'react';
import { HTMLAttributes, forwardRef } from 'react';

export interface HeadingProps extends HTMLAttributes<HTMLHeadingElement> {
  color?:
    | 'default'
    | 'content'
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
  bold?: boolean;
  align?: 'default' | 'start' | 'end' | 'center';
  uppercase?: boolean;
  lowercase?: boolean;
  ellipsis?: boolean;
  decoration?: 'under' | 'wavy' | 'through';
}

const H1 = forwardRef<HTMLHeadingElement, HeadingProps>((props, ref) => {
  const {
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
        'Text__H1',
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
    [color, align, bold, uppercase, lowercase, ellipsis, className],
  );

  return (
    <h1 ref={ref} {...restProps} className={memoClassName}>
      {children}
    </h1>
  );
});
H1.displayName = 'H1';

const H2 = forwardRef<HTMLHeadingElement, HeadingProps>((props, ref) => {
  const {
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
        'Text__H2',
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
    [color, align, bold, uppercase, lowercase, ellipsis, className],
  );

  return (
    <h2 ref={ref} {...restProps} className={memoClassName}>
      {children}
    </h2>
  );
});
H2.displayName = 'H2';

const H3 = forwardRef<HTMLHeadingElement, HeadingProps>((props, ref) => {
  const {
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
        'Text__H2',
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
    [color, align, bold, uppercase, lowercase, ellipsis, className],
  );

  return (
    <h3 ref={ref} {...restProps} className={memoClassName}>
      {children}
    </h3>
  );
});
H3.displayName = 'H3';

const H4 = forwardRef<HTMLHeadingElement, HeadingProps>((props, ref) => {
  const {
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
        'Text__H4',
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
    [color, align, bold, uppercase, lowercase, ellipsis, className],
  );

  return (
    <h4 ref={ref} {...restProps} className={memoClassName}>
      {children}
    </h4>
  );
});
H4.displayName = 'H4';

const H5 = forwardRef<HTMLHeadingElement, HeadingProps>((props, ref) => {
  const {
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
        'Text__H5',
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
    [color, align, bold, uppercase, lowercase, ellipsis, className],
  );

  return (
    <h5 ref={ref} {...restProps} className={memoClassName}>
      {children}
    </h5>
  );
});
H5.displayName = 'H5';

const H6 = forwardRef<HTMLHeadingElement, HeadingProps>((props, ref) => {
  const {
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
        'Text__H6',
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
    [color, align, bold, uppercase, lowercase, ellipsis, className],
  );

  return (
    <h6 ref={ref} {...restProps} className={memoClassName}>
      {children}
    </h6>
  );
});
H6.displayName = 'H6';

export { H1, H2, H3, H4, H5, H6 };
