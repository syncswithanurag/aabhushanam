import AutoAwesomeRoundedIcon from '@mui/icons-material/AutoAwesomeRounded';
import CardGiftcardOutlinedIcon from '@mui/icons-material/CardGiftcardOutlined';
import HeadsetMicOutlinedIcon from '@mui/icons-material/HeadsetMicOutlined';
import HomeWorkOutlinedIcon from '@mui/icons-material/HomeWorkOutlined';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import ReplayOutlinedIcon from '@mui/icons-material/ReplayOutlined';
import VerifiedUserOutlinedIcon from '@mui/icons-material/VerifiedUserOutlined';
import { Box, Button, Grid, Paper, Stack, Typography } from '@mui/material';
import type { ReactNode } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import ProductCard from '../../../components/store/ProductCard';
import ProductRailCarousel from '../../../components/store/ProductRailCarousel';
import { useStore } from '../../../context/StoreContext';

const collections: { name: string; tag: string; gradient: string; border: string; accent: string }[] = [
  {
    name: 'Utsav',
    tag: 'Festive sparkle',
    gradient: 'linear-gradient(145deg, #fff7ed 0%, #ffedd5 100%)',
    border: '#fed7aa',
    accent: '#c2410c'
  },
  {
    name: 'Polki',
    tag: 'Heritage glam',
    gradient: 'linear-gradient(145deg, #fefce8 0%, #fef9c3 100%)',
    border: '#fde047',
    accent: '#a16207'
  },
  {
    name: 'Maaya',
    tag: 'Dreamy layers',
    gradient: 'linear-gradient(145deg, #fdf4ff 0%, #fae8ff 100%)',
    border: '#e9d5ff',
    accent: '#7e22ce'
  },
  {
    name: 'Sol',
    tag: 'Sunlit minimal',
    gradient: 'linear-gradient(145deg, #fffbeb 0%, #fef3c7 100%)',
    border: '#fcd34d',
    accent: '#b45309'
  },
  {
    name: 'Luna',
    tag: 'Evening edit',
    gradient: 'linear-gradient(145deg, #f8fafc 0%, #e2e8f0 100%)',
    border: '#cbd5e1',
    accent: '#334155'
  },
  {
    name: 'Peepal',
    tag: 'Botanical grace',
    gradient: 'linear-gradient(145deg, #ecfdf5 0%, #d1fae5 100%)',
    border: '#6ee7b7',
    accent: '#047857'
  }
];

const trustPoints: { title: string; body: string; icon: ReactNode }[] = [
  {
    title: '15-day returns',
    body: 'Hassle-free exchanges on eligible designs.',
    icon: <ReplayOutlinedIcon sx={{ fontSize: 28, color: 'primary.main' }} />
  },
  {
    title: 'Try at home',
    body: 'Select cities — see pieces before you buy.',
    icon: <HomeWorkOutlinedIcon sx={{ fontSize: 28, color: 'primary.main' }} />
  },
  {
    title: '100% certified',
    body: 'Quality-checked hallmarked jewellery.',
    icon: <VerifiedUserOutlinedIcon sx={{ fontSize: 28, color: 'primary.main' }} />
  },
  {
    title: '24×7 support',
    body: 'Chat, call, or WhatsApp — we are here.',
    icon: <HeadsetMicOutlinedIcon sx={{ fontSize: 28, color: 'primary.main' }} />
  }
];

const highlights = [
  {
    title: 'Bridal Edit',
    subtitle: 'Classic designs for every celebration',
    image: 'https://images.unsplash.com/photo-1588444837495-c6cfeb53f32d?auto=format&fit=crop&w=1200&q=80'
  },
  {
    title: 'Daily Wear Icons',
    subtitle: 'Lightweight pieces you can wear all day',
    image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=1200&q=80'
  }
];

