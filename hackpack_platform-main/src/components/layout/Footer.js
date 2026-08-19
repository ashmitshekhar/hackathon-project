import { Box, Container, Typography, Link, Grid, IconButton } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';

function Footer() {
  return (
    <Box 
      component="footer" 
      sx={{ 
        background: 'rgba(17, 25, 40, 0.3)',
        backdropFilter: 'blur(10px)',
        color: '#f5f5f5',
        py: 6,
        mt: 'auto',
        position: 'relative',
        overflow: 'hidden',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '2px',
          background: 'linear-gradient(90deg, #e6b89c, #d8cfc4, #e6b89c)',
          boxShadow: '0 0 20px rgba(230, 184, 156, 0.3)',
        },
        '&::after': {
          content: '""',
          position: 'absolute',
          top: '50%',
          right: '0%',
          width: '600px',
          height: '600px',
          background: 'radial-gradient(circle, rgba(230, 184, 156, 0.1) 0%, transparent 70%)',
          transform: 'translate(50%, -50%)',
          pointerEvents: 'none',
        },
        width: '100vw',
      }}
    >
      {/* Decorative circles */}
      <Box
        sx={{
          position: 'absolute',
          top: '20%',
          left: '5%',
          width: '200px',
          height: '200px',
          background: 'radial-gradient(circle, rgba(216, 207, 196, 0.05) 0%, transparent 70%)',
          borderRadius: '50%',
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          bottom: '10%',
          right: '15%',
          width: '300px',
          height: '300px',
          background: 'radial-gradient(circle, rgba(230, 184, 156, 0.05) 0%, transparent 70%)',
          borderRadius: '50%',
        }}
      />

      <Container 
        maxWidth={false}
        sx={{
          position: 'relative',
          zIndex: 1,
          px: { xs: 2, sm: 4, md: 6, lg: 8 },
        }}
      >
        <Grid container spacing={4}>
          <Grid item xs={12} sm={4}>
            <Typography 
              variant="h6" 
              sx={{ 
                mb: 2,
                textShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)',
                fontWeight: 700,
                color: '#e6b89c',
                position: 'relative',
                '&::after': {
                  content: '""',
                  position: 'absolute',
                  bottom: -8,
                  left: 0,
                  width: '40px',
                  height: '2px',
                  background: 'linear-gradient(90deg, #e6b89c, transparent)',
                }
              }}
            >
              Contact Us
            </Typography>
            <Typography 
              sx={{ 
                mb: 1,
                display: 'flex',
                alignItems: 'center',
                gap: 1,
                color: '#f5f5f5',
                '&:hover': {
                  transform: 'translateX(8px)',
                  transition: 'transform 0.3s ease',
                  color: '#d8cfc4'
                }
              }}
            >
              Email: support@hackathonhub.com
            </Typography>
            <Typography
              sx={{
                color: '#f5f5f5',
                '&:hover': {
                  transform: 'translateX(8px)',
                  transition: 'transform 0.3s ease',
                  color: '#d8cfc4'
                }
              }}
            >
              Phone: +1 234 567 890
            </Typography>
          </Grid>
          
          <Grid item xs={12} sm={4}>
            <Typography 
              variant="h6" 
              sx={{ 
                mb: 2,
                textShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)',
                fontWeight: 700,
                color: '#e6b89c',
                position: 'relative',
                '&::after': {
                  content: '""',
                  position: 'absolute',
                  bottom: -8,
                  left: 0,
                  width: '40px',
                  height: '2px',
                  background: 'linear-gradient(90deg, #e6b89c, transparent)',
                }
              }}
            >
              Quick Links
            </Typography>
            {['Home', 'Team', 'Profile'].map((text) => (
              <Link 
                key={text}
                href={text === 'Home' ? '/' : `/${text.toLowerCase()}`}
                sx={{
                  display: 'block',
                  mb: 1,
                  color: '#f5f5f5',
                  textDecoration: 'none',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    color: '#d8cfc4',
                    transform: 'translateX(8px)',
                  }
                }}
              >
                {text}
              </Link>
            ))}
          </Grid>
          
          <Grid item xs={12} sm={4}>
            <Typography 
              variant="h6" 
              sx={{ 
                mb: 2,
                textShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)',
                fontWeight: 700,
                color: '#e6b89c',
                position: 'relative',
                '&::after': {
                  content: '""',
                  position: 'absolute',
                  bottom: -8,
                  left: 0,
                  width: '40px',
                  height: '2px',
                  background: 'linear-gradient(90deg, #e6b89c, transparent)',
                }
              }}
            >
              Follow Us
            </Typography>
            <Box sx={{ display: 'flex', gap: 2 }}>
              {[LinkedInIcon, TwitterIcon, GitHubIcon].map((Icon, index) => (
                <IconButton 
                  key={index}
                  sx={{
                    color: '#f5f5f5',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      color: '#d8cfc4',
                      transform: 'translateY(-4px)',
                      background: 'rgba(230, 184, 156, 0.1)',
                    }
                  }}
                >
                  <Icon />
                </IconButton>
              ))}
            </Box>
          </Grid>
        </Grid>
        
        <Typography 
          variant="body2" 
          align="center" 
          sx={{ 
            mt: 4,
            pt: 3,
            borderTop: '1px solid rgba(230, 184, 156, 0.15)',
            color: '#d8cfc4',
            textShadow: '1px 1px 2px rgba(0, 0, 0, 0.2)',
            background: 'linear-gradient(90deg, transparent, rgba(230, 184, 156, 0.1), transparent)',
            padding: '20px 0',
          }}
        >
          © {new Date().getFullYear()} HackPack. All rights reserved.
        </Typography>
      </Container>
    </Box>
  );
}

export default Footer; 