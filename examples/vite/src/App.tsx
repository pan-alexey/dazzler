import { useState } from 'react';
import { Navbar } from './components/navbar';
import { Menu } from './components/menu';

import Typography from './pages/Typography';

import './App.scss';

function App() {
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  }
  return (
    <div className={["App", `theme-${theme}`].join(' ')}>
      <Navbar theme={theme} onToggleTheme={toggleTheme}/>
      <div className='page'>
        <div className='menu'>
          <Menu />
        </div>
        <div className='content'>
          <Typography />
        </div>
      </div>
    </div>
  )
}

export default App
