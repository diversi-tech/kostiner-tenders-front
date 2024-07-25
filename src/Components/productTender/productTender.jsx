import * as React from 'react';
import Box from '@mui/joy/Box';
import Button from '@mui/joy/Button';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import Typography from '@mui/joy/Typography';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import CircularProgress from '@mui/material/CircularProgress';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';

// ייבוא של הפונקציה המתאימה מתוך requests.js
import { addRequest } from "../../Server/requests"; 

export default function TenderSearchBox() {
  const [tenderName, setTenderName] = React.useState('');
  const [loading, setLoading] = React.useState(false);
  const [openSnackbar, setOpenSnackbar] = React.useState(false);
  const [snackbarMessage, setSnackbarMessage] = React.useState('');
  const [snackbarSeverity, setSnackbarSeverity] = React.useState('success');

  const handleSubmit = async () => {
    setLoading(true);

    const token = localStorage.getItem('authToken'); // קבלת מזהה המשתמש מה-localStorage
    const request = {
      token: token,
      date: new Date().toISOString(),
      tenderName: tenderName
    };

    try {
      await addRequest(request);
      setLoading(false);
      setSnackbarMessage('הבקשה נשלחה לבדיקה, בימים הקרובים תקבל עדכונים');
      setSnackbarSeverity('success');
      setOpenSnackbar(true);
    } catch (error) {
      console.error('Error adding request:', error);
      setLoading(false);
      setSnackbarMessage('שגיאה בשליחת הבקשה. נסה שוב מאוחר יותר.');
      setSnackbarSeverity('error');
      setOpenSnackbar(true);
    }
  };

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };
  return (
    <Box
      sx={{
        width: '90%',
        maxWidth: 700,
        bgcolor: 'transparent',
        p: 4,
        position: 'relative',
        zIndex: 1,
        textAlign: 'center',
        margin: 'auto',
        mt: 4,
      }}
    >
      <Card
        variant="outlined"
        sx={{
          mt: 4,
          bgcolor: 'background.paper',
          borderRadius: '16px',
          transition: 'transform 0.3s ease',
          '&:hover': {
            transform: 'scale(1.05)',
          },
          width: '100%',
          p: 2,
        }}
      >
        <CardContent>
          <Stack spacing={3}>
            <Typography
              variant="h6"
              component="div"
              sx={{
                fontFamily: 'var(--joy-fontFamily-display, "Inter", var(--joy-fontFamily-fallback, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"))',
                fontWeight: 'var(--joy-fontWeight-xl, 700)',
                fontSize: 'var(--Typography-fontSize, 1.5rem)',
                color: 'black',
              }}
            >
              הכנס שם מכרז
            </Typography>
            <TextField
              variant="outlined"
              label="שם מכרז"
              value={tenderName}
              onChange={(e) => setTenderName(e.target.value)}
              fullWidth
            />
            {loading ? (
              <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: '1rem' }}>
                <CircularProgress sx={{ color: 'rgba(26,96,104,255)' }} />
              </Box>
            ) : (
              <Button
                variant="contained"
                color="primary"
                onClick={handleSubmit}
                disabled={!tenderName}
                sx={{
                  margin: 'auto',
                  borderRadius: '12px',
                  backgroundColor: 'rgba(26,96,104,255)',
                  '&:hover': {
                    backgroundColor: 'rgb(129, 175, 164)',
                  },
                  color: 'white',
                }}
              >
                שלח לבדיקה
              </Button>
            )}
          </Stack>
        </CardContent>
      </Card>
      <Snackbar open={openSnackbar} autoHideDuration={6000} onClose={handleCloseSnackbar}>
        <Alert onClose={handleCloseSnackbar} severity={snackbarSeverity} sx={{ width: '100%' }}>
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </Box>
  );
}