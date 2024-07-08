import React, { useState } from 'react';
import Cards from 'react-credit-cards-2';
import 'react-credit-cards-2/dist/es/styles-compiled.css';
import { Grid, Typography, TextField, Box, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const CreditCard = () => {
    const nav = useNavigate();

    const handleNav = () => {
        console.log("ניווט לסיום תשלום");
        nav('/finishPay');
    }

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

        // Validate input fields
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
            console.log('נתונים תקינים, ניתן להמשיך');
        } else {
            console.log('ישנם שדות שאינם תקינים, אנא בדוק שוב');
        }
    };

    return (
        <Grid container spacing={2} alignItems="center" justifyContent="center">
            <Grid item xs={12} sm={8} md={6} lg={4} mt={3}>
                <Box sx={{ p: 2, bgcolor: 'background.paper', borderRadius: 4 }}>
                    <Typography variant="h6" gutterBottom textAlign="center"
                     sx={{
                        fontFamily: 'var(--joy-fontFamily-display, "Inter", var(--joy-fontFamily-fallback, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"))',
                        fontWeight: 'var(--joy-fontWeight-xl, 700)',
                        fontSize: 'var(--Typography-fontSize, 1.5rem)',
                        color: 'black',
                      }}> 
                        הכנס פרטי אשראי
                    </Typography>
                    <Cards
                        number={state.number}
                        expiry={state.expiry}
                        cvc={state.cvc}
                        name={state.name}
                        focused={state.focus}
                    />
                    <form onSubmit={handleSubmit}>
                        <Grid container spacing={1} mt={1}>
                            <Grid item xs={12}>
                                <TextField
                                    error={!!errors.number}
                                    helperText={errors.number}
                                    sx={{ width: '100%' }}
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
                                    sx={{ width: '100%' }}
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
                                    sx={{ width: '100%' }}
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
                                    sx={{ width: '100%' }}
                                    name="name"
                                    placeholder="שם בעל הכרטיס"
                                    value={state.name}
                                    onChange={handleInputChange}
                                    onFocus={handleInputFocus}
                                    fullWidth
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
                                <Button
    type="submit"
    variant="contained"
    color="primary"
    sx={{
        backgroundColor: 'rgba(26,96,104,255)',
        '&:hover': {
            backgroundColor: 'rgb(129, 175, 164)',
        },
        color: '#ffffff',
        fontSize: '1.2rem', // גודל גופן גדול יותר
        padding: '12px 24px', // מרווח פנימי גדול יותר
        borderRadius: 5, // פינות מעוגלות
    }}
    onClick={handleNav}
>
    שלח תשלום
</Button>

                                </Box>
                            </Grid>
                        </Grid>
                    </form>
                </Box>
            </Grid>
        </Grid>
    );
};

export default CreditCard;
