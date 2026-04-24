import { Button, Paper, Stack, TextField, Typography } from '@mui/material';

export default function AccountAddressesPage() {
  return (
    <Stack spacing={2.5}>
      <Paper sx={{ p: 3, borderRadius: 3 }}>
        <Typography variant='h6' fontWeight={700} mb={2}>
          Saved addresses
        </Typography>
        <Typography variant='body2' color='text.secondary' mb={2}>
          Default shipping and billing addresses for faster checkout.
        </Typography>
        <Stack spacing={2}>
          <TextField label='Full name' fullWidth />
          <TextField label='Address line 1' fullWidth />
          <TextField label='Address line 2' fullWidth />
          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
            <TextField label='City' fullWidth />
            <TextField label='PIN code' fullWidth />
          </Stack>
          <TextField label='State' fullWidth />
          <Button variant='contained' sx={{ alignSelf: 'flex-start', textTransform: 'none' }}>
            Save address
          </Button>
        </Stack>
      </Paper>
    </Stack>
  );
}
