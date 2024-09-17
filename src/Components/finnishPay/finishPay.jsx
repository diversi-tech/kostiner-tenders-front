// import React, { useEffect, useState } from 'react';
// // import Box from '@mui/joy/Box';
// // import Card from '@mui/joy/Card';
// import {  CardContent ,Box, Card, Typography,Button} from '@mui/material';
// import ErrorIcon from '@mui/icons-material/Error'; // או כל אייקון שגיאה אחר

// // import CardContent from '@mui/joy/CardContent';
// // import Typography from '@mui/joy/Typography';
// import TaskAltIcon from '@mui/icons-material/TaskAlt';
// // import Button from '@mui/joy/Button'; // ייבוא הקומפוננטה Button מה- MUI/joy
// import { useNavigate, useLocation } from 'react-router-dom';
// import singleton from '../../Logic/UserHistory';
// const PaymentConfirmation = () => {
//     const navigate = useNavigate();

//     const handleGoHome = () => {
//         navigate('/');
//     };
//     const items = {}
//     const [error, setError] = useState('')
//     const p = 'אל דאגה! במידה והתשלום לא הצליח- חשבונך לא יחויב'
    
//     useEffect(async () => {
//         const location = useLocation();
//         const queryParams = new URLSearchParams(location.search);
//         const type = queryParams.get('type');
        
//         console.log("response type from YPAY = ", type);
        
//             const res = singleton.pushHistory(type, items);
//             const data = await res.json();
//             if (data.status == 200) {

//             }
//             else{
//                 // switch(res.failed)
//                 // {
//                 //     case 10:
//                 //         {
                            
//                 //         }
                    

//                 // }
                
//                 setError('נראה שזה לא עבד. אירעה שגיאה בעת התשלום. אנא נסה שנית')

//             }


        



//     });



//     return (<>
//         error == ''?
//         <Box
//             sx={{
//                 display: 'flex',
//                 justifyContent: 'center',
//                 alignItems: 'center',
//                 minHeight: '100vh',
//                 padding: '2rem',
//                 backgroundColor: 'transparent',
//             }}
//         >
//             <Card
//                 size="lg"
//                 variant="outlined"
//                 sx={{
//                     minWidth: 400,
//                     maxWidth: '100%',
//                     boxShadow: '0px 3px 6px #00000029',
//                     transition: 'transform 0.3s ease',
//                     '&:hover': {
//                         transform: 'scale(1.02)',
//                     },
//                     marginBottom: '7rem',
//                     textAlign: 'center',
//                     padding: '1rem',
//                     backgroundColor: 'white',
//                 }}
//             >
//                 <CardContent>
//                     <Box
//                         sx={{
//                             display: 'flex',
//                             justifyContent: 'center',
//                             alignItems: 'center',
//                             marginBottom: '1rem',
//                         }}
//                     >
//                         <TaskAltIcon
//                             sx={{
//                                 fontSize: '10rem', // Adjust size as needed
//                                 color: 'rgba(26,96,104,255)',
//                                 animation: 'checkmark 0.8s ease-in-out forwards',
//                                 '@keyframes checkmark': {
//                                     '0%': {
//                                         opacity: 0,
//                                         transform: 'scale(0.5)',
//                                     },
//                                     '50%': {
//                                         opacity: 1,
//                                         transform: 'scale(1.1)',
//                                     },
//                                     '100%': {
//                                         opacity: 1,
//                                         transform: 'scale(1)',
//                                     },
//                                 },
//                             }}
//                         />
//                     </Box>
//                     <Typography level="h2" textAlign="center" sx={{ marginTop: '1rem' }}>
//                         !תשלום בוצע בהצלחה
//                     </Typography>
//                     <Typography level="body1" textAlign="center" sx={{ marginTop: '0.5rem' }}>
//                         התשלום שלך עבר בהצלחה. תודה שבחרת בנו.
//                     </Typography>
//                     <Button
//                         onClick={handleGoHome}
//                         sx={{
//                             marginTop: '2rem',
//                             bgcolor: 'rgba(26,96,104,255)',
//                             color: 'white',
//                             '&:hover': {
//                                 bgcolor: 'rgb(129, 175, 164)',
//                             },
//                         }}
//                     >
//                         חזור לעמוד הבית
//                     </Button>
//                 </CardContent>
//             </Card>
//         </Box>
//         :
       
