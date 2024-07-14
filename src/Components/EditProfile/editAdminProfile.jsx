import { useState, useContext } from 'react';
import { UserContext } from '../../context/userContext'; 
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import { Divider } from '@mui/material';
import { styled } from '@mui/system';

const BackgroundBox = styled(Box)({
  minHeight: '100vh',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  background: '#f0f0f0',
  position: 'relative',
  overflow: 'hidden',
});

const GradientCircle = styled(Box)(({ size, color, top, left }) => ({
  position: 'absolute',
  width: size,
  height: size,
  borderRadius: '50%',
  background: `rgba(${color.r}, ${color.g}, ${color.b}, ${color.a})`,
  top,
  left,
  zIndex: 0,
  filter: 'blur(80px)',
}));

const EditBox = styled(Box)({
  backgroundColor: 'white',
  borderRadius: '12px',
  padding: '40px 20px',
  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
  position: 'relative',
  zIndex: 1,
  textAlign: 'center',
  maxWidth: '600px',
  width: '100%',
  margin: '0 20px',
});

const AdminProfileEdit = () => {
  const { user, setUser } = useContext(UserContext);
  const [saving, setSaving] = useState(false);

  const handleNameChange = (event) => {
    setUser(prevUser => ({ ...prevUser, userName: event.target.value }));
  };

  const handleEmailChange = (event) => {
    setUser(prevUser => ({ ...prevUser, userEmail: event.target.value }));
  };

  const handleSave = async () => {
    const adminData = {
      userName: user.userName,
      userEmail: user.userEmail,
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

      // Update the context with new user data
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
  };

  return (
    <BackgroundBox>
      <GradientCircle size="600px" color={{ r: 26, g: 96, b: 104, a: 0.5 }} top="-200px" left="-200px" />
      <GradientCircle size="400px" color={{ r: 26, g: 96, b: 104, a: 0.3 }} top="50%" left="70%" />
      <GradientCircle size="300px" color={{ r: 26, g: 96, b: 104, a: 0.3 }} top="80%" left="20%" />

      <EditBox>
        <Typography variant="h5" gutterBottom>
          עריכת פרטי מנהל
        </Typography>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            marginBottom: 2,
            marginLeft: 1.5,
            marginTop: 2,
          }}
        >
          <Avatar sx={{ bgcolor: 'rgba(26,96,104,255)', marginRight: 2 }}>
            {user.userName ? user.userName.charAt(0).toUpperCase() : ''}
          </Avatar>
          <Divider orientation="vertical" flexItem sx={{ marginLeft: 2 }} />
          <Box sx={{ marginLeft: 2 }}>
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

        <Box sx={{ display: 'flex', justifyContent: 'flex-end', marginTop: 2 }}>
          <Button
            variant="contained"
            color="primary"
            onClick={handleSave}
            disabled={saving}
            sx={{ marginRight: 2 }}
          >
            שמור
          </Button>
          <Button variant="outlined" onClick={handleCancel} disabled={saving}>
            בטל
          </Button>
        </Box>
      </EditBox>
    </BackgroundBox>
  );
}

export default AdminProfileEdit;
