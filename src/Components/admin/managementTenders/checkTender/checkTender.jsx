import React, { useState, useEffect } from 'react';
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
  DialogTitle,
} from '@mui/material';
import { format } from 'date-fns';
import { getAllRequests, updateRequests, deleteRequest } from '../../../../Server/requests'; // Ensure you import deleteRequests

export default function CheckTender() {
  const [openDialog, setOpenDialog] = useState(false);
  const [dialogMessage, setDialogMessage] = useState('');
  const [requests, setRequests] = useState([]);
  const [selectedRowId, setSelectedRowId] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const handleDialogOpen = (message) => {
    setDialogMessage(message);
    setOpenDialog(true);
  };

  const handleDialogClose = () => {
    setOpenDialog(false);
    setDialogMessage('');
    setSelectedRowId(null);
  };

  const handleApprove = async (id) => {
    try {
      await updateRequests(id);
      handleDialogOpen('הבקשה אושרה, המשתמש יקבל הודעה');
      setSelectedRowId(id);
    } catch (error) {
      console.error('שגיאה בעדכון הבקשה:', error);
      handleDialogOpen('נראה שקרתה שגיאה בעדכון הבקשה. אנא נסה שוב מאוחר יותר.');
    }
  };

  const handleReject = async (id) => {
    try {
      await deleteRequest(id);
      handleDialogOpen('הבקשה סורבה, המשתמש יקבל הודעה');
      setSelectedRowId(id);
    } catch (error) {
      console.error('שגיאה בעדכון הבקשה:', error);
      handleDialogOpen('נראה שקרתה שגיאה בעדכון הבקשה. אנא נסה שוב מאוחר יותר.');
    }
  };

  const handleDialogAction = () => {
    const message = dialogMessage.includes('אושרה') ? 'אישור' : 'סירוב';
    console.log(`${message} למשתמש עם id ${selectedRowId}`);
    handleDialogClose();
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const requestsData = await getAllRequests();
        setRequests(requestsData);
        setLoading(false);
      } catch (err) {
        console.error('Failed to fetch requests:', err);
        setError('Failed to fetch requests');
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) {
    return <Box>Loading...</Box>;
  }

  if (error) {
    return <Box>Error: {error}</Box>;
  }

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
        marginTop: 4,
      }}
    >
      <TableContainer component={Paper} sx={{ width: '90%', maxHeight: '70vh' }}>
        <Table stickyHeader sx={{ border: '2px solid rgba(26,96,104,255)', borderRadius: 2 }}>
          <TableHead>
            <TableRow sx={{ backgroundColor: 'rgba(26,96,104,255)' }}>
              <TableCell align="center" sx={{ color: 'rgba(26,96,104,255)', fontFamily: 'Arial', fontSize: '1.2rem', width: '25%', fontWeight: 'bold' }}>
                שם משתמש
              </TableCell>
              <TableCell align="center" sx={{ color: 'rgba(26,96,104,255)', fontFamily: 'Arial', fontSize: '1.2rem', width: '25%', fontWeight: 'bold' }}>
                שם לחיפוש
              </TableCell>
              <TableCell align="center" sx={{ color: 'rgba(26,96,104,255)', fontFamily: 'Arial', fontSize: '1.2rem', width: '25%', fontWeight: 'bold' }}>
                תאריך
              </TableCell>
              <TableCell align="center" sx={{ color: 'rgba(26,96,104,255)', fontFamily: 'Arial', fontSize: '1.2rem', width: '25%', fontWeight: 'bold' }}>
                פעולה
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {requests.length > 0 ? (
              requests.map((row) => (
                <TableRow key={row.request_id} sx={{ borderBottom: 'none' }}>
                  <TableCell align="center" sx={{ fontFamily: 'Arial', fontSize: '1rem', width: '25%' }}>{row.userID}</TableCell>
                  <TableCell align="center" sx={{ fontFamily: 'Arial', fontSize: '1rem', width: '25%' }}>{row.tender_name}</TableCell>
                  <TableCell align="center" sx={{ fontFamily: 'Arial', fontSize: '1rem', width: '25%' }}>{format(new Date(row.date), 'dd/MM/yyyy')}</TableCell>
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
                        onClick={() => handleApprove(row.request_id)}
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
                        onClick={() => handleReject(row.request_id)}
                      >
                        סירוב
                      </Button>
                    </Box>
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={4} align="center" sx={{ fontFamily: 'Arial', fontSize: '1rem' }}>
                  אין בקשות להצגה
                </TableCell>
              </TableRow>
            )}
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
