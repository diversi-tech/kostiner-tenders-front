import React from 'react';
// import Stack from '@mui/material/Stack';
// import Button from '@mui/material/Button';
// import { BsPersonCircle,BsPerson } from "react-icons/bs";
// import { BsPerson } from "react-icons/bs";
import logo from './logo.png';
import backgroundPicture from './backgroundPicture.png';  
import { Grid, Box, useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';
export default function HomePage() {
  
  const theme = useTheme();
  const isMediumScreen = useMediaQuery(theme.breakpoints.between('sm', 'md'));
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
  const logoSize = isSmallScreen ? '150px' : isMediumScreen ? '200px' : '250px';

  return (
  
  <Box
    sx={{
        flexGrow: 1,
        minHeight: '100vh',
        backgroundImage: `url(${backgroundPicture})`, // החלף ב-URL של תמונת הרקע שלך
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        position: 'relative',
        padding: 2
      }}
    >
  <Box
    sx={{
        position: 'absolute',
        top: 50,
        right: 50,
        padding: 2,
        }}
    >
    <img src={logo} alt="Logo" style={{ width:logoSize,  height: 'auto' }}/>
  </Box>
    <Grid container spacing={2} alignItems="center" justifyContent="center">
        <Grid item xs={12} sx={{ marginTop: '180px' }}>
            <h1 style={{
            fontSize: isSmallScreen ? '60px' : isMediumScreen ? '90px' : '120px',
            fontFamily: 'EFT_Asaf Heavy',
                fontStyle: 'normal',
                color: 'rgb(10, 63, 61)'
            }}>קוסטינר</h1>
        </Grid>
        <Grid item xs={12} >
            <h2 style={{
                fontSize: isSmallScreen ? '25px' : isMediumScreen ? '35px' : '50px',
                fontFamily: 'EFT_Asaf Heavy',
                fontStyle: 'normal',
                color: 'rgb(10, 63, 61)'}}>מידע מעולם המכרזים שיחשוף וינגיש לכם את תוצאות המכרזים הפומביים</h2>
        </Grid>
    </Grid>
  </Box>
  


 /* <Stack direction="row" spacing={1}>
      <Button variant="outlined" 
      style={{
        position: 'absolute',
        top: '25px',    // מרחק מהגבוה
        right: '850px',  // מרחק מהצדדים
        width: '300px', // גודל
        height: 'auto',
        color:'rgb(10, 82, 78)',
        fontSize:'18px',
        borderColor:'rgb(10, 82, 78)',
        borderWidth:'3px',
        fontSize:'25px',
        borderRadius:'25px'
      }}
      startIcon={<BsPersonCircle/>}
      >
        להרשמה
      </Button>
      <Button variant="outlined" direction="row" spacing={11} 
      style={{position: 'absolute',
        top: '25px',    // מרחק מהגבוה
        right: '1200px',  // מרחק מהצדדים
        width: '300px', // גודל
        height: 'auto',
        color:'rgb(10, 82, 78)',
        fontSize:'18px' ,
        borderColor:'rgb(10, 82, 78)',
        borderWidth:'3px',
        fontSize:'25px',
        borderRadius:'25px'
      }}
      startIcon={<BsPerson/>}
        >
        לכניסה לחשבונך
      </Button>
    </Stack> */

            )
}