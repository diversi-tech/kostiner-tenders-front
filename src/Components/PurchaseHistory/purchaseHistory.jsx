import React, { useState, useEffect } from 'react';
import './purchaseHistory.css'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingBag, faMoneyBillWave, faFileInvoice, faCalendarAlt, faDatabase } from '@fortawesome/free-solid-svg-icons';

const PurchaseHistory = () => {
    const [purchaseHistoryData, setPurchaseHistoryData] = useState([]);
    useEffect(() => {
        fetch('https://api')
            .then(response => response.json())
            .then(data => setPurchaseHistoryData(data))
            .catch(error => console.error('Error fetching data:', error));
    }, []);
    const handleViewInvoice = async (invoiceNumber) => {
        try {
            const response = await fetch(`https://api${invoiceNumber}`);
            if (response.ok) {
                const invoiceData = await response.json();
                console.log('Invoice Data:', invoiceData);

            } else {
                console.error('Failed to retrieve invoice data');
            }
        } catch (error) {
            console.error('Error fetching invoice data:', error);
        }
    };
    return (
        <div className="purchase-history-container">
            <h2>היסטוריית רכישות של המשתמש</h2>
            {purchaseHistoryData.length > 0 ? (
                <table>
                    <thead>
                        <tr>
                            <th><FontAwesomeIcon icon={faFileInvoice} className="icon" /> צפה בחשבונית</th>
                            <th><FontAwesomeIcon icon={faFileInvoice} className="icon" /> מספר חשבונית</th>
                            <th><FontAwesomeIcon icon={faCalendarAlt} className="icon" /> תאריך רכישה</th>
                            <th><FontAwesomeIcon icon={faDatabase} className="icon" /> כמות</th>
                            <th><FontAwesomeIcon icon={faMoneyBillWave} className="icon" /> מחיר</th>
                            <th><FontAwesomeIcon icon={faShoppingBag} className="icon" /> מוצר</th>
                        </tr>
                    </thead>
                    <tbody>
                        {purchaseHistoryData.map((purchase, index) => (
                            <tr key={index}>
                                <td onClick={() => handleViewInvoice(purchase.invoiceNumber)}>
                                    <img src={purchase.invoiceImageUrl} alt="Invoice" />
                                </td>
                                <td>{purchase.invoiceNumber}</td>
                                <td>{purchase.purchaseDate}</td>
                                <td>{purchase.amount}</td>
                                <td>{purchase.price}</td>
                                <td>{purchase.productName}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            ) : (
                <p>אין היסטוריית רכישות זמינה כרגע.</p>
            )}
        </div>
    );
};

export default PurchaseHistory;