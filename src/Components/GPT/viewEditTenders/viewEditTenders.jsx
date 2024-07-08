import React, { useState } from 'react';
import { Container, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Button, Typography, Paper, Dialog, DialogTitle, DialogContent, DialogActions, TextField, IconButton, Grid } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import AddIcon from '@mui/icons-material/Add';
import CloseIcon from '@mui/icons-material/Close';

const ViewEditTenders = () => {
  const [products, setProducts] = useState([
    { id: 1, category: 'מכרז 1', price: 'תיאור של מכרז 1' },
    { id: 2, category: 'מכרז 2', price: 'תיאור של מכרז 2' },
    { id: 3, category: 'מכרז 3', price: 'תיאור של מכרז 3' },
  ]);

  const [newProductCategory, setNewProductCategory] = useState('');
  const [newProductPrice, setNewProductPrice] = useState('');
  const [deleteProductId, setDeleteProductId] = useState(null);
  const [openDeleteDialog, setOpenDeleteDialog] = useState(false);
  const [openAddDialog, setOpenAddDialog] = useState(false);
  const [editProductId, setEditProductId] = useState(null);
  const [openEditDialog, setOpenEditDialog] = useState(false);

  const handleDeleteClick = (productId) => {
    setDeleteProductId(productId);
    setOpenDeleteDialog(true);
  };

  const handleDeleteConfirm = () => {
    const updatedProducts = products.filter(product => product.id !== deleteProductId);
    setProducts(updatedProducts);
    setOpenDeleteDialog(false);
  };

  const handleDeleteCancel = () => {
    setOpenDeleteDialog(false);
  };

  const handleAddProduct = () => {
    setOpenAddDialog(true);
  };

  const handleAddDialogClose = () => {
    setOpenAddDialog(false);
  };

  const handleAddProductConfirm = () => {
    // Validation logic (if needed)
    const newProduct = { id: products.length + 1, category: newProductCategory, price: newProductPrice };
    setProducts([...products, newProduct]);
    setOpenAddDialog(false);
    // Clear input fields
    setNewProductCategory('');
    setNewProductPrice('');
  };

  const handleEditClick = (productId) => {
    const productToEdit = products.find(product => product.id === productId);
    setEditProductId(productId);
    setNewProductCategory(productToEdit.category);
    setNewProductPrice(productToEdit.price);
    setOpenEditDialog(true);
  };

  const handleEditDialogClose = () => {
    setOpenEditDialog(false);
  };

  const handleEditProductConfirm = () => {
    const updatedProducts = products.map(product => {
      if (product.id === editProductId) {
        return { ...product, category: newProductCategory, price: newProductPrice };
      }
      return product;
    });
    setProducts(updatedProducts);
    setOpenEditDialog(false);
    setEditProductId(null);
    // Clear input fields
    setNewProductCategory('');
    setNewProductPrice('');
  };

  return (
    <Container style={{ direction: 'rtl' }}>
      <Grid container justifyContent="space-between" alignItems="center">
        <Grid item>
          <Typography variant="h4" gutterBottom>הצג/ערוך מוצרים</Typography>
        </Grid>
        <Grid item>
          <IconButton color="primary" onClick={handleAddProduct} style={{ marginBottom: '20px' }}>
            <AddIcon style={{fontSize:'40px'}} />
          </IconButton>
        </Grid>
      </Grid>
      
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>#</TableCell>
              <TableCell align="center">קטגוריה</TableCell>
              <TableCell align="center">מחיר</TableCell>
              <TableCell align="center">פעולות</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {products.map((product) => (
              <TableRow key={product.id}>
                <TableCell>{product.id}</TableCell>
                <TableCell align="center">{product.category}</TableCell>
                <TableCell align="center">{product.price}</TableCell>
                <TableCell align="center">
                  <IconButton color="warning" onClick={() => handleEditClick(product.id)}>
                    <EditIcon />
                  </IconButton>
                  <IconButton color="error" onClick={() => handleDeleteClick(product.id)} style={{ marginRight: '15px' }}>
                    <DeleteIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Dialog open={openAddDialog} onClose={handleAddDialogClose}>
        <DialogTitle>הוספת מוצר חדש</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="category"
            label="קטגוריה"
            type="text"
            fullWidth
            value={newProductCategory}
            onChange={(e) => setNewProductCategory(e.target.value)}
          />
          <TextField
            margin="dense"
            id="price"
            label="מחיר"
            type="text"
            fullWidth
            value={newProductPrice}
            onChange={(e) => setNewProductPrice(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleAddDialogClose} color="primary">
            <CloseIcon /> ביטול
          </Button>
          <Button onClick={handleAddProductConfirm} color="primary">
            <AddIcon /> הוסף מוצר
          </Button>
        </DialogActions>
      </Dialog>

      <Dialog open={openEditDialog} onClose={handleEditDialogClose}>
        <DialogTitle>עריכת מוצר</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="edit-category"
            label="קטגוריה"
            type="text"
            fullWidth
            value={newProductCategory}
            onChange={(e) => setNewProductCategory(e.target.value)}
          />
          <TextField
            margin="dense"
            id="edit-price"
            label="מחיר"
            type="text"
            fullWidth
            value={newProductPrice}
            onChange={(e) => setNewProductPrice(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleEditDialogClose} color="primary">
            <CloseIcon /> ביטול
          </Button>
          <Button onClick={handleEditProductConfirm} color="primary">
            <EditIcon /> עדכן מוצר
          </Button>
        </DialogActions>
      </Dialog>

      <Dialog open={openDeleteDialog} onClose={handleDeleteCancel}>
        <DialogTitle>אישור מחיקה</DialogTitle>
        <DialogContent>
          <Typography variant="body1">האם אתה בטוח שברצונך למחוק את המוצר?</Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleDeleteCancel} color="primary">
            <CloseIcon /> ביטול
          </Button>
          <Button onClick={handleDeleteConfirm} color="error">
            <DeleteIcon /> מחק
          </Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
};

export default ViewEditTenders;
