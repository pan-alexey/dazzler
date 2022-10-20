import * as React from 'react';
import style from './index.module.scss';
import { Text } from '@dazzler/Text';
import { ListItem } from '@dazzler/list';
import { Divider } from '@dazzler/divider';

import { RiMeteorFill, RiSunFill, RiMoonClearFill } from "react-icons/ri";

interface MenuProps {
  className?: string;
}

export const Menu: React.FC<MenuProps> = ({ className }) => {
  const classNames = [style.menu, className].filter(Boolean).join(' ');

  return (
    <div className={classNames}>
      <ListItem
        active
        before={<div className={style.itemIcon}><RiMeteorFill /></div>}
        className={style.item}
        content='Typography'
        description={<Text ellipsis>1231231231232dwe,lrew,r;lweml;rmw1312312312</Text>}
      />

      <ListItem
        before={<div className={style.itemIcon}><RiMeteorFill /></div>}
        className={style.item}
        content='Typography'
        description='Set of parameterized buttons'
      />

      <Divider variant="default" color='secondary' align='start'>Text</Divider>
    </div>
  )
}

