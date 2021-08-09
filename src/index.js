import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {theme} from './theme'
import { ThemeProvider } from '@material-ui/styles';

ReactDOM.render(
  <React.StrictMode>
   
   <App/>
  
  </React.StrictMode>,
  document.getElementById('root')
);