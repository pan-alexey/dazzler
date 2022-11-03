import * as React from 'react';
import './Button.scss';

export interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  varian?: 'default' | 'dashed' | 'outline' | 'text';
  color?: 'default' | 'primary' | 'success' | 'warning' | 'error';
  size?: 'default' | 'large' | 'small';
  block?: boolean;
  disallow?: boolean;
  disabled?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (props, ref) => {
    const {
      varian = 'default',
      color = 'default',
      size = 'default',
      block = false,
      disallow = false,
      className,
      children,
      ...restProps
    } = props;

    const memoClassName = React.useMemo(
      () =>
        [
          'dzl-btn',
          `dzl-btn-varian-${varian}`,
          `dzl-btn-color-${color}`,
          `dzl-btn-size-${size}`,
          block ? 'd-btn-block' : '',
          disallow ? 'd-btn-disallow' : '',
          className,
        ]
          .filter(Boolean)
          .join(' '),
      [className, varian, color, size, disallow],
    );

    return (
      <button {...restProps} ref={ref} className={memoClassName}>
        {children}
      </button>
    );
  },
);

Button.displayName = 'Button';

// export interface ButtonLinkProps
//   extends React.HTMLAttributes<HTMLAnchorElement> {
//   varian?: 'default' | 'dashed' | 'outline' | 'text';
//   color?: 'default' | 'primary' | 'success' | 'warning' | 'error';
//   size?: 'default' | 'large' | 'small';
//   block?: boolean;
//   disallow?: boolean;
//   disabled?: boolean;
// }

// const ButtonLink = React.forwardRef<HTMLAnchorElement, ButtonLinkProps>(
//   (props, ref) => {
//     const {
//       varian = 'default',
//       color = 'default',
//       size = 'default',
//       block = false,
//       disallow = false,
//       className,
//       children,
//       ...restProps
//     } = props;

//     const memoClassName = React.useMemo(
//       () =>
//         [
//           'd-btn',
//           `d-btn-${varian}`,
//           `d-btn-color-${color}`,
//           `d-btn-size-${size}`,
//           block ? 'd-btn-block' : '',
//           disallow ? 'd-btn-disallow' : '',
//           className,
//         ]
//           .filter(Boolean)
//           .join(' '),
//       [className, varian, color, size, disallow],
//     );

//     return (
//       <a ref={ref} {...restProps} className={memoClassName}>
//         {children}
//       </a>
//     );
//   },
// );

// ButtonLink.displayName = 'ButtonLink';

export { Button };
