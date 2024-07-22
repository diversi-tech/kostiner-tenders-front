import React, { useEffect, useState } from 'react';
import axios from 'axios'; // נדרש עבור קריאות ה-API
import './Item1.css';
import Item from './item'; // נתיב מותאם
import ExportExcel from './itemExel'; // נוודא שזה הנתיב הנכון לקומפוננטה

function ItemsList() {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        // פונקציה לטיפול בקבלת הנתונים מה-API
        const fetchData = async () => {
            try {
                const response = await axios.get('/api/items'); // הנתיב לקבלת הנתונים
                setItems(response.data);
                setLoading(false);
            } catch (error) {
                setError('נפלה שגיאה בעת טעינת הנתונים');
                setLoading(false);
            }
        };

        fetchData();
    }, []); // [] כאן מוודא שהקריאה תתבצע רק פעם אחת בעת ההרצה הראשונית של הקומפוננטה

    if (loading) {
        return <div>טוען נתונים...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

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
                        <th>שם ופרטי הזוכה</th>
                        <th>מציעים</th>
                        <th>מידע על הזוכה</th>
                        <th>סכום ההצעה</th>
                        <th>ID</th>
                    </tr>
                </thead>
                <tbody>
                    {items.map((item, index) => (
                        <Item
                            key={index}
                            company={item.company}
                            nameTender={item.nameTender}
                            datePublished={item.datePublished}
                            dateSubmission={item.dateSubmission}
                            category={item.category}
                            winnerDetails={item.winnerDetails}
                            offer={item.offer}
                            winnerData={item.winnerData}
                            bidAmount={item.bidAmount}
                            id={item.id}
                        />
                    ))}
                </tbody>
            </table>
            <ExportExcel items={items} /> {/* לוודא שהקומפוננטה מקבלת את הנתונים */}
        </div>
    );
}

export default ItemsList;
