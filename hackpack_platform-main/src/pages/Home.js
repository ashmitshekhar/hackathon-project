import Hero from '../components/home/Hero';
import Features from '../components/home/Features';
import HowItWorks from '../components/home/HowItWorks';
import { Box } from '@mui/material';

function Home() {
  return (
    <Box sx={{ position: 'relative', overflow: 'hidden' }}>
      <Box
        component="video"
        autoPlay
        muted
        loop
        playsInline
        aria-hidden="true"
        src="/background_homepage.mp4"
        sx={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          filter: 'saturate(0.58) brightness(0.72) contrast(0.94)',
          zIndex: 0,
          pointerEvents: 'none',
        }}
      />
      <Box
        aria-hidden="true"
        sx={{
          position: 'absolute',
          inset: 0,
          zIndex: 1,
          background: 'linear-gradient(180deg, rgba(16, 19, 24, 0.48), rgba(16, 19, 24, 0.88))',
          pointerEvents: 'none',
        }}
      />
      <Box sx={{ position: 'relative', zIndex: 2 }}>
        <Hero />
        <Features />
        <HowItWorks />
      </Box>
    </Box>
  );
}

export default Home; 