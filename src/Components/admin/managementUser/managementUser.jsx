import React from 'react';
import Box from '@mui/joy/Box';
import Grid from '@mui/joy/Grid';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import Typography from '@mui/joy/Typography';
import IconButton from '@mui/joy/IconButton';
import Divider from '@mui/joy/Divider';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import { Link } from 'react-router-dom';
import { styled } from '@mui/material/styles';

const ColoredIconButton = styled(IconButton)(({ theme }) => ({
  color: 'rgba(26,96,104,255)',
  '&:hover': {
    color: 'rgba(26,96,104,255)',
  },
}));

const ManagementUser = () => {
  return (
    <Box sx={{ flexGrow: 1, p: 3, paddingTop: '10%' }}>
      <Grid container spacing={3} justifyContent="center">
        {/* User Management Card */}
        <Grid item xs={12} sm={6} md={4}>
          <Link to="/viewUser" style={{ textDecoration: 'none', color: 'inherit' }}>
            <Card
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'space-between',
                minHeight: 200,
                transition: 'transform 0.3s ease',
                '&:hover': {
                  transform: 'scale(1.05)',
                },
              }}
            >
              <CardContent>
                <ColoredIconButton aria-label="manage users">
                  <PeopleAltIcon fontSize="large" />
                </ColoredIconButton>
                <Typography variant="h5" align="center" gutterBottom>
                  ניהול משתמשים
                </Typography>
              </CardContent>
              <Divider />
              <CardContent>
                <Typography variant="body1" align="center">
                  ניהול הרשאות ומידע אישי
                </Typography>
              </CardContent>
            </Card>
          </Link>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ManagementUser;
