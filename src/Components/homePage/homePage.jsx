import React from 'react';
import backgroundPicture from '../../image/backgroundPicture.png';  
import { Grid, Box, useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import './homePage.css';

export default function HomePage() {

  const theme = useTheme();
  const isMediumScreen = useMediaQuery(theme.breakpoints.between('sm', 'md'));
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
  const logoSize = isSmallScreen ? '150px' : isMediumScreen ? '200px' : '250px';

  return (
    <Box className="homePageContainer" style={{ backgroundImage: `url(${backgroundPicture})` }}>
      <Grid container spacing={2} alignItems="center" justifyContent="center">
        <Grid item xs={12} className="titleGrid">
          <h1 className={`title ${isSmallScreen ? 'small' : isMediumScreen ? 'medium' : 'large'}`}>א. קוסטינר</h1>
        </Grid>
        <Grid item xs={12}>
          <h2 className={`subtitle ${isSmallScreen ? 'small' : isMediumScreen ? 'medium' : 'large'}`}>
            מידע מעולם המכרזים שיחשוף וינגיש לכם את תוצאות המכרזים הפומביים
          </h2>
        </Grid>
      </Grid>
    </Box>
  );
}
