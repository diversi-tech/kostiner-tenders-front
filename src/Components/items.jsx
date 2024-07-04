import React from 'react';
import '../Item1.css';
import Item from './item';

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
        </div>
    );
}

export default ItemsList;