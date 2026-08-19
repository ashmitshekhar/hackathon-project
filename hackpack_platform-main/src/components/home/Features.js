import { Container, Grid, Card, CardContent, Typography, Box } from '@mui/material';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import GroupIcon from '@mui/icons-material/Group';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import StarIcon from '@mui/icons-material/Star';
import { useState } from 'react';
import FolderIcon from '@mui/icons-material/Folder';
import GroupsIcon from '@mui/icons-material/Groups';
import ConnectWithoutContactIcon from '@mui/icons-material/ConnectWithoutContact';

function Features() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const features = [
    {
      title: "Projects",
      description: "Showcase your hackathon projects with live demos and source code. Build your portfolio and share your innovations with the community.",
      icon: <FolderIcon sx={{ fontSize: 40 }} />,
      gradient: "linear-gradient(135deg, #FF4D4D 0%, #F9CB28 100%)",
    },
    {
      title: "Team Formation",
      description: "Find the perfect teammates based on skills, interests, and experience. Build diverse teams for maximum innovation potential.",
      icon: <GroupsIcon sx={{ fontSize: 40 }} />,
      gradient: "linear-gradient(135deg, #F9CB28 0%, #FF4D4D 100%)",
    },
    {
      title: "Real-time Collaboration",
      description: "Connect and collaborate with your team in real-time. Share ideas, code, and resources seamlessly.",
      icon: <ConnectWithoutContactIcon sx={{ fontSize: 40 }} />,
      gradient: "linear-gradient(135deg, #FF4D4D 0%, #F9CB28 100%)",
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
      {/* Animated Background */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          opacity: 0.1,
          background: `
            repeating-linear-gradient(45deg, #FF4D4D 0px, transparent 2px),
            repeating-linear-gradient(-45deg, #F9CB28 0px, transparent 2px)
          `,
          backgroundSize: '100px 100px',
          animation: 'moveBackground 20s linear infinite',
          '@keyframes moveBackground': {
            '0%': { backgroundPosition: '0 0' },
            '100%': { backgroundPosition: '100px 100px' },
          },
        }}
      />

      <Typography 
        variant="h3" 
        align="center" 
        gutterBottom
        sx={{
          color: '#fff',
          mb: 6,
          textShadow: '0 2px 10px rgba(255, 77, 77, 0.3)',
          position: 'relative',
          '&::after': {
            content: '""',
            position: 'absolute',
            bottom: -16,
            left: '50%',
            transform: 'translateX(-50%)',
            width: '100px',
            height: '4px',
            background: 'linear-gradient(90deg, #FF4D4D, #F9CB28)',
            borderRadius: '2px',
          }
        }}
      >
        Key Features
      </Typography>

      <Grid container spacing={4} sx={{ mt: 2, perspective: '1000px' }}>
        {features.map((feature, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card 
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              sx={{ 
                height: '100%', 
                display: 'flex', 
                flexDirection: 'column',
                background: 'rgba(255, 255, 255, 0.05)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
                transform: hoveredIndex === index ? 
                  'translateZ(50px) rotateX(10deg) rotateY(10deg)' : 
                  'translateZ(0) rotateX(0) rotateY(0)',
                transformStyle: 'preserve-3d',
                '&:hover': {
                  boxShadow: `0 20px 40px rgba(255, 77, 77, 0.2),
                             inset 0 0 20px rgba(255, 77, 77, 0.1)`,
                },
                position: 'relative',
                '&::before': {
                  content: '""',
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  background: feature.gradient,
                  opacity: 0,
                  transition: 'opacity 0.3s ease',
                  borderRadius: 'inherit',
                },
                '&:hover::before': {
                  opacity: 0.1,
                },
              }}
            >
              <CardContent 
                sx={{ 
                  flexGrow: 1, 
                  textAlign: 'center',
                  position: 'relative',
                  zIndex: 1,
                }}
              >
                <Box 
                  sx={{ 
                    color: '#FF4D4D',
                    mb: 2,
                    transform: hoveredIndex === index ? 'translateZ(30px)' : 'none',
                    transition: 'transform 0.5s ease',
                    '& > svg': {
                      filter: 'drop-shadow(0 4px 8px rgba(255, 77, 77, 0.3))',
                      animation: hoveredIndex === index ? 'float 3s ease-in-out infinite' : 'none',
                      '@keyframes float': {
                        '0%, 100%': { transform: 'translateY(0)' },
                        '50%': { transform: 'translateY(-10px)' },
                      },
                    }
                  }}
                >
                  {feature.icon}
                </Box>
                <Typography 
                  gutterBottom 
                  variant="h5" 
                  component="h2"
                  sx={{ 
                    color: '#fff',
                    transform: hoveredIndex === index ? 'translateZ(20px)' : 'none',
                    transition: 'transform 0.5s ease',
                    background: feature.gradient,
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                  }}
                >
                  {feature.title}
                </Typography>
                <Typography 
                  sx={{ 
                    color: 'rgba(255, 255, 255, 0.7)',
                    transform: hoveredIndex === index ? 'translateZ(10px)' : 'none',
                    transition: 'transform 0.5s ease',
                  }}
                >
                  {feature.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default Features; 