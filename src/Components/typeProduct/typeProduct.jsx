// import * as React from 'react';
// import Box from '@mui/joy/Box';
// import Button from '@mui/joy/Button';
// import Card from '@mui/joy/Card';
// import CardContent from '@mui/joy/CardContent';
// import Typography from '@mui/joy/Typography';
// import Autocomplete from '@mui/material/Autocomplete';
// import Stack from '@mui/material/Stack';
// import TextField from '@mui/material/TextField';
// import { useNavigate } from 'react-router-dom';
// import { getAllCategories } from '../../Server/caregory'; // Adjust the path according to your project structure

// export default function TypeProduct({ typeTender }) {
//   const [selectedOptions, setSelectedOptions] = React.useState([]);
//   const [openAutocomplete, setOpenAutocomplete] = React.useState(false);
//   const [options, setOptions] = React.useState([]);
//   const nav = useNavigate();

//   React.useEffect(() => {
//     async function fetchProducts() {
//       try {
//         const products = await getAllCategories();
//         if (products) {
//           const priceKey = typeTender.type === 1 ? 'price_monthly' : 'price_subscription';
//           const formattedOptions = products.map(product => ({
//             label: `${product.category} - ₪${product[priceKey]}`,
//             value: product.category,
//             price: product[priceKey],
//           }));
//           setOptions(formattedOptions);
//         } else {
//           console.error('No products found');
//         }
//       } catch (error) {
//         console.error('Failed to fetch categories:', error);
//       }
//     }

//     fetchProducts();
//   }, [typeTender]);

//   const handleSelect = (event, value) => {
//     if (value.length > 3) {
//       value.pop(); // Remove the last item if more than 3 are selected
//     }
//     setSelectedOptions(value);
//     // Close Autocomplete if exactly 3 options are selected
//     if (value.length === 3) {
//       setOpenAutocomplete(false);
//     }
//   };

//   const handleNav = () => {
//     const dataToSend = {
//       selectedOptions: selectedOptions.map(option => option.value),
//     };

//     nav('/creditCard', {
//       state: { type: typeTender },
//     });
//   };

//   return (
//     <Box
//       sx={{
//         width: '90%',
//         maxWidth: 700,
//         bgcolor: 'transparent',
//         p: 4,
//         position: 'relative',
//         zIndex: 1,
//         textAlign: 'center',
//         margin: 'auto',
//         mt: 4,
//       }}
//     >
//       <Card
//         variant="outlined"
//         sx={{
//           mt: 4,
//           bgcolor: 'background.paper',
//           borderRadius: '16px',
//           transition: 'transform 0.3s ease',
//           '&:hover': {
//             transform: 'scale(1.05)',
//           },
//           width: '100%',
//           p: 2,
//         }}
//       >
//         <CardContent>
//           <Stack spacing={3}>
//             <Typography
//               variant="h6"
//               component="div"
//               sx={{
//                 fontFamily: 'var(--joy-fontFamily-display, "Inter", var(--joy-fontFamily-fallback, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"))',
//                 fontWeight: 'var(--joy-fontWeight-xl, 700)',
//                 fontSize: 'var(--Typography-fontSize, 1.5rem)',
//                 color: 'black',
//               }}
//             >
//               ?אילו תחומים מעניינים אותך
//             </Typography>
//             <Autocomplete
//               multiple
//               open={openAutocomplete} // Controlled by state
//               onOpen={() => setOpenAutocomplete(true)}
//               onClose={() => setOpenAutocomplete(false)}
//               value={selectedOptions}
//               onChange={handleSelect}
//               options={options}
//               getOptionLabel={(option) => option.label}
//               renderInput={(params) => (
//                 <TextField
//                   {...params}
//                   variant="outlined"
//                   label="בחר תחומים"
//                   placeholder="עד 3 תחומים"
//                 />
//               )}
//               sx={{ width: '100%' }}
//             />
//             <Button
//               variant="contained"
//               color="primary"
//               onClick={handleNav}
//               disabled={selectedOptions.length === 0}
//               sx={{
//                 bgcolor: 'rgba(26,96,104,255)',
//                 '&:hover': {
//                   bgcolor: 'rgb(129, 175, 164)',
//                 },
//                 color: '#FFFFFF',
//               }}
//             >
//               להמשיך לתשלום
//             </Button>
//           </Stack>
//         </CardContent>
//       </Card>
//     </Box>
//   );
// }

import * as React from 'react';
import Box from '@mui/joy/Box';
import Button from '@mui/joy/Button';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import Typography from '@mui/joy/Typography';
import Autocomplete from '@mui/material/Autocomplete';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import { useNavigate } from 'react-router-dom';
import { getAllCategories } from '../../Server/caregory'; // Adjust the path according to your project structure
export default function TypeProduct({ typeTender }) {
  const [selectedOptions, setSelectedOptions] = React.useState([]);
  const [openAutocomplete, setOpenAutocomplete] = React.useState(false);
  const [options, setOptions] = React.useState([]);
  const nav = useNavigate();
  React.useEffect(() => {
    async function fetchProducts() {
      try {
        const products = await getAllCategories();
        if (products) {
          const priceKey = typeTender.type === 1 ? 'price_monthly' : 'price_subscription';
          const formattedOptions = products.map(product => ({
            label: `${product.category} - ₪${product[priceKey]}`,
            value: product.category,
            price: product[priceKey],
          }));
          setOptions(formattedOptions);
        } else {
          console.error('No products found');
        }
      } catch (error) {
        console.error('Failed to fetch categories:', error);
      }
    }
    fetchProducts();
  }, [typeTender]);
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
  const handleNav = () => {
    const dataToSend = {
      type: typeTender, // הסוג ממנו הגענו
      selectedOptions: selectedOptions.map(option => ({
        price: option.price ,// מחיר
        quantity: 1,
        vatIncluded: false,
        name: option.value, // שם קטגוריה
        description: option.label // תיאור (שם קטגוריה + מחיר)
      })),
    };
console.log(dataToSend);
    nav('/creditCard', {
      state: { type: dataToSend },
    });
  };
  // Calculate the total price
  const totalPrice = selectedOptions.reduce((sum, option) => sum + option.price, 0);
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
            <Typography
              variant="body1"
              component="div"
              sx={{
                fontFamily: 'var(--joy-fontFamily-display, "Inter", var(--joy-fontFamily-fallback, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"))',
                fontWeight: 'var(--joy-fontWeight-md, 500)',
                fontSize: '1.2rem',
                color: 'black',
              }}
            >
              סה"כ לתשלום: ₪{totalPrice}
            </Typography>
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
              להמשיך לתשלום
            </Button>
          </Stack>
        </CardContent>
      </Card>
    </Box>
  );
}