import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider, createTheme } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Keep the interface cool and low-contrast so the video remains the focus.
const theme = createTheme({
  palette: {
    primary: {
      main: '#8eabc3',
      light: '#b8cede',
      dark: '#5f7f9b',
    },
    secondary: {
      main: '#b8cede',
    },
    background: {
      default: '#101318',
      paper: '#1b1e24',
    },
    text: {
      primary: '#eef3f6',
      secondary: '#c1ccd4',
    },
  },
  typography: {
    fontFamily: 'DM Sans, Segoe UI, sans-serif',
    h1: { fontFamily: 'Cormorant Garamond, Georgia, serif' },
    h2: { fontFamily: 'Cormorant Garamond, Georgia, serif' },
    h3: {
      fontFamily: 'Cormorant Garamond, Georgia, serif',
      fontWeight: 600,
      color: '#eef3f6',
    },
    h4: { fontFamily: 'Cormorant Garamond, Georgia, serif' },
    h5: { fontFamily: 'Cormorant Garamond, Georgia, serif' },
    h6: { fontFamily: 'Cormorant Garamond, Georgia, serif' },
    allVariants: {
      color: '#eef3f6',
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
