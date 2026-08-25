import { useEffect, useRef, useState } from 'react';
import {
  Avatar,
  Box,
  Chip,
  CircularProgress,
  Fab,
  IconButton,
  Paper,
  Stack,
  TextField,
  Tooltip,
  Typography,
} from '@mui/material';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import CloseIcon from '@mui/icons-material/Close';
import SendIcon from '@mui/icons-material/Send';
import SmartToyIcon from '@mui/icons-material/SmartToy';
import { chatApi } from '../../services/api';

const starterMessage = {
  role: 'assistant',
  content: 'Hi! I am NodeDrop AI. Ask me about finding a hackathon, forming a team, or getting your project ready.',
};

const suggestions = ['Find a hackathon', 'How do I form a team?', 'Project ideas'];

function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([starterMessage]);
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isOpen]);

  const sendMessage = async (event, suggestedMessage = '') => {
    event?.preventDefault();
    const text = (suggestedMessage || input).trim();
    if (!text || isLoading) return;

    const nextMessages = [...messages, { role: 'user', content: text }];
    setMessages(nextMessages);
    setInput('');
    setIsLoading(true);

    try {
      const response = await chatApi.send(nextMessages.slice(-10));
      setMessages((current) => [...current, { role: 'assistant', content: response.reply }]);
    } catch (error) {
      setMessages((current) => [
        ...current,
        { role: 'assistant', content: 'I could not reach the assistant right now. Please try again in a moment.' },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {isOpen && (
        <Paper
          elevation={16}
          sx={{
            position: 'fixed',
            right: { xs: 12, sm: 24 },
            bottom: { xs: 84, sm: 96 },
            width: { xs: 'calc(100vw - 24px)', sm: 380 },
            height: { xs: 'min(560px, calc(100vh - 108px))', sm: 560 },
            zIndex: 1300,
            display: 'flex',
            flexDirection: 'column',
            overflow: 'hidden',
            border: '1px solid rgba(255,255,255,0.12)',
            borderRadius: 3,
            background: 'linear-gradient(160deg, #171c2d 0%, #10131f 100%)',
            color: '#fff',
          }}
        >
          <Box sx={{ p: 2, background: 'linear-gradient(110deg, #5f7f9b, #8eabc3)', color: '#fff' }}>
            <Stack direction="row" alignItems="center" justifyContent="space-between">
              <Stack direction="row" alignItems="center" spacing={1.25}>
                <Avatar sx={{ width: 38, height: 38, bgcolor: 'rgba(17,25,40,0.7)' }}>
                  <SmartToyIcon />
                </Avatar>
                <Box>
                  <Typography fontWeight={800}>NodeDrop AI</Typography>
                  <Typography variant="caption" sx={{ opacity: 0.85 }}>Your hackathon copilot</Typography>
                </Box>
              </Stack>
              <IconButton aria-label="Close chat" onClick={() => setIsOpen(false)} sx={{ color: '#fff' }}>
                <CloseIcon />
              </IconButton>
            </Stack>
          </Box>

          <Stack spacing={1.5} sx={{ flex: 1, overflowY: 'auto', p: 2 }}>
            {messages.map((message, index) => (
              <Box
                key={`${message.role}-${index}`}
                sx={{
                  alignSelf: message.role === 'user' ? 'flex-end' : 'flex-start',
                  maxWidth: '85%',
                  px: 1.5,
                  py: 1.1,
                  borderRadius: message.role === 'user' ? '16px 16px 4px 16px' : '16px 16px 16px 4px',
                  bgcolor: message.role === 'user' ? '#5f7f9b' : 'rgba(255,255,255,0.1)',
                }}
              >
                <Typography variant="body2" sx={{ whiteSpace: 'pre-wrap', color: '#fff' }}>{message.content}</Typography>
              </Box>
            ))}
            {messages.length === 1 && (
              <Stack direction="row" flexWrap="wrap" gap={1}>
                {suggestions.map((suggestion) => (
                  <Chip
                    key={suggestion}
                    label={suggestion}
                    onClick={(event) => sendMessage(event, suggestion)}
                    variant="outlined"
                    sx={{ color: '#b8cede', borderColor: 'rgba(184,206,222,0.55)' }}
                  />
                ))}
              </Stack>
            )}
            {isLoading && <CircularProgress size={18} sx={{ color: '#b8cede', alignSelf: 'flex-start' }} />}
            <div ref={messagesEndRef} />
          </Stack>

          <Box component="form" onSubmit={sendMessage} sx={{ p: 1.5, borderTop: '1px solid rgba(255,255,255,0.1)' }}>
            <Stack direction="row" spacing={1}>
              <TextField
                fullWidth
                size="small"
                value={input}
                onChange={(event) => setInput(event.target.value)}
                placeholder="Ask NodeDrop AI..."
                inputProps={{ 'aria-label': 'Message NodeDrop AI' }}
                sx={{
                  '& .MuiOutlinedInput-root': { color: '#fff', borderRadius: 2, bgcolor: 'rgba(255,255,255,0.06)' },
                  '& fieldset': { borderColor: 'rgba(255,255,255,0.18)' },
                }}
              />
              <IconButton type="submit" aria-label="Send message" disabled={isLoading || !input.trim()} sx={{ color: '#b8cede' }}>
                <SendIcon />
              </IconButton>
            </Stack>
          </Box>
        </Paper>
      )}
      <Tooltip title={isOpen ? 'Close NodeDrop AI' : 'Open NodeDrop AI'}>
        <Fab
          color="primary"
          aria-label="Open NodeDrop AI"
          onClick={() => setIsOpen((open) => !open)}
          sx={{ position: 'fixed', right: { xs: 12, sm: 24 }, bottom: { xs: 12, sm: 24 }, zIndex: 1301, background: 'linear-gradient(135deg, #5f7f9b, #8eabc3)' }}
        >
          {isOpen ? <CloseIcon /> : <AutoAwesomeIcon />}
        </Fab>
      </Tooltip>
    </>
  );
}

export default Chatbot;