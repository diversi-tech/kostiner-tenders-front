import React, { useState } from 'react';
import {
  Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, IconButton, Collapse, Box, TextField, Button, Typography, Snackbar, Alert
} from '@mui/material';
import { KeyboardArrowDown, KeyboardArrowUp } from '@mui/icons-material';

const tendersData = {
  'בניה ותשתיות': [
    { 
      name: 'מכרז בניה 1', 
      details: {
        organization: 'משרד הבינוי והשיכון',
        tenderNameAndNumber: 'מכרז בניה 1, מספר 1',
        publishDate: '01/01/2023',
        submissionDate: '01/02/2023',
        categories: 'בניה ותשתיות',
        winnerName: 'חברת בניה בע"מ',
        winnerDetails: 'פרטי הזוכה 1',
        bidders: 'מציעים 1',
        winnerInfo: 'מידע על הזוכה 1',
        bidAmount: '1000000'
      }, 
      editable: false,
      originalDetails: null
    },
    { 
      name: 'מכרז תשתיות 1', 
      details: {
        organization: 'חברת החשמל',
        tenderNameAndNumber: 'מכרז תשתיות 1, מספר 2',
        publishDate: '01/03/2023',
        submissionDate: '01/04/2023',
        categories: 'בניה ותשתיות',
        winnerName: 'חברת תשתיות בע"מ',
        winnerDetails: 'פרטי הזוכה 2',
        bidders: 'מציעים 2',
        winnerInfo: 'מידע על הזוכה 2',
        bidAmount: '2000000'
      },
      editable: false,
      originalDetails: null
    },
  ],
  'מחשוב וטכנולוגיה': [
    { 
      name: 'מכרז מחשוב 1', 
      details: {
        organization: 'משרד התקשורת',
        tenderNameAndNumber: 'מכרז מחשוב 1, מספר 3',
        publishDate: '01/05/2023',
        submissionDate: '01/06/2023',
        categories: 'מחשוב וטכנולוגיה',
        winnerName: 'חברת טכנולוגיה בע"מ',
        winnerDetails: 'פרטי הזוכה 3',
        bidders: 'מציעים 3',
        winnerInfo: 'מידע על הזוכה 3',
        bidAmount: '3000000'
      },
      editable: false,
      originalDetails: null
    },
    { 
      name: 'מכרז טכנולוגיה 1', 
      details: {
        organization: 'משרד המדע',
        tenderNameAndNumber: 'מכרז טכנולוגיה 1, מספר 4',
        publishDate: '01/07/2023',
        submissionDate: '01/08/2023',
        categories: 'מחשוב וטכנולוגיה',
        winnerName: 'חברת טכנולוגיות מתקדמות',
        winnerDetails: 'פרטי הזוכה 4',
        bidders: 'מציעים 4',
        winnerInfo: 'מידע על הזוכה 4',
        bidAmount: '4000000'
      },
      editable: false,
      originalDetails: null
    },
  ],
  'בריאות ורפואה': [
    { 
      name: 'מכרז רפואה 1', 
      details: {
        organization: 'משרד הבריאות',
        tenderNameAndNumber: 'מכרז רפואה 1, מספר 5',
        publishDate: '01/09/2023',
        submissionDate: '01/10/2023',
        categories: 'בריאות ורפואה',
        winnerName: 'בית חולים מרכזי',
        winnerDetails: 'פרטי הזוכה 5',
        bidders: 'מציעים 5',
        winnerInfo: 'מידע על הזוכה 5',
        bidAmount: '5000000'
      },
      editable: false,
      originalDetails: null
    },
    { 
      name: 'מכרז בריאות 1', 
      details: {
        organization: 'קופת חולים כללית',
        tenderNameAndNumber: 'מכרז בריאות 1, מספר 6',
        publishDate: '01/11/2023',
        submissionDate: '01/12/2023',
        categories: 'בריאות ורפואה',
        winnerName: 'מרפאה אזורית',
        winnerDetails: 'פרטי הזוכה 6',
        bidders: 'מציעים 6',
        winnerInfo: 'מידע על הזוכה 6',
        bidAmount: '6000000'
      },
      editable: false,
      originalDetails: null
    },
  ],
};

