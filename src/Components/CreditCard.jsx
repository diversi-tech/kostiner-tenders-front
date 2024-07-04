// // import { Input, TextField } from '@mui/material';
// // import React, { useState } from 'react';
// // import Cards from 'react-credit-cards-2';
// // import 'react-credit-cards-2/dist/es/styles-compiled.css';
// // const CreditCard = () => {
// //   const [state, setState] = useState({
// //     number: '',
// //     expiry: '',
// //     cvc: '',
// //     name: '',
// //     focus: '',
// //   });

// //   const handleInputChange = (evt) => {
// //     const { name, value } = evt.target;
    
// //     setState((prev) => ({ ...prev, [name]: value }));
// //   }

// //   const handleInputFocus = (evt) => {
// //     setState((prev) => ({ ...prev, focus: evt.target.name }));
// //   }

// //   return (
// //     <div>
// //         <h1>הכנס פרטי אשראי</h1>
// //       <Cards
// //         number={state.number}
// //         expiry={state.expiry}
// //         cvc={state.cvc}
// //         name={state.name}
// //         focused={state.focus}
// //       />
// //       <form>
    
// //         <input
// //           className='creditCardInput'
          
// //           name="number"
// //           placeholder="מספר כרטיס אשראי"
// //           value={state.number}
// //           onChange={handleInputChange}
// //           onFocus={handleInputFocus}
// //           maxLength={16}
          
// //         />
// //        <input  maxLength={2}/>
// //          <input maxLength={4}
          
// //           name="expiry"
// //           placeholder="תוקף"
// //           value={state.expiry}
// //           onChange={handleInputChange}
// //           onFocus={handleInputFocus}
          
// //           className='creditCardInput'
// //         />
// //           <br/>
// //          <input
// //           type="text"
// //           name="name"
// //           placeholder="שם בעל הכרטיס"
// //           value={state.name}
// //           onChange={handleInputChange}
// //           onFocus={handleInputFocus}
// //           className='creditCardInput'
// //         />
         
// //          <input
          
// //           name="cvc"
// //           placeholder="CVC"
// //           value={state.cvc}
// //           onChange={handleInputChange}
// //           onFocus={handleInputFocus}
// //           maxLength={3}
// //           className='creditCardInput'
// //         />
        
// //       </form>
// //     </div>
// //   );
// // }

// // export default CreditCard;


import React, { useState } from 'react';
import Cards from 'react-credit-cards-2';
import 'react-credit-cards-2/dist/es/styles-compiled.css';
import { Grid, Typography, TextField, Card, CardContent, Button } from '@mui/material';

const CreditCard = () => {
  const [state, setState] = useState({
    number: '',
    expiry: '',
    cvc: '',
    name: '',
    focus: '',
  });

  const [errors, setErrors] = useState({
    number: '',
    expiry: '',
    cvc: '',
  });

  const handleInputChange = (evt) => {
    const { name, value } = evt.target;
    setState((prev) => ({ ...prev, [name]: value }));
    
    // בכל שינוי בקלט, בוצע בדיקת תקינות
    if (name === 'number') {
      setErrors((prev) => ({
        ...prev,
        number: validateCardNumber(value),
      }));
    } else if (name === 'expiry') {
      setErrors((prev) => ({
        ...prev,
        expiry: validateExpiry(value),
      }));
    } else if (name === 'cvc') {
      setErrors((prev) => ({
        ...prev,
        cvc: validateCvc(value),
      }));
    }
  };

  const handleInputFocus = (evt) => {
    setState((prev) => ({ ...prev, focus: evt.target.name }));
  };

  const validateCardNumber = (value) => {
    if (!value || !/^\d{16}$/.test(value)) {
      return 'מספר כרטיס אשראי אינו תקין';
    }
    return '';
  };

  const validateExpiry = (value) => {
    if (!value || !/^\d{2}\/\d{2}$/.test(value)) {
      return 'תוקף הכרטיס אינו תקין (MM/YY)';
    }
    return '';
  };

  const validateCvc = (value) => {
    if (!value || !/^\d{3}$/.test(value)) {
      return 'CVC אינו תקין (3 ספרות)';
    }
    return '';
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    const cardNumberError = validateCardNumber(state.number);
    const expiryError = validateExpiry(state.expiry);
    const cvcError = validateCvc(state.cvc);

    setErrors({
      number: cardNumberError,
      expiry: expiryError,
      cvc: cvcError,
    });

    if (!cardNumberError && !expiryError && !cvcError) {
      // כאן תוכלי להמשיך לעבוד עם הנתונים או לשלוח אותם לשרת
      console.log('נתונים תקינים, ניתן להמשיך');
    } else {
      console.log('ישנם שדות שאינם תקינים, אנא בדוק שוב');
    }
  };

  return (
    <Grid container spacing={3} alignItems="center">
      <Grid item xs={12} md={4}>
        {/* <Card> */}
          <CardContent>
            <Typography variant="h5" component="h2">
              הכנס פרטי אשראי
            </Typography>
            <Cards
              number={state.number}
              expiry={state.expiry}
              cvc={state.cvc}
              name={state.name}
              focused={state.focus}
            />
          </CardContent>
        {/* </Card> */}
      </Grid>
      <Grid item xs={12} md={8}>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                error={!!errors.number}
                helperText={errors.number}
                className="creditCardInput"
                name="number"
                placeholder="מספר כרטיס אשראי"
                value={state.number}
                onChange={handleInputChange}
                onFocus={handleInputFocus}
                maxLength={16}
                fullWidth
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                error={!!errors.expiry}
                helperText={errors.expiry}
                className="creditCardInput"
                name="expiry"
                placeholder="תוקף (MM/YY)"
                value={state.expiry}
                onChange={handleInputChange}
                onFocus={handleInputFocus}
                maxLength={5}
                fullWidth
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                error={!!errors.cvc}
                helperText={errors.cvc}
                className="creditCardInput"
                name="cvc"
                placeholder="CVC"
                value={state.cvc}
                onChange={handleInputChange}
                onFocus={handleInputFocus}
                maxLength={3}
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                className="creditCardInput"
                name="name"
                placeholder="שם בעל הכרטיס"
                value={state.name}
                onChange={handleInputChange}
                onFocus={handleInputFocus}
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <Button type="submit" variant="contained" color="primary">
                שלח תשלום
              </Button>
            </Grid>
          </Grid>
        </form>
      </Grid>
    </Grid>
  );
};

export default CreditCard;
