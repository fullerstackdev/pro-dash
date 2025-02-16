import React, { useState } from 'react';
import { Box, Typography, TextField, Button } from '@mui/material';
import { useAuth } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';

function Register() {
  const { register, loading, isAuthenticated } = useAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirm, setConfirm] = useState('');

  if (isAuthenticated) {
    navigate('/student/dashboard');
    return null;
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    if (password !== confirm) {
      alert('Passwords do not match');
      return;
    }
    await register(email, password);
    navigate('/student/dashboard');
  }

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ width: 300, mx: 'auto', mt: 5 }}>
      <Typography variant="h4" textAlign="center" mb={2}>
        Register
      </Typography>
      <TextField
        label="Email"
        type="email"
        fullWidth
        margin="normal"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <TextField
        label="Password"
        type="password"
        fullWidth
        margin="normal"
        required
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <TextField
        label="Confirm Password"
        type="password"
        fullWidth
        margin="normal"
        required
        value={confirm}
        onChange={(e) => setConfirm(e.target.value)}
      />
      <Button type="submit" variant="contained" sx={{ mt: 2 }} disabled={loading}>
        {loading ? 'Registering...' : 'Register'}
      </Button>
    </Box>
  );
}

export default Register;
