import PlaceRoundedIcon from '@mui/icons-material/PlaceRounded';
import AccessTimeRoundedIcon from '@mui/icons-material/AccessTimeRounded';
import LocalPhoneRoundedIcon from '@mui/icons-material/LocalPhoneRounded';
import { Button, Chip, Grid, Paper, Stack, TextField, Typography } from '@mui/material';
import { useMemo, useState } from 'react';

const stores = [
  { city: 'Delhi', name: 'Aabhushanam - Select City Walk', address: 'Saket, New Delhi', phone: '+91 98989 10001' },
  { city: 'Mumbai', name: 'Aabhushanam - Phoenix Palladium', address: 'Lower Parel, Mumbai', phone: '+91 98989 10002' },
  { city: 'Bengaluru', name: 'Aabhushanam - Orion Mall', address: 'Rajajinagar, Bengaluru', phone: '+91 98989 10003' },
  {
    city: 'Hyderabad',
    name: 'Aabhushanam - Banjara Hills',
    address: 'Road No. 12, Hyderabad',
    phone: '+91 98989 10004'
  }
];

export default function StoreLocatorPage() {
  const [search, setSearch] = useState('');

  const filtered = useMemo(
    () =>
      stores.filter(
        (store) =>
          store.city.toLowerCase().includes(search.toLowerCase()) ||
          store.address.toLowerCase().includes(search.toLowerCase()) ||
          store.name.toLowerCase().includes(search.toLowerCase())
      ),
    [search]
  );

  return (
    <Stack spacing={2.5}>
      <Typography variant='h4' fontWeight={700}>
        Store Locator
      </Typography>
      <Paper sx={{ p: 2.2, borderRadius: 3 }}>
        <Stack direction={{ xs: 'column', md: 'row' }} spacing={1.5}>
          <TextField
            fullWidth
            placeholder='Search by city or area'
            value={search}
            onChange={(event) => setSearch(event.target.value)}
          />
          <Button variant='contained'>Locate me</Button>
        </Stack>
      </Paper>

      <Grid container spacing={2}>
        {filtered.map((store) => (
          <Grid key={store.name} size={{ xs: 12, md: 6 }}>
            <Paper sx={{ p: 2.5, borderRadius: 3 }}>
              <Stack spacing={1.2}>
                <Stack direction='row' justifyContent='space-between'>
                  <Typography fontWeight={700}>{store.name}</Typography>
                  <Chip label={store.city} />
                </Stack>
                <Stack direction='row' spacing={1} alignItems='center'>
                  <PlaceRoundedIcon fontSize='small' color='action' />
                  <Typography variant='body2' color='text.secondary'>
                    {store.address}
                  </Typography>
                </Stack>
                <Stack direction='row' spacing={1} alignItems='center'>
                  <AccessTimeRoundedIcon fontSize='small' color='action' />
                  <Typography variant='body2' color='text.secondary'>
                    11:00 AM - 9:30 PM (All days)
                  </Typography>
                </Stack>
                <Stack direction='row' spacing={1} alignItems='center'>
                  <LocalPhoneRoundedIcon fontSize='small' color='action' />
                  <Typography variant='body2' color='text.secondary'>
                    {store.phone}
                  </Typography>
                </Stack>
              </Stack>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Stack>
  );
}
