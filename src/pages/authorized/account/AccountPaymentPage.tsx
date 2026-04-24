import { Button, Paper, Stack, TextField, Typography } from '@mui/material';

export default function AccountPaymentPage() {
  return (
    <Stack spacing={2.5}>
      <Paper sx={{ p: 3, borderRadius: 3 }}>
        <Typography variant='h6' fontWeight={700} mb={2}>
          Payment methods
        </Typography>
        <Typography variant='body2' color='text.secondary' mb={2}>
          Add a card for quick checkout. Your full card number is never stored on our servers.
        </Typography>
        <Stack spacing={2}>
          <TextField label='Name on card' fullWidth />
          <TextField label='Card number' fullWidth placeholder='0000 0000 0000 0000' />
          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
            <TextField label='Expiry (MM/YY)' fullWidth />
            <TextField label='CVV' fullWidth type='password' />
          </Stack>
          <Button variant='contained' sx={{ alignSelf: 'flex-start', textTransform: 'none' }}>
            Save card
          </Button>
        </Stack>
      </Paper>
    </Stack>
  );
}
