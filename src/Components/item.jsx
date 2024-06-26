<<<<<<< HEAD
import React from 'react';
import '../Item1.css'; // קובץ סגנון חיצוני לקומפוננטה Item
function Item({ company, nameTender, datePublished, dateSubmission, category, winnerDetails, offer, winnerData, bidAmount, id }) {
    return (
        <tr>
            <td data-label="שם הגוף">{company}</td>
            <td data-label="שם ומספר המכרז">{nameTender}</td>
            <td data-label="תאריך פרסום">{datePublished}</td>
            <td data-label="תאריך הגשה">{dateSubmission}</td>
            <td data-label="קטגוריות">{category.join(', ')}</td>
            <td data-label="שם הזוכה ופרטי">{winnerDetails}</td>
            <td data-label="מציעים">{offer}</td>
            <td data-label="מידע על הזוכה">{winnerData}</td>
            <td data-label="סכום ההצעה">{bidAmount}</td>
            <td data-label="ID">{id}</td>
        </tr>
=======
// import React from 'react';
import '../Item1.css'; // קובץ סגנון חיצוני לקומפוננטה Item

function Item({ company, nameTender, datePublished, dateSubmission, category, winnerDetails, offer, winnerData, bidAmount, id }) {
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
                    <tr>
                        <td data-label="שם הגוף">{company}</td>
                        <td data-label="שם ומספר המכרז">{nameTender}</td>
                        <td data-label="תאריך פרסום">{datePublished}</td>
                        <td data-label="תאריך הגשה">{dateSubmission}</td>
                        <td data-label="קטגוריות">{category.join(', ')}</td>
                        <td data-label="שם הזוכה ופרטי">{winnerDetails}</td>
                        <td data-label="מציעים">{offer}</td>
                        <td data-label="מידע על הזוכה">{winnerData}</td>
                        <td data-label="סכום ההצעה">{bidAmount}</td>
                        <td data-label="ID">{id}</td>
                    </tr>
                </tbody>
            </table>
        </div>
>>>>>>> 72fbc1557e59eca20c1b8b0beee5b7753eeb689a
    );
}

export default Item;
