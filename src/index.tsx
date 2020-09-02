import React from 'react';
import ReactDOM from 'react-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/core/styles';
import App from './App';
import theme from './theme';

ReactDOM.render(
  <ThemeProvider theme={theme}>
    {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
    <CssBaseline />
    <img src="/backround.png" id="bg" alt="" style={{position:"fixed", top:0, left:0, opacity:0.15, minWidth: "100%", minHeight: "100%"}}></img>
    <App />
  </ThemeProvider>,
  document.querySelector('#root'),
);

