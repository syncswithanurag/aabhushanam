import {
  AppBar,
  Badge,
  Box,
  Button,
  Chip,
  Divider,
  Grid,
  IconButton,
  InputBase,
  Menu,
  MenuItem,
  Paper,
  Popover,
  Stack,
  Toolbar,
  Typography,
  Grow
} from '@mui/material';
import ShoppingCartRoundedIcon from '@mui/icons-material/ShoppingCartRounded';
import FavoriteBorderRoundedIcon from '@mui/icons-material/FavoriteBorderRounded';
import StorefrontRoundedIcon from '@mui/icons-material/StorefrontRounded';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import PlaceRoundedIcon from '@mui/icons-material/PlaceRounded';
import KeyboardArrowDownRoundedIcon from '@mui/icons-material/KeyboardArrowDownRounded';
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import PersonOutlineRoundedIcon from '@mui/icons-material/PersonOutlineRounded';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import { useStore } from '../../../context/StoreContext';
import { useState } from 'react';
import type { MouseEvent } from 'react';
import { getCookie } from '../../../utils/helperFunctions';
import { CacheKeys } from '../../../utils/cacheKeys';
import { auth } from '../../../routes/config';

const categories = ['Rings', 'Earrings', 'Necklaces', 'Bracelets', 'Gifting'];
const utilityLinks = [
  { label: 'Find Store', to: '/store-locator' },
  { label: 'Try at Home', to: '/products' },
  { label: 'Gold Rate', to: '/products' },
  { label: 'Customer Care', to: '/account/profile' }
];
const megaMenuMap: Record<string, { title: string; items: string[]; image: string }> = {
  Rings: {
    title: 'Rings Collection',
    items: ['Diamond Rings', 'Couple Rings', 'Mens Rings', 'Engagement Rings', 'Daily Wear Rings'],
    image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=700&q=80'
  },
  Earrings: {
    title: 'Earrings Collection',
    items: ['Stud Earrings', 'Hoop Earrings', 'Drop Earrings', 'Office Wear', 'Jhumka Earrings'],
    image: 'https://images.unsplash.com/photo-1635767798638-3e25273a8236?auto=format&fit=crop&w=700&q=80'
  },
  Necklaces: {
    title: 'Necklaces Collection',
    items: ['Diamond Necklaces', 'Layered Necklaces', 'Bridal Necklaces', 'Pendant Sets', 'Chains'],
    image: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?auto=format&fit=crop&w=700&q=80'
  },
  Bracelets: {
    title: 'Bracelets Collection',
    items: ['Charm Bracelets', 'Tennis Bracelets', 'Daily Wear', 'Gold Plated', 'Cuff Bracelets'],
    image: 'https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?auto=format&fit=crop&w=700&q=80'
  },
  Gifting: {
    title: 'Gifting Collection',
    items: ['Gifts Under 5k', 'Anniversary Gifts', 'Wedding Gifts', 'For Men', 'For Women'],
    image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=700&q=80'
  }
};

