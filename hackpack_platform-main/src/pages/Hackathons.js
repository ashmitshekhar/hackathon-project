import { useState } from 'react';
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
  Menu,
  MenuItem,
  Divider,
  CardActions,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import FilterListIcon from '@mui/icons-material/FilterList';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import GroupsIcon from '@mui/icons-material/Groups';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import HackathonMap from '../components/hackathons/HackathonMap';

function Hackathons() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterAnchorEl, setFilterAnchorEl] = useState(null);
  const [selectedFilter, setSelectedFilter] = useState('All');

  const handleFilterClick = (event) => {
    setFilterAnchorEl(event.currentTarget);
  };

  const handleFilterClose = (filter) => {
    if (typeof filter === 'string') {
      setSelectedFilter(filter);
    }
    setFilterAnchorEl(null);
  };

  const topHackathons = [
    'All',
    'CODE KSHETRA',
    'CODE CUBICLE',
    'HACK CBS',
    'HACKWITH INDIA',
    'HACK THE MOUNTAINS',
    'SYNTAX ERROR',
    'HACK THE CHAIN',
    'DEV SPRINT',
    'HACK THE SPACE',
  ];

  const hackathonData = {
    'CODE KSHETRA': [
      {
        id: 1,
        title: "CODE KSHETRA 2025",
        description: "India's Premier Student-Led Hackathon",
        problemStatement: "Build innovative solutions for sustainable smart cities",
        mode: "Hybrid",
        status: "Upcoming",
        date: "2025-03-15",
        prizePool: "₹1,00,000",
        teamSize: "2-4",
        tags: ["Smart Cities", "IoT", "Sustainability"],
        registrationOpen: true,
        theme: "Smart Cities & Sustainability",
      },
      {
        id: 2,
        title: "CODE KSHETRA WINTER 2025",
        description: "Winter Edition of India's Leading Hackathon",
        problemStatement: "Develop AI solutions for smart agriculture",
        mode: "Virtual",
        status: "Upcoming",
        date: "2025-12-10",
        prizePool: "₹1,50,000",
        teamSize: "2-4",
        tags: ["AgriTech", "AI/ML", "IoT"],
        registrationOpen: false,
        theme: "Future of Agriculture",
      },
    ],
    'CODE CUBICLE': [
      {
        id: 3,
        title: "CODE CUBICLE 4.0",
        description: "Transforming Ideas into Reality",
        problemStatement: "Develop AI-powered solutions for healthcare challenges",
        mode: "Virtual",
        status: "Open",
        date: "2025-04-20",
        prizePool: "₹75,000",
        teamSize: "3-4",
        tags: ["Healthcare", "AI/ML", "Innovation"],
        registrationOpen: true,
        theme: "Healthcare Innovation",
      },
      {
        id: 4,
        title: "CODE CUBICLE AUTUMN 2025",
        description: "Innovation in Digital Health",
        problemStatement: "Create mental health support platforms using AI",
        mode: "Hybrid",
        status: "Upcoming",
        date: "2025-09-15",
        prizePool: "₹1,00,000",
        teamSize: "2-4",
        tags: ["Mental Health", "AI/ML", "UX/UI"],
        registrationOpen: false,
        theme: "Mental Health Tech",
      },
    ],
    'HACK CBS': [
      {
        id: 5,
        title: "HACK CBS 6.0",
        description: "CBS's Flagship Hackathon",
        problemStatement: "Create fintech solutions for financial inclusion",
        mode: "In-Person",
        status: "Upcoming",
        date: "2025-05-25",
        prizePool: "₹2,00,000",
        teamSize: "4",
        tags: ["FinTech", "Blockchain", "Financial Inclusion"],
        registrationOpen: true,
        theme: "Future of Finance",
      },
      {
        id: 6,
        title: "HACK CBS WINTER 2025",
        description: "Winter Edition of CBS Hackathon",
        problemStatement: "Build DeFi solutions for mass adoption",
        mode: "Hybrid",
        status: "Upcoming",
        date: "2025-11-30",
        prizePool: "₹2,50,000",
        teamSize: "3-4",
        tags: ["DeFi", "Web3", "Crypto"],
        registrationOpen: false,
        theme: "DeFi Revolution",
      },
    ],
    'HACKWITH INDIA': [
      {
        id: 7,
        title: "HACKWITH INDIA 2025",
        description: "India's Largest Student Hackathon",
        problemStatement: "Build EdTech solutions for rural education",
        mode: "Hybrid",
        status: "Upcoming",
        date: "2025-06-10",
        prizePool: "₹1,50,000",
        teamSize: "2-4",
        tags: ["EdTech", "Rural Development", "Social Impact"],
        registrationOpen: true,
        theme: "Education for All",
      },
      {
        id: 8,
        title: "HACKWITH INDIA WINTER 2025",
        description: "Winter Edition of National Hackathon",
        problemStatement: "Create accessible learning platforms for differently-abled",
        mode: "Virtual",
        status: "Upcoming",
        date: "2025-12-05",
        prizePool: "₹2,00,000",
        teamSize: "2-4",
        tags: ["Accessibility", "EdTech", "Inclusion"],
        registrationOpen: false,
        theme: "Inclusive Education",
      },
    ],
    'HACK THE MOUNTAINS': [
      {
        id: 9,
        title: "HACK THE MOUNTAINS 5.0",
        description: "Asia's Largest Hackathon Series",
        problemStatement: "Develop solutions for climate change mitigation",
        mode: "Virtual",
        status: "Open",
        date: "2025-07-20",
        prizePool: "₹3,00,000",
        teamSize: "3-5",
        tags: ["Climate Tech", "Renewable Energy", "Sustainability"],
        registrationOpen: true,
        theme: "Climate Action",
      },
      {
        id: 10,
        title: "HACK THE MOUNTAINS WINTER 2025",
        description: "Winter Edition of Mountain Hackathon",
        problemStatement: "Create solutions for disaster management in mountainous regions",
        mode: "Hybrid",
        status: "Upcoming",
        date: "2025-10-15",
        prizePool: "₹3,50,000",
        teamSize: "3-4",
        tags: ["Disaster Tech", "IoT", "Safety"],
        registrationOpen: false,
        theme: "Mountain Safety",
      },
    ],
    'SYNTAX ERROR': [
      {
        id: 11,
        title: "SYNTAX ERROR 2025",
        description: "Debug the Future",
        problemStatement: "Create cybersecurity solutions for Web3",
        mode: "Virtual",
        status: "Upcoming",
        date: "2025-08-15",
        prizePool: "₹1,25,000",
        teamSize: "2-4",
        tags: ["Cybersecurity", "Web3", "Blockchain"],
        registrationOpen: true,
        theme: "Security in Web3",
      },
      {
        id: 12,
        title: "SYNTAX ERROR WINTER 2025",
        description: "Winter Coding Challenge",
        problemStatement: "Build zero-knowledge proof applications",
        mode: "Virtual",
        status: "Upcoming",
        date: "2025-11-20",
        prizePool: "₹1,75,000",
        teamSize: "2-3",
        tags: ["ZK-Proofs", "Privacy", "Blockchain"],
        registrationOpen: false,
        theme: "Privacy Tech",
      },
    ],
  };

  const getFilteredHackathons = () => {
    if (selectedFilter === 'All') {
      return Object.values(hackathonData).flat().filter(hackathon =>
        hackathon.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        hackathon.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        hackathon.theme.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    
    return (hackathonData[selectedFilter] || []).filter(hackathon =>
      hackathon.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      hackathon.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      hackathon.theme.toLowerCase().includes(searchTerm.toLowerCase())
    );
  };

  const filteredHackathons = getFilteredHackathons();

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
      <Typography
        variant="h3"
        sx={{
          color: '#fff',
          fontWeight: 'bold',
          mb: 4,
          textAlign: 'center',
          background: 'linear-gradient(135deg, #FF4D4D, #F9CB28)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
        }}
      >
        Current Hackathons Worldwide
      </Typography>

      {/* Enhanced Search and Filter Bar */}
      <Box 
        sx={{ 
          mb: 6,
          display: 'flex',
          gap: 2,
          flexWrap: 'wrap',
          maxWidth: '800px',
          mx: 'auto',
        }}
      >
        <TextField
          fullWidth
          variant="outlined"
          placeholder="Search hackathons by name, technology, or prize pool..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          sx={{
            '& .MuiOutlinedInput-root': {
              backgroundColor: 'rgba(255, 255, 255, 0.05)',
              borderRadius: '15px',
              color: '#fff',
              height: '56px',
              transition: 'all 0.3s ease',
              '& fieldset': {
                borderColor: 'rgba(255, 77, 77, 0.3)',
                borderWidth: '2px',
              },
              '&:hover fieldset': {
                borderColor: 'rgba(255, 77, 77, 0.5)',
              },
              '&.Mui-focused fieldset': {
                borderColor: '#FF4D4D',
                borderWidth: '2px',
              },
              '&:hover': {
                transform: 'translateY(-2px)',
                boxShadow: '0 5px 15px rgba(255, 77, 77, 0.2)',
              },
            },
            '& .MuiInputBase-input::placeholder': {
              color: 'rgba(255, 255, 255, 0.5)',
            },
          }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon sx={{ 
                  color: '#FF4D4D',
                  fontSize: '28px',
                  marginRight: '10px',
                }} />
              </InputAdornment>
            ),
            endAdornment: (
              <InputAdornment position="end">
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  {selectedFilter !== 'All' && (
                    <Chip
                      label={selectedFilter}
                      onDelete={() => handleFilterClose('All')}
                      sx={{
                        background: 'linear-gradient(135deg, #FF4D4D, #F9CB28)',
                        color: '#fff',
                        '& .MuiChip-deleteIcon': {
                          color: '#fff',
                        },
                      }}
                    />
                  )}
                  <IconButton 
                    onClick={handleFilterClick}
                    sx={{ 
                      color: '#FF4D4D',
                      '&:hover': {
                        background: 'rgba(255, 77, 77, 0.1)',
                      },
                    }}
                  >
                    <FilterListIcon />
                  </IconButton>
                </Box>
              </InputAdornment>
            ),
          }}
        />

        {/* Filter Menu */}
        <Menu
          anchorEl={filterAnchorEl}
          open={Boolean(filterAnchorEl)}
          onClose={() => handleFilterClose()}
          PaperProps={{
            sx: {
              mt: 1.5,
              background: 'rgba(17, 25, 40, 0.95)',
              backdropFilter: 'blur(20px)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              borderRadius: '12px',
              boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2)',
              '& .MuiMenuItem-root': {
                color: '#fff',
                transition: 'all 0.2s ease',
                '&:hover': {
                  background: 'rgba(255, 77, 77, 0.1)',
                },
              },
            },
          }}
        >
          <Typography
            sx={{
              px: 2,
              py: 1,
              color: '#fff',
              fontWeight: 'bold',
              background: 'linear-gradient(135deg, #FF4D4D, #F9CB28)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            Top Hackathons
          </Typography>
          <Divider sx={{ borderColor: 'rgba(255, 255, 255, 0.1)' }} />
          {topHackathons.map((filter) => (
            <MenuItem
              key={filter}
              onClick={() => handleFilterClose(filter)}
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 1,
                px: 2,
                py: 1.5,
                position: 'relative',
                '&::before': {
                  content: '""',
                  position: 'absolute',
                  left: 0,
                  width: '3px',
                  height: '0%',
                  background: 'linear-gradient(135deg, #FF4D4D, #F9CB28)',
                  transition: 'height 0.2s ease',
                },
                '&:hover::before': {
                  height: '100%',
                },
              }}
            >
              {filter}
              {selectedFilter === filter && (
                <Box
                  sx={{
                    ml: 'auto',
                    width: 8,
                    height: 8,
                    borderRadius: '50%',
                    background: 'linear-gradient(135deg, #FF4D4D, #F9CB28)',
                  }}
                />
              )}
            </MenuItem>
          ))}
        </Menu>
      </Box>

      {/* Map Component */}
      <HackathonMap />

      {/* Hackathons Grid */}
      <Grid container spacing={4}>
        {filteredHackathons.map((hackathon) => (
          <Grid item key={hackathon.id} xs={12} sm={6} md={4}>
            <Card
              sx={{
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                background: 'rgba(255, 255, 255, 0.05)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                borderRadius: '20px',
                transition: 'all 0.3s ease',
                '&:hover': {
                  transform: 'translateY(-10px)',
                  boxShadow: '0 20px 40px rgba(255, 77, 77, 0.2)',
                },
              }}
            >
              <CardContent sx={{ flexGrow: 1, pt: 3 }}>
                {/* Theme Badge */}
                <Chip
                  label={hackathon.theme}
                  sx={{
                    mb: 2,
                    background: 'linear-gradient(135deg, #FF4D4D, #F9CB28)',
                    color: '#fff',
                    fontWeight: 'bold',
                  }}
                />

                <Typography 
                  variant="h5" 
                  gutterBottom
                  sx={{
                    color: '#fff',
                    fontWeight: 'bold',
                    background: 'linear-gradient(135deg, #FF4D4D, #F9CB28)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                  }}
                >
                  {hackathon.title}
                </Typography>

                <Typography 
                  sx={{ 
                    color: 'rgba(255, 255, 255, 0.7)',
                    mb: 2,
                  }}
                >
                  {hackathon.description}
                </Typography>

                {/* Problem Statement Section */}
                <Box
                  sx={{
                    mb: 3,
                    p: 2,
                    background: 'rgba(255, 77, 77, 0.1)',
                    borderRadius: '10px',
                    border: '1px solid rgba(255, 77, 77, 0.2)',
                  }}
                >
                  <Typography
                    variant="subtitle2"
                    sx={{
                      color: '#FF4D4D',
                      fontWeight: 'bold',
                      mb: 1,
                    }}
                  >
                    Problem Statement
                  </Typography>
                  <Typography sx={{ color: '#fff' }}>
                    {hackathon.problemStatement}
                  </Typography>
                </Box>

                <Box sx={{ display: 'flex', gap: 2, mb: 2 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <CalendarTodayIcon sx={{ color: '#FF4D4D' }} />
                    <Typography sx={{ color: '#fff' }}>
                      {hackathon.date}
                    </Typography>
                  </Box>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <GroupsIcon sx={{ color: '#FF4D4D' }} />
                    <Typography sx={{ color: '#fff' }}>
                      {hackathon.teamSize}
                    </Typography>
                  </Box>
                </Box>

                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 2 }}>
                  {hackathon.tags.map((tag, index) => (
                    <Chip
                      key={index}
                      label={tag}
                      size="small"
                      sx={{
                        background: 'rgba(255, 77, 77, 0.1)',
                        color: '#fff',
                        border: '1px solid rgba(255, 77, 77, 0.3)',
                      }}
                    />
                  ))}
                </Box>

                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <EmojiEventsIcon sx={{ color: '#F9CB28' }} />
                  <Typography 
                    sx={{ 
                      color: '#F9CB28',
                      fontWeight: 'bold',
                    }}
                  >
                    Prize Pool: {hackathon.prizePool}
                  </Typography>
                </Box>
              </CardContent>

              <CardActions sx={{ p: 2 }}>
                <Button
                  fullWidth
                  variant="contained"
                  disabled={!hackathon.registrationOpen}
                  sx={{
                    background: 'linear-gradient(135deg, #FF4D4D, #F9CB28)',
                    color: '#fff',
                    borderRadius: '10px',
                    py: 1.5,
                    fontWeight: 600,
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      background: 'linear-gradient(135deg, #F9CB28, #FF4D4D)',
                      transform: 'scale(1.02)',
                      boxShadow: '0 10px 20px rgba(255, 77, 77, 0.3)',
                    },
                  }}
                >
                  {hackathon.registrationOpen ? 'Register Now' : 'Coming Soon'}
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default Hackathons; 