import React from 'react';
import { useState } from 'react';
import { Button } from '@dazzler/button';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  return (
    <div className='App'>
      <div>
        <a href='https://webpack.js.org/' target='_blank' rel='noreferrer'>
          <img src='/webpack.svg' className='logo' alt='Webpack logo' />
        </a>
        <a href='https://reactjs.org' target='_blank' rel='noreferrer'>
          <img src='/react.svg' className='logo react' alt='React logo' />
        </a>
      </div>
      <div>
        <Button color='primary'>Title button</Button>
        <br />
        <br />
        <Button color='primary'>Текст кнопки</Button>
      </div>
      <div className='card'>
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className='read-the-docs'>
        Click on the Webpack and React logos to learn more
      </p>
    </div>
  );
}

export default App;
