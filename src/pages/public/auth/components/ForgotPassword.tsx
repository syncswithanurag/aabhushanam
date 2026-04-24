import { Button, Grid, Paper, Stack, TextField, Typography } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

export default function ForgotPassword() {
  return (
    <Grid container sx={{ minHeight: '100vh', bgcolor: '#faf7ff' }}>
      <Grid size={{ xs: 12, md: 6 }} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', p: 3 }}>
        <Paper sx={{ p: 4, width: '100%', maxWidth: 460, borderRadius: 4 }}>
          <Typography variant='h4' fontWeight={700} mb={1}>
            Reset password
          </Typography>
          <Typography color='text.secondary' mb={3}>
            Enter your email and we will send reset instructions.
          </Typography>
          <Stack spacing={2}>
            <TextField label='Email address' type='email' fullWidth />
            <Button variant='contained' size='large'>
              Send reset link
            </Button>
            <Button component={RouterLink} to='/auth/login' sx={{ textTransform: 'none' }}>
              Back to login
            </Button>
          </Stack>
        </Paper>
      </Grid>
      <Grid
        size={{ xs: 12, md: 6 }}
        sx={{
          display: { xs: 'none', md: 'flex' },
          alignItems: 'center',
          justifyContent: 'center',
          p: 4
        }}>
        <Paper
          sx={{
            width: '100%',
            height: '100%',
            minHeight: 440,
            borderRadius: 4,
            backgroundImage:
              "linear-gradient(0deg, rgba(17,24,39,0.45), rgba(17,24,39,0.25)), url('https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=1200&q=80')",
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        />
      </Grid>
    </Grid>
  );
}
