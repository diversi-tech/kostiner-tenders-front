import React, { useState, useEffect } from 'react';
import { TextField, Button, Dialog, DialogActions, DialogContent, DialogTitle, Box } from '@mui/material';
const AddCategoryForm = ({ open, handleClose, handleSave, initialData }) => {
    const [formData, setFormData] = useState({
      category: '',
      description: '',
      monthlyPrice: '',
      subscriptionPrice: ''
    });
    const [errors, setErrors] = useState({
      category: false,
      description: false,
      monthlyPrice: false,
      subscriptionPrice: false
    });
    useEffect(() => {
      if (initialData) {
        setFormData({
          category: initialData.category || '',
          description: initialData.description || '',
          monthlyPrice: initialData.monthlyPrice || '',
          subscriptionPrice: initialData.subscriptionPrice || ''
        });
      } else {
        setFormData({
          category: '',
          description: '',
          monthlyPrice: '',
          subscriptionPrice: ''
        });
      }
    }, [initialData]);
    const handleCancel = () => {
        setFormData({
            category: '',
            description: '',
            monthlyPrice: '',
            subscriptionPrice: ''
        });
        setErrors({
            category: false,
            description: false,
            monthlyPrice: false,
            subscriptionPrice: false
        });
      handleClose();
    };
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData({ ...formData, [name]: value });
      setErrors({ ...errors, [name]: value.trim() === '' });
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        let formIsValid = true;
        const newErrors = {};
        // Check for any empty required fields
        if (formData.category.trim() === '') {
          newErrors.category = true;
          formIsValid = false;
        }
        if (formData.description.trim() === '') {
          newErrors.description = true;
          formIsValid = false;
        }
        if (isNaN(parseFloat(formData.monthlyPrice))) {
          newErrors.monthlyPrice = true;
          formIsValid = false;
        }
        if (isNaN(parseFloat(formData.subscriptionPrice))) {
          newErrors.subscriptionPrice = true;
          formIsValid = false;
        }
        setErrors(newErrors);
        if (formIsValid) {
            console.log(formData,formData);
          handleSave(formData);
          handleClose();
        }
      };
    return (
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle sx={{ textAlign: 'right' }}>{initialData ? 'עריכת פריט' : 'הוספת פריט'}</DialogTitle>
        <DialogContent>
          <TextField
            required
            error={errors.category}
            helperText={errors.category ? 'שדה חובה' : ''}
            margin="dense"
            name="category"
            label="קטגוריה"
            type="text"
            fullWidth
            value={formData.category}
            onChange={handleChange}
            InputLabelProps={{ style: { textAlign: 'right', direction: 'rtl' } }}
            inputProps={{ style: { textAlign: 'right', direction: 'rtl' } }}
            FormHelperTextProps={{ style: { textAlign: 'right', direction: 'rtl' } }}
          />
          <TextField
            required
            error={errors.description}
            helperText={errors.description ? 'שדה חובה' : ''}
            margin="dense"
            name="description"
            label="תיאור"
            type="text"
            fullWidth
            value={formData.description}
            onChange={handleChange}
            InputLabelProps={{ style: { textAlign: 'right', direction: 'rtl' } }}
            inputProps={{ style: { textAlign: 'right', direction: 'rtl' } }}
            FormHelperTextProps={{ style: { textAlign: 'right', direction: 'rtl' } }}
          />
          <TextField
            required
            error={errors.monthlyPrice}
            helperText={errors.monthlyPrice ? 'שדה חובה' : ''}
            margin="dense"
            name="monthlyPrice"
            label="מחיר חודשי"
            type="number"
            fullWidth
            value={formData.monthlyPrice}
            onChange={handleChange}
            InputLabelProps={{ style: { textAlign: 'right', direction: 'rtl' } }}
            inputProps={{ style: { textAlign: 'right', direction: 'rtl' } }}
            FormHelperTextProps={{ style: { textAlign: 'right', direction: 'rtl' } }}
          />
          <TextField
            required
            error={errors.subscriptionPrice}
            helperText={errors.subscriptionPrice ? 'שדה חובה' : ''}
            margin="dense"
            name="subscriptionPrice"
            label="מחיר מנוי"
            type="number"
            fullWidth
            value={formData.subscriptionPrice}
            onChange={handleChange}
            InputLabelProps={{ style: { textAlign: 'right', direction: 'rtl' } }}
            inputProps={{ style: { textAlign: 'right', direction: 'rtl' } }}
            FormHelperTextProps={{ style: { textAlign: 'right', direction: 'rtl' } }}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCancel} color="primary">
            ביטול
          </Button>
          <Button onClick={handleSubmit} color="primary">
            שמירה
          </Button>
        </DialogActions>
      </Dialog>
    );
  }
export default AddCategoryForm;




