import { useState } from 'react';
import { Alert, Box, Button, Container, Paper, TextField, Typography } from '@mui/material';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';

function Login() {
	const { login } = useAuth();
	const navigate = useNavigate();
	const location = useLocation();
	const [form, setForm] = useState({ email: '', password: '' });
	const [error, setError] = useState('');
	const [busy, setBusy] = useState(false);

	const submit = async (event) => {
		event.preventDefault();
		setError('');
		setBusy(true);
		try {
			await login(form);
			navigate(location.state?.from?.pathname || '/profile', { replace: true });
		} catch (err) {
			setError(err.message);
		} finally {
			setBusy(false);
		}
	};

	return <Container maxWidth="sm" sx={{ py: 8 }}><Paper component="form" onSubmit={submit} sx={{ p: { xs: 3, sm: 5 }, background: 'rgba(17,25,40,.85)', color: '#fff' }}>
		<Typography variant="h4" sx={{ mb: 1, fontWeight: 800 }}>Welcome back</Typography>
		<Typography sx={{ mb: 3, color: 'rgba(255,255,255,.7)' }}>Sign in to find your next build partner.</Typography>
		{error && <Alert severity="error" sx={{ mb: 2 }}>{error}</Alert>}
		<TextField label="Email" type="email" required fullWidth margin="normal" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
		<TextField label="Password" type="password" required fullWidth margin="normal" value={form.password} onChange={(e) => setForm({ ...form, password: e.target.value })} />
		<Button type="submit" fullWidth variant="contained" disabled={busy} sx={{ mt: 3, py: 1.4, background: 'linear-gradient(135deg,#FF4D4D,#F9CB28)' }}>{busy ? 'Signing in...' : 'Sign in'}</Button>
		<Box sx={{ mt: 3, textAlign: 'center' }}><Typography component="span" sx={{ color: 'rgba(255,255,255,.7)' }}>New to HackPack? </Typography><Link to="/signup">Create an account</Link></Box>
	</Paper></Container>;
}

export default Login;
 