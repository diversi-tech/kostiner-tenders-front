import React from 'react';
import PropTypes from 'prop-types';
import jsPDF from 'jspdf';
import 'jspdf-autotable';
import arialBase64 from './arialBase64'; // ייבוא המחרוזת מקובץ נפרד
function DownloadButton({ items }) {
    const downloadPDF = () => {
        const doc = new jsPDF();
        // הוספת גופן אריאל
        doc.addFileToVFS('arial.ttf', arialBase64);
        doc.addFont('arial.ttf', 'arial', 'normal');
        doc.setFont('arial');
        // הפך את הטקסט של הכותרות של העמודות לעברית הפוכה
        const reversedHeaders = [
            reverseHebrewText("ID"),
            reverseHebrewText(" סכום")+reverseHebrewText(" ההצעה"),
            reverseHebrewText(" על")+reverseHebrewText(" מידע")+reverseHebrewText(" הזוכה"),
            reverseHebrewText("מציעים"),
            reverseHebrewText(" זוכה")+reverseHebrewText(" שם")+reverseHebrewText(" ופרטים"),
            reverseHebrewText("קטגוריות"),
            reverseHebrewText(" הגשה")+reverseHebrewText(" תאריך"),
            reverseHebrewText(" תאריך")+reverseHebrewText("פרסום"),
            reverseHebrewText(" ומספר")+reverseHebrewText(" שם")+reverseHebrewText(" המכרז"),
            reverseHebrewText(" שם")+reverseHebrewText("גוף")
        ];
        const tableColumn = reversedHeaders;
        const tableRows = [];
        items.forEach(item => {
            const itemData = [
                { content: item.id, styles: { halign: 'right' } },
                { content: item.bidAmount, styles: { halign: 'right' } },
                { content: reverseHebrewText( item.winnerData), styles: { halign: 'right' } },
                { content: reverseHebrewText(item.offer), styles: { halign: 'right' } },
                { content: reverseHebrewText(item.winnerDetails), styles: { halign: 'right' } },
                { content: Array.isArray(item.category) ? item.category.map(reverseHebrewText).join(', ') : reverseHebrewText(item.category), styles: { halign: 'right' } },
                { content: item.dateSubmission, styles: { halign: 'right' } },
                { content: item.datePublished, styles: { halign: 'right' } },
                { content: reverseHebrewText(item.nameTender), styles: { halign: 'right' } },
                { content: reverseHebrewText(item.company), styles: { halign: 'right' } }
            ];
            tableRows.push(itemData);
        });
        doc.autoTable({
            head: [tableColumn],
            body: tableRows,
            styles: { font: 'arial', fontStyle: 'normal', textColor: [0, 0, 0] },
            headStyles: { fillColor: [52, 152, 219], textColor: 255 },
            theme: 'striped',
            didDrawCell: (data) => {
                if (data.section === 'body') {
                    doc.setFont('arial');
                }
            }
        });
        doc.save('items.pdf');
    };
    // פונקציה להפיכת הטקסט העברי
    const reverseHebrewText = (text) => {
        return text.split('').reverse().join('');
    };
    return (
        <button onClick={downloadPDF}>הורד PDF</button>
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