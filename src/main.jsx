import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from 'styled-components';

import theme from './pages/styles/theme';
import GlobalStyle from './pages/styles/global';

import { AuthProvider } from './hooks/auth';

import { Routes } from './pages/routes';
// import { CreateMovie } from './pages/CreateMovie';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <AuthProvider>
        <Routes />
      </AuthProvider>
      <GlobalStyle />
    </ThemeProvider>
  </React.StrictMode>
);
