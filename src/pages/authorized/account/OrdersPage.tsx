import { Button, Chip, Paper, Stack, Typography } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { mockOrders } from '../../../data/orders';

export default function OrdersPage() {
  return (
    <Stack spacing={2.5}>
      <Typography variant='h6' fontWeight={700}>
        My orders
      </Typography>
      <Typography variant='body2' color='text.secondary'>
        View order details, tracking, and invoices.
      </Typography>
      {mockOrders.map((order) => (
        <Paper key={order.id} sx={{ p: 2.5, borderRadius: 3 }}>
          <Stack direction={{ xs: 'column', md: 'row' }} justifyContent='space-between' spacing={1.5}>
            <Stack spacing={0.5}>
              <Typography fontWeight={700}>{order.item}</Typography>
              <Typography variant='body2' color='text.secondary'>
                {order.id} • {order.date}
              </Typography>
              <Typography variant='body2'>Rs. {order.amount.toLocaleString()}</Typography>
            </Stack>
            <Stack direction='row' spacing={1} alignItems='center' flexWrap='wrap'>
              <Chip color={order.status === 'Delivered' ? 'success' : 'warning'} label={order.status} />
              <Button
                component={RouterLink}
                to={`/account/orders/${order.id}`}
                variant='contained'
                sx={{ textTransform: 'none' }}>
                View details
              </Button>
              <Button component={RouterLink} to='/store-locator' sx={{ textTransform: 'none' }}>
                Help
              </Button>
            </Stack>
          </Stack>
        </Paper>
      ))}
    </Stack>
  );
}
