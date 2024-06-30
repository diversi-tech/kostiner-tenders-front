import { TextField } from '@mui/material';
import React, { useState } from 'react';
import Cards from 'react-credit-cards-2';
import 'react-credit-cards-2/dist/es/styles-compiled.css';
const CreditCard = () => {
  const [state, setState] = useState({
    number: '',
    expiry: '',
    cvc: '',
    name: '',
    focus: '',
  });

  const handleInputChange = (evt) => {
    const { name, value } = evt.target;
    
    setState((prev) => ({ ...prev, [name]: value }));
  }

  const handleInputFocus = (evt) => {
    setState((prev) => ({ ...prev, focus: evt.target.name }));
  }

  return (
    <div>
      <Cards
        number={state.number}
        expiry={state.expiry}
        cvc={state.cvc}
        name={state.name}
        focused={state.focus}
      />
      <form>
        <TextField
          type="number"
          name="number"
          placeholder="Card Number"
          value={state.number}
          onChange={handleInputChange}
          onFocus={handleInputFocus}
          maxLength={16}
        />
         <TextField
          type="number"
          name="expiry"
          placeholder="תוקף"
          value={state.expiry}
          onChange={handleInputChange}
          onFocus={handleInputFocus}
          maxLength={4}
        />
         <TextField
          type="text"
          name="name"
          placeholder="שם בעל הכרטיס"
          value={state.name}
          onChange={handleInputChange}
          onFocus={handleInputFocus}
        />
         <TextField
          type="number"
          name="cvc"
          placeholder="CVC"
          value={state.cvc}
          onChange={handleInputChange}
          onFocus={handleInputFocus}
          maxLength={3}

        />
        
      </form>
    </div>
  );
}

export default CreditCard;


// import React from 'react';
// import { useForm } from 'react-hook-form';
// import { TextField, Button, Grid, Container, Typography, Box, Card, CardContent } from '@material-ui/core';
// import { CreditCard } from '@mui/icons-material';

// const CreditCards = () => {
//   const { register, handleSubmit, formState: { errors } } = useForm();

//   const onSubmit = async (data) => {
//     const response = await fetch('/api/process_payment', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify(data)
//     });

//     const result = await response.json();
//     if (result.success) {
//       alert('Payment successful!');
//     } else {
//       alert('Payment failed. Please try again.');
//     }
//   };

//   return (
//     <Container maxWidth="md">
//       <Typography variant="h4" gutterBottom>Payment Form</Typography>
//       <Grid container spacing={3}>
//         <Grid item xs={12} md={4}>
//           <Card>
//             <CardContent>
//               <Typography variant="h5" component="h2">
//                 Credit Card
//               </Typography>
//               <Box mt={2}>
//                 {/* Here you can add an image or icon of a credit card */}
//                 <img src="https://via.placeholder.com/150" alt="Credit Card" style={{ width: '100%' }} />
//               </Box>
//             </CardContent>
//           </Card>
//         </Grid>
//         <Grid item xs={12} md={8}>
//           <form onSubmit={handleSubmit(onSubmit)}>
//             <Grid container spacing={2}>
//               <Grid item xs={12}>
//                 <TextField
//                   label="Card Number"
//                   fullWidth
//                   {...register('cardNumber', { required: 'Card Number is required' })}
//                   error={!!errors.cardNumber}
//                   helperText={errors.cardNumber ? errors.cardNumber.message : ''}
//                 />
//               </Grid>
//               <Grid item xs={6}>
//                 <TextField
//                   label="Expiry Date"
//                   fullWidth
//                   {...register('expiry', { required: 'Expiry Date is required' })}
//                   error={!!errors.expiry}
//                   helperText={errors.expiry ? errors.expiry.message : ''}
//                 />
//               </Grid>
//               <Grid item xs={6}>
//                 <TextField
//                   label="CVV"
//                   fullWidth
//                   {...register('cvv', { required: 'CVV is required' })}
//                   error={!!errors.cvv}
//                   helperText={errors.cvv ? errors.cvv.message : ''}
//                 />
//               </Grid>
//               <Grid item xs={12}>
//                 <TextField
//                   label="Customer Email"
//                   fullWidth
//                   {...register('customerEmail', { required: 'Email is required' })}
//                   error={!!errors.customerEmail}
//                   helperText={errors.customerEmail ? errors.customerEmail.message : ''}
//                 />
//               </Grid>
//               <Grid item xs={12}>
//                 <Button type="submit" variant="contained" color="primary" fullWidth>
//                   Submit Payment
//                 </Button>
//               </Grid>
//             </Grid>
//           </form>
//         </Grid>
//       </Grid>
//     </Container>
//   );
// };

// export default CreditCards;
