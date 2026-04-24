import { Grid, Paper, Stack, Typography } from '@mui/material';
import ProductCard from '../../../components/store/ProductCard';
import { useStore } from '../../../context/StoreContext';

export default function WishlistPage() {
  const { products, wishlist } = useStore();
  const likedProducts = products.filter((item) => wishlist.includes(item.id));

  if (likedProducts.length === 0) {
    return (
      <Paper sx={{ p: 4, textAlign: 'center' }}>
        <Typography variant='h5' fontWeight={700} mb={1}>
          Wishlist is empty
        </Typography>
        <Typography color='text.secondary'>Tap the heart icon on products to save them here.</Typography>
      </Paper>
    );
  }

  return (
    <Stack spacing={2}>
      <Typography variant='h4' fontWeight={700}>
        Your Wishlist
      </Typography>
      <Grid container spacing={2}>
        {likedProducts.map((product) => (
          <Grid key={product.id} size={{ xs: 12, sm: 6, md: 4 }}>
            <ProductCard product={product} />
          </Grid>
        ))}
      </Grid>
    </Stack>
  );
}
