import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Auth0Provider } from '@auth0/auth0-react';
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient();

localStorage.setItem('lastPath', window.location.pathname);
window.addEventListener('reload', () => {
  
    const lastPath = localStorage.getItem('lastPath');
    if (lastPath) {
        localStorage.removeItem('lastPath');
        window.location.pathname = lastPath;
    }
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <QueryClientProvider client={queryClient}>
   <Auth0Provider
    domain="localhost:5173"
    clientId="720220089306-5rmsdqqui44gegs1d7f4h1mr8infd5d4.apps.googleusercontent.com"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
    <App />
  </Auth0Provider>,
   </QueryClientProvider>,
  </React.StrictMode>,
)