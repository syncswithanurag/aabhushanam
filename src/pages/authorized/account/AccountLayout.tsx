import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import CreditCardOutlinedIcon from '@mui/icons-material/CreditCardOutlined';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import ReceiptLongOutlinedIcon from '@mui/icons-material/ReceiptLongOutlined';
import { Box, Divider, List, ListItemButton, ListItemIcon, ListItemText, Paper, Typography } from '@mui/material';
import { Link as RouterLink, Outlet, useLocation, useNavigate } from 'react-router-dom';
import { auth } from '../../../routes/config';

const navItems = [
  { path: '/account/profile', label: 'Profile', icon: <AccountCircleOutlinedIcon /> },
  { path: '/account/addresses', label: 'Addresses', icon: <HomeOutlinedIcon /> },
  { path: '/account/payment', label: 'Payment', icon: <CreditCardOutlinedIcon /> },
  { path: '/account/orders', label: 'Orders', icon: <ReceiptLongOutlinedIcon /> }
];

function isNavSelected(path: string, pathname: string) {
  if (path === '/account/profile') {
    return pathname === '/account/profile' || pathname === '/account';
  }
  if (path === '/account/orders') {
    return pathname.startsWith('/account/orders');
  }
  return pathname === path;
}

export default function AccountLayout() {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <Box>
      <Typography variant='h4' fontWeight={700} mb={2.5}>
        My Account
      </Typography>
      <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 3, alignItems: 'flex-start' }}>
        <Paper
          sx={{
            width: { xs: '100%', md: 260 },
            flexShrink: 0,
            borderRadius: 3,
            overflow: 'hidden',
            position: { md: 'sticky' },
            top: 120
          }}>
          <Box sx={{ px: 2, py: 1.5, bgcolor: 'grey.50' }}>
            <Typography variant='subtitle2' color='text.secondary'>
              Account
            </Typography>
          </Box>
          <Divider />
          <List disablePadding>
            {navItems.map((item) => (
              <ListItemButton
                key={item.path}
                selected={isNavSelected(item.path, location.pathname)}
                onClick={() => navigate(item.path)}>
                <ListItemIcon sx={{ minWidth: 40 }}>{item.icon}</ListItemIcon>
                <ListItemText primary={item.label} primaryTypographyProps={{ fontWeight: 600 }} />
              </ListItemButton>
            ))}
            <Divider />
            <ListItemButton component={RouterLink} to={`${auth.base}/${auth.logout}`} sx={{ color: 'error.main' }}>
              <ListItemIcon sx={{ minWidth: 40, color: 'inherit' }}>
                <LogoutOutlinedIcon />
              </ListItemIcon>
              <ListItemText primary='Log out' primaryTypographyProps={{ fontWeight: 600 }} />
            </ListItemButton>
          </List>
        </Paper>

        <Box sx={{ flex: 1, minWidth: 0, width: '100%' }}>
          <Outlet />
        </Box>
      </Box>
    </Box>
  );
}
