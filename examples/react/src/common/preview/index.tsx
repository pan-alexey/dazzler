import React, { useState, useEffect } from 'react';
import { RiSunFill, RiMoonClearFill } from 'react-icons/ri';

import { RiCodeFill, RiCodeSSlashFill } from 'react-icons/ri';
import { CodePreview } from '../../components/code';
import { useTheme } from '../../context/theme';
import style from './index.module.scss';

export const Preview: React.FC<{
  code: string;
  title: string;
  children: React.ReactNode;
}> = ({ title, code, children }) => {
  const { theme } = useTheme();
  const [showCode, setShowCode] = useState<boolean>(false);
  const [themePreview, setThemePreview] = useState<'dark' | 'light' | 'main'>(
    theme,
  );

  const codeIcon = showCode ? <RiCodeFill /> : <RiCodeSSlashFill />;

  const themeIcon =
    themePreview === 'dark' ? <RiSunFill /> : <RiMoonClearFill />;

  useEffect(() => {
    setThemePreview(theme);
  }, [theme]);

  return (
    <div className={[style.root, `css-color-${themePreview}`].join(' ')}>
      <div className={style.header}>
        <div className={style.title}>{title}</div>
        <div className={style.actions}>
          <div
            className={style.themeSwitcher}
            onClick={() => {
              setThemePreview(themePreview === 'dark' ? 'main' : 'dark');
            }}
          >
            {themeIcon}
          </div>
        </div>
      </div>
      <div className={style.body}>{children}</div>
      <div className={style.footer}>
        <div className={style.links}>
          <div
            className={style.linkIcon}
            onClick={() => {
              setShowCode(!showCode);
            }}
          >
            {codeIcon}
          </div>
        </div>
        {showCode && (
          <div className={style.code}>
            <CodePreview code={code} />
          </div>
        )}
      </div>
    </div>
  );
};

export default Preview;
