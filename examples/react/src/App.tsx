import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { ThemeProvider, useTheme } from './context/theme';
import { Navbar } from './common/navbar';
import { Menu } from './common/menu';

import { Button as ButtonPage } from './pages/button';
import { Home as HomePage } from './pages/home';

import '@dazzler/variables/style.css';
import '@dazzler/variables/color.light.css';
import '@dazzler/variables/color.dark.css';
import './App.scss';

const Page: React.FC = () => {
  const { theme } = useTheme();
  return (
    <BrowserRouter>
      <div className={`page css-color-${theme}`}>
        <div className='page__navbar'>
          <Navbar />
        </div>
        <div className='page__body'>
          <div className='page__menu'>
            <Menu />
          </div>
          <div className='page__content'>
            <Routes>
              <Route path='/' element={<HomePage />} />
              <Route path='button' element={<ButtonPage />} />
            </Routes>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
};

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <Page />
    </ThemeProvider>
  );
};

export default App;
