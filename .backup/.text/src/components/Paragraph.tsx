import React from 'react';

export interface ParagraphProps
  extends React.HTMLAttributes<HTMLParagraphElement> {
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
  size?: 'regular' | 'small' | 'large';
  bold?: boolean;
  align?: 'default' | 'start' | 'end' | 'center';
  uppercase?: boolean;
  lowercase?: boolean;
  ellipsis?: boolean;
  decoration?: 'under' | 'wavy' | 'through';
}

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
      decoration,
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
          decoration ? `dzl-style-${decoration}` : '',
          className,
        ]
          .filter(Boolean)
          .join(' '),
      [
        color,
        size,
        align,
        bold,
        uppercase,
        lowercase,
        ellipsis,
        decoration,
        className,
      ],
    );

    return (
      <p ref={ref} {...restProps} className={memoClassName}>
        {children}
      </p>
    );
  },
);
Paragraph.displayName = 'Paragraph';

// Alias
const P = Paragraph;

export { Paragraph, P };
