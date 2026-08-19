import { useState, useEffect } from 'react';
import { 
  Container, 
  Typography, 
  Box,
  useTheme,
  useMediaQuery,
  Paper,
} from '@mui/material';

function HowItWorks() {
  const [activeStep, setActiveStep] = useState(0);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveStep((prev) => (prev < steps.length - 1 ? prev + 1 : 0));
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  const steps = [
    {
      label: 'Sign Up & Create Your Profile',
      description: 'Set up your account and personalize your hacker profile with your skills, past projects, and interests.',
      icon: '👤',
    },
    {
      label: 'Explore Hackathons',
      description: 'Browse and apply for hackathons that match your expertise and interests. Filter by region, category, or prize pool.',
      icon: '🔍',
    },
    {
      label: 'Find & Build Your Team',
      description: 'Use our team-matching feature to find hackers with complementary skills. Collaborate with the best minds in the industry.',
      icon: '🤝',
    },
    {
      label: 'Participate & Earn Rewards',
      description: 'Join hackathons, showcase your skills, and earn recognition through digital certificates, profile ratings, and awards.',
      icon: '🏆',
    },
  ];

  return (
    <Container 
      maxWidth={false}
      sx={{ 
        py: 8,
        px: { xs: 2, sm: 4, md: 6, lg: 8 },
        position: 'relative',
        background: 'rgba(17, 25, 40, 0.3)',
        backdropFilter: 'blur(10px)',
      }}
    >
      <Typography 
        variant="h3" 
        align="center" 
        gutterBottom
        sx={{ 
          color: '#fff',
          mb: 6,
          textShadow: '0 2px 10px rgba(255, 77, 77, 0.3)',
        }}
      >
        How It Works
      </Typography>

      <Box 
        sx={{ 
          position: 'relative',
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '40px 0',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: '50%',
            transform: 'translateX(-50%)',
            width: '4px',
            height: '100%',
            background: 'linear-gradient(180deg, #FF4D4D, #F9CB28)',
            borderRadius: '4px',
            boxShadow: '0 0 20px rgba(255, 77, 77, 0.3)',
          }
        }}
      >
        {steps.map((step, index) => (
          <Box
            key={index}
            sx={{
              display: 'flex',
              justifyContent: index % 2 === 0 ? 'flex-start' : 'flex-end',
              position: 'relative',
              marginBottom: '60px',
              width: '100%',
              opacity: activeStep >= index ? 1 : 0.3,
              transform: activeStep >= index 
                ? 'translateX(0)' 
                : `translateX(${index % 2 === 0 ? '-50px' : '50px'})`,
              transition: 'all 0.5s ease',
            }}
          >
            {/* Timeline Node */}
            <Box
              sx={{
                position: 'absolute',
                left: '50%',
                transform: 'translateX(-50%)',
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                background: activeStep >= index 
                  ? 'linear-gradient(135deg, #FF4D4D, #F9CB28)'
                  : 'rgba(255, 255, 255, 0.1)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '1.5rem',
                boxShadow: activeStep >= index 
                  ? '0 0 20px rgba(255, 77, 77, 0.3)'
                  : 'none',
                transition: 'all 0.3s ease',
                zIndex: 2,
              }}
            >
              {step.icon}
            </Box>

            {/* Content Container */}
            <Paper
              sx={{
                width: '45%',
                padding: '20px',
                borderRadius: '12px',
                background: 'rgba(255, 255, 255, 0.05)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                transition: 'all 0.3s ease',
                transform: activeStep >= index ? 'scale(1)' : 'scale(0.95)',
                '&:hover': {
                  transform: 'scale(1.02)',
                  boxShadow: '0 10px 20px rgba(255, 77, 77, 0.2)',
                },
                position: 'relative',
                '&::before': {
                  content: '""',
                  position: 'absolute',
                  top: '50%',
                  [index % 2 === 0 ? 'right' : 'left']: '-15px',
                  transform: 'translateY(-50%)',
                  borderWidth: '15px',
                  borderStyle: 'solid',
                  borderColor: `transparent ${index % 2 === 0 ? '' : '#FF4D4D'} transparent ${index % 2 === 0 ? '#FF4D4D' : ''}`,
                  opacity: activeStep >= index ? 1 : 0.3,
                },
              }}
            >
              <Typography 
                variant="h6"
                sx={{ 
                  color: '#fff',
                  mb: 1,
                  textShadow: '0 2px 4px rgba(0, 0, 0, 0.3)',
                  background: 'linear-gradient(135deg, #FF4D4D, #F9CB28)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                {step.label}
              </Typography>
              <Typography
                sx={{ 
                  color: 'rgba(255, 255, 255, 0.7)',
                }}
              >
                {step.description}
              </Typography>
            </Paper>
          </Box>
        ))}
      </Box>
    </Container>
  );
}

export default HowItWorks; 