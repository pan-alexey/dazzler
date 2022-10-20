import * as React from 'react';
import { RiMeteorFill, RiSunFill, RiMoonClearFill } from "react-icons/ri";
import style from './index.module.scss';

export type Theme = 'dark' | 'light';
export type ToggleTheme = () => void;

const ThemeSwitcher: React.FC<{
  theme: Theme;
  onToggleTheme: ToggleTheme;
}> = ({
  theme,
  onToggleTheme,
}) => {
  const component = theme === 'dark' ? <RiSunFill /> : <RiMoonClearFill />
  return <div className={style.themeSwitcher} onClick={()=>onToggleTheme()}>{component}</div>
}


interface NavbarProps {
  className?: string;
  theme: Theme;
  onToggleTheme: ToggleTheme;
}

export const Navbar: React.FC<NavbarProps> = ({
  className = '',
  theme,
  onToggleTheme,
}) => {
  const classNames = [style.navbar, className].filter(Boolean).join(' ');

  return (
    <div className={classNames}>
      <div className={style.logo}>
        <RiMeteorFill />
        <div className={style.name}>Bricks</div>
      </div>

      <div className={style.content}>
        links
      </div>
      <div className={style.actions}>
        <ThemeSwitcher theme={theme} onToggleTheme={onToggleTheme}/>
      </div>
    </div>
  )
}
