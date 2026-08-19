import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider, createTheme } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Create a custom theme with warm, earthy colors
const theme = createTheme({
  palette: {
    primary: {
      main: '#a0522d',
      light: '#e6b89c',
      dark: '#8b4513',
    },
    secondary: {
      main: '#d8cfc4',
    },
    background: {
      default: '#f5f5f5',
      paper: '#ffffff',
    },
    text: {
      primary: '#8b4513',
      secondary: '#a0522d',
    },
  },
  typography: {
    h3: {
      fontWeight: 600,
      color: '#8b4513',
    },
    allVariants: {
      color: '#8b4513',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
        },
      },
    },
  },
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </React.StrictMode>
);

reportWebVitals();
