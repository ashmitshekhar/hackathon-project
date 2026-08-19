import { useState } from 'react';
import { 
  Container, 
  Grid, 
  Card, 
  CardContent, 
  Typography, 
  Box, 
  Avatar, 
  Chip, 
  Button, 
  TextField,
  InputAdornment,
  IconButton,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import FilterListIcon from '@mui/icons-material/FilterList';
import MessageIcon from '@mui/icons-material/Message';
import PersonAddIcon from '@mui/icons-material/PersonAdd';

function Team() {
  const [searchTerm, setSearchTerm] = useState('');

  const students = [
    {
      id: 1,
      name: "Alex Johnson",
      avatar: "https://source.unsplash.com/random/150x150/?portrait=1",
      role: "Frontend Developer",
      skills: ["React", "TypeScript", "UI/UX"],
      experience: "3 Hackathons",
      availability: "Available",
      bio: "Passionate about creating intuitive user interfaces and seamless user experiences.",
    },
    {
      id: 2,
      name: "Sarah Chen",
      avatar: "https://source.unsplash.com/random/150x150/?portrait=2",
      role: "Backend Developer",
      skills: ["Python", "Node.js", "MongoDB"],
      experience: "5 Hackathons",
      availability: "Available",
      bio: "Full-stack developer with a focus on scalable backend solutions.",
    },
    {
      id: 3,
      name: "Raj Patel",
      avatar: "https://source.unsplash.com/random/150x150/?portrait=3",
      role: "ML Engineer",
      skills: ["TensorFlow", "PyTorch", "Computer Vision"],
      experience: "4 Hackathons",
      availability: "Available",
      bio: "Machine Learning enthusiast specializing in computer vision and deep learning architectures.",
    },
    {
      id: 4,
      name: "Emma Wilson",
      avatar: "https://source.unsplash.com/random/150x150/?portrait=4",
      role: "Cloud Architect",
      skills: ["AWS", "Docker", "Kubernetes"],
      experience: "6 Hackathons",
      availability: "Available",
      bio: "Experienced in building scalable cloud infrastructure and DevOps practices.",
    },
    {
      id: 5,
      name: "David Kim",
      avatar: "https://source.unsplash.com/random/150x150/?portrait=5",
      role: "AI Researcher",
      skills: ["NLP", "BERT", "Transformers"],
      experience: "4 Hackathons",
      availability: "Available",
      bio: "Focused on natural language processing and transformer architectures.",
    },
    {
      id: 6,
      name: "Maya Singh",
      avatar: "https://source.unsplash.com/random/150x150/?portrait=6",
      role: "Data Scientist",
      skills: ["Scikit-learn", "Pandas", "Data Visualization"],
      experience: "3 Hackathons",
      availability: "Available",
      bio: "Passionate about turning data into actionable insights and beautiful visualizations.",
    },
    {
      id: 7,
      name: "Lucas Martinez",
      avatar: "https://source.unsplash.com/random/150x150/?portrait=7",
      role: "Blockchain Developer",
      skills: ["Solidity", "Web3.js", "Smart Contracts"],
      experience: "4 Hackathons",
      availability: "Available",
      bio: "Building decentralized applications and smart contracts for Web3.",
    },
    {
      id: 8,
      name: "Sophia Anderson",
      avatar: "https://source.unsplash.com/random/150x150/?portrait=8",
      role: "UX Researcher",
      skills: ["User Research", "Figma", "Prototyping"],
      experience: "3 Hackathons",
      availability: "Available",
      bio: "Creating user-centered designs through research and iterative testing.",
    },
    {
      id: 9,
      name: "James Wilson",
      avatar: "https://source.unsplash.com/random/150x150/?portrait=9",
      role: "Security Engineer",
      skills: ["Penetration Testing", "Cryptography", "Security Protocols"],
      experience: "5 Hackathons",
      availability: "Available",
      bio: "Focused on building secure applications and identifying vulnerabilities.",
    },
    {
      id: 10,
      name: "Aisha Rahman",
      avatar: "https://source.unsplash.com/random/150x150/?portrait=10",
      role: "MLOps Engineer",
      skills: ["ML Pipeline", "CI/CD", "Model Deployment"],
      experience: "4 Hackathons",
      availability: "Available",
      bio: "Specializing in productionizing ML models and building automated pipelines.",
    },
    {
      id: 11,
      name: "Tom Chen",
      avatar: "https://source.unsplash.com/random/150x150/?portrait=11",
      role: "IoT Developer",
      skills: ["Arduino", "Raspberry Pi", "Sensors"],
      experience: "3 Hackathons",
      availability: "Available",
      bio: "Building smart solutions combining hardware and software.",
    },
    {
      id: 12,
      name: "Nina Patel",
      avatar: "https://source.unsplash.com/random/150x150/?portrait=12",
      role: "AR/VR Developer",
      skills: ["Unity", "WebXR", "3D Modeling"],
      experience: "4 Hackathons",
      availability: "Available",
      bio: "Creating immersive experiences in augmented and virtual reality.",
    }
  ];

  // Filter students based on search term
  const filteredStudents = students.filter(student => {
    const searchString = searchTerm.toLowerCase();
    return (
      student.name.toLowerCase().includes(searchString) ||
      student.role.toLowerCase().includes(searchString) ||
      student.skills.some(skill => skill.toLowerCase().includes(searchString)) ||
      student.bio.toLowerCase().includes(searchString)
    );
  });

  return (
    <Container 
      maxWidth={false}
      sx={{ 
        py: 6,
        px: { xs: 2, sm: 4, md: 6, lg: 8 },
        minHeight: '100vh',
        background: 'rgba(17, 25, 40, 0.3)',
        position: 'relative',
        overflow: 'hidden',
        // Custom scrollbar styles
        '@global': {
          '*::-webkit-scrollbar': {
            width: '8px',
            height: '8px',
          },
          '*::-webkit-scrollbar-track': {
            background: 'rgba(255, 255, 255, 0.1)',
            borderRadius: '10px',
          },
          '*::-webkit-scrollbar-thumb': {
            background: 'linear-gradient(135deg, #FF4D4D, #F9CB28)',
            borderRadius: '10px',
            '&:hover': {
              background: 'linear-gradient(135deg, #F9CB28, #FF4D4D)',
            },
          },
        },
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
          position: 'relative',
        }}
      >
        Find Your Perfect Team
      </Typography>

      {/* Search and Filter Section */}
      <Box 
        sx={{ 
          mb: 4,
          display: 'flex',
          gap: 2,
          flexWrap: 'wrap',
        }}
      >
        <TextField
          fullWidth
          variant="outlined"
          placeholder="Search by name, skills, or role..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          sx={{
            maxWidth: '600px',
            '& .MuiOutlinedInput-root': {
              backgroundColor: 'rgba(255, 255, 255, 0.05)',
              borderRadius: 2,
              color: '#fff',
              '& fieldset': {
                borderColor: 'rgba(255, 255, 255, 0.1)',
              },
              '&:hover fieldset': {
                borderColor: 'rgba(255, 77, 77, 0.5)',
              },
              '&.Mui-focused fieldset': {
                borderColor: '#FF4D4D',
              },
            },
          }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon sx={{ color: 'rgba(255, 255, 255, 0.7)' }} />
              </InputAdornment>
            ),
            endAdornment: (
              <InputAdornment position="end">
                <IconButton sx={{ color: 'rgba(255, 255, 255, 0.7)' }}>
                  <FilterListIcon />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
      </Box>

      {/* Scrollable Grid Container */}
      <Box
        sx={{
          maxHeight: 'calc(100vh - 250px)', // Adjust based on your header height
          overflow: 'auto',
          padding: '10px',
          '&::-webkit-scrollbar': {
            width: '8px',
          },
          '&::-webkit-scrollbar-track': {
            background: 'rgba(255, 255, 255, 0.1)',
            borderRadius: '10px',
          },
          '&::-webkit-scrollbar-thumb': {
            background: 'linear-gradient(135deg, #FF4D4D, #F9CB28)',
            borderRadius: '10px',
            '&:hover': {
              background: 'linear-gradient(135deg, #F9CB28, #FF4D4D)',
            },
          },
        }}
      >
        <Grid container spacing={4}>
          {filteredStudents.map((student) => (
            <Grid item key={student.id} xs={12} sm={6} md={4}>
              <Card 
                sx={{ 
                  height: '100%',
                  background: 'rgba(255, 255, 255, 0.05)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-5px)',
                    boxShadow: '0 10px 20px rgba(255, 77, 77, 0.2)',
                  },
                }}
              >
                <CardContent>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                    <Avatar 
                      src={student.avatar} 
                      sx={{ 
                        width: 80, 
                        height: 80,
                        border: '3px solid #FF4D4D',
                      }}
                    />
                    <Box sx={{ ml: 2 }}>
                      <Typography variant="h6" sx={{ color: '#fff' }}>
                        {student.name}
                      </Typography>
                      <Typography sx={{ color: '#FF4D4D' }}>
                        {student.role}
                      </Typography>
                    </Box>
                  </Box>

                  <Typography 
                    sx={{ 
                      color: 'rgba(255, 255, 255, 0.7)',
                      mb: 2,
                    }}
                  >
                    {student.bio}
                  </Typography>

                  <Box sx={{ mb: 2 }}>
                    <Typography 
                      variant="subtitle2" 
                      sx={{ 
                        color: '#fff',
                        mb: 1,
                      }}
                    >
                      Skills
                    </Typography>
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                      {student.skills.map((skill, index) => (
                        <Chip
                          key={index}
                          label={skill}
                          size="small"
                          sx={{
                            background: 'linear-gradient(135deg, #FF4D4D, #F9CB28)',
                            color: '#fff',
                          }}
                        />
                      ))}
                    </Box>
                  </Box>

                  <Box 
                    sx={{ 
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                    }}
                  >
                    <Typography 
                      variant="body2" 
                      sx={{ 
                        color: 'rgba(255, 255, 255, 0.7)',
                      }}
                    >
                      {student.experience}
                    </Typography>
                    <Box sx={{ display: 'flex', gap: 1 }}>
                      <Button
                        startIcon={<MessageIcon />}
                        sx={{
                          color: '#fff',
                          borderColor: 'rgba(255, 255, 255, 0.3)',
                          '&:hover': {
                            borderColor: '#FF4D4D',
                            background: 'rgba(255, 77, 77, 0.1)',
                          }
                        }}
                      >
                        Message
                      </Button>
                      <Button
                        variant="contained"
                        startIcon={<PersonAddIcon />}
                        sx={{
                          background: 'linear-gradient(135deg, #FF4D4D, #F9CB28)',
                          color: '#fff',
                          '&:hover': {
                            background: 'linear-gradient(135deg, #FF6B6B, #FFD93D)',
                          }
                        }}
                      >
                        Connect
                      </Button>
                    </Box>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
}

export default Team; 