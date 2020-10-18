import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import App from './routes';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core';
import './index.css';

const theme = createMuiTheme({
  palette: {
    action: {
      disabledBackground: '#ffffff8c',
      disabled: 'rgba(0, 0, 0, 0.31)',
    },
    primary: {
      light: '#00aeff',
      main: '#0e86ca',
      dark: '#00aeff',
      contrastText: '#fff',
    },
    secondary: {
      light: '#ff7961',
      main: '#f44336',
      dark: '#ba000d',
      contrastText: '#000',
    },
  },
  typography: {
    h1: {
      fontSize: 36,
      marginBottom: 15,
    },
  },
  overrides: {
    MuiPaper: {
      root: {
        backgroundColor: '#ffffff1f',
      }
    },
    MuiButton: {
      root: {
        borderRadius: 0,
      }
    }
  }
});

ReactDOM.render(
  <React.StrictMode>
    <MuiThemeProvider theme={theme}>
      <App />
    </MuiThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
