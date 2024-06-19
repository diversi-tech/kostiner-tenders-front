import React from 'react';
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
                        <th>תאריך פרסום</th>
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
                        <td>{company}</td>
                        <td>{nameTender}</td>
                        <td>{datePublished}</td>
                        <td>{dateSubmission}</td>
                        <td>{category.join(', ')}</td>
                        <td>{winnerDetails}</td>
                        <td>{offer}</td>
                        <td>{winnerData}</td>
                        <td>{bidAmount}</td>
                        <td>{id}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default Item;

