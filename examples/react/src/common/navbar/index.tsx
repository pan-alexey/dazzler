import React from 'react';
import { RiMeteorFill, RiSunFill, RiMoonClearFill } from 'react-icons/ri';
import { useTheme } from '../../context/theme';
import style from './index.module.scss';

export type Theme = 'dark' | 'light';
export type ToggleTheme = () => void;

const ThemeSwitcher: React.FC = () => {
  const { theme, setTheme } = useTheme();
  const component = theme === 'dark' ? <RiSunFill /> : <RiMoonClearFill />;
  return (
    <div
      className={style.themeSwitcher}
      onClick={() => {
        setTheme(theme === 'dark' ? 'main' : 'dark');
      }}
    >
      {component}
    </div>
  );
};

export const Navbar = () => {
  return (
    <>
      <div className={style.logo}>
        <RiMeteorFill />
        <div className={style.logoName}>Dazzler</div>
      </div>

      <div className={style.content}>
        links
        <div className={style.actions}>
          <ThemeSwitcher />
        </div>
      </div>
    </>
  );
};
