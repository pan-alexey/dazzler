import * as React from 'react';
import style from './index.module.scss';

const Preview: React.FC<{children:React.ReactNode, className?: string}> = ({children, className = ''}) => {
  const classNames = [style.preview, className].filter(Boolean).join(' ');

  return (
    <div className={classNames}>
      <div className={style.header}>
        <div className={style.headerTitle}></div>
        <div className={style.headerAction}></div>
      </div>
      <div className={style.body}>

      </div>
      <div className={style.footer}>
        <div className={style.footerAction}>
          123
        </div>
        <div className={style.footerCode}></div>
      </div>
      {children}
    </div>
  )
}

export default Preview
