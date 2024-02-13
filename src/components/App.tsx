import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { HelmetProvider } from 'react-helmet-async';
import { HashRouter } from 'react-router-dom';
import Router from '@/components/router/Router';
import AuthProvider from '@/components/shared/AuthProvider';

const queryClient = new QueryClient();

export default function App() {
  return (
    <HelmetProvider>
      <QueryClientProvider client={queryClient}>
        <HashRouter>
          <AuthProvider>
            <Router />
          </AuthProvider>
        </HashRouter>
      </QueryClientProvider>
    </HelmetProvider>
  );
}