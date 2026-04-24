import { Box, Container } from '@mui/material';
import type { ReactNode } from 'react';
import Footer from './components/Footer';
import Header from './components/Header';
import MobileBottomNav from './components/MobileBottomNav';

interface Props {
  children: ReactNode;
}

export default function AppLayout({ children }: Props) {
  return (
    <Box sx={{ minHeight: '100vh', bgcolor: '#fafafa', display: 'flex', flexDirection: 'column' }}>
      <Header />
      <Container maxWidth='xl' component='main' sx={{ py: { xs: 2.5, md: 4 }, flex: 1 }}>
        {children}
      </Container>
      <Footer />
      <Box sx={{ display: { xs: 'block', md: 'none' }, height: 72, flexShrink: 0 }} />
      <MobileBottomNav />
    </Box>
  );
}
