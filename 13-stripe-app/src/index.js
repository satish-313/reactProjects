import React from 'react';
import ReactDom from 'react-dom';

import App from './App';
import './index.css';
import {AppProvider} from './contex';

ReactDom.render(
  <AppProvider>
    <App/>
  </AppProvider>
,document.getElementById('root'));