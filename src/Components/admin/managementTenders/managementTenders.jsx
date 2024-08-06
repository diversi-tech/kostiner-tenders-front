import React from 'react';
import Box from '@mui/joy/Box';
import Grid from '@mui/joy/Grid';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import Typography from '@mui/joy/Typography';
import IconButton from '@mui/joy/IconButton';
import Divider from '@mui/joy/Divider';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import SettingsIcon from '@mui/icons-material/Settings';
import AssignmentIcon from '@mui/icons-material/Assignment';
import EditIcon from '@mui/icons-material/Edit'; // הוספתי אייקון עריכה
import { Link } from 'react-router-dom';
import { styled } from '@mui/material/styles';

const ColoredIconButton = styled(IconButton)(({ theme }) => ({
  color: 'rgba(26,96,104,255)',
  '&:hover': {
    color: 'rgba(26,96,104,255)',
  },
}));

const ManagementTenders = () => {
  return (
    <Box sx={{ flexGrow: 1, p: 3, paddingTop: '10%' }}>
      <Grid container spacing={3} justifyContent="center">
        {/* Upload CSV Card */}
        <Grid item xs={12} sm={6} md={3.5}>
          <Link to="/upload-csv" style={{ textDecoration: 'none', color: 'inherit' }}>
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
                <ColoredIconButton aria-label="upload csv">
                  <CloudUploadIcon fontSize="large" />
                </ColoredIconButton>
                <Typography variant="h5" align="center" gutterBottom>
                  העלה קובצי CSV למכרזים חדשים
                </Typography>
              </CardContent>
              <Divider />
              <CardContent>
                <Typography variant="body1" align="center">
                  לחץ כאן להעלאת קובץ CSV
                </Typography>
              </CardContent>
            </Card>
          </Link>
        </Grid>

        {/* View Tenders Card */}
        <Grid item xs={12} sm={6} md={3.5}>
          <Link to="/view-tenders" style={{ textDecoration: 'none', color: 'inherit' }}>
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
                <ColoredIconButton aria-label="view tenders">
                  <SettingsIcon fontSize="large" />
                </ColoredIconButton>
                <Typography variant="h5" align="center" gutterBottom>
                  הצג וערוך את קטגוריות מכרזים
                </Typography>
              </CardContent>
              <Divider />
              <CardContent>
                <Typography variant="body1" align="center">
                  לחץ כאן לצפייה ועריכה
                </Typography>
              </CardContent>
            </Card>
          </Link>
        </Grid>

        {/* Check Tender Requests Card */}
        <Grid item xs={12} sm={6} md={3.5}>
          <Link to="/checkTender" style={{ textDecoration: 'none', color: 'inherit' }}>
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
                <ColoredIconButton aria-label="check tender requests">
                  <AssignmentIcon fontSize="large" />
                </ColoredIconButton>
                <Typography variant="h5" align="center" gutterBottom>
                  רשימת בקשות למכרזים
                </Typography>
              </CardContent>
              <Divider />
              <CardContent>
                <Typography variant="body1" align="center">
                  לחץ כאן לרשימת הבקשות
                </Typography>
              </CardContent>
            </Card>
          </Link>
        </Grid>

        {/* Edit Tenders by Category Card */}
        <Grid item xs={12} sm={6} md={3.5}>
          <Link to="/edit-tenders-by-category" style={{ textDecoration: 'none', color: 'inherit' }}>
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
                <ColoredIconButton aria-label="edit tenders by category">
                  <EditIcon fontSize="large" />
                </ColoredIconButton>
                <Typography variant="h5" align="center" gutterBottom>
                  ערוך מכרזים לפי קטגוריות
                </Typography>
              </CardContent>
              <Divider />
              <CardContent>
                <Typography variant="body1" align="center">
                  לחץ כאן לעריכת מכרזים לפי קטגוריות
                </Typography>
              </CardContent>
            </Card>
          </Link>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ManagementTenders;