const postTrustFeatures: { title: string; body: string; icon: ReactNode }[] = [
  {
    title: 'Design studio',
    body: 'Custom tweaks on select rings & bands.',
    icon: <AutoAwesomeRoundedIcon sx={{ color: 'secondary.main' }} />
  },
  {
    title: 'Insured shipping',
    body: 'Doorstep delivery with full transit cover.',
    icon: <LocalShippingOutlinedIcon sx={{ color: 'secondary.main' }} />
  },
  {
    title: 'Gift-ready',
    body: 'Premium boxes & handwritten notes.',
    icon: <CardGiftcardOutlinedIcon sx={{ color: 'secondary.main' }} />
  }
];

export default function Home() {
  const { products } = useStore();
  const featured = products.slice(0, 4);
  const bestSellers = products.slice(2, 6);

  return (
    <Stack spacing={3.5}>
      <Paper
        sx={{
          p: { xs: 3, md: 6 },
          borderRadius: 4,
          background: 'linear-gradient(95deg, #fdf2f8 0%, #ede9fe 52%, #e0f2fe 100%)'
        }}>
        <Typography variant='h3' fontWeight={700} gutterBottom>
          Everyday luxury, handcrafted for India
        </Typography>
        <Typography color='text.secondary' mb={3}>
          Explore rings, earrings, necklaces and gifting pieces inspired by festive elegance and modern style.
        </Typography>
        <Stack direction={{ xs: 'column', sm: 'row' }} spacing={1.5}>
          <Button component={RouterLink} to='/products' variant='contained' size='large'>
            Shop Collection
          </Button>
          <Button component={RouterLink} to='/products' variant='outlined' size='large'>
            New Arrivals
          </Button>
        </Stack>
      </Paper>

      <Paper
        elevation={0}
        sx={{
          p: { xs: 2.5, md: 3 },
          borderRadius: 4,
          border: '1px solid',
          borderColor: 'divider',
          background: 'linear-gradient(180deg, #fffdfb 0%, #ffffff 55%)',
          boxShadow: '0 12px 40px rgba(15, 23, 42, 0.05)'
        }}>
        <Stack spacing={0.5} mb={2}>
          <Typography variant='overline' color='text.secondary' sx={{ fontWeight: 800, letterSpacing: '0.12em' }}>
            Exclusive capsules
          </Typography>
          <Typography variant='h5' fontWeight={800} sx={{ letterSpacing: '-0.02em' }}>
            Utsav · Polki · Maaya and more
          </Typography>
          <Typography variant='body2' color='text.secondary' sx={{ maxWidth: 640 }}>
            Each line is crafted around a mood—festive drama, heirloom polki, or soft everyday glow. Tap a capsule to
            explore the full edit.
          </Typography>
        </Stack>
        <Stack
          direction='row'
          spacing={1.5}
          sx={{
            overflowX: 'auto',
            pb: 0.5,
            mx: -0.5,
            scrollSnapType: 'x mandatory',
            '& > *': { scrollSnapAlign: 'start' }
          }}>
          {collections.map((c) => (
            <Box
              key={c.name}
              component={RouterLink}
              to='/products'
              sx={{
                minWidth: { xs: 148, sm: 168 },
                textDecoration: 'none',
                color: 'inherit',
                p: 2,
                borderRadius: 3,
                background: c.gradient,
                border: '1px solid',
                borderColor: c.border,
                transition: 'transform 0.2s ease, box-shadow 0.2s ease',
                '&:hover': {
                  transform: 'translateY(-3px)',
                  boxShadow: '0 10px 28px rgba(15, 23, 42, 0.1)'
                }
              }}>
              <Typography variant='caption' sx={{ color: c.accent, fontWeight: 800, letterSpacing: '0.06em' }}>
                {c.tag}
              </Typography>
              <Typography variant='h6' fontWeight={800} sx={{ mt: 0.5, color: '#0f172a' }}>
                {c.name}
              </Typography>
              <Typography variant='caption' color='text.secondary' sx={{ display: 'block', mt: 0.75 }}>
                Shop capsule →
              </Typography>
            </Box>
          ))}
        </Stack>
      </Paper>

      <Grid container spacing={2}>
        {highlights.map((item) => (
          <Grid key={item.title} size={{ xs: 12, md: 6 }}>
            <Paper
              sx={{
                p: 3,
                borderRadius: 4,
                minHeight: 230,
                color: '#fff',
                backgroundImage: `linear-gradient(0deg, rgba(17, 24, 39, 0.62), rgba(17, 24, 39, 0.35)), url(${item.image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-end'
              }}>
              <Typography variant='h5' fontWeight={700}>
                {item.title}
              </Typography>
              <Typography variant='body2' sx={{ opacity: 0.95, mb: 1.5 }}>
                {item.subtitle}
              </Typography>
              <Button
                component={RouterLink}
                to='/products'
                variant='contained'
                color='inherit'
                sx={{ width: 'fit-content' }}>
                Explore
              </Button>
            </Paper>
          </Grid>
        ))}
      </Grid>

      <Paper
        sx={{
          p: { xs: 2.5, md: 3.5 },
          borderRadius: 4,
          border: '1px solid',
          borderColor: 'divider',
          bgcolor: '#fafafa',
          boxShadow: '0 8px 32px rgba(15, 23, 42, 0.04)'
        }}>
        <Typography variant='overline' color='text.secondary' sx={{ fontWeight: 800, letterSpacing: '0.12em' }}>
          The Aabhushanam promise
        </Typography>
        <Typography variant='h5' fontWeight={800} sx={{ mt: 0.5, mb: 2.5, letterSpacing: '-0.02em' }}>
          Shop with confidence
        </Typography>
        <Grid container spacing={2}>
          {trustPoints.map((item) => (
            <Grid key={item.title} size={{ xs: 12, sm: 6, md: 3 }}>
              <Paper
                elevation={0}
                sx={{
                  p: 2,
                  height: '100%',
                  borderRadius: 3,
                  bgcolor: '#fff',
                  border: '1px solid',
                  borderColor: 'divider'
                }}>
                <Stack direction='row' spacing={1.5} alignItems='flex-start'>
                  <Box sx={{ lineHeight: 0 }}>{item.icon}</Box>
                  <Box>
                    <Typography fontWeight={700}>{item.title}</Typography>
                    <Typography variant='body2' color='text.secondary' sx={{ mt: 0.5 }}>
                      {item.body}
                    </Typography>
                  </Box>
                </Stack>
              </Paper>
            </Grid>
          ))}
        </Grid>

        <Box sx={{ mt: 3, pt: 3, borderTop: '1px dashed', borderColor: 'divider' }}>
          <Typography variant='subtitle2' color='text.secondary' fontWeight={700} sx={{ mb: 1.5 }}>
            More reasons to love us
          </Typography>
          <Grid container spacing={1.5}>
            {postTrustFeatures.map((f) => (
              <Grid key={f.title} size={{ xs: 12, sm: 4 }}>
                <Stack direction='row' spacing={1} alignItems='center'>
                  <Box
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      width: 40,
                      height: 40,
                      borderRadius: 2,
                      bgcolor: 'rgba(124, 58, 237, 0.08)'
                    }}>
                    {f.icon}
                  </Box>
                  <Box>
                    <Typography variant='body2' fontWeight={700}>
                      {f.title}
                    </Typography>
                    <Typography variant='caption' color='text.secondary'>
                      {f.body}
                    </Typography>
                  </Box>
                </Stack>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Paper>

      <ProductRailCarousel
        sectionVariant='featured'
        title='Featured products'
        subtitle='Handpicked pieces our stylists love—fresh drops, bestsellers, and gifts worth bookmarking.'
        viewAllTo='/products'
        hideScrollArrows>
        {featured.map((product) => (
          <Box key={product.id} sx={{ width: { xs: 268, sm: 288 } }}>
            <ProductCard product={product} variant='rail' />
          </Box>
        ))}
      </ProductRailCarousel>

      <ProductRailCarousel
        sectionVariant='similar'
        title='Similar designs'
        subtitle='Shoppers with your taste also saved these—mix, match, or complete the set.'
        viewAllTo='/products'
        hideScrollArrows>
        {bestSellers.map((product) => (
          <Box key={product.id} sx={{ width: { xs: 268, sm: 288 } }}>
            <ProductCard product={product} variant='rail' />
          </Box>
        ))}
      </ProductRailCarousel>
    </Stack>
  );
}
