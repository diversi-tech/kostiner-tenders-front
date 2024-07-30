import * as React from 'react';
import Box from '@mui/joy/Box';
import Button from '@mui/joy/Button';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import Typography from '@mui/joy/Typography';
import Autocomplete from '@mui/material/Autocomplete';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
<<<<<<< Updated upstream
// import IconStepper from '../IconStepper/IconStepper';

export default function typeProduct() {
  const [selectedOptions, setSelectedOptions] = React.useState([]);
  const [openAutocomplete, setOpenAutocomplete] = React.useState(false);
=======
import { useNavigate } from 'react-router-dom';
import { getAllCategories } from '../../Server/caregory'; // Adjust the path according to your project structure

export default function TypeProduct({ typeTender }) {
  const [selectedOptions, setSelectedOptions] = React.useState([]);
  const [openAutocomplete, setOpenAutocomplete] = React.useState(false);
  const [options, setOptions] = React.useState([]);
  const nav = useNavigate();

  React.useEffect(() => {
    async function fetchProducts() {
      const products = await getAllCategories();
      const priceKey = typeTender.type == 1 ? 'monthlyPrice' : 'subscriptionPrice';
      const formattedOptions = products.map(product => ({
        label: `${product.category} - ₪${product[priceKey]}`,
        value: product.category,
        price: product[priceKey],
      }));
      console.log(formattedOptions);
      setOptions(formattedOptions);
    }

    fetchProducts();
  }, [typeTender]);
>>>>>>> Stashed changes

  const handleSelect = (event, value) => {
    if (value.length > 3) {
      value.pop(); // Remove the last item if more than 3 are selected
    }
    setSelectedOptions(value);
    // Close Autocomplete if exactly 3 options are selected
    if (value.length === 3) {
      setOpenAutocomplete(false);
    }
  };

<<<<<<< Updated upstream
=======
  const handleNav = () => {
    // Create an object with selected options to send to the server
    const dataToSend = {
      selectedOptions: selectedOptions.map(option => option.value)
    };

    // Example navigation to '/creditCard'
    nav('/creditCard', {
      state: { type: typeTender } // Passing 'type' back to the '/creditCard' route
    });
  };

>>>>>>> Stashed changes
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
              value={selectedOptions}
              onChange={handleSelect}
              options={options}
              getOptionLabel={(option) => option.label}
              renderInput={(params) => (
                <TextField
                  {...params}
                  variant="outlined"
                  label="בחר תחומים"
                  placeholder="עד 3 תחומים"
                />
              )}
              sx={{ width: '100%' }}
            />
            <Button
              variant="contained"
              color="primary"
              onClick={handleNav}
              disabled={selectedOptions.length === 0}
              sx={{
                bgcolor: 'rgba(26,96,104,255)',
                '&:hover': {
                  bgcolor: 'rgb(129, 175, 164)',
                },
                color: '#FFFFFF',
              }}
            >
<<<<<<< Updated upstream
              שליחה לתשלום
=======
              להמשיך לתשלום
>>>>>>> Stashed changes
            </Button>
          </Stack>
        </CardContent>
      </Card>
    </Box>
  );
<<<<<<< Updated upstream
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
  { label: 'ביטוח ופיננסים' },
];
=======
}
>>>>>>> Stashed changes