//         <Box
//             sx={{
//                 display: 'flex',
//                 justifyContent: 'center',
//                 alignItems: 'center',
//                 minHeight: '100vh',
//                 padding: '2rem',
//                 backgroundColor: 'transparent',
//             }}
//         >
//             <Card
//                 size="lg"
//                 variant="outlined"
//                 sx={{
//                     minWidth: 400,
//                     maxWidth: '100%',
//                     boxShadow: '0px 3px 6px #00000029',
//                     transition: 'transform 0.3s ease',
//                     '&:hover': {
//                         transform: 'scale(1.02)',
//                     },
//                     marginBottom: '7rem',
//                     textAlign: 'center',
//                     padding: '1rem',
//                     backgroundColor: 'white',
//                 }}
//             >
//                 <CardContent>
//                     <Box
//                         sx={{
//                             display: 'flex',
//                             justifyContent: 'center',
//                             alignItems: 'center',
//                             marginBottom: '1rem',
//                         }}
//                     >
//                         <ErrorIcon
//                             sx={{
//                                 fontSize: '10rem', // Adjust size as needed
//                                 color: 'rgba(255, 0, 0, 0.7)', // Red color for error
//                                 animation: 'errorShake 0.8s ease-in-out forwards',
//                                 '@keyframes errorShake': {
//                                     '0%': {
//                                         transform: 'translateX(0)',
//                                     },
//                                     '25%': {
//                                         transform: 'translateX(-10px)',
//                                     },
//                                     '50%': {
//                                         transform: 'translateX(10px)',
//                                     },
//                                     '75%': {
//                                         transform: 'translateX(-10px)',
//                                     },
//                                     '100%': {
//                                         transform: 'translateX(0)',
//                                     },
//                                 },
//                             }}
//                         />
//                     </Box>
//                     <Typography level="h2" textAlign="center" sx={{ marginTop: '1rem', color: 'rgba(255, 0, 0, 0.8)' }}>
//                         !אירעה שגיאה
//                     </Typography>
//                     <Typography level="body1" textAlign="center" sx={{ marginTop: '0.5rem' }}>
//                         משהו השתבש. אנא נסה שנית או צור קשר עם התמיכה.
//                     </Typography>
//                     <Button
//                         onClick={handleGoHome}
//                         sx={{
//                             marginTop: '2rem',
//                             bgcolor: 'rgba(255, 0, 0, 0.7)', // Red color for error
//                             color: 'white',
//                             '&:hover': {
//                                 bgcolor: 'rgb(200, 0, 0)', // Darker red for hover
//                             },
//                         }}
//                     >
//                         חזור לעמוד הבית
//                     </Button>
//                 </CardContent>
//             </Card>
//         </Box>
//         </>
//     )

// }
// export default PaymentConfirmation;

