// import React, { useState } from 'react';
// import Cards from 'react-credit-cards-2';
// import 'react-credit-cards-2/dist/es/styles-compiled.css';
// import { Grid, Typography, TextField, Box, Button } from '@mui/material';
// import { useNavigate } from 'react-router-dom';

// const CreditCard = () => {

//     const nav = useNavigate();

//     const handleNav = () => {
//         const cardNumberError = validateCardNumber(state.number);
//         const expiryError = validateExpiry(state.expiry);
//         const cvcError = validateCvc(state.cvc);
//         const nameError = validateName(state.name);

//         setErrors({
//             number: cardNumberError,
//             expiry: expiryError,
//             cvc: cvcError,
//             name: nameError,
//         });

//         if (!cardNumberError && !expiryError && !cvcError && !nameError) {
//             console.log("ניווט לסיום תשלום");
//             nav('/finishPay');
//         } else {
//             console.log("ישנם שדות שאינם תקינים, אנא בדוק שוב");
//         }
//     };

//     const [state, setState] = useState({
//         number: '',
//         expiry: '',
//         cvc: '',
//         name: '',
//         focus: '',
//     });

//     const [errors, setErrors] = useState({
//         number: '',
//         expiry: '',
//         cvc: '',
//         name: '',
//     });

//     const handleInputChange = (evt) => {
//         const { name, value } = evt.target;
//         setState((prev) => ({ ...prev, [name]: value }));

//         // Validate input fields
//         if (name === 'number') {
//             setErrors((prev) => ({
//                 ...prev,
//                 number: validateCardNumber(value),
//             }));
//         } else if (name === 'expiry') {
//             setErrors((prev) => ({
//                 ...prev,
//                 expiry: validateExpiry(value),
//             }));
//         } else if (name === 'cvc') {
//             setErrors((prev) => ({
//                 ...prev,
//                 cvc: validateCvc(value),
//             }));
//         } else if (name === 'name') {
//             setErrors((prev) => ({
//                 ...prev,
//                 name: validateName(value),
//             }));
//         }
//     };

//     const handleInputFocus = (evt) => {
//         setState((prev) => ({ ...prev, focus: evt.target.name }));
//     };

//     const validateCardNumber = (value) => {
//         if (!value || !/^\d{16}$/.test(value)) {
//             return 'מספר כרטיס אשראי אינו תקין';
//         }
//         return '';
//     };

//     const validateExpiry = (value) => {
//         if (!value || !/^\d{2}\/\d{2}$/.test(value)) {
//             return 'תוקף הכרטיס אינו תקין (MM/YY)';
//         }
//         return '';
//     };

//     const validateCvc = (value) => {
//         if (!value || !/^\d{3}$/.test(value)) {
//             return 'CVC אינו תקין (3 ספרות)';
//         }
//         return '';
//     };

//     const validateName = (value) => {
//         if (!value || value.trim() === '') {
//             return 'שם בעל הכרטיס אינו תקין';
//         }
//         return '';
//     };

//     const handleSubmit = (evt) => {
//         evt.preventDefault();
//         const cardNumberError = validateCardNumber(state.number);
//         const expiryError = validateExpiry(state.expiry);
//         const cvcError = validateCvc(state.cvc);
//         const nameError = validateName(state.name);

//         setErrors({
//             number: cardNumberError,
//             expiry: expiryError,
//             cvc: cvcError,
//             name: nameError,
//         });

//         if (!cardNumberError && !expiryError && !cvcError && !nameError) {
//             console.log('נתונים תקינים, ניתן להמשיך');
//         } else {
//             console.log('ישנם שדות שאינם תקינים, אנא בדוק שוב');
//         }
//     };

