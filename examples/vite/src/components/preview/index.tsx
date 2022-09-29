import * as React from 'react';
import style from './index.module.scss';

const Preview: React.FC<{children:React.ReactNode, className?: string}> = ({children, className = ''}) => {
  const classNames = [style.preview, className];

  const resultClassName = classNames.filter(Boolean).join(' ');

  return (
    <div className={resultClassName}>
      {children}
    </div>
  )
}

export default Preview
