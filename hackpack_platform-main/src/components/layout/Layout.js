import Navbar from './Navbar';
import Footer from './Footer';
import { Box } from '@mui/material';

function Layout({ children }) {
  return (
    <Box 
      sx={{ 
        display: 'flex', 
        flexDirection: 'column', 
        minHeight: '100vh',
        maxWidth: '100vw',
        overflow: 'hidden' // Prevents horizontal scroll
      }}
    >
      <Navbar />
      <Box 
        component="main" 
        sx={{ 
          flexGrow: 1,
          width: '100%',
          // Remove any padding that might cause scrolling
          '& > *': {
            maxWidth: '100% !important',
            px: 0
          }
        }}
      >
        {children}
      </Box>
      <Footer />
    </Box>
  );
}

export default Layout; 