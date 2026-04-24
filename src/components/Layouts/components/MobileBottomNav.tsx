import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import AppsRoundedIcon from '@mui/icons-material/AppsRounded';
import FavoriteBorderRoundedIcon from '@mui/icons-material/FavoriteBorderRounded';
import ShoppingCartRoundedIcon from '@mui/icons-material/ShoppingCartRounded';
import PersonOutlineRoundedIcon from '@mui/icons-material/PersonOutlineRounded';
import { Badge, BottomNavigation, BottomNavigationAction, Paper } from '@mui/material';
import { useMemo } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useStore } from '../../../context/StoreContext';

export default function MobileBottomNav() {
  const navigate = useNavigate();
  const location = useLocation();
  const { cartCount, wishlist } = useStore();

  const value = useMemo(() => {
    if (location.pathname.startsWith('/products')) {
      return '/products';
    }
    if (location.pathname.startsWith('/wishlist')) {
      return '/wishlist';
    }
    if (location.pathname.startsWith('/cart') || location.pathname.startsWith('/checkout')) {
      return '/cart';
    }
    if (location.pathname.startsWith('/account')) {
      return '/account/profile';
    }
    return '/';
  }, [location.pathname]);

  return (
    <Paper
      elevation={6}
      sx={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 1200,
        display: { xs: 'block', md: 'none' }
      }}>
      <BottomNavigation showLabels value={value} onChange={(_, next) => navigate(next)}>
        <BottomNavigationAction label='Home' value='/' icon={<HomeRoundedIcon />} />
        <BottomNavigationAction label='Categories' value='/products' icon={<AppsRoundedIcon />} />
        <BottomNavigationAction
          label='Wishlist'
          value='/wishlist'
          icon={
            <Badge badgeContent={wishlist.length} color='secondary'>
              <FavoriteBorderRoundedIcon />
            </Badge>
          }
        />
        <BottomNavigationAction
          label='Cart'
          value='/cart'
          icon={
            <Badge badgeContent={cartCount} color='primary'>
              <ShoppingCartRoundedIcon />
            </Badge>
          }
        />
        <BottomNavigationAction label='Account' value='/account/profile' icon={<PersonOutlineRoundedIcon />} />
      </BottomNavigation>
    </Paper>
  );
}
