
import { useState, useEffect, useContext } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { UserContext } from '../../context/userContext';
import Login from '../../Server/Auth';
import './EditUserProfile.css';

export default function EditUserProfile() {
  const { user, setUser } = useContext(UserContext);
  const [formUserName, setFormUserName] = useState('');
  const [formFirstName, setFormFirstName] = useState('');
  const [formLastName, setFormLastName] = useState('');
  const [formBusinessName, setFormBusinessName] = useState('');
  const [formPassword, setFormPassword] = useState('');
  const [formConfirmPassword, setFormConfirmPassword] = useState('');
  const [originalUserName, setOriginalUserName] = useState('');
  const [originalFirstName, setOriginalFirstName] = useState('');
  const [originalLastName, setOriginalLastName] = useState('');
  const [originalBusinessName, setOriginalBusinessName] = useState('');
  const [userId, setUserId] = useState('');
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    if (user) {
      setFormUserName(user.user_name);
      setFormFirstName(user.first_name);
      setFormLastName(user.last_name);
      setFormBusinessName(user.business_name);
      setOriginalUserName(user.user_name);
      setOriginalFirstName(user.first_name);
      setOriginalLastName(user.last_name);
      setOriginalBusinessName(user.business_name);
    }
    const token = localStorage.getItem('token');
    if (token) {
      const user_id = Login.getUserIdFromToken(token);
      setUserId(user_id);
    }
  }, [user]);

  const handleUserNameChange = (event) => {
    setFormUserName(event.target.value);
  };

  const handleFirstNameChange = (event) => {
    setFormFirstName(event.target.value);
  };

  const handleLastNameChange = (event) => {
    setFormLastName(event.target.value);
  };

  const handleBusinessNameChange = (event) => {
    setFormBusinessName(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setFormPassword(event.target.value);
  };

  const handleConfirmPasswordChange = (event) => {
    setFormConfirmPassword(event.target.value);
  };

  const handleSave = async () => {
    if (formPassword && formPassword !== formConfirmPassword) {
      alert('סיסמאות לא תואמות');
      return;
    }

    const updatedUser = {
      user_name: formUserName,
      first_name: formFirstName,
      last_name: formLastName,
      business_name: formBusinessName,
      password: formPassword ? formPassword : undefined,
    };

    try {
      setSaving(true);
      const token = localStorage.getItem('token');
      const response = await fetch(`https://kostiner-tender-1111.onrender.com/api/put-user/${userId}`, {
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
      setOriginalUserName(userData.user_name);
      setOriginalFirstName(userData.first_name);
      setOriginalLastName(userData.last_name);
      setOriginalBusinessName(userData.business_name);
      setSaving(false);
      alert('פרטים נשמרו בהצלחה!');
    } catch (error) {
      console.error('שגיאה בשמירת פרטי המשתמש:', error);
      setSaving(false);
    }
  };

  const handleCancel = () => {
    setFormUserName(originalUserName);
    setFormFirstName(originalFirstName);
    setFormLastName(originalLastName);
    setFormBusinessName(originalBusinessName);
    setFormPassword('');
    setFormConfirmPassword('');
  };

  return (
    <Box className="BackgroundBox">
      <Box className="GradientCircle circle-1" />
      <Box className="GradientCircle circle-2" />
      <Box className="GradientCircle circle-3" />
      <Box className="EditBox">
        <Typography variant="h5" component="h2" className="EditBoxTitle">
          עדכון פרטי משתמש
        </Typography>
        <Box className="EditBoxInputs">
          <TextField
            fullWidth
            margin="normal"
            label="שם משתמש"
            value={formUserName}
            onChange={handleUserNameChange}
            InputProps={{
              classes: {
                root: 'MuiOutlinedInput-root',
                focused: 'Mui-focused',
              },
              style: { borderColor: 'rgba(26, 96, 104, 255)' },
            }}
            InputLabelProps={{
              classes: {
                root: 'MuiFormLabel-root',
                focused: 'Mui-focused',
              },
              style: { color: 'rgba(26, 96, 104, 255)' },
            }}
            variant="outlined"
          />
          <TextField
            fullWidth
            margin="normal"
            label="שם פרטי"
            value={formFirstName}
            onChange={handleFirstNameChange}
            InputProps={{
              classes: {
                root: 'MuiOutlinedInput-root',
                focused: 'Mui-focused',
              },
              style: { borderColor: 'rgba(26, 96, 104, 255)' },
            }}
            InputLabelProps={{
              classes: {
                root: 'MuiFormLabel-root',
                focused: 'Mui-focused',
              },
              style: { color: 'rgba(26, 96, 104, 255)' },
            }}
            variant="outlined"
          />
          <TextField
            fullWidth
            margin="normal"
            label="שם משפחה"
            value={formLastName}
            onChange={handleLastNameChange}
            InputProps={{
              classes: {
                root: 'MuiOutlinedInput-root',
                focused: 'Mui-focused',
              },
              style: { borderColor: 'rgba(26, 96, 104, 255)' },
            }}
            InputLabelProps={{
              classes: {
                root: 'MuiFormLabel-root',
                focused: 'Mui-focused',
              },
              style: { color: 'rgba(26, 96, 104, 255)' },
            }}
            variant="outlined"
          />
          <TextField
            fullWidth
            margin="normal"
            label="שם העסק שלך"
            value={formBusinessName}
            onChange={handleBusinessNameChange}
            InputProps={{
              classes: {
                root: 'MuiOutlinedInput-root',
                focused: 'Mui-focused',
              },
              style: { borderColor: 'rgba(26, 96, 104, 255)' },
            }}
            InputLabelProps={{
              classes: {
                root: 'MuiFormLabel-root',
                focused: 'Mui-focused',
              },
              style: { color: 'rgba(26, 96, 104, 255)' },
            }}
            variant="outlined"
          />
          <Typography variant="h6" component="h3" className="SystemDetailsTitle">
            פרטי מערכת
          </Typography>
          <TextField
            fullWidth
            margin="normal"
            label="סיסמה"
            type="password"
            value={formPassword}
            onChange={handlePasswordChange}
            InputProps={{
              classes: {
                root: 'MuiOutlinedInput-root',
                focused: 'Mui-focused',
              },
              style: { borderColor: 'rgba(26, 96, 104, 255)' },
            }}
            InputLabelProps={{
              classes: {
                root: 'MuiFormLabel-root',
                focused: 'Mui-focused',
              },
              style: { color: 'rgba(26, 96, 104, 255)' },
            }}
            variant="outlined"
          />
          <TextField
            fullWidth
            margin="normal"
            label="אימות סיסמה"
            type="password"
            value={formConfirmPassword}
            onChange={handleConfirmPasswordChange}
            InputProps={{
              classes: {
                root: 'MuiOutlinedInput-root',
                focused: 'Mui-focused',
              },
              style: { borderColor: 'rgba(26, 96, 104, 255)' },
            }}
            InputLabelProps={{
              classes: {
                root: 'MuiFormLabel-root',
                focused: 'Mui-focused',
              },
              style: { color: 'rgba(26, 96, 104, 255)' },
            }}
            variant="outlined"
          />
        </Box>
        <Box className="EditBoxButtons">
          <Button variant="contained" onClick={handleSave} disabled={saving} className="SaveButton">
            שמור פרטים
          </Button>
          <Button variant="outlined" onClick={handleCancel} disabled={saving} className="CancelButton">
            בטל
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
