import React from 'react';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import AppRoutes from './Components/router/Routes';
import './App.css';
import Footer from './Components/footer/footer';
import HomePage from './Components/homePage/homePage';
import Toolbar from './Components/toolbar/toolbar';
import GGG from './Components/ggg';
import Help from './Components/help/help';
import About from './Components/about/about';
import ItemsList from './Components/item/items';

function App() {
    const isAuthenticated = true;
    const isAdmin = false;

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

    return (
        <BrowserRouter>
            <MainComponent isAuthenticated={isAuthenticated} isAdmin={isAdmin} items={items} />
        </BrowserRouter>
    );
}

const MainComponent = ({ isAuthenticated, isAdmin, items }) => {
    const location = useLocation();

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
