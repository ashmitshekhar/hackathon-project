import { useState } from 'react';
import { Alert, Box, Button, Container, Paper, TextField, Typography } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';

function SignUp() {
  const { register } = useAuth();
  const navigate = useNavigate();
  const [form, setForm] = useState({ name: '', email: '', password: '', confirmPassword: '', github: '', linkedin: '' });
  const [error, setError] = useState('');
  const [busy, setBusy] = useState(false);
  const update = (field) => (event) => setForm({ ...form, [field]: event.target.value });

  const submit = async (event) => {
    event.preventDefault();
    if (form.password !== form.confirmPassword) {
      setError('Passwords do not match');
      return;
    }
    setError('');
    setBusy(true);
    try {
      await register({ name: form.name, email: form.email, password: form.password, github: form.github, linkedin: form.linkedin });
      navigate('/profile', { replace: true });
    } catch (err) {
      setError(err.message);
    } finally {
      setBusy(false);
    }
  };

  return <Container maxWidth="sm" sx={{ py: 8 }}><Paper component="form" onSubmit={submit} sx={{ p: { xs: 3, sm: 5 }, background: 'rgba(17,25,40,.85)', color: '#fff' }}>
    <Typography variant="h4" sx={{ mb: 1, fontWeight: 800 }}>Build your profile</Typography>
    <Typography sx={{ mb: 3, color: 'rgba(255,255,255,.7)' }}>Create an account and start finding collaborators.</Typography>
    {error && <Alert severity="error" sx={{ mb: 2 }}>{error}</Alert>}
    <TextField label="Full name" required fullWidth margin="normal" value={form.name} onChange={update('name')} />
    <TextField label="Email" type="email" required fullWidth margin="normal" value={form.email} onChange={update('email')} />
    <TextField label="Password" type="password" required fullWidth margin="normal" inputProps={{ minLength: 6 }} value={form.password} onChange={update('password')} />
    <TextField label="Confirm password" type="password" required fullWidth margin="normal" value={form.confirmPassword} onChange={update('confirmPassword')} />
    <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr' }, gap: 2 }}>
      <TextField label="GitHub URL" margin="normal" value={form.github} onChange={update('github')} />
      <TextField label="LinkedIn URL" margin="normal" value={form.linkedin} onChange={update('linkedin')} />
    </Box>
    <Button type="submit" fullWidth variant="contained" disabled={busy} sx={{ mt: 3, py: 1.4, background: 'linear-gradient(135deg,#5f7f9b,#8eabc3)' }}>{busy ? 'Creating account...' : 'Create account'}</Button>
    <Box sx={{ mt: 3, textAlign: 'center' }}><Typography component="span" sx={{ color: 'rgba(255,255,255,.7)' }}>Already have an account? </Typography><Link to="/login">Sign in</Link></Box>
  </Paper></Container>;
}

export default SignUp;
