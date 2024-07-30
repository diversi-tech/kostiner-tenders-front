<<<<<<< Updated upstream
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
=======
import React, { useContext, useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
>>>>>>> Stashed changes
import AppRoutes from './Components/router/Routes';
import './App.css';
import Footer from './Components/footer/footer';
import HomePage from './Components/homePage/homePage';
import Toolbar from './Components/toolbar/toolbar';
import GGG from './Components/ggg';
import Help from './Components/help/help';
import About from './Components/about/about';
import ItemsList from './Components/item/items';
import { UserProvider, UserContext } from './context/userContext';

function App() {
    const items = [
        {
            company: "חברת א",
            nameTender: "מכרז 1234",
            datePublished: "01/01/2023",
            dateSubmission: "01/02/2023",
            category: "בניין",
            winnerDetails: "הזוכה - חברת א",
            offer: "חברה ב, חברה ג",
            winnerData: "חברת א - פרטי הזוכה",
            bidAmount: "1,000,000 ₪",
            id: "1234"
        },
        {
            company: "חברת ב",
            nameTender: "מכרז 5678",
            datePublished: "02/01/2023",
            dateSubmission: "02/02/2023",
            category: "טכנולוגיה",
            winnerDetails: "הזוכה - חברת ב",
            offer: "חברה ד, חברה ה",
            winnerData: "חברת ב - פרטי הזוכה",
            bidAmount: "2,000,000 ₪",
            id: "5678"
        }
    ];

    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [isAdmin, setIsAdmin] = useState(false);

    return (
        <BrowserRouter>
            <UserProvider>
                <MainComponent 
                    isAuthenticated={isAuthenticated} 
                    setIsAuthenticated={setIsAuthenticated}
                    isAdmin={isAdmin} 
                    setIsAdmin={setIsAdmin}
                    items={items} 
                />
            </UserProvider>
        </BrowserRouter>
    );
}

<<<<<<< Updated upstream
export default App;
=======
const MainComponent = ({ isAuthenticated, setIsAuthenticated, isAdmin, setIsAdmin, items }) => {
    const { user, setUser } = useContext(UserContext);
    const location = useLocation();

    useEffect(() => {
        const token = localStorage.getItem('authToken');
        const role = user.role; // Adjust this line if role is managed differently

        if (token) {
            setIsAuthenticated(true);
            setIsAdmin(role === 'admin');
        } else {
            setIsAuthenticated(false);
            setIsAdmin(false);
        }
    }, [user.role]); // Adding user.role as dependency if it's being updated

    const isSectionPath = location.hash;

    return (
        <>
            <div style={{ display: 'none' }}><GGG /></div>
            <div id="root">
                <Toolbar isAuthenticated={isAuthenticated} isAdmin={isAdmin} />
                <div className="content">
                    <HomePage />
                    {!isSectionPath && !isAdmin && isAuthenticated && (
                        <>
                            <About />
                            <Help />
                        </>
                    )}
                    {!isSectionPath && !isAdmin && !isAuthenticated && (
                        <>
                            <About />
                            <Help />
                            <ItemsList items={items} />
                        </>
                    )}
                    <AppRoutes isAuthenticated={isAuthenticated} isAdmin={isAdmin} />
                </div>
                <Footer />
            </div>
        </>
    );
}

export default App; 
>>>>>>> Stashed changes
