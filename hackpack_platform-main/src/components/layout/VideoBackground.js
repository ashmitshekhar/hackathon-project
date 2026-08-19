import { Box } from '@mui/material';

function VideoBackground() {
  return (
    <Box
      sx={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: -1,
        background: 'linear-gradient(135deg, rgba(17, 25, 40, 0.95), rgba(17, 25, 40, 0.85))',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: `
            radial-gradient(circle at 20% 20%, rgba(255, 77, 77, 0.1) 0%, transparent 40%),
            radial-gradient(circle at 80% 80%, rgba(249, 203, 40, 0.1) 0%, transparent 40%)
          `,
        },
      }}
    />
  );
}

export default VideoBackground; 