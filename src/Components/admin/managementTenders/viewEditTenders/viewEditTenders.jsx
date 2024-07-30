import React, { useState, useEffect } from 'react';
import { Box, Paper, Table, TableBody, TableCell, TableContainer, Typography, TableHead, TablePagination, TableRow, IconButton, Button, Tooltip, useMediaQuery, Grid, Dialog, DialogTitle, DialogContent, DialogActions } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import AddIcon from '@mui/icons-material/Add';
import CloseIcon from '@mui/icons-material/Close';
import styled from 'styled-components';
import AddCategoryForm from './addOrEditCategory';
import { getAllCategories, addCategory, updateCategory, deleteCategory } from '../../../../Server/caregory'; // ייבוא הפונקציות מה-API
import { useTheme } from '@mui/material/styles';
const StyledTableRow = styled(TableRow)`
  transition: transform 0.3s ease-in-out;
  position: relative;
  &:hover {
    transform: scale(1.0);
    & > td > div {
      display: block;
    }
  }
`;
const IconContainer = styled.div`
  display: none;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 16px;
  z-index: 1;
`;
function EnhancedTable() {
  const [data, setData] = useState([
    { id: 5, category: 'קוסמטיקה', description: 'קרם לחות לפנים', monthlyPrice: 30, subscriptionPrice: 300 },
    { id: 1, category: 'אלקטרוניקה', description: 'סמארטפון', monthlyPrice: 50, subscriptionPrice: 500 },
    { id: 2, category: 'ספרים', description: 'ספרי צדיקים', monthlyPrice: 10, subscriptionPrice: 100 },
    { id: 3, category: 'ריהוט', description: 'כיסא משרדי', monthlyPrice: 20, subscriptionPrice: 200 },
    { id: 4, category: 'כושר', description: 'מזרנית יוגה', monthlyPrice: 5, subscriptionPrice: 50 },
  ]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [open, setOpen] = useState(false);
  const [editingItem, setEditingItem] = useState(null);
  const [hoveredRow, setHoveredRow] = useState(null);
  const [openDeleteDialog, setOpenDeleteDialog] = useState(false);
  const [deleteCategory, setDeleteCategory] = useState(null);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  useEffect(() => {
    const fetchData = async () => {
      const products = await getAllCategories();
      setData(products);
    };
    fetchData();
  }, []);
  const handleAddClick = () => {
    setEditingItem(null);
    setOpen(true);
  };
  const handleEditClick = (item) => {
    setEditingItem(item);
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
    setEditingItem(null);
  };
  const handleSave = async (item) => {
    const originalItem = editingItem;
    if (originalItem) {
      try {
        await updateCategory(originalItem.category, item);
        const updatedData = data.map((d) => (d.category === originalItem.category ? item : d));
        setData(updatedData);
      } catch (error) {
        console.error('Error updating product:', error);
      }
    } else {
      try {
        const newProduct = await addCategory(item);
        setData((prevData) => [...prevData, newProduct]);
      } catch (error) {
        console.error('Error adding product:', error);
      }
    }
    handleClose();
    return { originalItem, newItem: item };
  };
  const handleDeleteClick = (category) => {
    setDeleteCategory(category);
    setOpenDeleteDialog(true);
  };
  const handleDeleteConfirm = async () => {
    try {
      await deleteCategory(deleteCategory);
      const updatedData = data.filter((item) => item.category !== deleteCategory);
      setData(updatedData);
    } catch (error) {
      console.error('Error deleting product:', error);
    }
    setOpenDeleteDialog(false);
    setDeleteCategory(null);
  };
  const handleDeleteCancel = () => {
    setOpenDeleteDialog(false);
    setDeleteCategory(null);
  };
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };
  const handleRowHover = (category) => {
    setHoveredRow(category);
  };
  const handleRowLeave = () => {
    setHoveredRow(null);
  };
  return (
    <Box sx={{ width: '100%' }} >
      <Typography variant="h4" gutterBottom align="center">
        קטגוריות המכרזים
      </Typography>
      <Paper sx={{ width: '100%', mb: 2, p: 2 }}>
        <Grid container justifyContent="flex-start" spacing={2} mb={2}>
          <Grid item>
            <Button
              variant="contained"
              style={{ backgroundColor: 'rgba(26,96,104,255)', color: '#fff' }}
              onClick={handleAddClick}
              startIcon={<AddIcon />}
            >
              הוסף קטגוריה
            </Button>
          </Grid>
        </Grid>
        <AddCategoryForm open={open} handleClose={handleClose} handleSave={handleSave} initialData={editingItem} />
        <TableContainer>
          <Table sx={{ minWidth: isMobile ? 'auto' : 850 }} aria-labelledby="tableTitle">
            <TableHead>
              <TableRow>
                <TableCell></TableCell>
                {!isMobile && (
                  <>
                    <TableCell align="right">קטגוריה</TableCell>
                    <TableCell align="right">תיאור</TableCell>
                    <TableCell align="right">מחיר חודשי</TableCell>
                    <TableCell align="right">מחיר מנוי</TableCell>
                  </>
                )}
              </TableRow>
            </TableHead>
            <TableBody>
              {data.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => (
                <StyledTableRow
                  key={row.category}
                  hover
                  onMouseEnter={() => handleRowHover(row.category)}
                  onMouseLeave={handleRowLeave}
                >
                  <TableCell align="right">
                    {hoveredRow === row.category && (
                      <IconContainer>
                        <Tooltip title="עריכה">
                          <IconButton onClick={() => handleEditClick(row)}>
                            <EditIcon />
                          </IconButton>
                        </Tooltip>
                        <Tooltip title="מחיקה">
                          <IconButton onClick={() => handleDeleteClick(row.category)}>
                            <DeleteIcon />
                          </IconButton>
                        </Tooltip>
                      </IconContainer>
                    )}
                  </TableCell>
                  {!isMobile && (
                    <>
                      <TableCell align="right">{row.category}</TableCell>
                      <TableCell align="right">{row.description}</TableCell>
                      <TableCell align="right">{row.monthlyPrice}</TableCell>
                      <TableCell align="right">{row.subscriptionPrice}</TableCell>
                    </>
                  )}
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          labelRowsPerPage="שורות לעמוד:"
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={data.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
      <Dialog open={openDeleteDialog} onClose={handleDeleteCancel}>
        <DialogTitle>אישור מחיקה</DialogTitle>
        <DialogContent>
          <Typography variant="body1">האם אתה בטוח שברצונך למחוק את הקטגוריה?</Typography>
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
    </Box>
  );
}
export default EnhancedTable;