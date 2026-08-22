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
        background: 'linear-gradient(135deg, rgba(16, 19, 24, 0.96), rgba(31, 35, 42, 0.9))',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: `
            radial-gradient(circle at 20% 20%, rgba(196, 119, 92, 0.1) 0%, transparent 40%),
            radial-gradient(circle at 80% 80%, rgba(168, 183, 161, 0.1) 0%, transparent 40%)
          `,
        },
      }}
    />
  );
}

export default VideoBackground; 