import { useState, useContext } from 'react';
import { UserContext } from '../../context/userContext'; 
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import './editAdminProfile.css';

const AdminProfileEdit = () => {
  const { user, setUser } = useContext(UserContext);
  const [saving, setSaving] = useState(false);
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const handleNameChange = (event) => {
    setUser(prevUser => ({ ...prevUser, userName: event.target.value }));
  };

  const handleEmailChange = (event) => {
    setUser(prevUser => ({ ...prevUser, userEmail: event.target.value }));
  };

  const handlePasswordChange = (event) => {
    setNewPassword(event.target.value);
  };

  const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value);
  };

  const validatePasswords = () => {
    if (newPassword !== confirmPassword) {
      setError('הסיסמאות אינן תואמות');
      return false;
    }
    if (newPassword.length < 6) {
      setError('הסיסמה חייבת להיות לפחות 6 תווים');
      return false;
    }
    setError('');
    return true;
  };

  const handleSave = async () => {
    if (!validatePasswords()) return;

    const adminData = {
      userName: user.userName,
      userEmail: user.userEmail,
      password: newPassword,
    };

    try {
      setSaving(true);
      const token = sessionStorage.getItem('token'); 
      const response = await fetch('https://kostiner-tender-1111.onrender.com/api/put-user', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(adminData),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      setUser(adminData);

      alert('פרטי האדמין נשמרו בהצלחה!');
    } catch (error) {
      console.error('שגיאה בשמירת פרטי האדמין:', error);
    } finally {
      setSaving(false);
    }
  };

  const handleCancel = () => {
    // Reset form fields if needed, or handle cancellation logic
    setNewPassword('');
    setConfirmPassword('');
  };

  return (
    <Grid container className="background-box">
      <Grid item xs={12} className="gradient-circle circle-1"></Grid>
      <Grid item xs={12} className="gradient-circle circle-2"></Grid>
      <Grid item xs={12} className="gradient-circle circle-3"></Grid>

      <Grid item xs={12} container justifyContent="center" alignItems="center">
        <Box className="edit-box">
          <Typography variant="h5" gutterBottom>
            עריכת פרטי מנהל
          </Typography>
          <Box className="drawer-header">
            <Avatar className="drawer-avatar">
              {user.userName ? user.userName.charAt(0).toUpperCase() : ''}
            </Avatar>
            <Divider orientation="vertical" flexItem className="divider" />
            <Box className="user-details">
              <Typography variant="subtitle1">
                <b>{user.userName}</b>
              </Typography>
              <Typography variant="body2">{user.userEmail}</Typography>
            </Box>
          </Box>

          <TextField
            fullWidth
            margin="normal"
            label="שם מלא"
            value={user.userName}
            onChange={handleNameChange}
          />
          <TextField
            fullWidth
            margin="normal"
            label="אימייל"
            value={user.userEmail}
            onChange={handleEmailChange}
          />
          <Typography variant="h6" component="h3" className="SystemDetailsTitle">
            פרטי מערכת
          </Typography>
          <TextField
            fullWidth
            margin="normal"
            label="סיסמה חדשה"
            type="password"
            value={newPassword}
            onChange={handlePasswordChange}
          />
          <TextField
            fullWidth
            margin="normal"
            label="אימות סיסמה"
            type="password"
            value={confirmPassword}
            onChange={handleConfirmPasswordChange}
          />
          {error && (
            <Typography color="error" variant="body2" gutterBottom>
              {error}
            </Typography>
          )}

          <Box className="button-container">
            <Button
              variant="contained"
              onClick={handleSave}
              disabled={saving}
              className="SaveButton"
            >
              שמור פרטים
            </Button>
            <Button variant="outlined" onClick={handleCancel} disabled={saving} >
              בטל
            </Button>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
}

export default AdminProfileEdit;
