import { Chip, Divider, Grid, MenuItem, Paper, Stack, TextField, Typography } from '@mui/material';
import { useMemo, useState } from 'react';
import ProductCard from '../../../components/store/ProductCard';
import { useStore } from '../../../context/StoreContext';
import type { Category } from '../../../types/store';

const categories: Array<Category | 'All'> = ['All', 'Rings', 'Necklaces', 'Earrings', 'Bracelets'];

export default function ProductsPage() {
  const { products } = useStore();
  const [search, setSearch] = useState('');
  const [activeCategory, setActiveCategory] = useState<Category | 'All'>('All');
  const [sortBy, setSortBy] = useState('featured');

  const filteredProducts = useMemo(() => {
    let list = products.filter((item) => item.name.toLowerCase().includes(search.toLowerCase()));
    if (activeCategory !== 'All') {
      list = list.filter((item) => item.category === activeCategory);
    }
    if (sortBy === 'price-asc') {
      return [...list].sort((a, b) => a.price - b.price);
    }
    if (sortBy === 'price-desc') {
      return [...list].sort((a, b) => b.price - a.price);
    }
    if (sortBy === 'rating') {
      return [...list].sort((a, b) => b.rating - a.rating);
    }
    return list;
  }, [products, search, activeCategory, sortBy]);

  const filterChips = (
    <Stack direction='row' spacing={1} sx={{ overflowX: 'auto', flexWrap: 'nowrap', pb: 0.25 }}>
      {categories.map((category) => (
        <Chip
          key={category}
          label={category}
          size='small'
          clickable
          color={activeCategory === category ? 'primary' : 'default'}
          onClick={() => setActiveCategory(category)}
          sx={{ flexShrink: 0 }}
        />
      ))}
    </Stack>
  );

  return (
    <Stack spacing={3}>
      <Paper
        sx={{
          display: { xs: 'none', md: 'block' },
          p: 2.5,
          borderRadius: 3
        }}>
        <Typography variant='h4' fontWeight={700} mb={2}>
          Shop All Jewelry
        </Typography>
        <Stack direction={{ xs: 'column', md: 'row' }} spacing={2}>
          <TextField
            fullWidth
            placeholder='Search products...'
            value={search}
            onChange={(event) => setSearch(event.target.value)}
          />
          <TextField select value={sortBy} onChange={(event) => setSortBy(event.target.value)} sx={{ minWidth: 170 }}>
            <MenuItem value='featured'>Featured</MenuItem>
            <MenuItem value='price-asc'>Price: Low to High</MenuItem>
            <MenuItem value='price-desc'>Price: High to Low</MenuItem>
            <MenuItem value='rating'>Top Rated</MenuItem>
          </TextField>
        </Stack>
        <Stack direction='row' spacing={1} flexWrap='wrap' useFlexGap mt={2}>
          {categories.map((category) => (
            <Chip
              key={category}
              label={category}
              clickable
              color={activeCategory === category ? 'primary' : 'default'}
              onClick={() => setActiveCategory(category)}
            />
          ))}
        </Stack>
      </Paper>

      <Paper sx={{ display: { xs: 'block', md: 'none' }, p: 2, borderRadius: 3 }}>
        <Typography variant='h5' fontWeight={700} mb={1.5}>
          Shop All Jewelry
        </Typography>
        <TextField
          fullWidth
          size='small'
          placeholder='Search products...'
          value={search}
          onChange={(event) => setSearch(event.target.value)}
        />
      </Paper>

      <Paper
        elevation={2}
        sx={{
          display: { xs: 'block', md: 'none' },
          position: 'sticky',
          top: 112,
          zIndex: 1090,
          py: 1.25,
          px: 1.5,
          mx: { xs: -2, sm: -2 },
          borderRadius: 0,
          borderBottom: '1px solid',
          borderColor: 'divider',
          bgcolor: 'background.paper'
        }}>
        <Stack direction='row' spacing={1.5} alignItems='center'>
          {filterChips}
          <TextField
            select
            size='small'
            value={sortBy}
            onChange={(event) => setSortBy(event.target.value)}
            sx={{ minWidth: 128, flexShrink: 0 }}>
            <MenuItem value='featured'>Featured</MenuItem>
            <MenuItem value='price-asc'>Low–High</MenuItem>
            <MenuItem value='price-desc'>High–Low</MenuItem>
            <MenuItem value='rating'>Top rated</MenuItem>
          </TextField>
        </Stack>
      </Paper>

      <Grid container spacing={2.5} alignItems='flex-start'>
        <Grid size={{ xs: 12, md: 3 }}>
          <Paper
            sx={{
              p: 2.2,
              borderRadius: 3,
              position: { md: 'sticky' },
              top: 120,
              display: { xs: 'none', md: 'block' }
            }}>
            <Typography fontWeight={700} mb={1.5}>
              Quick Filters
            </Typography>
            <Stack spacing={1}>
              <Chip label='Ready to ship' clickable />
              <Chip label='Under Rs. 5000' clickable />
              <Chip label='Best rated' clickable />
              <Chip label='New arrivals' clickable />
            </Stack>
            <Divider sx={{ my: 2 }} />
            <Typography variant='body2' color='text.secondary'>
              Offers
            </Typography>
            <Typography variant='body2' sx={{ mt: 0.6 }}>
              Flat 20% off on select designs
            </Typography>
          </Paper>
        </Grid>
        <Grid size={{ xs: 12, md: 9 }}>
          <Grid container spacing={2}>
            {filteredProducts.map((product) => (
              <Grid key={product.id} size={{ xs: 12, sm: 6, lg: 4 }}>
                <ProductCard product={product} />
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
      {filteredProducts.length === 0 && (
        <Typography color='text.secondary'>No products found for your filters.</Typography>
      )}
    </Stack>
  );
}
