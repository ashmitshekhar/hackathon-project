import { useState, useEffect } from 'react';
import {
  Container,
  Grid,
  Card,
  CardContent,
  Typography,
  Box,
  Chip,
  Button,
  TextField,
  InputAdornment,
  IconButton,
  Avatar,
  AvatarGroup,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Rating,
  Tooltip,
  CircularProgress,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import FilterListIcon from '@mui/icons-material/FilterList';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import CodeIcon from '@mui/icons-material/Code';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import { teamApi } from '../services/api';
import { useAuth } from '../contexts/AuthContext';

function TeamFormation() {
  const { user } = useAuth();
  const [searchTerm, setSearchTerm] = useState('');
  const [members, setMembers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [createTeamOpen, setCreateTeamOpen] = useState(false);
  const [newTeam, setNewTeam] = useState({
    name: '',
    description: '',
    maxMembers: 4,
    requiredSkills: [],
  });

  // Fetch potential team members based on compatibility
  useEffect(() => {
    const fetchMembers = async () => {
      try {
        setLoading(true);
        const response = await teamApi.searchMembers(searchTerm);
        setMembers(response.data);
      } catch (error) {
        console.error('Error fetching members:', error);
      } finally {
        setLoading(false);
      }
    };

    if (searchTerm) {
      fetchMembers();
    }
  }, [searchTerm]);

  const handleCreateTeam = async () => {
    try {
      await teamApi.createTeam(newTeam);
      setCreateTeamOpen(false);
      // Refresh teams list
    } catch (error) {
      console.error('Error creating team:', error);
    }
  };

  const MemberCard = ({ member }) => (
    <Card
      sx={{
        height: '100%',
        background: 'rgba(255, 255, 255, 0.05)',
        backdropFilter: 'blur(20px)',
        borderRadius: '20px',
        border: '1px solid rgba(255, 255, 255, 0.1)',
        transition: 'all 0.3s ease',
        '&:hover': {
          transform: 'translateY(-5px)',
          boxShadow: '0 10px 30px rgba(255, 77, 77, 0.2)',
        },
      }}
    >
      <CardContent>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
          <Avatar
            src={member.avatar}
            sx={{
              width: 60,
              height: 60,
              border: '2px solid #FF4D4D',
              background: 'linear-gradient(135deg, #FF4D4D, #F9CB28)',
            }}
          />
          <Box sx={{ ml: 2 }}>
            <Typography
              variant="h6"
              sx={{
                color: '#fff',
                fontWeight: 'bold',
                background: 'linear-gradient(135deg, #FF4D4D, #F9CB28)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              {member.name}
            </Typography>
            <Typography sx={{ color: 'rgba(255, 255, 255, 0.7)' }}>
              {member.role}
            </Typography>
          </Box>
        </Box>

        <Box sx={{ mb: 2 }}>
          <Typography
            variant="subtitle2"
            sx={{ color: '#fff', mb: 1, fontWeight: 'bold' }}
          >
            Skills
          </Typography>
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
            {member.skills.map((skill, index) => (
              <Chip
                key={index}
                label={skill}
                size="small"
                sx={{
                  background: 'rgba(255, 77, 77, 0.1)',
                  color: '#fff',
                  border: '1px solid rgba(255, 77, 77, 0.3)',
                }}
              />
            ))}
          </Box>
        </Box>

        <Box sx={{ mb: 2 }}>
          <Typography
            variant="subtitle2"
            sx={{ color: '#fff', mb: 1, fontWeight: 'bold' }}
          >
            Hackathon Experience
          </Typography>
          <Rating
            value={member.experience}
            readOnly
            icon={<CodeIcon sx={{ color: '#FF4D4D' }} />}
            emptyIcon={<CodeIcon sx={{ color: 'rgba(255, 77, 77, 0.3)' }} />}
          />
        </Box>

        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Box>
            <IconButton
              component="a"
              href={member.github}
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
              href={member.linkedin}
              target="_blank"
              sx={{
                color: 'rgba(255, 255, 255, 0.7)',
                '&:hover': { color: '#fff' },
              }}
            >
              <LinkedInIcon />
            </IconButton>
          </Box>
          <Button
            variant="contained"
            startIcon={<GroupAddIcon />}
            sx={{
              background: 'linear-gradient(135deg, #FF4D4D, #F9CB28)',
              borderRadius: '10px',
              '&:hover': {
                background: 'linear-gradient(135deg, #F9CB28, #FF4D4D)',
                transform: 'translateY(-2px)',
                boxShadow: '0 5px 15px rgba(255, 77, 77, 0.3)',
              },
            }}
          >
            Invite
          </Button>
        </Box>
      </CardContent>
    </Card>
  );

  return (
    <Container maxWidth={false} sx={{ py: 6 }}>
      <Box sx={{ mb: 6 }}>
        <Typography
          variant="h3"
          sx={{
            color: '#fff',
            fontWeight: 'bold',
            mb: 2,
            textAlign: 'center',
            background: 'linear-gradient(135deg, #FF4D4D, #F9CB28)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        >
          Find Your Dream Team
        </Typography>
        <Typography
          sx={{
            color: 'rgba(255, 255, 255, 0.7)',
            textAlign: 'center',
            maxWidth: '600px',
            mx: 'auto',
          }}
        >
          Connect with like-minded developers based on skills, experience, and compatibility.
        </Typography>
      </Box>

      <Box
        sx={{
          display: 'flex',
          gap: 2,
          mb: 4,
          maxWidth: '800px',
          mx: 'auto',
        }}
      >
        <TextField
          fullWidth
          placeholder="Search by skills, experience, or interests..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon sx={{ color: '#FF4D4D' }} />
              </InputAdornment>
            ),
          }}
          sx={{
            '& .MuiOutlinedInput-root': {
              color: '#fff',
              backgroundColor: 'rgba(255, 255, 255, 0.05)',
              borderRadius: '15px',
              '& fieldset': {
                borderColor: 'rgba(255, 77, 77, 0.3)',
              },
              '&:hover fieldset': {
                borderColor: 'rgba(255, 77, 77, 0.5)',
              },
              '&.Mui-focused fieldset': {
                borderColor: '#FF4D4D',
              },
            },
          }}
        />
        <Button
          variant="contained"
          onClick={() => setCreateTeamOpen(true)}
          sx={{
            background: 'linear-gradient(135deg, #FF4D4D, #F9CB28)',
            borderRadius: '15px',
            px: 4,
            '&:hover': {
              background: 'linear-gradient(135deg, #F9CB28, #FF4D4D)',
              transform: 'translateY(-2px)',
              boxShadow: '0 5px 15px rgba(255, 77, 77, 0.3)',
            },
          }}
        >
          Create Team
        </Button>
      </Box>

      <Grid container spacing={4}>
        {loading ? (
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              width: '100%',
              mt: 4,
            }}
          >
            <CircularProgress sx={{ color: '#FF4D4D' }} />
          </Box>
        ) : (
          members.map((member) => (
            <Grid item key={member.id} xs={12} sm={6} md={4} lg={3}>
              <MemberCard member={member} />
            </Grid>
          ))
        )}
      </Grid>

      {/* Create Team Dialog */}
      <Dialog
        open={createTeamOpen}
        onClose={() => setCreateTeamOpen(false)}
        PaperProps={{
          sx: {
            background: 'rgba(17, 25, 40, 0.95)',
            backdropFilter: 'blur(20px)',
            borderRadius: '20px',
            border: '1px solid rgba(255, 255, 255, 0.1)',
          },
        }}
      >
        {/* Add Dialog content for team creation */}
      </Dialog>
    </Container>
  );
}

export default TeamFormation; 