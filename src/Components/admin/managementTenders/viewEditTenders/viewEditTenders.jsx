import React, { useState, useEffect } from 'react';
import { Box, Paper, Table, TableBody, TableCell, TableContainer, Typography, TableHead, TablePagination, TableRow, IconButton, Button, Tooltip, useMediaQuery, Grid, Dialog, DialogTitle, DialogContent, DialogActions } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import AddIcon from '@mui/icons-material/Add';
import CloseIcon from '@mui/icons-material/Close';
import styled from 'styled-components';
import AddCategoryForm from './addOrEditCategory';
import { getAllCategories, addCategory, updateCategory, deleteCategory } from '../../../../Server/caregory';
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
  const [data, setData] = useState([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [open, setOpen] = useState(false);
  const [editingItem, setEditingItem] = useState(null);
  const [hoveredRow, setHoveredRow] = useState(null);
  const [openDeleteDialog, setOpenDeleteDialog] = useState(false);
  const [deleteCategoryId, setDeleteCategoryId] = useState(null); // Use an id or unique identifier
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  useEffect(() => {
    const fetchData = async () => {
      const categories = await getAllCategories();
      console.log(categories);
      if (categories) {
        const formattedData = categories.map(item => ({
          ...item,
          category: item.category || "ךך",
          description: item.description || "ךך",
          monthlyPrice: item.price_monthly !== null ? item.price_monthly : "ךך",
          subscriptionPrice: item.price_subscription !== null ? item.price_subscription : "ךך"
        }));
        setData(formattedData);
      }
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
        console.error('Error updating category:', error);
      }
    } else {
      try {
        const newCategory = await addCategory(item);
        setData((prevData) => [...prevData, newCategory]);
      } catch (error) {
        console.error('Error adding category:', error);
      }
    }
    handleClose();
  };

  const handleDeleteClick = (category) => {
    setDeleteCategoryId(category); // Set the category id or identifier for deletion
    setOpenDeleteDialog(true);
  };

  const handleDeleteConfirm = async () => {
    if (deleteCategoryId) {
      try {
        await deleteCategory(deleteCategoryId); // Pass the identifier to deleteCategory
        const updatedData = data.filter((item) => item.category !== deleteCategoryId); // Filter out the deleted item
        setData(updatedData);
      } catch (error) {
        console.error('Error deleting category:', error);
      }
      setOpenDeleteDialog(false);
      setDeleteCategoryId(null);
    }
  };

  const handleDeleteCancel = () => {
    setOpenDeleteDialog(false);
    setDeleteCategoryId(null);
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
    <Box sx={{ width: '100%' }}>
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
