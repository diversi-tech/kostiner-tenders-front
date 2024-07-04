import * as React from 'react';
import Box from '@mui/joy/Box';
import Button from '@mui/joy/Button';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import Typography from '@mui/joy/Typography';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import CircularProgress from '@mui/material/CircularProgress';

export default function TenderSearchBox() {
  const [tenderName, setTenderName] = React.useState('');
  const [loading, setLoading] = React.useState(false);
  const [found, setFound] = React.useState(null);

  const handleSearch = async () => {
    setLoading(true);
    setFound(null);
    
    // סימולציה של חיפוש במערכת
    setTimeout(() => {
      setLoading(false);
      if (tenderName === 'השם שקיים במערכת') {
        setFound(true);
      } else {
        setFound(false);
      }
    }, 2000); // סימולציה של 2 שניות
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
              found === false && (
                <Typography color="error">לא נמצא מכרז, הכנס שנית</Typography>
              )
            )}
            <Button
              variant="contained"
              color="primary"
              onClick={handleSearch}
              disabled={loading || !tenderName}
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
              שליחה לתשלום
            </Button>
          </Stack>
        </CardContent>
      </Card>
    </Box>
  );
}
