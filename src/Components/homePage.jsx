import React from 'react';
// import Stack from '@mui/material/Stack';
// import Button from '@mui/material/Button';
// import { BsPersonCircle,BsPerson } from "react-icons/bs";
// import { BsPerson } from "react-icons/bs";
import logo from '../image/logo.png';
import backgroundPicture from '../image/backgroundPicture.png';
import { Grid, Box, useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import Footer from './footer';
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
        <img src={logo} alt="Logo" style={{ width: logoSize, height: 'auto' }} />
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
            color: 'rgb(10, 63, 61)'
          }}>מידע מעולם המכרזים שיחשוף וינגיש לכם את תוצאות המכרזים הפומביים</h2>
        </Grid>
      </Grid>
    </Box>




  )
}