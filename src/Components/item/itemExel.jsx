import React from 'react';
import { saveAs } from 'file-saver';
import ExcelJS from 'exceljs';
import { Button, Box } from '@mui/material';
import './itemPdf.css'; // Import the CSS file

const requiredColumns = [
  "שם גוף", "שם ומספר המכרז", "תאריך פרסום", "תאריך הגשה", 
  "שם הזוכה", "מידע על הזוכה", "מציעים", "סכום ההצעה", "אומדן"
];

const columnWidths = {
  "שם גוף": 10,
  "שם ומספר המכרז": 18,
  "תאריך פרסום": 10,
  "תאריך הגשה": 10,
  // "קטגוריות": 10,
  "שם הזוכה ": 18,
  "מידע על הזוכה": 20,
  "מציעים": 20,
  "סכום ההצעה": 10,
  "אומדן": 10
};

const ExportExcel = ({ items }) => {
  const exportToExcel = async () => {
    const workbook = new ExcelJS.Workbook();
    const sheet = workbook.addWorksheet('Sheet1', { views: [{ rightToLeft: true }] });

    const headerRow = sheet.addRow(requiredColumns);
    headerRow.eachCell({ includeEmpty: true }, function(cell) {
      cell.fill = {
        type: 'pattern',
        pattern: 'solid',
        fgColor: { argb: 'FF1A6068' }
      };
      cell.font = { color: { argb: 'FFFFFF' } };
      cell.alignment = { vertical: 'middle', horizontal: 'center' };
    });
    headerRow.height = 23;

    requiredColumns.forEach((column, index) => {
      const width = columnWidths[column] || 20;
      const sheetColumn = sheet.getColumn(index + 1);
      sheetColumn.width = width;
    });

    items.forEach(item => {
      const row = [
        item.body_name,
        item.tender_number_name,
        item.published_date,
        item.submission_date,
        // item.category,
        item.winner_name,
        item.details_winner,
        item.participants,
        item.amount_bid, // Assuming "אומדן" is the id
        item.estimate
      ];
      const dataRow = sheet.addRow(row);
      dataRow.height = 23;
      dataRow.eachCell({ includeEmpty: true }, function(cell) {
        cell.alignment = { vertical: 'middle', horizontal: 'center' };
      });
    });

    try {
      const buffer = await workbook.xlsx.writeBuffer();
      const blob = new Blob([buffer], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
      saveAs(blob, 'tenders.xlsx');
    } catch (err) {
      console.error('Error exporting Excel:', err);
    }
  };

  return (
    <Box className="download-button-container"> {/* Apply CSS class for container */}
      <Button
        className="download-button" // Apply CSS class for button
        variant="contained"
        onClick={exportToExcel}
      >
        הורד קובץ אקסל
      </Button>
    </Box>
  );
};

export default ExportExcel;
