import React from 'react';
import ReactDOM from 'react-dom/client';
import './normalize.css';

import '@dazzler/variables/normalize.css';
import '@dazzler/variables/index.css';


// theme
import { addStyleInHeader } from './utils/addStyle';
import dark from '@dazzler/variables/dark';
import light from '@dazzler/variables/light';

import App from './App';

addStyleInHeader('.theme-light', light);
addStyleInHeader('.theme-dark', dark);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
