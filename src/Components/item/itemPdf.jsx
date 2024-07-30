import React from 'react';
import PropTypes from 'prop-types';
import jsPDF from 'jspdf';
import 'jspdf-autotable';
import arialBase64 from './arialBase64'; // ייבוא המחרוזת מקובץ נפרד
import './itemPdf.css';

function DownloadButton({ items }) {
    const downloadPDF = () => {
        const doc = new jsPDF();

        // הוספת גופן אריאל
        doc.addFileToVFS('arial.ttf', arialBase64);
        doc.addFont('arial.ttf', 'arial', 'normal');
        doc.setFont('arial');

        // כותרת הדף בצבע rgba(26,96,104,255)
        doc.setTextColor(255);
        doc.setFillColor(26, 96, 104);
        doc.setFontSize(20);
        doc.text('פרטי מכרזים', 105, 10, 'center', { fill: true });

        // הגדרת הכותרות בעברית עם הפיכה לפני הצגה
        const tableRows = items.map(item => [
            { content: item.id, styles: { halign: 'center' } },
            { content: item.bidAmount, styles: { halign: 'center' } },
            { content: reverseHebrewText(item.winnerData), styles: { halign: 'center' } },
            { content: reverseHebrewText(item.offer), styles: { halign: 'center' } },
            { content: reverseHebrewText(item.winnerDetails), styles: { halign: 'center' } },
            { content: Array.isArray(item.category) ? item.category.map(reverseHebrewText).join(', ') : reverseHebrewText(item.category), styles: { halign: 'center' } },
            { content: item.dateSubmission, styles: { halign: 'center' } },
            { content: item.datePublished, styles: { halign: 'center' } },
            { content: reverseHebrewText(item.nameTender), styles: { halign: 'center' } },
            { content: reverseHebrewText(item.company), styles: { halign: 'center' } }
        ]);

        // יצירת הטבלה ב־PDF
        doc.autoTable({
            head: [
                [
                    "DI",
                    "סכום ההצעה",
                    "מידע על הזוכה",
                    "מציעים",
                    "שם ופרטי הזוכה",
                    "קטגוריות",
                    "תאריך הגשה",
                    "תאריך פרסום",
                    "שם ומספר המכרז",
                    "שם הגוף"
                ].map(reverseHebrewText)
            ],
            body: tableRows,
            startY: 20,
            styles: { font: 'arial', fontStyle: 'normal', textColor: [0, 0, 0], halign: 'center' },
            headStyles: { fillColor: [26, 96, 104, 255], textColor: 255 },
            theme: 'striped',
            didDrawCell: (data) => {
                if (data.section === 'body') {
                    doc.setFont('arial');
                }
            }
        });

        // שמירת הקובץ
        doc.save('פרטי מכרזים.pdf');
    };

    // פונקציה להפיכת האותיות בכל מילה ושמירה על סדר המילים
    const reverseHebrewText = (text) => {
        if (!text) return '';
        return text.split(' ').map(word => word.split('').reverse().join('')).join(' ');
    };

    return (
        <div className="download-button-container">
            <button className="download-button" onClick={downloadPDF}>הורד PDF</button>
        </div>
    );
}

DownloadButton.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
            company: PropTypes.string.isRequired,
            nameTender: PropTypes.string.isRequired,
            datePublished: PropTypes.string.isRequired,
            dateSubmission: PropTypes.string.isRequired,
            category: PropTypes.oneOfType([PropTypes.string, PropTypes.arrayOf(PropTypes.string)]).isRequired,
            winnerDetails: PropTypes.string.isRequired,
            offer: PropTypes.string.isRequired,
            winnerData: PropTypes.string.isRequired,
            bidAmount: PropTypes.string.isRequired,
            id: PropTypes.string.isRequired,
        })
    ).isRequired,
};

export default DownloadButton;
