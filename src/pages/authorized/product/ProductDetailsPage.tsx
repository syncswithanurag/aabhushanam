import { Box, Button, Chip, Dialog, Divider, Grid, Paper, Rating, Stack, Typography } from '@mui/material';
import FavoriteBorderRoundedIcon from '@mui/icons-material/FavoriteBorderRounded';
import ShoppingCartRoundedIcon from '@mui/icons-material/ShoppingCartRounded';
import ZoomInRoundedIcon from '@mui/icons-material/ZoomInRounded';
import { Navigate, useNavigate, useParams } from 'react-router-dom';
import { useStore } from '../../../context/StoreContext';
import ProductCard from '../../../components/store/ProductCard';
import ProductRailCarousel from '../../../components/store/ProductRailCarousel';
import { useEffect, useMemo, useState } from 'react';

export default function ProductDetailsPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { products, addToCart, toggleWishlist, recentlyViewed, markRecentlyViewed } = useStore();
  const product = products.find((item) => item.id === id);
  const productId = product?.id ?? '';
  const [activeImage, setActiveImage] = useState<string>('');
  const [zoomOpen, setZoomOpen] = useState(false);

  const gallery = [
    product?.image ?? '',
    ...products
      .filter((item) => item.id !== productId)
      .slice(0, 3)
      .map((item) => item.image)
  ].filter(Boolean);

  useEffect(() => {
    if (!product) {
      return;
    }
    setActiveImage(gallery[0] ?? product.image);
    markRecentlyViewed(product.id);
    // Mark once when product changes; avoids repeated writes on each render.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [productId]);

  const recentlyViewedProducts = useMemo(
    () =>
      recentlyViewed
        .filter((id) => id !== productId)
        .map((productId) => products.find((item) => item.id === productId))
        .filter((item): item is (typeof products)[number] => Boolean(item))
        .slice(0, 4),
    [recentlyViewed, products, productId]
  );

  const youMayAlsoLike = useMemo(
    () =>
      products
        .filter((item) => (product ? item.category === product.category : false) && item.id !== productId)
        .slice(0, 4),
    [products, product, productId]
  );

  if (!product) {
    return <Navigate to='/404' replace />;
  }

  return (
    <Stack spacing={4}>
      <Grid container spacing={4}>
        <Grid size={{ xs: 12, md: 6 }}>
          <Stack spacing={1.2}>
            <Paper
              component='img'
              src={activeImage || product.image}
              alt={product.name}
              onClick={() => setZoomOpen(true)}
              sx={{ width: '100%', borderRadius: 3, cursor: 'zoom-in' }}
            />
            <Stack direction='row' spacing={1} sx={{ overflowX: 'auto', pb: 0.5 }}>
              {gallery.map((image) => (
                <Paper
                  key={image}
                  component='img'
                  src={image}
                  alt={product.name}
                  onClick={() => setActiveImage(image)}
                  sx={{
                    width: 90,
                    height: 90,
                    borderRadius: 2,
                    cursor: 'pointer',
                    border: activeImage === image ? '2px solid #7c3aed' : '1px solid #e5e7eb'
                  }}
                />
              ))}
            </Stack>
            <Button
              startIcon={<ZoomInRoundedIcon />}
              onClick={() => setZoomOpen(true)}
              sx={{ textTransform: 'none', width: 'fit-content' }}>
              Zoom image
            </Button>
          </Stack>
        </Grid>
        <Grid size={{ xs: 12, md: 6 }}>
          <Stack spacing={2}>
            <Chip label={product.category} sx={{ width: 'fit-content' }} />
            <Typography variant='h4' fontWeight={700}>
              {product.name}
            </Typography>
            <Stack direction='row' spacing={1} alignItems='center'>
              <Rating value={product.rating} precision={0.1} readOnly />
              <Typography color='text.secondary'>({product.reviews} reviews)</Typography>
            </Stack>
            <Typography variant='h5' fontWeight={700}>
              Rs. {product.price.toLocaleString()}
            </Typography>
            <Typography variant='body2' color='success.main' fontWeight={600}>
              Inclusive of all taxes | Free insured shipping
            </Typography>
            <Paper sx={{ p: 1.4, borderRadius: 2, bgcolor: '#fff7ed' }}>
              <Typography variant='body2'>Delivery by Tuesday if ordered in next 5h 20m.</Typography>
            </Paper>
            <Typography color='text.secondary'>{product.description}</Typography>
            <Stack spacing={1}>
              {product.features.map((feature) => (
                <Typography key={feature} variant='body2'>
                  • {feature}
                </Typography>
              ))}
            </Stack>
            <Stack direction='row' spacing={2}>
              <Button
                variant='contained'
                startIcon={<ShoppingCartRoundedIcon />}
                disabled={!product.inStock}
                onClick={() => addToCart(product.id)}>
                Add to Cart
              </Button>
              <Button
                variant='outlined'
                startIcon={<FavoriteBorderRoundedIcon />}
                onClick={() => toggleWishlist(product.id)}>
                Wishlist
              </Button>
              <Button onClick={() => navigate('/products')}>Back to shop</Button>
            </Stack>
            <Divider />
            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
              <Typography variant='body2' color='text.secondary'>
                15-day easy returns
              </Typography>
              <Typography variant='body2' color='text.secondary'>
                Lifetime maintenance support
              </Typography>
              <Typography variant='body2' color='text.secondary'>
                Certificate of authenticity included
              </Typography>
            </Stack>
          </Stack>
        </Grid>
      </Grid>

      {recentlyViewedProducts.length > 0 && (
        <ProductRailCarousel
          sectionVariant='plain'
          title='Recently viewed'
          subtitle='Jump back into pieces you were considering—prices and availability update live.'
          viewAllTo='/products'>
          {recentlyViewedProducts.map((item) => (
            <Box key={item.id} sx={{ width: { xs: 268, sm: 288 } }}>
              <ProductCard product={item} variant='rail' />
            </Box>
          ))}
        </ProductRailCarousel>
      )}

      <ProductRailCarousel
        sectionVariant='similar'
        title='You may also like'
        subtitle={`Curated ${product.category.toLowerCase()} you can pair with this design—or gift together.`}
        viewAllTo='/products'>
        {youMayAlsoLike.map((item) => (
          <Box key={item.id} sx={{ width: { xs: 268, sm: 288 } }}>
            <ProductCard product={item} variant='rail' />
          </Box>
        ))}
      </ProductRailCarousel>

      <Dialog open={zoomOpen} onClose={() => setZoomOpen(false)} maxWidth='md'>
        <Paper
          component='img'
          src={activeImage || product.image}
          alt={product.name}
          sx={{ width: '100%', maxHeight: '88vh' }}
        />
      </Dialog>
    </Stack>
  );
}
