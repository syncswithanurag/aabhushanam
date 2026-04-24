import { Suspense } from 'react';
import AuthRouter from './AuthRoutes';
import Home from '../pages/authorized/home/Home';
import * as urls from '../routes/config';
import AppLayout from '../components/Layouts/AppLayout';
import { Navigate, Route, Routes } from 'react-router-dom';
import PageNotFound from '../pages/public/others/PageNotFound';
import PrivateRoute from '../components/AppGuards/PrivateRoute';
import ProductsPage from '../pages/authorized/product/ProductsPage';
import ProductDetailsPage from '../pages/authorized/product/ProductDetailsPage';
import CartPage from '../pages/authorized/cart/CartPage';
import CheckoutPage from '../pages/authorized/cart/CheckoutPage';
import WishlistPage from '../pages/authorized/product/WishlistPage';
import AccountLayout from '../pages/authorized/account/AccountLayout';
import AccountProfilePage from '../pages/authorized/account/AccountProfilePage';
import AccountAddressesPage from '../pages/authorized/account/AccountAddressesPage';
import AccountPaymentPage from '../pages/authorized/account/AccountPaymentPage';
import OrdersPage from '../pages/authorized/account/OrdersPage';
import OrderDetailPage from '../pages/authorized/account/OrderDetailPage';
import StoreLocatorPage from '../pages/authorized/store/StoreLocatorPage';

export default function MainRoutes() {
  return (
    <Suspense fallback={null}>
      <Routes>
        <Route path={`${urls.auth.base}/*`} element={<AuthRouter />} />

        <Route
          path='/'
          element={
            <AppLayout>
              <Home />
            </AppLayout>
          }
        />
        <Route
          path='/products'
          element={
            <PrivateRoute
              outlet={
                <AppLayout>
                  <ProductsPage />
                </AppLayout>
              }
            />
          }
        />
        <Route
          path='/products/:id'
          element={
            <PrivateRoute
              outlet={
                <AppLayout>
                  <ProductDetailsPage />
                </AppLayout>
              }
            />
          }
        />
        <Route
          path='/wishlist'
          element={
            <PrivateRoute
              outlet={
                <AppLayout>
                  <WishlistPage />
                </AppLayout>
              }
            />
          }
        />
        <Route
          path='/cart'
          element={
            <PrivateRoute
              outlet={
                <AppLayout>
                  <CartPage />
                </AppLayout>
              }
            />
          }
        />
        <Route
          path='/checkout'
          element={
            <PrivateRoute
              outlet={
                <AppLayout>
                  <CheckoutPage />
                </AppLayout>
              }
            />
          }
        />

        <Route
          path='/account'
          element={
            <PrivateRoute
              outlet={
                <AppLayout>
                  <AccountLayout />
                </AppLayout>
              }
            />
          }>
          <Route index element={<Navigate to='/account/profile' replace />} />
          <Route path='profile' element={<AccountProfilePage />} />
          <Route path='addresses' element={<AccountAddressesPage />} />
          <Route path='payment' element={<AccountPaymentPage />} />
          <Route path='orders' element={<OrdersPage />} />
          <Route path='orders/:orderId' element={<OrderDetailPage />} />
        </Route>

        <Route
          path='/store-locator'
          element={
            <PrivateRoute
              outlet={
                <AppLayout>
                  <StoreLocatorPage />
                </AppLayout>
              }
            />
          }
        />

        <Route path='/404' element={<PageNotFound />} />
        <Route path='*' element={<Navigate to='/404' replace />} />
      </Routes>
    </Suspense>
  );
}
