import React, { useState } from 'react';
import {
  Box,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle
} from '@mui/material';
import { format } from 'date-fns';

const initialData = [
  { id: 1, username: 'משתמש1', searchName: 'מכרז לתשתיות', date: new Date() },
  { id: 2, username: 'משתמש2', searchName: 'מכרז לבנייה', date: new Date() },
  { id: 3, username: 'משתמש3', searchName: 'מכרז לניקיון', date: new Date() },
  { id: 4, username: 'משתמש4', searchName: 'מכרז לשיפוצים', date: new Date() },
  { id: 5, username: 'משתמש5', searchName: 'מכרז להסעות', date: new Date() },
  { id: 6, username: 'משתמש6', searchName: 'מכרז להסעות', date: new Date() },
  { id: 7, username: 'משתמש7', searchName: 'מכרז להסעות', date: new Date() },
  { id: 8, username: 'משתמש8', searchName: 'מכרז להסעות', date: new Date() },
  { id: 9, username: 'משתמש9', searchName: 'מכרז להסעות', date: new Date() },
  { id: 10, username: 'משתמש10', searchName: 'מכרז להסעות', date: new Date() },
  { id: 11, username: 'משתמש11', searchName: 'מכרז להסעות', date: new Date() },
  { id: 12, username: 'משתמש12', searchName: 'מכרז להסעות', date: new Date() },
  { id: 13, username: 'משתמש13', searchName: 'מכרז להסעות', date: new Date() },
  { id: 14, username: 'משתמש14', searchName: 'מכרז להסעות', date: new Date() },
  { id: 15, username: 'משתמש15', searchName: 'מכרז להסעות', date: new Date() },
  { id: 16, username: 'משתמש16', searchName: 'מכרז להסעות', date: new Date() },
  { id: 17, username: 'משתמש17', searchName: 'מכרז להסעות', date: new Date() },
  { id: 18, username: 'משתמש18', searchName: 'מכרז להסעות', date: new Date() },
  { id: 19, username: 'משתמש19', searchName: 'מכרז להסעות', date: new Date() },
  { id: 20, username: 'משתמש20', searchName: 'מכרז להסעות', date: new Date() },
  { id: 21, username: 'משתמש21', searchName: 'מכרז להסעות', date: new Date() },
  { id: 22, username: 'משתמש22', searchName: 'מכרז להסעות', date: new Date() },
  { id: 23, username: 'משתמש23', searchName: 'מכרז להסעות', date: new Date() },
  { id: 24, username: 'משתמש24', searchName: 'מכרז להסעות', date: new Date() },
  { id: 25, username: 'משתמש25', searchName: 'מכרז להסעות', date: new Date() },
];

export default function CheckTender() {
  const [openDialog, setOpenDialog] = useState(false);
  const [dialogMessage, setDialogMessage] = useState('');
  const [rows, setRows] = useState(initialData);
  const [selectedRowId, setSelectedRowId] = useState(null);

  const handleDialogOpen = (message) => {
    setDialogMessage(message);
    setOpenDialog(true);
  };

  const handleDialogClose = () => {
    setOpenDialog(false);
    setDialogMessage('');
    setSelectedRowId(null);
  };

  const handleApprove = (id) => {
    handleDialogOpen('הבקשה אושרה, המשתמש יקבל הודעה');
    setSelectedRowId(id);
  };

  const handleReject = (id) => {
    handleDialogOpen('הבקשה סורבה, המשתמש יקבל הודעה');
    setSelectedRowId(id);
  };

  const handleDialogAction = () => {
    const message = dialogMessage.includes('אושרה') ? 'אישור' : 'סירוב';
    console.log(`${message} למשתמש עם id ${selectedRowId}`);
    handleDialogClose();
  };

  return (
    <Box
    sx={{
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      bgcolor: 'transparent',
      position: 'relative',
      zIndex: 1,
      textAlign: 'center',
      marginTop: 4, // מרחק מלמעלה של 2 רמות
    }}
    >
     <TableContainer component={Paper} sx={{ width: '90%', maxHeight: '70vh' }}>
  <Table stickyHeader sx={{ border: '2px solid rgba(26,96,104,255)', borderRadius: 2 }}>
    <TableHead>
      <TableRow sx={{ backgroundColor: 'rgba(26,96,104,255)' }}>
        <TableCell align="center" sx={{ color: 'rgba(26,96,104,255)', fontFamily: 'Arial', fontSize: '1.2rem', width: '25%',fontWeight: 'bold'  }}>
          שם משתמש
        </TableCell>
        <TableCell align="center" sx={{ color: 'rgba(26,96,104,255)', fontFamily: 'Arial', fontSize: '1.2rem', width: '25%',fontWeight: 'bold'  }}>
          שם לחיפוש
        </TableCell>
        <TableCell align="center" sx={{ color: 'rgba(26,96,104,255)', fontFamily: 'Arial', fontSize: '1.2rem', width: '25%' ,fontWeight: 'bold' }}>
          תאריך
        </TableCell>
        <TableCell align="center" sx={{ color: 'rgba(26,96,104,255)', fontFamily: 'Arial', fontSize: '1.2rem', width: '25%' ,fontWeight: 'bold' }}>
          פעולה
        </TableCell>
      </TableRow>
    </TableHead>
    <TableBody>
      {rows.map((row) => (
        <TableRow key={row.id} sx={{ borderBottom: 'none' }}>
          <TableCell align="center" sx={{ fontFamily: 'Arial', fontSize: '1rem', width: '25%' }}>{row.username}</TableCell>
          <TableCell align="center" sx={{ fontFamily: 'Arial', fontSize: '1rem', width: '25%' }}>{row.searchName}</TableCell>
          <TableCell align="center" sx={{ fontFamily: 'Arial', fontSize: '1rem', width: '25%' }}>{format(row.date, 'dd/MM/yyyy')}</TableCell>
          <TableCell align="center" sx={{ width: '25%' }}>
            <Box sx={{ display: 'flex', justifyContent: 'center', gap: 1 }}>
              <Button
                variant="contained"
                color="primary"
                sx={{
                  backgroundColor: 'rgba(26,96,104,255)',
                  color: 'white',
                  fontFamily: 'Arial',
                  '&:hover': {
                    backgroundColor: 'rgb(129, 175, 164)',
                  },
                }}
                onClick={() => handleApprove(row.id)}
              >
                אישור
              </Button>
              <Button
                variant="contained"
                color="error"
                sx={{
                  backgroundColor: 'rgba(26,96,104,255)',
                  color: 'white',
                  fontFamily: 'Arial',
                  '&:hover': {
                    backgroundColor: 'rgb(255, 82, 82)',
                  },
                }}
                onClick={() => handleReject(row.id)}
              >
                סירוב
              </Button>
            </Box>
          </TableCell>
        </TableRow>
      ))}
    </TableBody>
  </Table>
</TableContainer>


      <Dialog
        open={openDialog}
        onClose={handleDialogClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title" sx={{ backgroundColor: 'white', color: 'black', fontFamily: 'Arial' }}>הודעה</DialogTitle>
        <DialogContent sx={{ backgroundColor: 'white', color: 'black', fontFamily: 'Arial' }}>
          <DialogContentText id="alert-dialog-description">
            {dialogMessage}
          </DialogContentText>
        </DialogContent>
        <DialogActions sx={{ backgroundColor: 'white' }}>
          <Button onClick={handleDialogAction} autoFocus>
            אישור
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}

