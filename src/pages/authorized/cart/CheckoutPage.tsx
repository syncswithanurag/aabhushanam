import { Button, Grid, Paper, Stack, TextField, Typography } from '@mui/material';
import { useMemo } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { useStore } from '../../../context/StoreContext';

export default function CheckoutPage() {
  const { cartItems, products, subtotal } = useStore();
  const shipping = subtotal > 3000 ? 0 : 199;
  const total = subtotal + shipping;
  const productNames = useMemo(
    () =>
      cartItems
        .map((item) => products.find((p) => p.id === item.productId)?.name)
        .filter(Boolean)
        .join(', '),
    [cartItems, products]
  );

  return (
    <Grid container spacing={3}>
      <Grid size={{ xs: 12, lg: 8 }}>
        <Paper sx={{ p: 3 }}>
          <Typography variant='h5' fontWeight={700} mb={2}>
            Checkout
          </Typography>
          <Grid container spacing={2}>
            <Grid size={{ xs: 12, md: 6 }}>
              <TextField fullWidth label='First name' />
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <TextField fullWidth label='Last name' />
            </Grid>
            <Grid size={{ xs: 12 }}>
              <TextField fullWidth label='Email address' />
            </Grid>
            <Grid size={{ xs: 12 }}>
              <TextField fullWidth label='Shipping address' />
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <TextField fullWidth label='City' />
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <TextField fullWidth label='Postal code' />
            </Grid>
            <Grid size={{ xs: 12 }}>
              <TextField fullWidth label='Card number' />
            </Grid>
          </Grid>
          <Button variant='contained' sx={{ mt: 3 }} disabled={cartItems.length === 0}>
            Place order
          </Button>
        </Paper>
      </Grid>

      <Grid size={{ xs: 12, lg: 4 }}>
        <Paper sx={{ p: 3 }}>
          <Typography variant='h6' fontWeight={700} mb={2}>
            Order Overview
          </Typography>
          <Stack spacing={1}>
            <Typography color='text.secondary'>Items: {cartItems.length}</Typography>
            <Typography color='text.secondary'>Products: {productNames || 'No products selected'}</Typography>
            <Typography color='text.secondary'>Subtotal: Rs. {subtotal.toLocaleString()}</Typography>
            <Typography color='text.secondary'>Shipping: {shipping === 0 ? 'Free' : `Rs. ${shipping}`}</Typography>
            <Typography fontWeight={700}>Total: Rs. {total.toLocaleString()}</Typography>
            <Button component={RouterLink} to='/cart' sx={{ mt: 1 }}>
              Back to cart
            </Button>
          </Stack>
        </Paper>
      </Grid>
    </Grid>
  );
}
