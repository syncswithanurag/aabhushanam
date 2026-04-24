import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import InstagramIcon from '@mui/icons-material/Instagram';
import ShieldOutlinedIcon from '@mui/icons-material/ShieldOutlined';
import VerifiedUserOutlinedIcon from '@mui/icons-material/VerifiedUserOutlined';
import YouTubeIcon from '@mui/icons-material/YouTube';
import {
  Box,
  Button,
  Container,
  Divider,
  Grid,
  IconButton,
  InputAdornment,
  Link,
  Stack,
  TextField,
  Typography
} from '@mui/material';
import type { ReactNode } from 'react';
import { Link as RouterLink } from 'react-router-dom';

const shopLinks = [
  { label: 'All Jewellery', to: '/products' },
  { label: 'Rings', to: '/products' },
  { label: 'Earrings', to: '/products' },
  { label: 'Necklaces', to: '/products' },
  { label: 'Bracelets', to: '/products' },
  { label: 'Wishlist', to: '/wishlist' }
];

const serviceLinks = [
  { label: 'Track order', to: '/account/orders' },
  { label: 'Returns & exchanges', to: '/account/profile' },
  { label: 'Shipping policy', to: '/products' },
  { label: 'Size guide', to: '/products' },
  { label: 'FAQs', to: '/products' }
];

const companyLinks = [
  { label: 'About Aabhushanam', to: '/products' },
  { label: 'Our stores', to: '/store-locator' },
  { label: 'Careers', to: '/products' },
  { label: 'Press', to: '/products' },
  { label: 'Sustainability', to: '/products' }
];

const popularLinks = [
  'Diamond rings',
  'Gold earrings',
  'Bridal necklace',
  'Daily wear rings',
  'Gift under ₹5000',
  'Mangalsutra',
  'Solitaire studs',
  'Silver jewellery'
];

function FooterColumn({ title, children }: { title: string; children: ReactNode }) {
  return (
    <Stack spacing={1.75}>
      <Typography variant='subtitle2' sx={{ color: '#f5e6c8', fontWeight: 700, letterSpacing: 0.6 }}>
        {title}
      </Typography>
      {children}
    </Stack>
  );
}

