import * as React from 'react';
import { FaBeer } from 'react-icons/fa';

import style from './style.scss';

export const Title: React.FC = () => {
  return (
    <div className={style.app}>
      <FaBeer />
      <h1 className={style.h1}>Hello world 1234</h1>
    </div>
  );
};
