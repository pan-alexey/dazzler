import React from 'react';
export interface LinkProps extends React.HTMLAttributes<HTMLAnchorElement> {
  size?: 'regular' | 'small' | 'large';
  bold?: boolean;
  align?: 'default' | 'start' | 'end' | 'center';
  uppercase?: boolean;
  lowercase?: boolean;
  ellipsis?: boolean;
  decoration?: 'none' | 'wavy' | 'through';
  href?: string;
}
