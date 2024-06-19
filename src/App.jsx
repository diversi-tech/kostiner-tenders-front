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
        </div>
    );
}

export default App;

