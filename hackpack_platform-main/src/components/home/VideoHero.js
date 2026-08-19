import { useState, useEffect } from 'react';
import { Box, Container, Typography } from '@mui/material';

function VideoHero() {
  const [text, setText] = useState('');
  const [subText, setSubText] = useState('');
  const fullText = 'Hackathon Hub';
  const fullSubText = 'Your Ultimate Hackathon Companion - Connect with innovators, join exciting hackathons, and showcase your skills!';
  const [showCursor, setShowCursor] = useState(true);

  // Typewriter effect for main heading
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
        background: 'rgba(17, 25, 40, 0.97)',
      }}
    >
      <Container
        maxWidth={false}
        sx={{
          position: 'relative',
          zIndex: 3,
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
            opacity: text.length === fullText.length ? 1 : 0,
            transform: text.length === fullText.length ? 'translateY(0)' : 'translateY(20px)',
            transition: 'all 0.5s ease',
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
      </Container>
    </Box>
  );
}

export default VideoHero; 