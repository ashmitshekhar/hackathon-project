import { Card, CardContent, CardMedia, Typography, Button, Chip, Box } from '@mui/material';
import { Link } from 'react-router-dom';

function HackathonCard({ hackathon }) {
  return (
    <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      <CardMedia
        component="img"
        height="140"
        image={hackathon.image}
        alt={hackathon.title}
      />
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography gutterBottom variant="h5" component="h2">
          {hackathon.title}
        </Typography>
        <Typography variant="body2" color="text.secondary" paragraph>
          {hackathon.description}
        </Typography>
        <Box sx={{ mb: 2 }}>
          <Chip label={hackathon.mode} color="primary" sx={{ mr: 1 }} />
          <Chip label={hackathon.status} color="secondary" />
        </Box>
        <Typography variant="body2">
          Date: {hackathon.date}
        </Typography>
        <Button
          component={Link}
          to={`/hackathons/${hackathon.id}`}
          variant="contained"
          sx={{ mt: 2 }}
          fullWidth
        >
          View Details
        </Button>
      </CardContent>
    </Card>
  );
}

export default HackathonCard; 