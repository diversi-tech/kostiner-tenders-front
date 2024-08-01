import React, { useState } from 'react';
import {
  Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, IconButton, Collapse, Box, TextField, Button, Typography, Snackbar, Alert
} from '@mui/material';
import { KeyboardArrowDown, KeyboardArrowUp } from '@mui/icons-material';

const tendersData = {
  'קטגוריה 1': [
    { 
      name: 'מכרז 1', 
      details: {
        organization: 'שם גוף 1',
        tenderNameAndNumber: 'מכרז 1, מספר 1',
        publishDate: '01/01/2023',
        submissionDate: '01/02/2023',
        categories: 'קטגוריה 1',
        winnerName: 'שם הזוכה 1',
        winnerDetails: 'פרטי הזוכה 1',
        bidders: 'מציעים 1',
        winnerInfo: 'מידע על הזוכה 1',
        bidAmount: '1000'
      }, 
      editable: false 
    },
    { 
      name: 'מכרז 2', 
      details: {
        organization: 'שם גוף 2',
        tenderNameAndNumber: 'מכרז 2, מספר 2',
        publishDate: '01/03/2023',
        submissionDate: '01/04/2023',
        categories: 'קטגוריה 1',
        winnerName: 'שם הזוכה 2',
        winnerDetails: 'פרטי הזוכה 2',
        bidders: 'מציעים 2',
        winnerInfo: 'מידע על הזוכה 2',
        bidAmount: '2000'
      },
      editable: false 
    },
  ],
  'קטגוריה 2': [
    { 
      name: 'מכרז 3', 
      details: {
        organization: 'שם גוף 3',
        tenderNameAndNumber: 'מכרז 3, מספר 3',
        publishDate: '01/05/2023',
        submissionDate: '01/06/2023',
        categories: 'קטגוריה 2',
        winnerName: 'שם הזוכה 3',
        winnerDetails: 'פרטי הזוכה 3',
        bidders: 'מציעים 3',
        winnerInfo: 'מידע על הזוכה 3',
        bidAmount: '3000'
      },
      editable: false 
    },
  ],
};

const TenderTable = () => {
  const [openCategories, setOpenCategories] = useState({});
  const [tenders, setTenders] = useState(tendersData);
  const [pendingEdits, setPendingEdits] = useState({});
  const [error, setError] = useState(null);

  const handleToggle = (category) => {
    // Cancel edits if category is closing
    if (openCategories[category]) {
      setTenders((prev) => {
        const updatedTenders = { ...prev };
        if (pendingEdits[category]) {
          // Revert changes
          Object.keys(pendingEdits[category]).forEach((index) => {
            const tender = updatedTenders[category][index];
            if (tender.editable) {
              tender.editable = false;
            }
          });
        }
        return updatedTenders;
      });
    }

    setOpenCategories((prev) => ({
      ...prev,
      [category]: !prev[category],
    }));
  };

  const handleEditToggle = (category, index) => {
    setTenders((prev) => {
      const updatedTenders = { ...prev };
      const tender = updatedTenders[category][index];
      
      if (tender.editable) {
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
      }

      tender.editable = !tender.editable;
      setPendingEdits((prev) => ({
        ...prev,
        [category]: {
          ...(prev[category] || {}),
          [index]: !tender.editable ? tender.details : undefined,
        },
      }));

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
                                    variant="contained" 
                                    sx={{
                                      backgroundColor: 'rgba(26,96,104,255)',
                                      color: '#ffffff',
                                      '&:hover': {
                                        backgroundColor: 'rgb(129, 175, 164)',
                                      }
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
      <Snackbar open={!!error} autoHideDuration={6000} onClose={() => setError(null)}>
        <Alert onClose={() => setError(null)} severity="error" sx={{ width: '100%' }}>
          {error}
        </Alert>
      </Snackbar>
    </>
  );
};

export default TenderTable;
