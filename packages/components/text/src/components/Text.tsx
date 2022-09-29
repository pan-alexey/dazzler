import * as React from 'react';
import './Text.scss';

type HeadingRef = HTMLHeadingElement;
interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  color?: 'default' | 'primary' | 'success' | 'warning' | 'error';
}

const H1 = React.forwardRef<HeadingRef, HeadingProps>((props, ref) => {
  const { children, className, color = 'default' } = props;
  const clearProps = Object.fromEntries(
    Object.entries(props).filter(
      ([key]) => !['color', 'className', 'children', 'ref'].includes(key),
    ),
  );

  return (
    <h1
      ref={ref}
      {...clearProps}
      className={['h1', className, `color-${color}`].filter(Boolean).join(' ')}
    >
      {children}
    </h1>
  );
});

H1.displayName = 'H1';

const H2 = React.forwardRef<HeadingRef, HeadingProps>((props, ref) => {
  const { children, className, color = 'default' } = props;
  const clearProps = Object.fromEntries(
    Object.entries(props).filter(
      ([key]) => !['color', 'className', 'children', 'ref'].includes(key),
    ),
  );

  return (
    <h2
      ref={ref}
      {...clearProps}
      className={['h2', className, `color-${color}`].filter(Boolean).join(' ')}
    >
      {children}
    </h2>
  );
});

H2.displayName = 'H2';

const H3 = React.forwardRef<HeadingRef, HeadingProps>((props, ref) => {
  const { children, className, color = 'default' } = props;
  const clearProps = Object.fromEntries(
    Object.entries(props).filter(
      ([key]) => !['color', 'className', 'children', 'ref'].includes(key),
    ),
  );

  return (
    <h3
      ref={ref}
      {...clearProps}
      className={['h3', className, `color-${color}`].filter(Boolean).join(' ')}
    >
      {children}
    </h3>
  );
});

H3.displayName = 'H1';

const H4 = React.forwardRef<HeadingRef, HeadingProps>((props, ref) => {
  const { children, className, color = 'default' } = props;
  const clearProps = Object.fromEntries(
    Object.entries(props).filter(
      ([key]) => !['color', 'className', 'children', 'ref'].includes(key),
    ),
  );

  return (
    <h4
      ref={ref}
      {...clearProps}
      className={['h4', className, `color-${color}`].filter(Boolean).join(' ')}
    >
      {children}
    </h4>
  );
});

H4.displayName = 'H4';

const H5 = React.forwardRef<HeadingRef, HeadingProps>((props, ref) => {
  const { children, className, color = 'default' } = props;
  const clearProps = Object.fromEntries(
    Object.entries(props).filter(
      ([key]) => !['color', 'className', 'children', 'ref'].includes(key),
    ),
  );

  return (
    <h5
      ref={ref}
      {...clearProps}
      className={['h5', className, `color-${color}`].filter(Boolean).join(' ')}
    >
      {children}
    </h5>
  );
});

H5.displayName = 'H5';

type TextRef = HTMLSpanElement;
interface TextProps extends React.HTMLAttributes<HTMLSpanElement> {
  color?: 'default' | 'primary' | 'success' | 'warning' | 'error';
}

const Text = React.forwardRef<TextRef, TextProps>((props, ref) => {
  const { children, className, color = 'default' } = props;
  const clearProps = Object.fromEntries(
    Object.entries(props).filter(
      ([key]) => !['color', 'className', 'children', 'ref'].includes(key),
    ),
  );
  return (
    <span
      ref={ref}
      {...clearProps}
      className={['text', className, `color-${color}`]
        .filter(Boolean)
        .join(' ')}
    >
      {children}
    </span>
  );
});

Text.displayName = 'Text';

export { H1, H2, H3, H4, H5, Text };
