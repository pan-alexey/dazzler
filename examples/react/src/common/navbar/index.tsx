import React from 'react';
import { RiSunFill, RiMoonClearFill } from 'react-icons/ri';
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
    <div className={style.root}>
      <div className={style.content}>
        links
        <div className={style.actions}>
          <ThemeSwitcher />
        </div>
      </div>
    </div>
  );
};
