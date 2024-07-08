import React, { useState } from 'react';
import * as XLSX from 'xlsx';
import { saveAs } from 'file-saver';
import { Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Box, Typography, IconButton } from '@mui/material';
import { useDropzone } from 'react-dropzone';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import ExcelJS from 'exceljs/dist/exceljs.min.js';
const requiredColumns = ["שם גוף", "שם ומספר המכרז", "תאריך פרסום", "תאריך הגשה", "קטגוריות", "שם הזוכה ופרטי הזוכה", "מציעים", "מידע על הזוכה", "סכום ההצעה", "אומדן"];
const columnWidths = {
  "שם גוף": 10,
  "שם ומספר המכרז": 14,
  "תאריך פרסום": 10,
  "תאריך הגשה": 10,
  "קטגוריות": 10,
  "שם הזוכה ופרטי הזוכה": 18,
  "מציעים": 10,
  "מידע על הזוכה": 12,
  "סכום ההצעה": 10,
  "אומדן": 10
};
const columnSamples = {
  "שם גוף": ["שם גוף 1", "שם גוף 2", "שם גוף 3"],
  "שם ומספר המכרז": ["מכרז 123", "מכרז 456", "מכרז 789"],
  "תאריך פרסום": ["01/01/2023", "15/02/2023", "30/03/2023"],
  "תאריך הגשה": ["10/02/2023", "25/03/2023", "05/04/2023"],
  "קטגוריות": ["קטגוריה 1", "קטגוריה 2", "קטגוריה 3"],
  "שם הזוכה ופרטי הזוכה": ["זוכה 1", "זוכה 2", "זוכה 3"],
  "מציעים": ["מציע 1", "מציע 2", "מציע 3"],
  "מידע על הזוכה": ["מידע 1", "מידע 2", "מידע 3"],
  "סכום ההצעה": ["100,000", "200,000", "300,000"],
  "אומדן": ["אומדן 1", "אומדן 2", "אומדן 3"]
};
const ExportExcel = () => {
  const [data, setData] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');
  const [fileName, setFileName] = useState('');
  const exportToExcel = () => {
    const workbook = new ExcelJS.Workbook();
    const sheet = workbook.addWorksheet('Sheet1', { views: [{ rightToLeft: true }] });
    // Adding headers with custom background color for the title row only
    const headerRow = sheet.addRow(requiredColumns);
    headerRow.eachCell({ includeEmpty: true }, function(cell) {
      cell.fill = {
        type: 'pattern',
        pattern: 'solid',
        fgColor: { argb: 'FF1A6068' } // Custom color for headers
      };
      cell.font = { color: { argb: 'FFFFFF' } }; // White text
      cell.alignment = { vertical: 'middle', horizontal: 'center' }; // Center align headers
    });
    headerRow.height = 23; // Height for header row
    // Setting column widths dynamically
    requiredColumns.forEach((column, index) => {
      const width = columnWidths[column] || 20;
      const sheetColumn = sheet.getColumn(index + 1); // index + 1 because ExcelJS columns are 1-based
      sheetColumn.width = width;
    });
    // Adding data rows and setting their heights
    for (let i = 0; i < 3; i++) {
      const row = requiredColumns.map(column => columnSamples[column][i]);
      const dataRow = sheet.addRow(row);
      dataRow.height = 23; // Height for data rows
      dataRow.eachCell({ includeEmpty: true }, function(cell) {
        cell.alignment = { vertical: 'middle', horizontal: 'center' }; // Center align data cells
      });
    }
    // Save workbook
    workbook.xlsx.writeBuffer().then(buffer => {
      saveAs(new Blob([buffer]), 'example_tender.xlsx');
    }).catch(err => console.error('Error exporting Excel:', err));
  };
  const handleFile = (file) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      const data = new Uint8Array(e.target.result);
      const workbook = XLSX.read(data, { type: 'array' });
      const firstSheet = workbook.Sheets[workbook.SheetNames[0]];
      const jsonData = XLSX.utils.sheet_to_json(firstSheet, { header: 1 });
      const headers = jsonData[0];
      const missingColumns = requiredColumns.filter(column => !headers.includes(column));
      if (missingColumns.length > 0) {
        setErrorMessage(`העמודות הבאות חסרות בקובץ: ${missingColumns.join(', ')}`);
        setData([]);
        setFileName('');
      } else {
        setData(jsonData.slice(1));
        setErrorMessage('');
        setFileName(file.name);
      }
    };
    reader.readAsArrayBuffer(file);
  };
  const { getRootProps, getInputProps } = useDropzone({
    accept: '.xlsx, .xls',
    onDrop: (acceptedFiles) => {
      const file = acceptedFiles[0];
      if (file && (file.type === 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' || file.type === 'application/vnd.ms-excel')) {
        handleFile(file);
      } else {
        setErrorMessage('נא להעלות רק קובץ אקסל');
        setFileName('');
      }
    }
  });
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        textAlign: 'center',
        padding: '20px'
      }}
    >
      <Box
        {...getRootProps()}
        sx={{
          border: '2px dashed #ccc',
          padding: '40px',
          textAlign: 'center',
          marginBottom: '20px',
          width: '80%',
          maxWidth: '600px',
          minHeight: '200px'
        }}
      >
        <input {...getInputProps()} />
        <IconButton color="primary" aria-label="upload file" component="span">
          <CloudUploadIcon sx={{ fontSize: 80, color: 'rgba(26,96,104,255)' }} />
        </IconButton>
        <Typography variant="body1">
          {fileName ? fileName : 'גרור ושחרר כאן את קובץ האקסל או לחץ להעלאה'}
        </Typography>
      </Box>
      {errorMessage && (
        <Typography color="error" variant="body1">
          {errorMessage}
        </Typography>
      )}
      <Button variant="contained" onClick={exportToExcel}  sx={{
                  backgroundColor: 'rgba(26,96,104,255)',
                  '&:hover': {
                    backgroundColor: 'rgb(129, 175, 164)',
                  },
                  color: '#ffffff',
                }}>
      הורד קובץ לדוגמא
      </Button>
      {data.length > 0 && (
        <TableContainer component={Paper} sx={{ width: '80%', marginTop: '20px' }}>
          <Table sx={{ minWidth: 650 }}>
            <TableHead>
              <TableRow>
                {requiredColumns.map((column, index) => (
                  <TableCell key={index} align="center">
                    {column}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {data.map((row, rowIndex) => (
                <TableRow key={rowIndex}>
                  {row.map((cell, cellIndex) => (
                    <TableCell key={cellIndex} align="center">
                      {cell}
                    </TableCell>
                  ))}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </Box>
  );
};
export default ExportExcel;