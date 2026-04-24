import { Button, Grid, Paper, Stack, TextField, Typography } from '@mui/material';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import { setCookie } from '../../../../utils/helperFunctions';
import { CacheKeys } from '../../../../utils/cacheKeys';

export default function Signup() {
  const navigate = useNavigate();

  const handleSignup = () => {
    setCookie(CacheKeys.isAuthenticated, 'true');
    navigate('/');
  };

  return (
    <Grid container sx={{ minHeight: '100vh', bgcolor: '#faf7ff' }}>
      <Grid size={{ xs: 12, md: 6 }} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', p: 3 }}>
        <Paper sx={{ p: 4, width: '100%', maxWidth: 460, borderRadius: 4 }}>
          <Typography variant='h4' fontWeight={700} mb={1}>
            Create your account
          </Typography>
          <Typography color='text.secondary' mb={3}>
            Save your wishlist, track orders, and checkout faster.
          </Typography>
          <Stack spacing={2}>
            <TextField label='Full name' fullWidth />
            <TextField label='Email address' type='email' fullWidth />
            <TextField label='Mobile number' fullWidth />
            <TextField label='Create password' type='password' fullWidth />
            <Button variant='contained' size='large' onClick={handleSignup}>
              Sign up
            </Button>
            <Button component={RouterLink} to='/auth/login' sx={{ textTransform: 'none' }}>
              Already have an account? Login
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
              "linear-gradient(0deg, rgba(17,24,39,0.45), rgba(17,24,39,0.25)), url('https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=1200&q=80')",
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        />
      </Grid>
    </Grid>
  );
}
