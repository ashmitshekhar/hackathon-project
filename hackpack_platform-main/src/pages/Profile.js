import { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Avatar,
  Grid,
  Paper,
  Button,
  Tabs,
  Tab,
  Chip,
  Divider,
  IconButton,
} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import CodeIcon from '@mui/icons-material/Code';
import GroupIcon from '@mui/icons-material/Group';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import PersonIcon from '@mui/icons-material/Person';
import SettingsIcon from '@mui/icons-material/Settings';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkIcon from '@mui/icons-material/Link';
import FolderIcon from '@mui/icons-material/Folder';

function Profile() {
  const [tabValue, setTabValue] = useState(0);

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  return (
    <Container 
      maxWidth={false}
      sx={{ 
        py: 6,
        px: { xs: 2, sm: 4, md: 6, lg: 8 },
        minHeight: '100vh',
        background: 'rgba(17, 25, 40, 0.3)',
        backdropFilter: 'blur(10px)',
      }}
    >
      {/* Profile Header */}
      <Paper
        elevation={0}
        sx={{
          p: 4,
          mb: 4,
          background: 'rgba(255, 255, 255, 0.05)',
          backdropFilter: 'blur(20px)',
          borderRadius: '20px',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <Grid container spacing={4} alignItems="center">
          <Grid item>
            <Avatar
              sx={{
                width: 120,
                height: 120,
                background: 'linear-gradient(135deg, #FF4D4D, #F9CB28)',
                border: '4px solid rgba(255, 255, 255, 0.1)',
                boxShadow: '0 8px 32px rgba(255, 77, 77, 0.2)',
              }}
            >
              <PersonIcon sx={{ fontSize: 60 }} />
            </Avatar>
          </Grid>
          <Grid item xs>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
              <Box>
                <Typography
                  variant="h4"
                  sx={{
                    color: '#fff',
                    fontWeight: 'bold',
                    mb: 1,
                    background: 'linear-gradient(135deg, #FF4D4D, #F9CB28)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                  }}
                >
                  Demo User
                </Typography>
                <Typography sx={{ color: 'rgba(255, 255, 255, 0.7)', mb: 2 }}>
                  Full Stack Developer | Hackathon Enthusiast
                </Typography>
                <Box sx={{ display: 'flex', gap: 1, mb: 2 }}>
                  <Chip
                    icon={<CodeIcon sx={{ color: '#FF4D4D !important' }} />}
                    label="10 Hackathons"
                    sx={{
                      color: '#fff',
                      background: 'rgba(255, 77, 77, 0.1)',
                      border: '1px solid rgba(255, 77, 77, 0.3)',
                    }}
                  />
                  <Chip
                    icon={<GroupIcon sx={{ color: '#F9CB28 !important' }} />}
                    label="5 Teams"
                    sx={{
                      color: '#fff',
                      background: 'rgba(249, 203, 40, 0.1)',
                      border: '1px solid rgba(249, 203, 40, 0.3)',
                    }}
                  />
                  <Chip
                    icon={<EmojiEventsIcon sx={{ color: '#FF4D4D !important' }} />}
                    label="3 Wins"
                    sx={{
                      color: '#fff',
                      background: 'rgba(255, 77, 77, 0.1)',
                      border: '1px solid rgba(255, 77, 77, 0.3)',
                    }}
                  />
                </Box>
              </Box>
              <Button
                startIcon={<EditIcon />}
                sx={{
                  color: '#fff',
                  borderRadius: '10px',
                  px: 3,
                  background: 'linear-gradient(135deg, #FF4D4D, #F9CB28)',
                  '&:hover': {
                    background: 'linear-gradient(135deg, #F9CB28, #FF4D4D)',
                    transform: 'translateY(-2px)',
                    boxShadow: '0 5px 15px rgba(255, 77, 77, 0.3)',
                  },
                }}
              >
                Edit Profile
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Paper>

      {/* Profile Tabs */}
      <Paper
        elevation={0}
        sx={{
          background: 'rgba(255, 255, 255, 0.05)',
          backdropFilter: 'blur(20px)',
          borderRadius: '20px',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          overflow: 'hidden',
        }}
      >
        <Tabs
          value={tabValue}
          onChange={handleTabChange}
          variant="fullWidth"
          sx={{
            borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
            '& .MuiTab-root': {
              color: 'rgba(255, 255, 255, 0.7)',
              py: 3,
              '&.Mui-selected': {
                color: '#fff',
              },
            },
            '& .MuiTabs-indicator': {
              background: 'linear-gradient(90deg, #FF4D4D, #F9CB28)',
              height: '3px',
            },
          }}
        >
          <Tab label="Overview" />
          <Tab label="Projects" />
          <Tab label="Teams" />
          <Tab label="Settings" icon={<SettingsIcon />} iconPosition="end" />
        </Tabs>

        <Box sx={{ p: 4 }}>
          {tabValue === 0 && (
            <Grid container spacing={4}>
              <Grid item xs={12} md={6}>
                <Typography
                  variant="h6"
                  sx={{
                    color: '#fff',
                    mb: 2,
                    fontWeight: 'bold',
                  }}
                >
                  About Me
                </Typography>
                <Typography sx={{ color: 'rgba(255, 255, 255, 0.7)', mb: 3 }}>
                  Passionate developer with expertise in full-stack development. Love participating in hackathons
                  and building innovative solutions. Always eager to learn new technologies and collaborate with
                  fellow developers.
                </Typography>
                <Typography
                  variant="h6"
                  sx={{
                    color: '#fff',
                    mb: 2,
                    fontWeight: 'bold',
                  }}
                >
                  Skills
                </Typography>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                  {['React', 'Node.js', 'Python', 'AWS', 'MongoDB', 'Docker'].map((skill) => (
                    <Chip
                      key={skill}
                      label={skill}
                      sx={{
                        color: '#fff',
                        background: 'rgba(255, 77, 77, 0.1)',
                        border: '1px solid rgba(255, 77, 77, 0.3)',
                        '&:hover': {
                          background: 'rgba(255, 77, 77, 0.2)',
                        },
                      }}
                    />
                  ))}
                </Box>
              </Grid>
              <Grid item xs={12} md={6}>
                <Typography
                  variant="h6"
                  sx={{
                    color: '#fff',
                    mb: 2,
                    fontWeight: 'bold',
                  }}
                >
                  Recent Activity
                </Typography>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                  {[
                    'Won first place in AI Innovation Hackathon',
                    'Joined Green Tech Solutions team',
                    'Completed Blockchain Builders challenge',
                  ].map((activity, index) => (
                    <Paper
                      key={index}
                      sx={{
                        p: 2,
                        background: 'rgba(255, 255, 255, 0.03)',
                        borderRadius: '10px',
                        border: '1px solid rgba(255, 255, 255, 0.05)',
                      }}
                    >
                      <Typography sx={{ color: 'rgba(255, 255, 255, 0.9)' }}>
                        {activity}
                      </Typography>
                    </Paper>
                  ))}
                </Box>
              </Grid>
            </Grid>
          )}

          {tabValue === 1 && (
            <Grid container spacing={3}>
              {[
                {
                  title: 'AI Image Generator',
                  description: 'A deep learning model that generates artistic images from text descriptions.',
                  tech: ['Python', 'TensorFlow', 'React'],
                  github: 'https://github.com/demo/ai-image-gen',
                  demo: 'https://ai-image-gen.demo.com',
                  hackathon: 'AI Innovation Challenge'
                },
                {
                  title: 'Smart Contract Wallet',
                  description: 'Secure cryptocurrency wallet with multi-signature support.',
                  tech: ['Solidity', 'Web3.js', 'Next.js'],
                  github: 'https://github.com/demo/smart-wallet',
                  demo: 'https://smart-wallet.demo.com',
                  hackathon: 'Blockchain Builders'
                },
                {
                  title: 'Green Energy Monitor',
                  description: 'IoT-based solution for monitoring renewable energy consumption.',
                  tech: ['Arduino', 'Node.js', 'MongoDB'],
                  github: 'https://github.com/demo/green-monitor',
                  demo: 'https://green-monitor.demo.com',
                  hackathon: 'Green Tech Solutions'
                }
              ].map((project, index) => (
                <Grid item xs={12} md={6} lg={4} key={index}>
                  <Paper
                    elevation={0}
                    sx={{
                      p: 3,
                      height: '100%',
                      background: 'rgba(255, 255, 255, 0.03)',
                      backdropFilter: 'blur(20px)',
                      borderRadius: '16px',
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        transform: 'translateY(-5px)',
                        boxShadow: '0 10px 30px rgba(255, 77, 77, 0.2)',
                        border: '1px solid rgba(255, 77, 77, 0.3)',
                      },
                    }}
                  >
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
                      <FolderIcon 
                        sx={{ 
                          fontSize: 40,
                          color: '#FF4D4D',
                        }} 
                      />
                      <Box sx={{ flex: 1 }} />
                      <IconButton
                        component="a"
                        href={project.github}
                        target="_blank"
                        sx={{
                          color: 'rgba(255, 255, 255, 0.7)',
                          '&:hover': { color: '#fff' },
                        }}
                      >
                        <GitHubIcon />
                      </IconButton>
                      <IconButton
                        component="a"
                        href={project.demo}
                        target="_blank"
                        sx={{
                          color: 'rgba(255, 255, 255, 0.7)',
                          '&:hover': { color: '#fff' },
                        }}
                      >
                        <LinkIcon />
                      </IconButton>
                    </Box>

                    <Typography
                      variant="h6"
                      sx={{
                        color: '#fff',
                        fontWeight: 'bold',
                        mb: 1,
                      }}
                    >
                      {project.title}
                    </Typography>

                    <Typography
                      sx={{
                        color: 'rgba(255, 255, 255, 0.7)',
                        mb: 2,
                        height: '3em',
                        overflow: 'hidden',
                        display: '-webkit-box',
                        WebkitLineClamp: 2,
                        WebkitBoxOrient: 'vertical',
                      }}
                    >
                      {project.description}
                    </Typography>

                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 2 }}>
                      {project.tech.map((tech, idx) => (
                        <Chip
                          key={idx}
                          label={tech}
                          size="small"
                          sx={{
                            color: '#fff',
                            background: 'rgba(255, 77, 77, 0.1)',
                            border: '1px solid rgba(255, 77, 77, 0.3)',
                            '&:hover': {
                              background: 'rgba(255, 77, 77, 0.2)',
                            },
                          }}
                        />
                      ))}
                    </Box>

                    <Typography
                      variant="body2"
                      sx={{
                        color: 'rgba(255, 255, 255, 0.5)',
                        fontStyle: 'italic',
                      }}
                    >
                      Built for {project.hackathon}
                    </Typography>
                  </Paper>
                </Grid>
              ))}
            </Grid>
          )}
        </Box>
      </Paper>
    </Container>
  );
}

export default Profile; 