//     return (
//         <Grid container spacing={2} alignItems="center" justifyContent="center">
//             <Grid item xs={12} sm={8} md={6} lg={4} mt={3}>
//                 <Box sx={{ p: 2, bgcolor: 'background.paper', borderRadius: 4 }}>
//                     <Typography variant="h6" gutterBottom textAlign="center"
//                         sx={{
//                             fontFamily: 'var(--joy-fontFamily-display, "Inter", var(--joy-fontFamily-fallback, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"))',
//                             fontWeight: 'var(--joy-fontWeight-xl, 700)',
//                             fontSize: 'var(--Typography-fontSize, 1.5rem)',
//                             color: 'black',
//                         }}>
//                         הכנס פרטי אשראי
//                     </Typography>
//                     <Cards
//                         number={state.number}
//                         expiry={state.expiry}
//                         cvc={state.cvc}
//                         name={state.name}
//                         focused={state.focus}
//                     />
//                     <form onSubmit={handleSubmit}>
//                         <Grid container spacing={1} mt={1}>
//                             <Grid item xs={12}>
//                                 <TextField
//                                     error={!!errors.number}
//                                     helperText={errors.number}
//                                     sx={{ width: '100%' }}
//                                     name="number"
//                                     placeholder="מספר כרטיס אשראי"
//                                     value={state.number}
//                                     onChange={handleInputChange}
//                                     onFocus={handleInputFocus}
//                                     maxLength={16}
//                                     fullWidth
//                                 />
//                             </Grid>
//                             <Grid item xs={6}>
//                                 <TextField
//                                     error={!!errors.expiry}
//                                     helperText={errors.expiry}
//                                     sx={{ width: '100%' }}
//                                     name="expiry"
//                                     placeholder="תוקף (MM/YY)"
//                                     value={state.expiry}
//                                     onChange={handleInputChange}
//                                     onFocus={handleInputFocus}
//                                     maxLength={5}
//                                     fullWidth
//                                 />
//                             </Grid>
//                             <Grid item xs={6}>
//                                 <TextField
//                                     error={!!errors.cvc}
//                                     helperText={errors.cvc}
//                                     sx={{ width: '100%' }}
//                                     name="cvc"
//                                     placeholder="CVC"
//                                     value={state.cvc}
//                                     onChange={handleInputChange}
//                                     onFocus={handleInputFocus}
//                                     maxLength={3}
//                                     fullWidth
//                                 />
//                             </Grid>
//                             <Grid item xs={12}>
//                                 <TextField
//                                     error={!!errors.name}
//                                     helperText={errors.name}
//                                     sx={{ width: '100%' }}
//                                     name="name"
//                                     placeholder="שם בעל הכרטיס"
//                                     value={state.name}
//                                     onChange={handleInputChange}
//                                     onFocus={handleInputFocus}
//                                     fullWidth
//                                 />
//                             </Grid>
//                             <Grid item xs={12}>
//                                 <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
//                                     <Button
//                                         type="submit"
//                                         variant="contained"
//                                         color="primary"
//                                         sx={{
//                                             backgroundColor: 'rgba(26,96,104,255)',
//                                             '&:hover': {
//                                                 backgroundColor: 'rgb(129, 175, 164)',
//                                             },
//                                             color: '#ffffff',
//                                             fontSize: '1.2rem', // גודל גופן גדול יותר
//                                             padding: '12px 24px', // מרווח פנימי גדול יותר
//                                             borderRadius: 5, // פינות מעוגלות
//                                         }}
//                                         onClick={handleNav}
//                                     >
//                                         שלח תשלום
//                                     </Button>

//                                 </Box>
//                             </Grid>
//                         </Grid>
//                     </form>
//                 </Box>
//             </Grid>
//         </Grid>
//     );
// };

// export default CreditCard;

// import React, { useEffect, useState } from 'react';
// import singleton from '../../Logic/payments';

// const CreditCard = (props) => {
//     const  {type, items}={...props}
//     const [url,setUrl] =useState('');

//     console.log("type: "+type,"items "+items);
//    useEffect(()=>{
//         const res = singleton.pay(type,items,{'name':'mmm','email':'maayan.malka3697@gmail.com'});
//         console.log("res ",res);
//         setUrl(res.url);

//    })





//     return (
//         <div style={{ width: '100%', height: '500px', border: '1px solid #ccc' }}>
//             <iframe 
//                 src={url} 
//                 style={{ width: '100%', height: '100%' }} 
//                 title="iframe"
//                 frameBorder="0"
//             />
//         </div>
//     );
// };

// export default CreditCard;


//*****************************************************--------------------------------------------------------------------------- */
// import React, { useContext, useEffect, useState } from 'react';
// import single from '../../Logic/payments';
// import './creditCard.css';
// import { UserContext } from '../../context/userContext';
// import { Card } from '@mui/material';

// const CreditCard = (props) => {
//     const  {type, items}={...props}
//     const [url, setUrl] = useState('');
//     const [loading, setLoading] = useState(true);
//     const user = useContext(UserContext);
//     const [error, setError]= useState('');
//     // const type = 1;
//     // const items = [{
//     //     "price": 45,
//     //     "quantity": 1,
//     //     "vatIncluded": false,
//     //     "name": "Product Name",
//     //     "description": "Product Description"
//     // }]

    
//     console.warn("user= ", user);
//     const fetchData = async () => {

//         try {
//             const res = await single.pay({...type.type}, items.selectedOptions, { 'name': user.user.user_name, 'email': user.user.email });
//             console.warn('res ',res);
//             if(res!=null)
//             {setUrl(res);}
//             else
//             {
//                 setError('אופס! נראה שהתרחשה שגיאה בעת טעינת דף התשלום. \n אנא נסה שנית')
//             }
//             setLoading(false);
//         }
//         catch (error) {
//             console.error("Error fetching URL: ", error);
//             setLoading(false);
//             // setUrl('https://app.upay.co.il/BANKRESOURCES/UPAY/redirectpages/b3JzOE9TK2lwSzlXOVI2c3hmajdmZEdwN2FkdkM5K3VwVUNkdkFudTRkZz0equal.html')

//         }
//     };
//     useEffect(() => {
//         fetchData();
//     }, []);

