import * as React from 'react';
import './Text.scss';

interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  color?:
    | 'default'
    | 'primary'
    | 'success'
    | 'warning'
    | 'error'
    | 'level-1'
    | 'level-2'
    | 'level-3'
    | 'level-4'
    | 'level-5'
    | 'level-6'
    | 'level-7';
  bold?: boolean;
  align?: 'default' | 'start' | 'end' | 'center';
  uppercase?: boolean;
  lowercase?: boolean;
  ellipsis?: boolean;
}

interface TextProps extends React.HTMLAttributes<HTMLSpanElement> {
  color?:
    | 'default'
    | 'primary'
    | 'success'
    | 'warning'
    | 'error'
    | 'level-1'
    | 'level-2'
    | 'level-3'
    | 'level-4'
    | 'level-5'
    | 'level-6'
    | 'level-7';
  size?: 'default' | 'small' | 'large';
  bold?: boolean;
  align?: 'default' | 'start' | 'end' | 'center';
  uppercase?: boolean;
  lowercase?: boolean;
  ellipsis?: boolean;
}

interface ParagraphProps extends React.HTMLAttributes<HTMLParagraphElement> {
  color?:
    | 'default'
    | 'primary'
    | 'success'
    | 'warning'
    | 'error'
    | 'level-1'
    | 'level-2'
    | 'level-3'
    | 'level-4'
    | 'level-5'
    | 'level-6'
    | 'level-7';
  size?: 'default' | 'small' | 'large';
  bold?: boolean;
  align?: 'default' | 'start' | 'end' | 'center';
  uppercase?: boolean;
  lowercase?: boolean;
  ellipsis?: boolean;
}

const H1 = React.forwardRef<HTMLHeadingElement, HeadingProps>((props, ref) => {
  const {
    color = 'default',
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
        'dzl-text',
        'dzl-h1',
        `dzl-color-${color}`,
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
    <h1 ref={ref} {...restProps} className={memoClassName}>
      {children}
    </h1>
  );
});
H1.displayName = 'H1';

const H2 = React.forwardRef<HTMLHeadingElement, HeadingProps>((props, ref) => {
  const {
    color = 'default',
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
        'dzl-text',
        'dzl-h2',
        `dzl-color-${color}`,
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
    <h2 ref={ref} {...restProps} className={memoClassName}>
      {children}
    </h2>
  );
});
H2.displayName = 'H2';

const H3 = React.forwardRef<HTMLHeadingElement, HeadingProps>((props, ref) => {
  const {
    color = 'default',
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
        'dzl-text',
        'dzl-h3',
        `dzl-color-${color}`,
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
    <h3 ref={ref} {...restProps} className={memoClassName}>
      {children}
    </h3>
  );
});
H3.displayName = 'H3';

const H4 = React.forwardRef<HTMLHeadingElement, HeadingProps>((props, ref) => {
  const {
    color = 'default',
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
        'dzl-text',
        'dzl-h4',
        `dzl-color-${color}`,
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
    <h4 ref={ref} {...restProps} className={memoClassName}>
      {children}
    </h4>
  );
});
H4.displayName = 'H4';

const H5 = React.forwardRef<HTMLHeadingElement, HeadingProps>((props, ref) => {
  const {
    color = 'default',
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
        'dzl-text',
        'dzl-h5',
        `dzl-color-${color}`,
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
    <h5 ref={ref} {...restProps} className={memoClassName}>
      {children}
    </h5>
  );
});
H5.displayName = 'H5';

const Span = React.forwardRef<HTMLSpanElement, TextProps>((props, ref) => {
  const {
    color = 'default',
    size = 'default',
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
        'dzl-text',
        `dzl-color-${color}`,
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
    [color, size, align, bold, uppercase, lowercase, ellipsis, className],
  );

  return (
    <span ref={ref} {...restProps} className={memoClassName}>
      {children}
    </span>
  );
});
Span.displayName = 'Span';

const Paragraph = React.forwardRef<HTMLParagraphElement, ParagraphProps>(
  (props, ref) => {
    const {
      color = 'default',
      size = 'default',
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
          'dzl-text',
          `dzl-color-${color}`,
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
      [color, size, align, bold, uppercase, lowercase, ellipsis, className],
    );

    return (
      <p ref={ref} {...restProps} className={memoClassName}>
        {children}
      </p>
    );
  },
);
Paragraph.displayName = 'Paragraph';

// Aliases
const P = Paragraph;
P.displayName = 'P';

const Text = Span;
Text.displayName = 'Text';

export { H1, H2, H3, H4, H5, Text, Span, Paragraph, P };
