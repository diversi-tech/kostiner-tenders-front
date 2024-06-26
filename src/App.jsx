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
        </div>
    );
}

export default App;
