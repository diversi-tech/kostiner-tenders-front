import React, { useState } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField, IconButton } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';

const categoriesData = [
  { id: 1, name: 'קטגוריה 1', tenders: [{ id: 1, title: 'מכרז 1', description: 'תיאור מכרז 1' }, { id: 2, title: 'מכרז 2', description: 'תיאור מכרז 2' }] },
  { id: 2, name: 'קטגוריה 2', tenders: [{ id: 3, title: 'מכרז 3', description: 'תיאור מכרז 3' }] },
];

const TendersTable = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [openDialog, setOpenDialog] = useState(false);
  const [editedTender, setEditedTender] = useState(null);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  const handleDialogOpen = (tender) => {
    setEditedTender(tender);
    setOpenDialog(true);
  };

  const handleDialogClose = () => {
    setOpenDialog(false);
    setEditedTender(null);
  };

  const handleTenderChange = (event) => {
    setEditedTender({ ...editedTender, title: event.target.value });
  };

  const handleSave = () => {
    // כאן תוכל להוסיף לוגיקה לשמירה של השינויים
    handleDialogClose();
  };

  return (
    <div>
      <TableContainer component={Paper} style={{ marginBottom: '16px' }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>שם קטגוריה</TableCell>
              <TableCell>פעולה</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {categoriesData.map((category) => (
              <TableRow key={category.id}>
                <TableCell>
                  <Button onClick={() => handleCategoryClick(category)}>
                    {category.name}
                  </Button>
                </TableCell>
                <TableCell>
                  {category.id === selectedCategory?.id && (
                    <TableContainer component={Paper} style={{ marginTop: '16px' }}>
                      <Table>
                        <TableHead>
                          <TableRow>
                            <TableCell>כותרת מכרז</TableCell>
                            <TableCell>תיאור מכרז</TableCell>
                            <TableCell>עריכה</TableCell>
                          </TableRow>
                        </TableHead>
                        <TableBody>
                          {category.tenders.map((tender) => (
                            <TableRow key={tender.id}>
                              <TableCell>{tender.title}</TableCell>
                              <TableCell>{tender.description}</TableCell>
                              <TableCell>
                                <IconButton onClick={() => handleDialogOpen(tender)}>
                                  <EditIcon />
                                </IconButton>
                              </TableCell>
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                    </TableContainer>
                  )}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Dialog open={openDialog} onClose={handleDialogClose}>
        <DialogTitle>ערוך מכרז</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            label="כותרת מכרז"
            type="text"
            fullWidth
            variant="outlined"
            value={editedTender?.title || ''}
            onChange={handleTenderChange}
          />
          <TextField
            margin="dense"
            label="תיאור מכרז"
            type="text"
            fullWidth
            variant="outlined"
            value={editedTender?.description || ''}
            disabled
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleDialogClose}>ביטול</Button>
          <Button onClick={handleSave}>שמור</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default TendersTable;
