import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Component_example from './Components/component_example'
import React from 'react';
import { BrowserRouter as Router, Routes } from 'react-router-dom';
import Toolbar from './Components/toolbar';
import AppRoutes from './Routes'; // Import the AppRoutes component with a unique identifier

function App() {
    const isAuthenticated = false; 
    const isAdmin = false;

    return (
        <Router>
            <div>
                <Toolbar isAuthenticated={isAuthenticated} isAdmin={isAdmin} />
                <AppRoutes /> 
            </div>
        </Router>
    ); 

}

export default App;