import AllProviders from './providers/AllProviders';
import MainRoutes from './routes/MainRoutes';
import { StoreProvider } from './context/StoreContext';

export default function App() {
  return (
    <AllProviders>
      <StoreProvider>
        <MainRoutes />
      </StoreProvider>
    </AllProviders>
  );
}
