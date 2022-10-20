import * as React from 'react';
import style from './index.module.scss';
import { H1, H2, Text } from '@dazzler/text';

const Typography: React.FC = () => {
  return (
    <div className={style.page}>
      <div className={style.heading}>
        <H1>Typography</H1>
        <Text bold>Basic text writing, including headings, body text, link, and more.</Text>
      </div>
      <div className={style.example}>
        <H2>Headings, links and text by sizes</H2>
      </div>

      <div className={style.example}>
        <H2>Colors</H2>
      </div>
    </div>
  )
}

export default Typography
