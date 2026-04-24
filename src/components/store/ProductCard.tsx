import { Box, Button, Card, CardContent, CardMedia, Chip, IconButton, Rating, Stack, Typography } from '@mui/material';
import FavoriteBorderRoundedIcon from '@mui/icons-material/FavoriteBorderRounded';
import FavoriteRoundedIcon from '@mui/icons-material/FavoriteRounded';
import ShoppingBagRoundedIcon from '@mui/icons-material/ShoppingBagRounded';
import { Link as RouterLink } from 'react-router-dom';
import type { Product } from '../../types/store';
import { useStore } from '../../context/StoreContext';

interface Props {
  product: Product;
  /** Compact layout for horizontal rails (home + PDP). */
  variant?: 'default' | 'rail';
}

export default function ProductCard({ product, variant = 'default' }: Props) {
  const { addToCart, toggleWishlist, wishlist } = useStore();
  const isWishlisted = wishlist.includes(product.id);
  const isRail = variant === 'rail';

  return (
    <Card
      sx={{
        borderRadius: isRail ? 2.5 : 3,
        height: '100%',
        border: isRail ? '1px solid' : 'none',
        borderColor: isRail ? 'rgba(15, 23, 42, 0.08)' : 'transparent',
        boxShadow: isRail ? '0 4px 14px rgba(15, 23, 42, 0.06)' : '0 6px 16px rgba(16, 24, 40, 0.06)',
        transition: 'transform 0.22s ease, box-shadow 0.22s ease, border-color 0.22s ease',
        '&:hover': {
          transform: 'translateY(-4px)',
          boxShadow: isRail ? '0 14px 28px rgba(15, 23, 42, 0.1)' : '0 12px 24px rgba(16, 24, 40, 0.10)',
          borderColor: isRail ? 'rgba(124, 58, 237, 0.25)' : 'transparent'
        }
      }}>
      <Box sx={{ position: 'relative' }}>
        <CardMedia
          component='img'
          height={isRail ? 200 : 250}
          image={product.image}
          alt={product.name}
          sx={{ objectFit: 'cover' }}
        />
        <IconButton
          onClick={() => toggleWishlist(product.id)}
          aria-label='wishlist'
          sx={{
            position: 'absolute',
            top: isRail ? 8 : 10,
            right: isRail ? 8 : 10,
            bgcolor: 'rgba(255,255,255,0.92)',
            boxShadow: 1
          }}>
          {isWishlisted ? <FavoriteRoundedIcon color='error' /> : <FavoriteBorderRoundedIcon />}
        </IconButton>
      </Box>
      <CardContent sx={{ pt: isRail ? 1.5 : 2, pb: isRail ? 1.5 : 2, px: isRail ? 1.75 : 2 }}>
        <Stack direction='row' justifyContent='space-between' alignItems='center' mb={isRail ? 1 : 1.2}>
          <Chip size='small' label={product.category} sx={{ bgcolor: '#fdf2f8', color: '#9d174d', fontWeight: 600 }} />
          {!product.inStock && <Chip size='small' color='error' label='Out of stock' />}
        </Stack>
        <Typography
          component={RouterLink}
          to={`/products/${product.id}`}
          color='text.primary'
          variant={isRail ? 'body2' : 'body1'}
          sx={{
            textDecoration: 'none',
            display: 'block',
            fontWeight: 700,
            minHeight: isRail ? 40 : 50,
            lineHeight: 1.35,
            ...(isRail && {
              display: '-webkit-box',
              WebkitLineClamp: 2,
              WebkitBoxOrient: 'vertical',
              overflow: 'hidden'
            })
          }}>
          {product.name}
        </Typography>
        <Stack direction='row' spacing={1} alignItems='center' mt={isRail ? 0.75 : 1}>
          <Rating size='small' value={product.rating} precision={0.1} readOnly />
          <Typography variant='caption' color='text.secondary'>
            ({product.reviews})
          </Typography>
        </Stack>
        <Stack direction='row' spacing={1} alignItems='baseline' flexWrap='wrap' mt={isRail ? 1 : 1.5}>
          <Typography fontWeight={800} sx={{ fontSize: isRail ? '0.95rem' : '1.05rem' }}>
            Rs. {product.price.toLocaleString()}
          </Typography>
          {product.originalPrice && (
            <Typography color='text.secondary' sx={{ textDecoration: 'line-through' }}>
              Rs. {product.originalPrice.toLocaleString()}
            </Typography>
          )}
        </Stack>
        <Button
          fullWidth
          variant={isRail ? 'contained' : 'outlined'}
          size={isRail ? 'small' : 'medium'}
          disabled={!product.inStock}
          onClick={() => addToCart(product.id)}
          startIcon={<ShoppingBagRoundedIcon fontSize={isRail ? 'small' : 'medium'} />}
          sx={{
            mt: isRail ? 1.5 : 2,
            textTransform: 'none',
            borderRadius: 2,
            fontWeight: 700,
            ...(isRail && { boxShadow: 'none' })
          }}>
          Add to cart
        </Button>
      </CardContent>
    </Card>
  );
}
