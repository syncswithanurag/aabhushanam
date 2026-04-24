import { Button, Divider, IconButton, Paper, Stack, Typography } from '@mui/material';
import DeleteOutlineRoundedIcon from '@mui/icons-material/DeleteOutlineRounded';
import { Link as RouterLink } from 'react-router-dom';
import { useStore } from '../../../context/StoreContext';

export default function CartPage() {
  const { cartItems, products, removeFromCart, updateCartQuantity, subtotal } = useStore();
  const shipping = subtotal > 3000 ? 0 : 199;
  const total = subtotal + shipping;

  if (cartItems.length === 0) {
    return (
      <Paper sx={{ p: 4, textAlign: 'center' }}>
        <Typography variant='h5' fontWeight={700} mb={1}>
          Your cart is empty
        </Typography>
        <Typography color='text.secondary' mb={3}>
          Add your favorite jewelry pieces to continue.
        </Typography>
        <Button component={RouterLink} to='/products' variant='contained'>
          Browse products
        </Button>
      </Paper>
    );
  }

  return (
    <Stack direction={{ xs: 'column', lg: 'row' }} spacing={3} alignItems='flex-start'>
      <Paper sx={{ p: 3, flex: 1, width: '100%' }}>
        <Typography variant='h5' fontWeight={700} mb={2}>
          Shopping Cart
        </Typography>
        <Stack divider={<Divider />}>
          {cartItems.map((item) => {
            const product = products.find((p) => p.id === item.productId);
            if (!product) {
              return null;
            }
            return (
              <Stack key={item.productId} direction='row' spacing={2} py={2} alignItems='center'>
                <Paper
                  component='img'
                  src={product.image}
                  alt={product.name}
                  sx={{ width: 100, height: 100, objectFit: 'cover' }}
                />
                <Stack sx={{ flex: 1 }}>
                  <Typography fontWeight={600}>{product.name}</Typography>
                  <Typography color='text.secondary'>Rs. {product.price.toLocaleString()}</Typography>
                  <Stack direction='row' spacing={1} alignItems='center' mt={1}>
                    <Button
                      size='small'
                      variant='outlined'
                      onClick={() => updateCartQuantity(item.productId, item.quantity - 1)}>
                      -
                    </Button>
                    <Typography>{item.quantity}</Typography>
                    <Button
                      size='small'
                      variant='outlined'
                      onClick={() => updateCartQuantity(item.productId, item.quantity + 1)}>
                      +
                    </Button>
                  </Stack>
                </Stack>
                <IconButton onClick={() => removeFromCart(item.productId)}>
                  <DeleteOutlineRoundedIcon />
                </IconButton>
              </Stack>
            );
          })}
        </Stack>
      </Paper>

      <Paper sx={{ p: 3, width: { xs: '100%', lg: 340 } }}>
        <Typography variant='h6' fontWeight={700} mb={2}>
          Order Summary
        </Typography>
        <Stack spacing={1.2}>
          <Stack direction='row' justifyContent='space-between'>
            <Typography color='text.secondary'>Subtotal</Typography>
            <Typography>Rs. {subtotal.toLocaleString()}</Typography>
          </Stack>
          <Stack direction='row' justifyContent='space-between'>
            <Typography color='text.secondary'>Shipping</Typography>
            <Typography>{shipping === 0 ? 'Free' : `Rs. ${shipping}`}</Typography>
          </Stack>
          <Divider />
          <Stack direction='row' justifyContent='space-between'>
            <Typography fontWeight={700}>Total</Typography>
            <Typography fontWeight={700}>Rs. {total.toLocaleString()}</Typography>
          </Stack>
          <Button component={RouterLink} to='/checkout' variant='contained' size='large' sx={{ mt: 2 }}>
            Proceed to Checkout
          </Button>
        </Stack>
      </Paper>
    </Stack>
  );
}