export default function Header() {
  const navigate = useNavigate();
  const { cartCount, wishlist } = useStore();
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [accountMenuEl, setAccountMenuEl] = useState<null | HTMLElement>(null);

  const isLoggedIn = getCookie(CacheKeys.isAuthenticated) === 'true';

  const closeAccountMenu = () => setAccountMenuEl(null);

  const openMenu = (event: MouseEvent<HTMLElement>, category: string) => {
    setAnchorEl(event.currentTarget);
    setActiveCategory(category);
  };

  const closeMenu = () => {
    setAnchorEl(null);
    setActiveCategory(null);
  };

  const menuData = activeCategory ? megaMenuMap[activeCategory] : null;

  return (
    <AppBar position='sticky' elevation={0} sx={{ bgcolor: 'background.paper', color: 'text.primary' }}>
      <Typography variant='caption' sx={{ px: 3, py: 0.8, bgcolor: '#2e1065', color: '#fef3c7', textAlign: 'center' }}>
        Flat 20% off on festive collection | Free shipping | Easy returns
      </Typography>

      <Toolbar
        sx={{
          minHeight: '34px !important',
          justifyContent: 'space-between',
          borderBottom: '1px solid',
          borderColor: 'divider',
          bgcolor: '#fff7ed'
        }}>
        <Typography variant='caption' color='text.secondary'>
          100% Certified Jewellery | 15 Day Return
        </Typography>
        <Stack direction='row' spacing={1} sx={{ display: { xs: 'none', md: 'flex' } }}>
          {utilityLinks.map((link) => (
            <Button
              key={link.label}
              component={RouterLink}
              to={link.to}
              size='small'
              sx={{ textTransform: 'none', fontSize: 12, color: 'text.secondary' }}>
              {link.label}
            </Button>
          ))}
        </Stack>
      </Toolbar>

      <Toolbar sx={{ justifyContent: 'space-between', borderBottom: '1px solid', borderColor: 'divider', gap: 2 }}>
        <Button
          component={RouterLink}
          to='/'
          startIcon={<StorefrontRoundedIcon />}
          sx={{ textTransform: 'none', fontWeight: 700 }}>
          Aabhushanam
        </Button>

        <Box
          sx={{
            flex: 1,
            maxWidth: 560,
            display: 'flex',
            alignItems: 'center',
            gap: 1,
            px: 1.5,
            py: 0.6,
            borderRadius: 10,
            bgcolor: '#f5f5f5'
          }}>
          <SearchRoundedIcon fontSize='small' color='action' />
          <InputBase fullWidth placeholder='Search for rings, earrings, necklaces...' />
        </Box>

        <Stack direction='row' spacing={0.5} alignItems='center'>
          <Chip
            icon={<PlaceRoundedIcon />}
            label='Deliver to 110001'
            variant='outlined'
            sx={{ display: { xs: 'none', md: 'inline-flex' } }}
          />
          <IconButton component={RouterLink} to='/wishlist' aria-label='wishlist'>
            <Badge badgeContent={wishlist.length} color='secondary'>
              <FavoriteBorderRoundedIcon />
            </Badge>
          </IconButton>
          <IconButton component={RouterLink} to='/cart' aria-label='cart'>
            <Badge badgeContent={cartCount} color='primary'>
              <ShoppingCartRoundedIcon />
            </Badge>
          </IconButton>
          {isLoggedIn ? (
            <>
              <IconButton
                onClick={(event) => setAccountMenuEl(event.currentTarget)}
                aria-label='Account menu'
                aria-controls={accountMenuEl ? 'account-menu' : undefined}
                aria-haspopup='true'
                aria-expanded={accountMenuEl ? 'true' : undefined}
                sx={{
                  color: 'success.main',
                  '&:hover': {
                    bgcolor: 'rgba(34, 197, 94, 0.12)',
                    color: 'success.dark'
                  }
                }}>
                <AccountCircleRoundedIcon sx={{ fontSize: 28 }} />
              </IconButton>
              <Menu
                id='account-menu'
                anchorEl={accountMenuEl}
                open={Boolean(accountMenuEl)}
                onClose={closeAccountMenu}
                anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                transformOrigin={{ vertical: 'top', horizontal: 'right' }}
                slotProps={{ paper: { sx: { minWidth: 200, mt: 1 } } }}>
                <MenuItem
                  onClick={() => {
                    closeAccountMenu();
                    navigate('/account/profile');
                  }}>
                  My profile
                </MenuItem>
                <MenuItem
                  component={RouterLink}
                  to={`${auth.base}/${auth.logout}`}
                  onClick={closeAccountMenu}
                  sx={{ color: 'error.main' }}>
                  Log out
                </MenuItem>
              </Menu>
            </>
          ) : (
            <IconButton
              component={RouterLink}
              to={`${auth.base}/${auth.login}`}
              aria-label='Log in'
              sx={{
                color: 'grey.500',
                '&:hover': {
                  bgcolor: 'action.hover',
                  color: 'grey.600'
                }
              }}>
              <PersonOutlineRoundedIcon sx={{ fontSize: 26 }} />
            </IconButton>
          )}
        </Stack>
      </Toolbar>

      <Toolbar
        sx={{
          minHeight: '46px !important',
          gap: 0.5,
          overflowX: 'auto',
          borderBottom: '1px solid',
          borderColor: 'divider'
        }}>
        <Button component={RouterLink} to='/' sx={{ textTransform: 'none', fontWeight: 600 }}>
          Home
        </Button>
        <Button component={RouterLink} to='/products' sx={{ textTransform: 'none', fontWeight: 600 }}>
          All Jewelry
        </Button>
        {categories.map((category) => (
          <Button
            key={category}
            component={RouterLink}
            to='/products'
            onMouseEnter={(event) => openMenu(event, category)}
            endIcon={<KeyboardArrowDownRoundedIcon fontSize='small' />}
            sx={{ textTransform: 'none', color: 'text.secondary' }}>
            {category}
          </Button>
        ))}
      </Toolbar>
      <Popover
        open={Boolean(anchorEl && activeCategory)}
        anchorEl={anchorEl}
        onClose={closeMenu}
        TransitionComponent={Grow}
        transitionDuration={{ enter: 220, exit: 160 }}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
        transformOrigin={{ vertical: 'top', horizontal: 'left' }}
        slotProps={{
          paper: {
            onMouseLeave: closeMenu,
            sx: {
              mt: 0.5,
              borderRadius: 2,
              overflow: 'hidden',
              boxShadow: '0 18px 48px rgba(15, 23, 42, 0.12)',
              '@keyframes megaMenuIn': {
                from: { opacity: 0, transform: 'translateY(-6px)' },
                to: { opacity: 1, transform: 'translateY(0)' }
              },
              animation: 'megaMenuIn 220ms ease-out'
            }
          }
        }}>
        {menuData && (
          <Paper elevation={0} sx={{ p: 2.4, width: 680 }}>
            <Grid container spacing={2}>
              <Grid size={{ xs: 12, md: 7 }}>
                <Typography fontWeight={700} mb={1}>
                  {menuData.title}
                </Typography>
                <Divider sx={{ mb: 1 }} />
                <Stack spacing={0.6}>
                  {menuData.items.map((item) => (
                    <Button
                      key={item}
                      component={RouterLink}
                      to='/products'
                      onClick={closeMenu}
                      sx={{
                        justifyContent: 'flex-start',
                        textTransform: 'none',
                        color: 'text.secondary',
                        transition: 'background-color 0.15s ease, padding-left 0.15s ease',
                        '&:hover': { bgcolor: 'action.hover', pl: 2 }
                      }}>
                      {item}
                    </Button>
                  ))}
                </Stack>
              </Grid>
              <Grid size={{ xs: 12, md: 5 }}>
                <Paper
                  component='img'
                  src={menuData.image}
                  alt={menuData.title}
                  sx={{
                    width: '100%',
                    borderRadius: 2,
                    height: 220,
                    objectFit: 'cover',
                    transition: 'transform 0.35s ease',
                    '&:hover': { transform: 'scale(1.02)' }
                  }}
                />
              </Grid>
            </Grid>
          </Paper>
        )}
      </Popover>
    </AppBar>
  );
}
