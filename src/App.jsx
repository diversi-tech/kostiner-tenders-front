import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './Components/router/Routes';
import './App.css';
import Footer from './Components/footer/footer';
import HomePage from './Components/homePage/homePage';
import Toolbar from './Components/toolbar/toolbar';
import GGG from './Components/ggg';
import { UserProvider } from './context/userContext';

function App() {
  const isAuthenticated = false;
  const isAdmin = false;

  return (
    <BrowserRouter>
      <UserProvider>
        <div style={{ display: "none" }}> <GGG /></div>
        <div id="root">
          <Toolbar isAuthenticated={isAuthenticated} isAdmin={isAdmin} />
          <div className="content">
            <HomePage />
            <AppRoutes />
          </div>
          <Footer />
        </div>
      </UserProvider>
    </BrowserRouter>
  );
}

export default App;
