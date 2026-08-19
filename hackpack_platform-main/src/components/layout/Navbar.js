import { AppBar, Toolbar, Typography, Button, Box, Container } from '@mui/material';
import { Link } from 'react-router-dom';
import NotificationsIcon from '@mui/icons-material/Notifications';
import Badge from '@mui/material/Badge';
import CodeIcon from '@mui/icons-material/Code';
import UserMenu from './UserMenu';

function Navbar() {
  // Example notification count - in a real app, this would come from your notification system
  const notificationCount = 3;

  return (
    <AppBar 
      position="static" 
      sx={{
        background: 'rgba(17, 25, 40, 0.95)',
        backdropFilter: 'blur(12px)',
        borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
        boxShadow: 'none',
        width: '100vw',
      }}
    >
      <Container 
        maxWidth={false}
        sx={{
          px: { xs: 2, sm: 4, md: 6, lg: 8 },
        }}
      >
        <Toolbar sx={{ px: { xs: 0 } }}>
          <Box
            component={Link}
            to="/"
            sx={{
              display: 'flex',
              alignItems: 'center',
              textDecoration: 'none',
              flexGrow: 1,
              gap: 1,
              '&:hover .logo-icon': {
                transform: 'rotateY(180deg)',
                background: 'linear-gradient(135deg, #FF4D4D, #F9CB28)',
              },
              '&:hover .logo-text': {
                backgroundSize: '200% 200%',
              }
            }}
          >
            <Box
              className="logo-icon"
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: 40,
                height: 40,
                background: 'linear-gradient(135deg, #FF4D4D, #F9CB28)',
                borderRadius: '12px',
                transform: 'perspective(1000px) rotateY(0deg)',
                transition: 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
                boxShadow: '0 4px 20px rgba(255, 77, 77, 0.2)',
                position: 'relative',
                overflow: 'hidden',
                '&::before': {
                  content: '""',
                  position: 'absolute',
                  top: 0,
                  left: -100,
                  width: '200%',
                  height: '100%',
                  background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent)',
                  transition: 'all 0.6s ease',
                }
              }}
            >
              <CodeIcon 
                sx={{ 
                  fontSize: 24,
                  color: '#fff',
                  filter: 'drop-shadow(0 2px 4px rgba(0, 0, 0, 0.3))',
                }} 
              />
            </Box>
            <Typography 
              variant="h6" 
              className="logo-text"
              sx={{ 
                fontWeight: 800,
                letterSpacing: '0.5px',
                background: 'linear-gradient(135deg, #FF4D4D, #F9CB28)',
                backgroundClip: 'text',
                textFillColor: 'transparent',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                transition: 'all 0.3s ease',
                fontSize: '1.5rem',
                textShadow: '0 2px 10px rgba(255, 77, 77, 0.3)',
              }}
            >
              HackPack
            </Typography>
          </Box>
          <Box sx={{ 
            display: 'flex', 
            gap: 2,
            alignItems: 'center',
            '& .MuiButton-root': {
              borderRadius: '12px',
              px: 2,
              py: 1,
              transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
              textTransform: 'none',
              fontWeight: 500,
              color: '#fff',
              fontSize: '0.95rem',
              '&:hover': {
                transform: 'translateY(-2px)',
                background: 'rgba(255, 255, 255, 0.1)',
                boxShadow: '0 4px 20px rgba(255, 77, 77, 0.15)',
              }
            }
          }}>
            <Button 
              component={Link} 
              to="/"
              sx={{ 
                position: 'relative',
                overflow: 'hidden',
                '&::after': {
                  content: '""',
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  width: '100%',
                  height: '2px',
                  background: 'linear-gradient(90deg, #FF4D4D, #F9CB28)',
                  transform: 'scaleX(0)',
                  transformOrigin: 'right',
                  transition: 'transform 0.3s ease',
                },
                '&:hover::after': {
                  transform: 'scaleX(1)',
                  transformOrigin: 'left',
                }
              }}
            >
              Home
            </Button>
            <Button component={Link} to="/team">Team</Button>
            
            <Badge 
              badgeContent={notificationCount} 
              sx={{
                '& .MuiBadge-badge': {
                  background: 'linear-gradient(135deg, #FF4D4D, #F9CB28)',
                  color: '#fff',
                }
              }}
            >
              <NotificationsIcon 
                sx={{ 
                  fontSize: 24,
                  color: '#fff',
                  cursor: 'pointer',
                  '&:hover': {
                    transform: 'translateY(-2px)',
                    filter: 'drop-shadow(0 4px 10px rgba(255, 77, 77, 0.3))',
                  },
                  transition: 'all 0.3s ease',
                }} 
              />
            </Badge>

            <UserMenu />
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Navbar; 