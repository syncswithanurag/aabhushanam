import { Navigate } from 'react-router-dom';
import { removeCookie } from '../../../../utils/helperFunctions';
import { CacheKeys } from '../../../../utils/cacheKeys';

/**
 * Clears session cookies synchronously, then sends the user home.
 * Route: /auth/logout
 */
export default function Logout() {
  removeCookie(CacheKeys.isAuthenticated);
  removeCookie(CacheKeys.userEmail);

  return <Navigate to='/' replace />;
}
