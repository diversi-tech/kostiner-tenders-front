import React, { useContext, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Item from './item'; // שים לב לנתיב הנכון
import ExportExcel from './itemExel'; // שים לב לנתיב הנכון
import { getAllTenders } from '../../Server/tender'; // שים לב לנתיב הנכון
import { CircularProgress, Box, Typography } from '@mui/material';
import './items.css'; // הוספת סגנון CSS
import { UserContext } from '../../context/userContext';

function ItemsList() {
  const [items, setItems] = useState([]);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const { user } = useContext(UserContext);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const location = useLocation();
  const { categoryName, type } = location.state || {}; // הוספנו את type

  useEffect(() => {
    const fetchTenders = async () => {
      setLoading(true);
      try {
        const data = await getAllTenders();
        // console.log("data ", data);

        let filtersItems = [];
        if (user && user.role === 'admin') {
          console.log("admin");
          filtersItems = data[categoryName] || [];
        } else {
          if (type === 1) {
            console.log("history",data.history[categoryName]);
            filtersItems = data.history[categoryName] || [];
          } else {
            console.log("subscriptions",data.subscriptions[categoryName]);
            filtersItems = data.subscriptions[categoryName] || [];
          }
        }

        if (filtersItems.length === 0) {
          console.log("No items found for the category:", categoryName);
        }

        setItems(filtersItems.length > 0 ? filtersItems : []);
        setIsAuthenticated(true);
      } catch (error) {
        setError("מכרזים לתצוגה בלבד");
        setIsAuthenticated(false);
        setItems([]); // להבטיח שהמצב יתעדכן גם במקרה של שגיאה
      } finally {
        setLoading(false);
      }
    };

    fetchTenders();
  }, [categoryName, type, user]);

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
                <th>שם הזוכה</th>
                <th>פרטי הזוכה</th>
                <th>מציעים</th>
                <th>סכום ההצעה</th>
                <th>אומדן</th>
              </tr>
            </thead>
            <tbody>
              {(items.length > 0 ? items : dummyItems).map((item, index) => (
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
          <ExportExcel items={items.length > 0 ? items : dummyItems} />
        </>
      )}
    </div>
  );
}

export default ItemsList;