export default function Footer() {
  return (
    <Box
      component='footer'
      sx={{
        mt: 'auto',
        bgcolor: '#14121a',
        color: 'rgba(255,255,255,0.82)',
        borderTop: '1px solid rgba(255,255,255,0.08)'
      }}>
      <Box
        sx={{
          py: { xs: 3, md: 4 },
          px: { xs: 2, sm: 3 },
          background: 'linear-gradient(180deg, rgba(124,58,237,0.12) 0%, transparent 45%)'
        }}>
        <Container maxWidth='xl' disableGutters>
          <Stack
            direction={{ xs: 'column', md: 'row' }}
            spacing={3}
            justifyContent='space-between'
            alignItems={{ xs: 'stretch', md: 'center' }}
            sx={{ mb: { xs: 3, md: 4 } }}>
            <Box sx={{ maxWidth: 520 }}>
              <Typography variant='h6' sx={{ color: '#fff', fontWeight: 700, mb: 0.75 }}>
                Join the inner circle
              </Typography>
              <Typography variant='body2' sx={{ color: 'rgba(255,255,255,0.65)', mb: 2 }}>
                New launches, exclusive offers, and styling tips—once a week, no spam.
              </Typography>
            </Box>
            <Stack
              direction={{ xs: 'column', sm: 'row' }}
              spacing={1.25}
              sx={{ width: { xs: '100%', md: 'auto' }, minWidth: { md: 380 } }}>
              <TextField
                fullWidth
                size='small'
                placeholder='Your email address'
                variant='outlined'
                slotProps={{
                  input: {
                    sx: {
                      bgcolor: 'rgba(255,255,255,0.06)',
                      color: '#fff',
                      borderRadius: 2,
                      '& fieldset': { borderColor: 'rgba(255,255,255,0.15)' },
                      '&:hover fieldset': { borderColor: 'rgba(255,255,255,0.28)' }
                    },
                    endAdornment: (
                      <InputAdornment position='end'>
                        <EmailOutlinedIcon sx={{ color: 'rgba(255,255,255,0.45)' }} />
                      </InputAdornment>
                    )
                  }
                }}
              />
              <Button
                variant='contained'
                sx={{
                  px: 3,
                  textTransform: 'none',
                  fontWeight: 700,
                  borderRadius: 2,
                  bgcolor: '#7c3aed',
                  boxShadow: '0 8px 24px rgba(124,58,237,0.35)',
                  '&:hover': { bgcolor: '#6d28d9' },
                  whiteSpace: 'nowrap'
                }}>
                Subscribe
              </Button>
            </Stack>
          </Stack>

          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} sx={{ mb: 4 }} flexWrap='wrap' useFlexGap>
            <Stack direction='row' spacing={1} alignItems='center' sx={{ color: 'rgba(255,255,255,0.7)' }}>
              <VerifiedUserOutlinedIcon sx={{ fontSize: 22, color: '#c4b5fd' }} />
              <Typography variant='caption'>100% certified jewellery</Typography>
            </Stack>
            <Stack direction='row' spacing={1} alignItems='center' sx={{ color: 'rgba(255,255,255,0.7)' }}>
              <ShieldOutlinedIcon sx={{ fontSize: 22, color: '#c4b5fd' }} />
              <Typography variant='caption'>Secure checkout & insured delivery</Typography>
            </Stack>
            <Stack direction='row' spacing={1} alignItems='center' sx={{ color: 'rgba(255,255,255,0.7)' }}>
              <Typography variant='caption' sx={{ fontWeight: 700, color: '#fde68a' }}>
                15
              </Typography>
              <Typography variant='caption'>day easy returns</Typography>
            </Stack>
          </Stack>
        </Container>
      </Box>

      <Container maxWidth='xl' sx={{ px: { xs: 2, sm: 3 }, pb: { xs: 10, md: 4 } }}>
        <Grid container spacing={{ xs: 3, md: 4 }} sx={{ mb: 4 }}>
          <Grid size={{ xs: 12, sm: 6, md: 3 }}>
            <FooterColumn title='Shop'>
              <Stack spacing={1}>
                {shopLinks.map((item) => (
                  <Link
                    key={item.label}
                    component={RouterLink}
                    to={item.to}
                    underline='hover'
                    sx={{ color: 'rgba(255,255,255,0.72)', fontSize: 14, width: 'fit-content' }}>
                    {item.label}
                  </Link>
                ))}
              </Stack>
            </FooterColumn>
          </Grid>
          <Grid size={{ xs: 12, sm: 6, md: 3 }}>
            <FooterColumn title='Customer care'>
              <Stack spacing={1}>
                {serviceLinks.map((item) => (
                  <Link
                    key={item.label}
                    component={RouterLink}
                    to={item.to}
                    underline='hover'
                    sx={{ color: 'rgba(255,255,255,0.72)', fontSize: 14, width: 'fit-content' }}>
                    {item.label}
                  </Link>
                ))}
              </Stack>
            </FooterColumn>
          </Grid>
          <Grid size={{ xs: 12, sm: 6, md: 3 }}>
            <FooterColumn title='Company'>
              <Stack spacing={1}>
                {companyLinks.map((item) => (
                  <Link
                    key={item.label}
                    component={RouterLink}
                    to={item.to}
                    underline='hover'
                    sx={{ color: 'rgba(255,255,255,0.72)', fontSize: 14, width: 'fit-content' }}>
                    {item.label}
                  </Link>
                ))}
              </Stack>
            </FooterColumn>
          </Grid>
          <Grid size={{ xs: 12, sm: 6, md: 3 }}>
            <FooterColumn title='Get in touch'>
              <Typography variant='body2' sx={{ color: 'rgba(255,255,255,0.65)', lineHeight: 1.7 }}>
                24×7 support (all days)
              </Typography>
              <Link href='mailto:care@aabhushanam.com' underline='hover' sx={{ color: '#e9d5ff', fontSize: 14 }}>
                care@aabhushanam.com
              </Link>
              <Link
                href='tel:+919876543210'
                underline='hover'
                sx={{ color: '#e9d5ff', fontSize: 14, display: 'block', mt: 0.5 }}>
                +91 98765 43210
              </Link>
              <Typography variant='caption' sx={{ color: 'rgba(255,255,255,0.45)', display: 'block', mt: 1.5 }}>
                Aabhushanam Jewellery Pvt Ltd
                <br />
                Chennai, Tamil Nadu — 600032
              </Typography>
            </FooterColumn>
          </Grid>
        </Grid>

        <Divider sx={{ borderColor: 'rgba(255,255,255,0.1)', mb: 3 }} />

        <Typography variant='subtitle2' sx={{ color: '#f5e6c8', fontWeight: 700, mb: 1.5 }}>
          Popular searches
        </Typography>
        <Stack direction='row' flexWrap='wrap' useFlexGap spacing={1} sx={{ mb: 4 }}>
          {popularLinks.map((label) => (
            <Link
              key={label}
              component={RouterLink}
              to='/products'
              underline='none'
              sx={{
                fontSize: 12,
                px: 1.25,
                py: 0.5,
                borderRadius: 10,
                bgcolor: 'rgba(255,255,255,0.06)',
                color: 'rgba(255,255,255,0.75)',
                border: '1px solid rgba(255,255,255,0.08)',
                '&:hover': { bgcolor: 'rgba(255,255,255,0.1)', color: '#fff' }
              }}>
              {label}
            </Link>
          ))}
        </Stack>

        <Stack
          direction={{ xs: 'column', md: 'row' }}
          spacing={2}
          justifyContent='space-between'
          alignItems={{ xs: 'flex-start', md: 'center' }}
          sx={{ mb: 3 }}>
          <Stack direction='row' spacing={1} alignItems='center' flexWrap='wrap' useFlexGap>
            <Typography variant='caption' sx={{ color: 'rgba(255,255,255,0.45)', mr: 1 }}>
              We accept
            </Typography>
            {['Visa', 'Mastercard', 'UPI', 'RuPay', 'COD'].map((method) => (
              <Box
                key={method}
                sx={{
                  px: 1.2,
                  py: 0.4,
                  borderRadius: 1,
                  fontSize: 11,
                  fontWeight: 600,
                  color: 'rgba(255,255,255,0.85)',
                  bgcolor: 'rgba(255,255,255,0.08)',
                  border: '1px solid rgba(255,255,255,0.1)'
                }}>
                {method}
              </Box>
            ))}
          </Stack>
          <Stack direction='row' spacing={0.5}>
            <IconButton aria-label='Instagram' sx={{ color: 'rgba(255,255,255,0.7)', '&:hover': { color: '#fff' } }}>
              <InstagramIcon />
            </IconButton>
            <IconButton aria-label='Facebook' sx={{ color: 'rgba(255,255,255,0.7)', '&:hover': { color: '#fff' } }}>
              <FacebookRoundedIcon />
            </IconButton>
            <IconButton aria-label='YouTube' sx={{ color: 'rgba(255,255,255,0.7)', '&:hover': { color: '#fff' } }}>
              <YouTubeIcon />
            </IconButton>
          </Stack>
        </Stack>

        <Divider sx={{ borderColor: 'rgba(255,255,255,0.08)', mb: 2 }} />

        <Stack
          direction={{ xs: 'column', sm: 'row' }}
          spacing={1.5}
          justifyContent='space-between'
          alignItems={{ xs: 'flex-start', sm: 'center' }}>
          <Typography variant='caption' sx={{ color: 'rgba(255,255,255,0.45)' }}>
            © {new Date().getFullYear()} Aabhushanam. All rights reserved.
          </Typography>
          <Stack direction='row' spacing={2} flexWrap='wrap' useFlexGap>
            <Link component={RouterLink} to='/products' sx={{ color: 'rgba(255,255,255,0.45)', fontSize: 12 }}>
              Privacy policy
            </Link>
            <Link component={RouterLink} to='/products' sx={{ color: 'rgba(255,255,255,0.45)', fontSize: 12 }}>
              Terms of use
            </Link>
            <Link component={RouterLink} to='/products' sx={{ color: 'rgba(255,255,255,0.45)', fontSize: 12 }}>
              Sitemap
            </Link>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}
