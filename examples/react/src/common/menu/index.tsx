import React from 'react';
import { Link } from 'react-router-dom';
import style from './index.module.scss';

export const Menu = () => {
  return (
    <>
      <div className={style.menu}>
        <Link className={style.routerLink} to='/'>
          home
        </Link>
        <Link className={style.routerLink} to='/button'>
          button
        </Link>
      </div>
    </>
  );
};
