import './index.css';
import { BrowserRouter, useLocation } from 'react-router-dom';
import AppRoutes from './routes/AppRoutes';
import Layout from './components/Shared/Layout';
import { OnboardingProvider } from './context/OnboardingContext';
import { Toaster } from 'react-hot-toast';
import { useEffect } from 'react';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};


function App() {
  return (
    <BrowserRouter>
      <OnboardingProvider>
        <Layout>
        <ScrollToTop />
          <Toaster
            position="top-right"
            reverseOrder={false}
            toastOptions={{
              // Define default options
              duration: 3000,
              style: {
                background: '#333',
                color: '#fff',
                fontSize: '14px', // Reduce font size
                width: '250px', // Reduce width size
              },
              // Define custom options for different types of toasts
              success: {
                duration: 3000,
                style: {
                  background: 'black',
                  color: '#fff',
                  fontSize: '14px', // Reduce font size
                  width: '250px', // Reduce width size
                },
                iconTheme: {
                  primary: '#fff',
                  secondary: 'green',
                  height: '30px', // Increase icon size
                  width: '30px', // Increase icon size
                },
              },
              error: {
                duration: 2000,
                style: {
                  background: 'black',
                  color: '#fff',
                  fontSize: '14px', // Reduce font size
                  width: '250px', // Reduce width size
                },
                iconTheme: {
                  primary: '#fff',
                  secondary: 'red',
                  height: '30px', // Increase icon size
                  width: '30px', // Increase icon size
                },
              },
            }}
          />
          <AppRoutes />
        </Layout>
      </OnboardingProvider>
    </BrowserRouter>
  );
}

export default App;