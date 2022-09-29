import { useState, useRef, useEffect } from 'react';
import Preview from './components/preview';
import styles from '@dazzler/variables';
import { Button } from '@dazzler/button';
import { H1, H2, Text, Link } from '@dazzler/text';
import reactLogo from './assets/react.svg';
import viteLogo from './assets/vite.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <div>
        <Preview>
          <H1 color="error">Header h1</H1>
          <H2 color="error">Header h2</H2>
          <Link>Link</Link>
          <Text>text</Text>
        </Preview>
        <br />
        <Preview>
          <Button onClick={() => console.log(123)} disabled>Default button</Button>
          <Button onClick={() => console.log(123)} color='primary' disable={true}>*Primary button</Button>
          <Button color='success' disabled>Success button</Button>
          <Button color='warning' disabled>Warning button</Button>
          <Button color='error'>Error button</Button>
        </Preview>
        <br />
        <Preview>
          <Button kind='dashed'>Default button</Button>
          <Button color='primary' kind='dashed'>Primary button</Button>
          <Button color='success' kind='dashed'>Success button</Button>
          <Button color='warning' kind='dashed'>Warning button</Button>
          <Button color='error' kind='dashed'>Error button</Button>
        </Preview>
        <br />
        <Preview>
          <Button kind='outline'>Default button</Button>
          <Button color='primary' kind='outline'>Primary button</Button>
          <Button color='success' kind='outline'>Success button</Button>
          <Button color='warning' kind='outline'>Warning button</Button>
          <Button color='error' kind='outline'>Error button</Button>
        </Preview>
        <br />
        <Preview>
          <Button kind='text' disabled>Default button</Button>
          <Button color='primary' kind='text'>Primary button</Button>
          <Button color='success' kind='text'>Success button</Button>
          <Button color='warning' kind='text'>Warning button</Button>
          <Button color='error' kind='text'>Error button</Button>
        </Preview>
      </div>
    </div>
  )
}

export default App
