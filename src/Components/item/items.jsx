// src/components/ItemsList.js
import React, { useEffect, useState } from 'react';
import Item from './item'; // נתיב מותאם
import ExportExcel from './itemExel'; // נוודא שזה הנתיב הנכון לקומפוננטה
import { getAllTenders } from '../../Server/tender'; // נתיב מותאם
import { CircularProgress, Box, Typography } from '@mui/material';

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
        setError("לא הצלחנו לטעון את המידע."); // הגדרת הודעת שגיאה
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
      body_name: "חברה לדוגמא",
      tender_number_name: "מכרז לדוגמא",
      published_date: "2024-01-01",
      submission_date: "2024-12-31",
      details_winner: "https://example.com",
      participants: ["משתתף 1", "משתתף 2"],
      winner_name: "זוכה לדוגמא",
      amount_bid: "1000",
      estimate: "1",
    },
  ];

  return (
    <div className="item-container" >
      {loading ? (
        <Box display="flex" justifyContent="center" alignItems="center" height="100vh">
          <CircularProgress />
        </Box>
      ) : error ? (
        <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" height="100vh">
          <Typography variant="h6" color="error">
            {error}
          </Typography>
          {/* <Typography variant="body1">
            ראה נתוני דמה למטה
          </Typography> */}
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
              {dummyItems.map((item, index) => (
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
          <ExportExcel items={dummyItems} />
        </Box>
      ) : (
        <>
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
              {items.map((item, index) => (
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
          <ExportExcel items={items} />
        </>
      )}
    </div>
  );
}

export default ItemsList;
