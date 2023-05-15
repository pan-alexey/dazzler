import React from 'react';
import { RiMeteorFill } from 'react-icons/ri';
import { Link, useNavigate } from 'react-router-dom';
import { ListItem } from '../../components/list-item';
import style from './index.module.scss';

export const Menu = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className={style.menu}>
        <div className={style.head}>
          <div className={style.logo}>
            <RiMeteorFill />
            <div className={style.logoName}>BRICKS</div>
          </div>
        </div>
        <div className={style.body}>
          <ListItem active onClick={() => navigate('/text')} />
          <ListItem active onClick={() => navigate('/text')} />
        </div>
      </div>
    </>
  );
};
