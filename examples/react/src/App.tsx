import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider, useTheme } from './context/theme';
import { Navbar } from './common/navbar';
import { Menu } from './common/menu';

import { Home as HomePage } from './pages/home';
import { TextPage } from './pages/text';
import { DividerPage } from './pages/divider';

import '@dazzler/variables/style.css';
import '@dazzler/variables/color.main.css';
import '@dazzler/variables/color.light.css';
import '@dazzler/variables/color.dark.css';
import './App.scss';

const Page: React.FC = () => {
  const { theme } = useTheme();
  return (
    <BrowserRouter>
      <div className={`page css-color-${theme}`}>
        <div className='page__body'>
          <div className='page__menu'>
            <Menu />
          </div>
          <div className='page__content'>
            <Navbar />
            <div className='page_main'>
              <Routes>
                <Route path='/' element={<HomePage />} />
                <Route path='/text' element={<TextPage />} />
                <Route path='/divider' element={<DividerPage />} />
              </Routes>
            </div>
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