import React, { useContext, useEffect, useState } from 'react';
import { Box, Card, CardContent, Typography, Button } from '@mui/material';
import ErrorIcon from '@mui/icons-material/Error'; // או כל אייקון שגיאה אחר
import TaskAltIcon from '@mui/icons-material/TaskAlt';
import { useNavigate, useLocation, useParams } from 'react-router-dom';
import singleton from '../../Logic/UserHistory';
import sin from '../../Logic/LoginService'
import user from '../../Server/user'
// import { UserContext } from '../../context/userContext';
import '../creditCard/creditCard.css'
const PaymentConfirmation = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [error, setError] = useState('');
    const p = 'אל דאגה! במידה והתשלום לא הצליח- חשבונך לא יחויב';
    const {type} = useParams();
    const {items} = useParams();
    const [tryAgain, setTryAgain] = useState(0);
    const [loading, setLoading] = useState(true);

    const handleGoHome = () => {
        navigate('/');
    };

    const userContext = sin.decodeJwtToken(localStorage.getItem('authToken'))
    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                const user_ID = userContext.user_id;
                console.log("finishPay, typeOf items:", typeof items);
                const res = await singleton.pushHistory(type, items, user_ID);
                setLoading(false);
                console.log("response type from YPAY = " + type," \n items: "+items);        
                console.warn("res ====== ",res);

                if (res.status === 200) {
                    // התשלום עבר בהצלחה
                    setError('');
                    setLoading(false);
                    //רענון המשתמש
                    await sin.fetchAndSetUser()

                    //------------------
                } else {
                    // שגיאה בתשלום
                    setError('לא הצלחנו לשמור את המנוי שלך');
                    setLoading(false);
                }
            } catch (err) {
                console.error("An error occurred in Payment:", err);
                setError('לא הצלחנו לשמור את המנוי שלך');
                setLoading(false);
            }
        };

        fetchData();
    }, [location.search, tryAgain]);

    return (
        <>
         {loading ?
          <Box
          sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              minHeight: '100vh',
              padding: '2rem',
              backgroundColor: 'transparent',
          }}
      >
         <div className="spinner"></div></Box>
         :
        
            <>
            {type < 10 && error == '' ? 
                
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        minHeight: '100vh',
                        padding: '2rem',
                        backgroundColor: 'transparent',
                    }}
                >
                    
                    <Card
                        size="lg"
                        variant="outlined"
                        sx={{
                            minWidth: 400,
                            maxWidth: '100%',
                            boxShadow: '0px 3px 6px #00000029',
                            transition: 'transform 0.3s ease',
                            '&:hover': {
                                transform: 'scale(1.02)',
                            },
                            marginBottom: '7rem',
                            textAlign: 'center',
                            padding: '1rem',
                            backgroundColor: 'white',
                        }}
                    >
                        <CardContent>
                            <Box
                                sx={{
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    marginBottom: '1rem',
                                }}
                            >
                                <TaskAltIcon
                                    sx={{
                                        fontSize: '10rem',
                                        color: 'rgba(26,96,104,255)',
                                        animation: 'checkmark 0.8s ease-in-out forwards',
                                        '@keyframes checkmark': {
                                            '0%': {
                                                opacity: 0,
                                                transform: 'scale(0.5)',
                                            },
                                            '50%': {
                                                opacity: 1,
                                                transform: 'scale(1.1)',
                                            },
                                            '100%': {
                                                opacity: 1,
                                                transform: 'scale(1)',
                                            },
                                        },
                                    }}
                                />
                            </Box>
                            <Typography level="h2" textAlign="center" sx={{ marginTop: '1rem' }}>
                                !התשלום בוצע בהצלחה
                            </Typography>
                            <Typography level="body1" textAlign="center" sx={{ marginTop: '0.5rem' }}>
                                התשלום שלך עבר בהצלחה. תודה שבחרת בנו.
                            </Typography>
                            <Button
                                onClick={handleGoHome}
                                sx={{
                                    marginTop: '2rem',
                                    bgcolor: 'rgba(26,96,104,255)',
                                    color: 'white',
                                    '&:hover': {
                                        bgcolor: 'rgb(129, 175, 164)',
                                    },
                                }}
                            >
                                חזור לעמוד הבית
                            </Button>
                        </CardContent>
                    </Card>
                </Box>
             : type >= 10 ? 
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        minHeight: '100vh',
                        padding: '2rem',
                        backgroundColor: 'transparent',
                    }}
                >
                    <Card
                        size="lg"
                        variant="outlined"
                        sx={{
                            minWidth: 400,
                            maxWidth: '100%',
                            boxShadow: '0px 3px 6px #00000029',
                            transition: 'transform 0.3s ease',
                            '&:hover': {
                                transform: 'scale(1.02)',
                            },
                            marginBottom: '7rem',
                            textAlign: 'center',
                            padding: '1rem',
                            backgroundColor: 'white',
                        }}
                    >
                        <CardContent>
                            <Box
                                sx={{
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    marginBottom: '1rem',
                                }}
                            >
                                <ErrorIcon
                                    sx={{
                                        fontSize: '10rem',
                                        color: 'rgba(255, 0, 0, 0.7)',
                                        animation: 'errorShake 0.8s ease-in-out forwards',
                                        '@keyframes errorShake': {
                                            '0%': {
                                                transform: 'translateX(0)',
                                            },
                                            '25%': {
                                                transform: 'translateX(-10px)',
                                            },
                                            '50%': {
                                                transform: 'translateX(10px)',
                                            },
                                            '75%': {
                                                transform: 'translateX(-10px)',
                                            },
                                            '100%': {
                                                transform: 'translateX(0)',
                                            },
                                        },
                                    }}
                                />
                            </Box>
                            <Typography level="h2" textAlign="center" sx={{ marginTop: '1rem', color: 'rgba(255, 0, 0, 0.8)' }}>
                                !אירעה שגיאה
                            </Typography>
                            <Typography level="body1" textAlign="center" sx={{ marginTop: '0.5rem' }}>
                            אירעה שגיאה בעת התשלום.\n אנא נסה שנית
                                <br/> 
                                {p}
                            </Typography>
                            <Button
                                onClick={handleGoHome}
                                sx={{
                                    marginTop: '2rem',
                                    bgcolor: 'rgba(255, 0, 0, 0.7)',
                                    color: 'white',
                                    '&:hover': {
                                        bgcolor: 'rgb(200, 0, 0)',
                                    },
                                }}
                            >
                                חזור לעמוד הבית
                            </Button>
                        </CardContent>
                    </Card>
                </Box>
            :
            <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        minHeight: '100vh',
                        padding: '2rem',
                        backgroundColor: 'transparent',
                    }}
                >
                    <Card
                        size="lg"
                        variant="outlined"
                        sx={{
                            minWidth: 400,
                            maxWidth: '100%',
                            boxShadow: '0px 3px 6px #00000029',
                            transition: 'transform 0.7s ease',
                            '&:hover': {
                                transform: 'scale(1.02)',
                            },
                            marginBottom: '7rem',
                            textAlign: 'center',
                            padding: '1rem',
                            backgroundColor: 'white',
                        }}
                    >
                        <CardContent>
                            <Box
                                sx={{
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    marginBottom: '1rem',
                                }}
                            >
                                <ErrorIcon
                                    sx={{
                                        fontSize: '10rem',
                                        color: 'rgba(255, 0, 0, 0.7)',
                                        animation: 'errorShake 0.8s ease-in-out forwards',
                                        '@keyframes errorShake': {
                                            '0%': {
                                                transform: 'translateX(0)',
                                            },
                                            '25%': {
                                                transform: 'translateX(-10px)',
                                            },
                                            '50%': {
                                                transform: 'translateX(10px)',
                                            },
                                            '75%': {
                                                transform: 'translateX(-10px)',
                                            },
                                            '100%': {
                                                transform: 'translateX(0)',
                                            },
                                        },
                                    }}
                                />
                            </Box>
                            <Typography level="h2" textAlign="center" sx={{ marginTop: '1rem', color: 'rgba(255, 0, 0, 0.8)' }}>
                                !אירעה שגיאה
                            </Typography>
                            <Typography level="body1" textAlign="center" sx={{ marginTop: '0.5rem' }}>
                                {/* {error} */}
                                <br/> 
                                 לא הצלחנו לשמור את המוצר שקנית 
                                <br/>
                                .אנו ממליצים לבדוק את החיבור ולנסות שוב
                            </Typography>
                            <Button
                                onClick={()=>setTryAgain(tryAgain+1)}
                                sx={{
                                    marginTop: '2rem',
                                    bgcolor: 'rgba(255, 0, 0, 0.7)',
                                    color: 'white',
                                    '&:hover': {
                                        bgcolor: 'rgb(200, 0, 0)',
                                    },
                                }}
                            >
                               נסה שנית
                            </Button>
                        </CardContent>
                    </Card>
                </Box>
            
            
            }
            </>
            
        }
        </>
    );
};

export default PaymentConfirmation;
