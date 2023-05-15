import React from 'react';
import { Text, H1, H6 } from '@dazzler/text';
import style from './index.module.css';

export const Home: React.FC = () => {
  return (
    <div className={style.root}>
      <Text color='primary' bold uppercase>
        Text..
      </Text>
      <H1>Heading text!!</H1>
      <H6 bold>Heading H6</H6>
    </div>
  );
};
