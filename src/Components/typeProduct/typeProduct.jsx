import * as React from 'react';
import Box from '@mui/joy/Box';
import Button from '@mui/joy/Button';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import Typography from '@mui/joy/Typography';
import Autocomplete from '@mui/material/Autocomplete';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import IconStepper from '../stepPay/stepPay';

export default function AutocompleteBox() {
  const [selectedOptions, setSelectedOptions] = React.useState([]);
  const [openAutocomplete, setOpenAutocomplete] = React.useState(false); // State to manage Autocomplete open state

  const handleSelect = (event, value) => {
    if (value.length > 3) {
      value.pop(); // Remove the last item if more than 3 are selected
    } else {
      setSelectedOptions(value);
    }

    // Close Autocomplete if exactly 3 options are selected
    if (value.length === 3) {
      setOpenAutocomplete(false);
    }
  };

  const handleOpenAutocomplete = () => {
    setOpenAutocomplete(true); // Open the Autocomplete on button click
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
              ?אילו תחומים מעניינים אותך
            </Typography>
            <Autocomplete
              multiple
              open={openAutocomplete} // Controlled by state
              onOpen={() => setOpenAutocomplete(true)}
              onClose={() => setOpenAutocomplete(false)}
              limitTags={3}
              disableCloseOnSelect
              options={top100Films}
              getOptionLabel={(option) => option.label}
              value={selectedOptions}
              onChange={handleSelect}
              renderOption={(props, option) => (
                <li {...props}>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
                    {option.label}
                    <Typography variant="body2" color="textSecondary">
                      {option.price} ₪
                    </Typography>
                  </Box>
                </li>
              )}
              renderInput={(params) => (
                <TextField {...params} variant="outlined" label="בחר עד שלושה תחומים" />
              )}
            />
            <Button
              variant="contained"
              color="primary"
              onClick={handleOpenAutocomplete} // Open Autocomplete on button click
              sx={{
                margin: 'auto',
                borderRadius: '12px',
                backgroundColor: 'rgba(26,96,104,255)',
                color: 'white',
                '&:hover': {
                  backgroundColor: 'rgb(129, 175, 164)',
                },
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

const top100Films = [
  { label: 'בנייה ותשתיות', price: 100 },
  { label: 'שירותים מקצועיים', price: 150 },
  { label: 'טכנולוגיה ותקשורת', price: 200 },
  { label: 'מזון ומסחר תעופתי', price: 250 },
  { label: 'שירותים רפואיים', price: 300 },
  { label: 'חינוך והכשרה', price: 350 },
  { label: 'שירותים לתעסוקה', price: 400 },
  { label: 'שירותים פיננסיים ומשפטיים', price: 450 },
  { label: 'מחקר ופיתוח', price: 500 },
  { label: 'תרבות ופנאי', price: 550 },
  { label: 'סביבה וקידום בריאות', price: 600 },
  { label: 'שירותים חברתיים ומגזר שלישי', price: 650 },
  { label: 'תחבורה ותחנות דלק', price: 700 },
  { label: 'אנרגיה ומים', price: 750 },
  { label: 'בטיחות ואבטחה', price: 800 },
  { label: 'ניהול וייעוץ ארגוני', price: 850 },
  { label: 'מוצרים וציוד', price: 900 },
  { label: 'קניות ולוגיסטיקה', price: 950 },
  { label: 'שירותים למגזר הציבורי', price: 1000 },
  { label: 'ביטוח ופיננסים', price: 1050 },
];