//     return (
//         <div style={{ width: '100%', height: '600px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
//             {loading ? (
//                 <div className="spinner"></div>
//             ) : (
//                 error==''?
//                 (
//                 <iframe
//                     src={url}
//                     style={{ width: '100%', height: '100%' }}
//                     title="iframe"
//                     frameBorder="0"
//                 />):
//                 <Card style={{
//                     width: '90%',
//                     height: 'auto',
//                     padding: '20px',
//                     margin: '20px auto',
//                     borderRadius: '10px',
//                     boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
//                     backgroundColor: '#f8d7da',
//                     color: '#721c24',
//                     textAlign: 'center',
//                     fontFamily: 'Arial, sans-serif'
//                 }}>
//                     <h2 style={{
//                         fontSize: '18px',
//                         fontWeight: 'bold',
//                         margin: 0
//                     }}>
//                         {error}
//                     </h2>
//                 </Card>
                

//             )}
//         </div>
//     );
// };

// export default CreditCard;

//--------------------------------------------------------------------------------------------------------

import React, { useContext, useEffect, useState } from 'react';
import single from '../../Logic/payments';
import './creditCard.css';
import { UserContext } from '../../context/userContext';
import { Card, Button, Typography } from '@mui/material';
import User from '../../Server/user'
import { CircularProgress, Box } from '@mui/material';
const CreditCard = (props) => {
    const { type, items } = { ...props }
    const [url, setUrl] = useState('');
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const userString = User.getCurrentUser; 
    const [user, setUser]= useState(User.getCurrentUser)

// if (userString) {
//     try {
//        const user = JSON.parse(userString); // המרה ל-JSON
//     // setUser({...user1})
//     } catch (error) {
//         console.error("Error parsing JSON from localStorage:", error);
//     }
// } else {
//     console.warn("No user found in localStorage");
// }
    // localStorage.getItem('user'); // שליפת הנתונים כ-string
    

    const fetchData = async () => {
        try {
            console.log("in credit card. in fetchData. user: : : ",user);
            const itemsToSend = type == 1? {...items.name} : {...items.selectedOptions};
            console.warn("itemsToSend ", itemsToSend);
            console.warn("\n \n \n \n ", user?.user_name+'\n\n\n '+  user.email);

            const res = await single.pay(type, itemsToSend, { 'name': user?.user_name, 'email': user.email});
            console.warn('res ', res);
            if (res != null) {
                setUrl(res);
            } else {
                setError('אופס! נראה שהתרחשה שגיאה בעת טעינת דף התשלום. \n אנא התחברו מחדש לחשבונכם ונסו שוב.');

            }
            setLoading(false);
        } catch (error) {
            console.error("Error fetching URL: ", error);
            setLoading(false);
            setError('אופס! נראה שהתרחשה שגיאה בעת טעינת דף התשלום. \n אנא נסה שנית');
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    const handleRedirect = () => {
        window.location.href = url;
    };

    return (
        <div style={{ width: '100%', height: '600px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            {loading ? (
                <Box
                display="flex"
                flexDirection="column"
                alignItems="center"
                justifyContent="center"
                height="100vh"
              >
                <Typography variant="h6" sx={{ mb: 2 ,color:'white'}}>
                  אנא המתן בזמן שאנו טוענים את דף התשלום
                </Typography>
                <CircularProgress size={60} />
              </Box>
            ) : (
                error === '' ? (
                    <Card style={{
                        width: '90%',
                        height: 'auto',
                        padding: '20px',
                        margin: '20px auto',
                        borderRadius: '10px',
                        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                        backgroundColor: '#ffffff',
                        color: '#000000',
                        textAlign: 'center',
                        fontFamily: 'Arial, sans-serif'
                    }}>
                        <Typography variant="h5" component="h2" style={{ marginBottom: '20px' }}>
                            מדיניות האתר
                        </Typography>
                        <Typography variant="body1" style={{ marginBottom: '20px' }}>
                            אנו שואפים להעניק לך את חוויית הקנייה הטובה ביותר. כל עסקה מתבצעת בהתאם למדיניות שלנו, המובאת כאן לצורך התייחסותך.
                            <br /><br />
                            התשלום יבוצע בצורה מאובטחת ונעימה, ואנו נוודא שתשובה לשאלותיך תינתן במהרה.
                        </Typography>
                        <Button
                            onClick={handleRedirect}
                            variant="contained"
                            color="primary"
                            style={{ marginTop: '20px' }}
                        >
                            המשך לתשלום
                        </Button>
                    </Card>
                ) : (
                    <Card style={{
                        width: '90%',
                        height: 'auto',
                        padding: '20px',
                        margin: '20px auto',
                        borderRadius: '10px',
                        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                        backgroundColor: '#f8d7da',
                        color: '#721c24',
                        textAlign: 'center',
                        fontFamily: 'Arial, sans-serif'
                    }}>
                        <Typography variant="h5" component="h2" style={{ marginBottom: '20px' }}>
                            {error}
                        </Typography>
                    </Card>
                )
            )}
        </div>
    );
};

export default CreditCard;
