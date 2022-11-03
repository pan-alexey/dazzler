import React from 'react';
export interface AnchorProps extends React.HTMLAttributes<HTMLAnchorElement> {
  size?: 'regular' | 'small' | 'large';
  bold?: boolean;
  align?: 'default' | 'start' | 'end' | 'center';
  uppercase?: boolean;
  lowercase?: boolean;
  ellipsis?: boolean;
  decoration?: 'under' | 'wavy' | 'through';
}
