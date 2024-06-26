<<<<<<< HEAD
import React from 'react';
import '../Item1.css'; // קובץ סגנון חיצוני לקומפוננטה Item

function ItemsList({ items }) {
    return (
        <div className="item-container">
            <table className="item-table">
                <thead>
                    <tr>
                        <th>שם הגוף</th>
                        <th>שם ומספר המכרז</th>
                        <th>תאריך פרסום</th>
                        <th>תאריך הגשה</th>
                        <th>קטגוריות</th>
                        <th>שם הזוכה ופרטי</th>
                        <th>מציעים</th>
                        <th>מידע על הזוכה</th>
                        <th>סכום ההצעה</th>
                        <th>ID</th>
                    </tr>
                </thead>
                <tbody>
                    {items.map((item, index) => (
                        <tr key={index}>
                            <td>{item.company}</td>
                            <td>{item.nameTender}</td>
                            <td>{item.datePublished}</td>
                            <td>{item.dateSubmission}</td>
                            <td>{item.category.join(', ')}</td>
                            <td>{item.winnerDetails}</td>
                            <td>{item.offer}</td>
                            <td>{item.winnerData}</td>
                            <td>{item.bidAmount}</td>
                            <td>{item.id}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default ItemsList;
=======
import Item from "./item";
import { useState, useEffect } from "react";
import { sortData } from "../Services/service_example";
import Box from '@mui/material/Box';



export default function Items() {

    const [productsList, setproductsList] = useState([]);

  useEffect(() => {
   setproductsList( sortData());

  }, []);
  
    return(
        <div>
            <h1>Items</h1>

        <Box
            sx={{
                display: 'flex',
                flexWrap: 'wrap',
                '& > :not(style)': {
                    m: 1,
                    width: 600,
                    height: 400,
                },
            }}
        >
            {productsList.map(p => <Item key={p.id} {...p} />)}

        </Box>
        </div>
        
    )
}
>>>>>>> 72fbc1557e59eca20c1b8b0beee5b7753eeb689a
