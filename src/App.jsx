import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './Components/router/Routes';
import './App.css';
import Footer from './Components/footer/footer';
import HomePage from './Components/homePage/homePage';
import Toolbar from './Components/toolbar/toolbar';
import  GGG  from "./Components/ggg";
function App() {
  const isAuthenticated = true;
  const isAdmin = true;
  // const isAuthenticated = false;
  // const isAdmin = false;

  return (
    <BrowserRouter>
    <div style={{display:"none"}}> <GGG /></div>
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


// "@rollup/rollup-linux-arm-gnueabihf": "4.18.0",
// "@rollup/rollup-linux-arm-musleabihf": "4.18.0",
// "@rollup/rollup-linux-arm64-gnu": "4.18.0",
// "@rollup/rollup-linux-arm64-musl": "4.18.0",
// "@rollup/rollup-linux-powerpc64le-gnu": "4.18.0",
// "@rollup/rollup-linux-riscv64-gnu": "4.18.0",
// "@rollup/rollup-linux-s390x-gnu": "4.18.0",
// "@rollup/rollup-linux-x64-gnu": "4.18.0",
// "@rollup/rollup-linux-x64-musl": "4.18.0",