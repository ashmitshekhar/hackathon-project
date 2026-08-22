import { useState } from 'react';
import {
  Box,
  Avatar,
  Menu,
  MenuItem,
  IconButton,
  Button,
  Divider,
  Typography,
  Fade,
} from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import PersonIcon from '@mui/icons-material/Person';
import LogoutIcon from '@mui/icons-material/Logout';
import LoginIcon from '@mui/icons-material/Login';
import HowToRegIcon from '@mui/icons-material/HowToReg';
import CloseIcon from '@mui/icons-material/Close';
import { useAuth } from '../../contexts/AuthContext';

function UserMenu() {
  const [anchorEl, setAnchorEl] = useState(null);
  const navigate = useNavigate();
  const { user, logout } = useAuth();
  
  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogin = () => {
    handleClose();
    navigate('/login');
  };

  const handleLogout = () => {
    logout();
    handleClose();
    navigate('/');
  };

  return (
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      {user ? (
        <>
          <IconButton
            onClick={handleMenu}
            sx={{
              p: 0,
              '&:hover': {
                transform: 'scale(1.1)',
                transition: 'transform 0.2s',
              },
            }}
          >
            <Avatar
              sx={{
                bgcolor: 'transparent',
                background: 'linear-gradient(135deg, #5f7f9b, #8eabc3)',
                color: '#fff',
                boxShadow: '0 4px 12px rgba(255, 77, 77, 0.3)',
                border: '2px solid transparent',
                backgroundClip: 'padding-box',
                '&:hover': {
                  transform: 'scale(1.05)',
                },
                transition: 'all 0.3s ease',
              }}
            >
              <PersonIcon />
            </Avatar>
          </IconButton>
          <Menu
            id="menu-appbar"
            anchorEl={anchorEl}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'right',
            }}
            keepMounted
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            open={Boolean(anchorEl)}
            onClose={handleClose}
            TransitionComponent={Fade}
            PaperProps={{
              sx: {
                mt: 1.5,
                background: 'rgba(17, 25, 40, 0.95)',
                backdropFilter: 'blur(20px)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                borderRadius: '16px',
                minWidth: '250px',
                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2)',
                '& .MuiMenuItem-root': {
                  color: '#fff',
                  py: 1.5,
                  transition: 'all 0.2s ease',
                },
              },
            }}
          >
            <Box sx={{ 
              px: 2, 
              py: 2,
              display: 'flex',
              alignItems: 'flex-start',
              justifyContent: 'space-between'
            }}>
              <Box>
                <Typography
                  sx={{
                    color: '#fff',
                    fontWeight: 'bold',
                    fontSize: '1.1rem',
                    background: 'linear-gradient(135deg, #5f7f9b, #8eabc3)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                  }}
                >
                  {user.name}
                </Typography>
                <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.7)' }}>
                  {user.email}
                </Typography>
              </Box>
              <IconButton
                onClick={handleClose}
                size="small"
                sx={{
                  color: 'rgba(255,255,255,0.5)',
                  transition: 'all 0.2s ease',
                  '&:hover': {
                    color: '#fff',
                    background: 'rgba(255,255,255,0.1)',
                    transform: 'rotate(90deg)',
                  },
                }}
              >
                <CloseIcon fontSize="small" />
              </IconButton>
            </Box>
            <Divider sx={{ borderColor: 'rgba(255,255,255,0.1)' }} />
            <MenuItem
              component={Link}
              to="/profile"
              onClick={handleClose}
              sx={{
                transition: 'all 0.2s ease',
                '&:hover': {
                  background: 'rgba(255,255,255,0.1)',
                  transform: 'translateX(5px)',
                },
              }}
            >
              <PersonIcon sx={{ mr: 2, color: '#b8cede' }} />
              View Profile
            </MenuItem>
            <MenuItem
              onClick={handleLogout}
              sx={{
                transition: 'all 0.2s ease',
                '&:hover': {
                  background: 'rgba(255,255,255,0.1)',
                  transform: 'translateX(5px)',
                },
              }}
            >
                    <LogoutIcon sx={{ mr: 2, color: '#b8cede' }} />
              Logout
            </MenuItem>
          </Menu>
        </>
      ) : (
        <Box sx={{ display: 'flex', gap: 2 }}>
          <Button
            startIcon={<LoginIcon />}
            onClick={handleLogin}
            sx={{
              color: '#fff',
              borderRadius: '10px',
              px: 3,
              background: 'linear-gradient(135deg, #5f7f9b, #8eabc3)',
              transition: 'all 0.3s ease',
              '&:hover': {
                background: 'linear-gradient(135deg, #8eabc3, #5f7f9b)',
                transform: 'translateY(-2px)',
                boxShadow: '0 5px 15px rgba(255, 77, 77, 0.3)',
              },
            }}
          >
            Login
          </Button>
          <Button
            startIcon={<HowToRegIcon />}
            component={Link}
            to="/signup"
            sx={{
              color: '#fff',
              borderRadius: '10px',
              px: 3,
              border: '2px solid #8eabc3',
              transition: 'all 0.3s ease',
              '&:hover': {
                borderColor: '#b8cede',
                transform: 'translateY(-2px)',
                boxShadow: '0 5px 15px rgba(255, 77, 77, 0.3)',
              },
            }}
          >
            Sign Up
          </Button>
        </Box>
      )}
    </Box>
  );
}

export default UserMenu; 