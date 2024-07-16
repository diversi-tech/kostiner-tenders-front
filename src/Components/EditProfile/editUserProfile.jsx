import { useState, useEffect, useContext } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { UserContext } from '../../context/userContext';
import './EditUserProfile.css';

export default function EditUserProfile() {
  const { user, setUser } = useContext(UserContext);

  const [formUserName, setFormUserName] = useState('');
  const [formUserEmail, setFormUserEmail] = useState('');
  const [originalUserName, setOriginalUserName] = useState('');
  const [originalUserEmail, setOriginalUserEmail] = useState('');
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    if (user) {
      setFormUserName(user.userName);
      setFormUserEmail(user.userEmail);
      setOriginalUserName(user.userName);
      setOriginalUserEmail(user.userEmail);
    }
  }, [user]);

  const handleNameChange = (event) => {
    setFormUserName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setFormUserEmail(event.target.value);
  };

  const handleSave = async () => {
    const updatedUser = {
      ...user,
      userName: formUserName,
      userEmail: formUserEmail,
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
        body: JSON.stringify(updatedUser),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const userData = await response.json();
      setUser(userData); 
      setOriginalUserName(userData.userName);
      setOriginalUserEmail(userData.userEmail);
      setSaving(false);
      alert('Details saved successfully!');

    } catch (error) {
      console.error('Error saving user details:', error);
    }
  };

  const handleCancel = () => {
    setFormUserName(originalUserName);
    setFormUserEmail(originalUserEmail);
  };

  return (
    <Box className="BackgroundBox">
      <Box className="GradientCircle" style={{ width: '600px', height: '600px', background: 'rgba(26, 96, 104, 0.5)', top: '-200px', left: '-200px' }} />
      <Box className="GradientCircle" style={{ width: '400px', height: '400px', background: 'rgba(26, 96, 104, 0.3)', top: '50%', left: '70%' }} />
      <Box className="GradientCircle" style={{ width: '300px', height: '300px', background: 'rgba(26, 96, 104, 0.3)', top: '80%', left: '20%' }} />

      <Box className="EditBox">
        <Typography variant="h5" gutterBottom>
          עדכון פרטי משתמש
        </Typography>

        <TextField
          fullWidth
          margin="normal"
          label="שם מלא"
          value={formUserName}
          onChange={handleNameChange}
        />
        <TextField
          fullWidth
          margin="normal"
          label="כתובת אימייל"
          value={formUserEmail}
          onChange={handleEmailChange}
        />
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            marginTop: 2,
          }}
        >
          <Button
            variant="contained"
            color="primary"
            onClick={handleSave}
            disabled={saving}
          >
            שמור
          </Button>
          <Button
            variant="outlined"
            onClick={handleCancel}
            disabled={saving}
          >
            בטל
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
