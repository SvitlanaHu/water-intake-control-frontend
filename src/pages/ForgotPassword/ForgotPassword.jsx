import { useDispatch, useSelector } from 'react-redux';
import { Box, Button, TextField, Typography } from '@mui/material';
import { useTheme } from '../../ThemeContext';
import { useState } from 'react';
import { sendResetEmail } from '../../redux/auth/operations';
import styles from './ForgotPassword.module.css';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const dispatch = useDispatch();
  const message = useSelector((state) => state.auth.message);
  const { theme, toggleTheme } = useTheme();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(sendResetEmail(email));
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mt: 4 }}>
      <Typography variant="h4">Forgot Password</Typography>
      <Button onClick={toggleTheme} sx={{ mb: 2 }}>
        Toggle to {theme === 'light' ? 'Dark' : 'Light'} Mode
      </Button>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem', width: '300px' }}>
        <TextField
          type="email"
          label="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <Button type="submit" variant="contained" color="primary">
          Send Reset Link
        </Button>
      </form>
      {message && <Typography>{message}</Typography>}
    </Box>
  );
};

export default ForgotPassword;
