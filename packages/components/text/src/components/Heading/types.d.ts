import React from 'react';
export interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
    color?: 'default' | 'regular' | 'primary' | 'success' | 'warning' | 'error' | 'secondary' | 'level-1' | 'level-2' | 'level-3' | 'level-4' | 'level-5' | 'level-6' | 'level-7' | 'level-8';
    size?: 'regular' | 'small' | 'large';
    bold?: boolean;
    align?: 'default' | 'start' | 'end' | 'center';
    uppercase?: boolean;
    lowercase?: boolean;
    ellipsis?: boolean;
    decoration?: 'under' | 'wavy' | 'through';
}
