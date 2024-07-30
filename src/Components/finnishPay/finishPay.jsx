import React from 'react';
import Box from '@mui/joy/Box';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import Typography from '@mui/joy/Typography';
import TaskAltIcon from '@mui/icons-material/TaskAlt';
import Button from '@mui/joy/Button'; // ייבוא הקומפוננטה Button מה- MUI/joy
import { useNavigate } from 'react-router-dom';

const PaymentConfirmation = () => {
    const navigate = useNavigate();

    const handleGoHome = () => {
        navigate('/');
    };

    return (
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
                                fontSize: '10rem', // Adjust size as needed
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
                        !תשלום בוצע בהצלחה
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
    );
};

export default PaymentConfirmation;
