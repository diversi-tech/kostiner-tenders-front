// src/components/ItemsList.js
import React, { useEffect, useState } from 'react';
import Item from './item'; // נתיב מותאם
import ExportExcel from './itemExel'; // נוודא שזה הנתיב הנכון לקומפוננטה
import { getAllTenders } from '../../Server/tender'; // נתיב מותאם
import { CircularProgress, Box, Typography } from '@mui/material';
import './items.css'; // הוספת סגנון CSS

function ItemsList() {
  const [items, setItems] = useState([]);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTenders = async () => {
      try {
        const data = await getAllTenders();
        setItems(data[0]); // מציגים את הרשימה הראשונה
        setIsAuthenticated(true); // במידה והבקשה הצליחה נעדכן שהמשתמש מחובר
      } catch (error) {
        setError("מכרזים לתצוגה בלבד"); // הגדרת הודעת שגיאה
        setIsAuthenticated(false); // במידה ויש שגיאה נעדכן שהמשתמש לא מחובר
      } finally {
        setLoading(false); // בסיום הטעינה נעדכן שהטען הסתיים
      }
    };

    fetchTenders();
  }, []);

  // טבלת דמה להצגה כאשר המשתמש לא מחובר
  const dummyItems = [
    {
      body_name: "חברה ממשלתית",
      tender_number_name: "מכרז 563",
      published_date: "2024-01-01",
      submission_date: "2024-12-31",
      details_winner: "https://example.com",
      participants: ["חברה 1", "חברה 2"],
      winner_name: "חברה 3 ",
      amount_bid: "3000",
      estimate: "1000",
    },
  ];

  return (
    <div className="item-container">
      {loading ? (
        <Box display="flex" justifyContent="center" alignItems="center" height="100vh">
          <CircularProgress />
        </Box>
      ) : (
        <>
          {error && (
            <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" marginBottom="20px">
              <Typography variant="h6" color="error">
                {error}
              </Typography>
            </Box>
          )}
          <table className="item-table">
            <thead>
              <tr>
                <th>שם הגוף</th>
                <th>שם ומספר המכרז</th>
                <th>תאריך פרסום</th>
                <th>תאריך הגשה</th>
                {/* <th>קטגוריות</th> */}
                <th>שם הזוכה</th>
                <th>פרטי הזוכה</th>
                <th>מציעים</th>
                <th>סכום ההצעה</th>
                <th>אומדן</th>
              </tr>
            </thead>
            <tbody>
              {(error ? dummyItems : items).map((item, index) => (
                <Item
                  key={index}
                  company={item.body_name}
                  nameTender={item.tender_number_name}
                  datePublished={item.published_date}
                  dateSubmission={item.submission_date}
                  winnerName={item.winner_name}
                  winnerDetails={item.details_winner}
                  participants={item.participants}
                  bidAmount={item.amount_bid}
                  estimate={item.estimate}
                />
              ))}
            </tbody>
          </table>
          <ExportExcel items={error ? dummyItems : items} />
        </>
      )}
    </div>
  );
}

export default ItemsList;
