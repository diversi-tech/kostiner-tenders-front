import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './Components/router/routes';
import './App.css';
import Footer from './Components/footer/footer';
import HomePage from './Components/homePage/homePage';
import Toolbar from './Components/toolbar/toolbar';

function App() {
  const isAuthenticated = true;
  const isAdmin = true;
  // const isAuthenticated = false;
  // const isAdmin = false;

  return (
    <BrowserRouter>
      <div id="root">
        <Toolbar isAuthenticated={isAuthenticated} isAdmin={isAdmin} />
        <div className="content">
          <HomePage />
          <AppRoutes isAdmin={isAdmin} />
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