const TenderTable = () => {
  const [openCategories, setOpenCategories] = useState({});
  const [tenders, setTenders] = useState(tendersData);
  const [error, setError] = useState(null);

  const handleToggle = (category) => {
    setOpenCategories((prev) => ({
      ...prev,
      [category]: !prev[category],
    }));

    if (openCategories[category]) {
      setTenders((prev) => {
        const updatedTenders = { ...prev };
        updatedTenders[category] = updatedTenders[category].map((tender) => ({
          ...tender,
          details: tender.originalDetails || tender.details,
          editable: false,
          originalDetails: null,
        }));
        return updatedTenders;
      });
    }
  };

  const handleEditToggle = (category, index) => {
    setTenders((prev) => {
      const updatedTenders = { ...prev };
      const tender = updatedTenders[category][index];

      if (!tender.editable) {
        tender.originalDetails = { ...tender.details };
      } else {
        const newCategory = tender.details.categories;
        if (!tenders[newCategory]) {
          setError(`הקטגוריה "${newCategory}" אינה קיימת. לא ניתן לשמור את השינויים.`);
          return prev;
        }

        if (newCategory !== category) {
          updatedTenders[category].splice(index, 1);
          tender.details.categories = newCategory;

          if (!updatedTenders[newCategory]) {
            updatedTenders[newCategory] = [];
          }

          updatedTenders[newCategory].push(tender);
        }

        tender.originalDetails = null;
      }

      tender.editable = !tender.editable;
      return updatedTenders;
    });
  };

  const handleTenderChange = (category, index, key, value) => {
    setTenders((prev) => {
      const updatedTenders = { ...prev };
      updatedTenders[category][index].details[key] = value;
      return updatedTenders;
    });
  };

  return (
    <>
      <TableContainer component={Paper}>
        <Table>
          <TableBody>
            {Object.keys(tenders).map((category) => (
              <React.Fragment key={category}>
                <TableRow>
                  <TableCell colSpan={2} style={{ backgroundColor: '#f5f5f5' }}>
                    <Box display="flex" justifyContent="space-between" alignItems="center">
                      <Typography variant="h6" component="div" align="center" style={{ flex: 1 }}>
                        {category}
                      </Typography>
                      <IconButton size="small" onClick={() => handleToggle(category)}>
                        {openCategories[category] ? <KeyboardArrowUp /> : <KeyboardArrowDown />}
                      </IconButton>
                    </Box>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={2}>
                    <Collapse in={openCategories[category]} timeout="auto" unmountOnExit>
                      <Box margin={1}>
                        <Table size="small">
                          <TableHead>
                            <TableRow>
                              {['שם גוף', 'שם ומספר המכרז', 'תאריך פרסום', 'תאריך הגשה', 'קטגוריות', 'שם הזוכה ופרטי הזוכה', 'מציעים', 'מידע על הזוכה', 'סכום ההצעה', 'אומדן'].map((header) => (
                                <TableCell key={header} align="center">{header}</TableCell>
                              ))}
                            </TableRow>
                          </TableHead>
                          <TableBody>
                            {tenders[category].map((tender, index) => (
                              <TableRow key={tender.name}>
                                {Object.keys(tender.details).map((key) => (
                                  <TableCell key={key} align="center">
                                    {tender.editable ? (
                                      <TextField
                                        value={tender.details[key]}
                                        onChange={(e) => handleTenderChange(category, index, key, e.target.value)}
                                        fullWidth
                                      />
                                    ) : (
                                      tender.details[key]
                                    )}
                                  </TableCell>
                                ))}
                                <TableCell align="center">
                                  <Button 
                                    onClick={() => handleEditToggle(category, index)} 
                                    style={{ 
                                      backgroundColor: 'rgba(26,96,104,255)', 
                                      color: 'white',
                                      '&:hover': {
                                        backgroundColor: 'rgb(129, 175, 164)'
                                      },
                                      border: 'none'
                                    }}
                                  >
                                    {tender.editable ? 'שמור' : 'ערוך'}
                                  </Button>
                                </TableCell>
                              </TableRow>
                            ))}
                          </TableBody>
                        </Table>
                      </Box>
                    </Collapse>
                  </TableCell>
                </TableRow>
              </React.Fragment>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Snackbar
        open={Boolean(error)}
        autoHideDuration={6000}
        onClose={() => setError(null)}
      >
        <Alert onClose={() => setError(null)} severity="error" sx={{ width: '100%' }}>
          {error}
        </Alert>
      </Snackbar>
    </>
  );
};

export default TenderTable;
