import { Box, Stack, Typography } from '@mui/material';

const trustPoints = [
  '100% handcrafted jewelry',
  'Secure checkout',
  'Easy 7-day return',
  'Premium gift-ready packaging'
];

export default function Sidebar() {
  return (
    <Box
      sx={{
        display: { xs: 'none', lg: 'block' },
        width: 260,
        borderRight: '1px solid',
        borderColor: 'divider',
        p: 3,
        bgcolor: 'grey.50'
      }}>
      <Typography variant='subtitle1' fontWeight={700} gutterBottom>
        Why shop with us?
      </Typography>
      <Stack spacing={1.5}>
        {trustPoints.map((point) => (
          <Typography key={point} variant='body2' color='text.secondary'>
            • {point}
          </Typography>
        ))}
      </Stack>
    </Box>
  );
}
