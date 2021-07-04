import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

const tenex = createMuiTheme({
  palette: {
    bar: {
      main: '#ddd'
    },
    button: {
      main: '#3d92da'
    },
    blue: {
      main: '#0073B6'
    },
    red: {
      main: '#FC0604'
    }
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 700,
      md: 960,
      lg: 1280,
      xl: 1920
    },
  },
})

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={tenex}>
      <App />
    </ ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
