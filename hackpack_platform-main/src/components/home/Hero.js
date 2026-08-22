import { useState, useEffect } from 'react';
import { Box, Container, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import GroupIcon from '@mui/icons-material/Group';

function Hero() {
  const [subText, setSubText] = useState('');
  const fullText = 'Start Your Hackathon Journey Today!';
  const fullSubText = 'Your Ultimate Hackathon Companion - Connect with innovators, join exciting hackathons, and showcase your skills!';

  // Keep the subtitle typewriter effect independent from the static heading.
  useEffect(() => {
    let subIndex = 0;
    const subTypingInterval = setInterval(() => {
      if (subIndex <= fullSubText.length) {
        setSubText(fullSubText.slice(0, subIndex));
        subIndex++;
      } else {
        clearInterval(subTypingInterval);
      }
    }, 20);

    return () => clearInterval(subTypingInterval);
  }, []);

  return (
    <Box
      sx={{
        position: 'relative',
        minHeight: '100vh',
        width: '100vw',
        overflow: 'hidden',
      }}
    >
      <Container
        maxWidth={false}
        sx={{
          position: 'relative',
          zIndex: 2,
          height: '100vh',
          width: '100%',
          px: { xs: 2, sm: 4, md: 6, lg: 8 },
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center',
        }}
      >
        <Box
          sx={{
            position: 'relative',
            width: '100%',
            mb: 4,
            textAlign: 'center',
          }}
        >
          <Typography
            variant="h1"
            sx={{
              fontSize: { xs: '2.5rem', md: '4.5rem' },
              fontWeight: 800,
              position: 'relative',
              display: 'inline-block',
              background: 'linear-gradient(135deg, #b8cede, #8eabc3 58%, #5f7f9b)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              textShadow: '0 0 30px rgba(142, 171, 195, 0.24)',
              animation: 'heroPop 0.7s cubic-bezier(0.22, 1, 0.36, 1) both',
              '@keyframes heroPop': {
                '0%': { opacity: 0, transform: 'scale(0.92) translateY(12px)' },
                '100%': { opacity: 1, transform: 'scale(1) translateY(0)' },
              },
            }}
          >
            {fullText}
          </Typography>
        </Box>

        <Box
          sx={{
            maxWidth: '800px',
            position: 'relative',
            mb: 6,
            opacity: 1,
            transition: 'opacity 0.5s ease',
          }}
        >
          <Typography
            variant="h4"
            sx={{
              fontSize: { xs: '1.2rem', md: '1.5rem' },
              color: 'rgba(255, 255, 255, 0.9)',
              position: 'relative',
              '&::after': {
                content: '""',
                position: 'absolute',
                bottom: -10,
                left: '50%',
                transform: 'translateX(-50%)',
                width: '60%',
                height: '2px',
                background: 'linear-gradient(90deg, transparent, #8eabc3, transparent)',
              },
            }}
          >
            {subText}
            <Box
              component="span"
              sx={{
                opacity: subText.length < fullSubText.length ? 1 : 0,
                animation: 'blink 1s step-end infinite',
                color: '#8eabc3',
              }}
            >
              |
            </Box>
          </Typography>
        </Box>

        {/* 3D Buttons */}
        <Box
          sx={{
            display: 'flex',
            gap: 3,
            mt: 4,
            opacity: subText.length === fullSubText.length ? 1 : 0,
            transform: subText.length === fullSubText.length ? 'translateY(0)' : 'translateY(20px)',
            transition: 'all 0.5s ease',
          }}
        >
          <Button
            component={Link}
            to="/hackathons"
            variant="contained"
            endIcon={<ArrowForwardIcon />}
            sx={{
              background: 'linear-gradient(135deg, #5f7f9b, #8eabc3)',
              color: '#fff',
              padding: '12px 24px',
              fontSize: '1.1rem',
              fontWeight: 600,
              borderRadius: '12px',
              transform: 'perspective(1000px) rotateX(0deg)',
              transition: 'all 0.3s ease',
              position: 'relative',
              overflow: 'hidden',
              '&::before': {
                content: '""',
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                background: 'linear-gradient(135deg, rgba(255,255,255,0.2), rgba(255,255,255,0))',
                transition: 'transform 0.5s ease',
                transformOrigin: 'left',
                transform: 'scaleX(0)',
              },
              '&:hover': {
                transform: 'perspective(1000px) rotateX(10deg) translateY(-5px)',
                boxShadow: '0 20px 30px rgba(196, 119, 92, 0.28)',
                '&::before': {
                  transform: 'scaleX(1)',
                },
              },
              '&:active': {
                transform: 'perspective(1000px) rotateX(0deg) translateY(0)',
              },
            }}
          >
            Join Hackathons
          </Button>

          <Button
            component={Link}
            to="/team"
            variant="outlined"
            startIcon={<GroupIcon />}
            sx={{
              borderColor: 'rgba(184, 206, 222, 0.72)',
              borderWidth: 2,
              color: '#fff',
              padding: '12px 24px',
              fontSize: '1.1rem',
              fontWeight: 600,
              borderRadius: '12px',
              background: 'rgba(31, 35, 42, 0.42)',
              backdropFilter: 'blur(16px)',
              transform: 'perspective(1000px) rotateX(0deg)',
              transition: 'all 0.3s ease',
              '&:hover': {
                borderColor: '#b8cede',
                background: 'rgba(214, 166, 107, 0.14)',
                transform: 'perspective(1000px) rotateX(10deg) translateY(-5px)',
                boxShadow: '0 20px 30px rgba(214, 166, 107, 0.18)',
              },
              '&:active': {
                transform: 'perspective(1000px) rotateX(0deg) translateY(0)',
              },
            }}
          >
            Find Team
          </Button>
        </Box>
      </Container>
    </Box>
  );
}

export default Hero; 