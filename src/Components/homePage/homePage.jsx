import React from 'react';
import backgroundPicture from '../../image/backgroundPicture.png';  
import { Grid, Box, useMediaQuery, Typography, Link } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import './homePage.css';

export default function HomePage() {

  const theme = useTheme();
  const isMediumScreen = useMediaQuery(theme.breakpoints.between('sm', 'md'));
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
  const titleSize = isSmallScreen ? '40px' : isMediumScreen ? '60px' : '80px';
  const subtitleSize = isSmallScreen ? '18px' : isMediumScreen ? '25px' : '35px';

  return (
    <Box className="homePageContainer" style={{ backgroundImage: `url(${backgroundPicture})` }}>
      <Grid container spacing={2} alignItems="center" justifyContent="center">
        <Grid item xs={12} className="titleGrid">
          <h1 className="title" style={{ fontSize: titleSize }}>
            בעל/ת עסק! מעוניין להרחיב את מעגל הלקוחות?
          </h1>
        </Grid>
        <Grid item xs={12}>
          <h2 className="subtitle" style={{ fontSize: subtitleSize }}>
            אנחנו כאן כדי לעזור! עם הדוחות המפורטים שלנו, הכוללים שם הזוכה, סכום ההצעה הזוכה, 
            משתתפים שנפסלו וסיבות הפסילה, תוכלו למקד את מאמצי השיווק שלכם בדיוק לחברות הנכונות 
            ולהגדיל את מאגר הלקוחות שלכם.
          </h2>
        </Grid>
        <Grid item xs={12} className="linkGrid">
          <Typography variant="body1">
            <Link 
              href="/product"
              className="MuiLink-root"
              underline="hover"
            >
              לבחירת מנוי לחץ פה
            </Link>
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
}
