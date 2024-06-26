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
    );
}

export default Item;
