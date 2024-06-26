<<<<<<< HEAD
import React from 'react';
import ItemsList from './Components/items';
import './Item1.css'; // קובץ סגנון חיצוני לקומפוננטה Item
 // ניחוש שהקומפוננטה נמצאת בנתיב זה

function App() {
    // דוגמה לרשימת פריטים
    const items = [
        {
            company: 'Company A',
            nameTender: 'Tender 1',
            datePublished: '2024-06-27',
            dateSubmission: '2024-07-10',
            category: ['Category A', 'Category B'],
            winnerDetails: 'Winner A',
            offer: 'Offer A',
            winnerData: 'Winner Data A',
            bidAmount: '$100,000',
            id: '001'
        },
        {
            company: 'Company B',
            nameTender: 'Tender 2',
            datePublished: '2024-06-28',
            dateSubmission: '2024-07-15',
            category: ['Category C'],
            winnerDetails: 'Winner B',
            offer: 'Offer B',
            winnerData: 'Winner Data B',
            bidAmount: '$120,000',
            id: '002'
        }
    ];

    return (
        <div className="App">
            <ItemsList items={items} />
=======
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Component_example from './Components/component_example'
// import Items from './Components/items'
import Item from './Components/item'
import React from 'react';
// במידה והקובץ נמצא באותו תיקייה
import './App.css'; // קובץ סגנון חיצוני לאפליקציה

function App() {
    // נתונים לדוגמה
    const itemData = {
        company: 'ABC Inc.',
        nameTender: 'Project X',
        datePublished: '2023-06-15',
        dateSubmission: '2023-07-10',
        category: ['Technology','computer'],
        winnerDetails: 'John Smith',
        offer: '0001',
        winnerData: 'July 2023',
        bidAmount: '$100,000',
        id: '12345',
    };

    return (
        <div className="app">
            <h1>Sample Item Data</h1>
            <Item {...itemData} />
>>>>>>> 72fbc1557e59eca20c1b8b0beee5b7753eeb689a
        </div>
    );
}

export default App;
<<<<<<< HEAD
=======

>>>>>>> 72fbc1557e59eca20c1b8b0beee5b7753eeb689a
