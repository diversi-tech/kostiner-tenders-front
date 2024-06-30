import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Autocomplete from '@mui/material/Autocomplete';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';

export default function AutocompleteModal() {
  const [open, setOpen] = React.useState(false);
  const [selectedOptions, setSelectedOptions] = React.useState([]);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleSelect = (event, value) => {
    if (value.length > 3) {
      value.pop(); // Remove the last item if more than 3 are selected
    } else {
      setSelectedOptions(value);
    }
  };

  return (
    <div>
      <Button variant="outlined" color="primary" onClick={handleOpen}>
        פתח בחירת נושאים
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          backdropFilter: 'blur(5px)',
        }}
      >
        <Box
          sx={{
            width: '90%',
            maxWidth: 500,
            bgcolor: 'background.paper',
            boxShadow: 24,
            borderRadius: 1,
            p: 4,
            position: 'relative',
            textAlign: 'center'
          }}
        >
          <Card variant="outlined">
            <CardContent>
              <Typography variant="h6" component="div">
                בחר עד 3 נושאים
              </Typography>
              <Stack spacing={2}>
                <Autocomplete
                  multiple
                  limitTags={3}
                  disableCloseOnSelect
                  options={top100Films}
                  getOptionLabel={(option) => option.label}
                  value={selectedOptions}
                  onChange={handleSelect}
                  renderInput={(params) => (
                    <TextField {...params} variant="outlined" label="נושאים" />
                  )}
                />
              </Stack>
            </CardContent>
            <CardActions>
              <Button 
                variant="contained" 
                color="primary" 
                sx={{ margin: 'auto' }}
                onClick={handleClose} // אפשר לשים כאן פונקציה נוספת לטיפול בתשלום
              >
                שליחה לתשלום
              </Button>
            </CardActions>
          </Card>
        </Box>
      </Modal>
    </div>
  );
}

const top100Films = [
    { label: 'בנייה ותשתיות' },
    { label: 'שירותים מקצועיים' },
    { label: 'טכנולוגיה ותקשורת' },
    { label: 'מזון ומסחר תעופתי' },
    { label: 'שירותים רפואיים' },
    { label: 'חינוך והכשרה' },
    { label: 'שירותים לתעסוקה' },
    { label: 'שירותים פיננסיים ומשפטיים' },
    { label: 'מחקר ופיתוח' },
    { label: 'תרבות ופנאי' },
    { label: 'סביבה וקידום בריאות' },
    { label: 'שירותים חברתיים ומגזר שלישי' },
    { label: 'תחבורה ותחנות דלק' },
    { label: 'אנרגיה ומים' },
    { label: 'בטיחות ואבטחה' },
    { label: 'ניהול וייעוץ ארגוני' },
    { label: 'מוצרים וציוד' },
    { label: 'קניות ולוגיסטיקה' },
    { label: 'שירותים למגזר הציבורי' },
    { label: 'ביטוח ופיננסים' }
];
