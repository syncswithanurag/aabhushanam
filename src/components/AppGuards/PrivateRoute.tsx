import { Navigate } from 'react-router-dom';
import { auth } from '../../routes/config';
import { getCookie } from '../../utils/helperFunctions';
import { CacheKeys } from '../../utils/cacheKeys';
import type { JSX } from 'react';

type Props = { outlet: JSX.Element };

export default function PrivateRoute({ outlet }: Props) {
  const isAuthenticated = getCookie(CacheKeys.isAuthenticated);
  const isAllowedToUser = isAuthenticated === 'true';
  if (isAllowedToUser) {
    return outlet;
  } else {
    return <Navigate to={`${auth.base}/${auth.login}`} state={window.location.href} replace />;
  }
}
