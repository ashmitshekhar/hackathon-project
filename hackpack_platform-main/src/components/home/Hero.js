import { useState, useEffect } from 'react';
import { Box, Container, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import GroupIcon from '@mui/icons-material/Group';

function Hero() {
  const [text, setText] = useState('');
  const [subText, setSubText] = useState('');
  const fullText = 'Hackathon Hub';
  const fullSubText = 'Your Ultimate Hackathon Companion - Connect with innovators, join exciting hackathons, and showcase your skills!';
  const [showCursor, setShowCursor] = useState(true);

  // Typewriter effect for main heading - simplified animation
  useEffect(() => {
    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(typingInterval);
        // Start subtitle animation after main heading
        let subIndex = 0;
        const subTypingInterval = setInterval(() => {
          if (subIndex <= fullSubText.length) {
            setSubText(fullSubText.slice(0, subIndex));
            subIndex++;
          } else {
            clearInterval(subTypingInterval);
          }
        }, 50);
      }
    }, 150);

    return () => clearInterval(typingInterval);
  }, []);

  // Cursor blinking effect
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);

    return () => clearInterval(cursorInterval);
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
            mb: 4,
            '&::before': {
              content: '""',
              position: 'absolute',
              top: -20,
              left: -20,
              right: -20,
              bottom: -20,
              background: 'radial-gradient(circle, rgba(255, 77, 77, 0.1) 0%, transparent 70%)',
              animation: 'pulse 2s ease-in-out infinite',
              '@keyframes pulse': {
                '0%, 100%': { transform: 'scale(1)' },
                '50%': { transform: 'scale(1.1)' },
              },
            },
          }}
        >
          <Typography
            variant="h1"
            sx={{
              fontSize: { xs: '2.5rem', md: '4.5rem' },
              fontWeight: 800,
              position: 'relative',
              display: 'inline-block',
              background: 'linear-gradient(135deg, #FF4D4D, #F9CB28)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              textShadow: '0 0 30px rgba(255, 77, 77, 0.3)',
              opacity: text.length > 0 ? 1 : 0,
              transition: 'opacity 0.5s ease',
              '&::after': {
                content: showCursor ? '"│"' : '""',
                color: '#FF4D4D',
                marginLeft: '5px',
                animation: 'blink 1s step-end infinite',
              },
              '@keyframes blink': {
                '50%': { opacity: 0 },
              },
            }}
          >
            {text}
          </Typography>
        </Box>

        <Box
          sx={{
            maxWidth: '800px',
            position: 'relative',
            mb: 6,
            opacity: text.length === fullText.length ? 1 : 0,
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
                background: 'linear-gradient(90deg, transparent, #FF4D4D, transparent)',
              },
            }}
          >
            {subText}
            <Box
              component="span"
              sx={{
                opacity: subText.length < fullSubText.length ? 1 : 0,
                animation: 'blink 1s step-end infinite',
                color: '#FF4D4D',
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
              background: 'linear-gradient(135deg, #FF4D4D, #F9CB28)',
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
                boxShadow: '0 20px 30px rgba(255, 77, 77, 0.3)',
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
              borderColor: '#FF4D4D',
              borderWidth: 2,
              color: '#fff',
              padding: '12px 24px',
              fontSize: '1.1rem',
              fontWeight: 600,
              borderRadius: '12px',
              background: 'rgba(255, 77, 77, 0.1)',
              backdropFilter: 'blur(10px)',
              transform: 'perspective(1000px) rotateX(0deg)',
              transition: 'all 0.3s ease',
              '&:hover': {
                borderColor: '#F9CB28',
                background: 'rgba(255, 77, 77, 0.2)',
                transform: 'perspective(1000px) rotateX(10deg) translateY(-5px)',
                boxShadow: '0 20px 30px rgba(255, 77, 77, 0.2)',
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