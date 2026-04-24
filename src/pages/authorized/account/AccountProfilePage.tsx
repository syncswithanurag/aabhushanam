import { Avatar, Button, Paper, Stack, TextField, Typography } from '@mui/material';

export default function AccountProfilePage() {
  return (
    <Stack spacing={2.5}>
      <Paper sx={{ p: 3, borderRadius: 3 }}>
        <Typography variant='h6' fontWeight={700} mb={2}>
          Profile details
        </Typography>
        <Stack direction='row' spacing={2} alignItems='center' mb={3}>
          <Avatar sx={{ width: 72, height: 72 }}>A</Avatar>
          <Button variant='outlined' size='small' sx={{ textTransform: 'none' }}>
            Change photo
          </Button>
        </Stack>
        <Stack spacing={2}>
          <TextField label='Full name' defaultValue='Anurag Vashist' fullWidth />
          <TextField label='Email' defaultValue='anurag@example.com' fullWidth type='email' />
          <TextField label='Mobile number' defaultValue='+91 98765 43210' fullWidth />
          <Button variant='contained' sx={{ alignSelf: 'flex-start', textTransform: 'none' }}>
            Save changes
          </Button>
        </Stack>
      </Paper>
    </Stack>
  );
}
