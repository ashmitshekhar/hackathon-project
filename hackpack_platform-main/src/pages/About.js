import { Container, Typography, Paper, Box } from '@mui/material';

function About() {
  return (
    <Container maxWidth="md">
      <Paper elevation={3} sx={{ p: 4 }}>
        <Typography variant="h3" gutterBottom align="center">
          About Hackathon Hub
        </Typography>
        
        <Typography variant="body1" paragraph>
          At Hackathon Hub, we believe in the power of collaboration and innovation. Our mission is to provide 
          a seamless platform where hackathon enthusiasts can explore, connect, and grow.
        </Typography>

        <Box sx={{ my: 4 }}>
          <Typography variant="h5" gutterBottom>
            Our Mission
          </Typography>
          <Typography variant="body1" paragraph>
            We aim to create a vibrant community where developers, designers, and innovators can come together 
            to solve real-world problems through hackathons. Whether you're a beginner or an experienced hacker, 
            we have something for everyone!
          </Typography>
        </Box>

        <Box sx={{ my: 4 }}>
          <Typography variant="h5" gutterBottom>
            What Sets Us Apart
          </Typography>
          <Typography variant="body1" paragraph>
            • Global Hackathon Listings - Stay updated with international hackathons<br />
            • Seamless Team Formation - Find teammates effortlessly and work collaboratively<br />
            • Recognition & Growth - Build a credible hacker profile with ratings and achievements<br />
            • Virtual Certification - Earn credentials that add value to your portfolio<br />
            • Career Opportunities - Connect with industry professionals and recruiters
          </Typography>
        </Box>
      </Paper>
    </Container>
  );
}

export default About; 