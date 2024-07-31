import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useState, useRef } from 'react';
import authSingleton from '../Logic/AuthService';
import InputAdornment from '@mui/material/InputAdornment';
import AccountCircle from '@mui/icons-material/AccountCircle';
import EmailIcon from '@mui/icons-material/Email';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import IconButton from '@mui/material/IconButton';
import GoogleAuthOld from './GoogleAuth-old';
import LoginService from '../Logic/LoginService';
import { UserContext } from '../context/userContext';
import { useContext } from 'react';

import { useNavigate } from 'react-router-dom';
export default function Login(props) {
  console.log("login");
  const [open, setOpen] = React.useState(props.open);
  const [credential, setCredential] = useState({ userName: '', password: '' });
  const [forgetPassword, setForgetPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const [resetEmailSent, setResetEmailSent] = useState(false); 
  const [message, setMessage] = useState(false);
  const [emailError, setEmailError] = useState(false); 
  const passwordRef = useRef(null);
  const emailRef = useRef(null);
  const { setUser } = useContext(UserContext);


  const handleChange = (field, value) => {
    var temp = { ...credential };
    temp[field] = value;
    setCredential(temp);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };
  const forget = () => {
    setMessage(''); // Clear previous message on submit
    setEmailError(''); // Clear previous email error on submit
    setForgetPassword(!forgetPassword)
  }
  const handleClose = () => {
    setOpen(false);
    setResetEmailSent(false); // Reset the state when dialog is closed
    setMessage(false); // Reset the message state when dialog is closed
    setEmailError(false); // Reset the email error state when dialog is closed
    setCredential({ userName: '', password: '' }); // Reset credentials
    setEmail(''); // Reset email field
    navigate('/');
  };

  const handleChangePassword = (field, value) => {
    handleChange(field, value);
    //בדיקות תקינות----------------------------------------------------------------------------------------------
  };

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleSignUp = () => {

    handleClose();
    navigate('/connection')
  }
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (forgetPassword) {
      const res = await LoginService.requestPasswordReset(email, credential.userName);
      if (res.success) {
        setResetEmailSent(true); // Set state when password reset email is sent
        setEmailError(false)
      } else if (!res.success) {
        setEmailError(true);
        setResetEmailSent(false); // Set state when password reset email is sent
        setEmail('');

        console.log("emailRef", emailRef);
        console.log("emailRef.current", emailRef.current);
        emailRef.current.focus(); // Set focus on the email field
      }
    } else {
      const res = await LoginService.login(credential.userName, credential.password);
      console.log("Login response:", res);
      if (res.status === 400) {
        setMessage(true);
        setCredential(prev => ({ ...prev, password: '' }));

        console.log("passwordRef", passwordRef);
        console.log("passwordRef.current", passwordRef.current);
        passwordRef.focus();
      }
      else if (res.status === 200) {
        let userData = res.data;
        const token = localStorage.getItem('authToken');
        userData = await LoginService.fetchAndSetUser(token)
        setUser(userData);
        console.log(userData);
      
        handleClose();
      }
    }
  };


  return (
    <React.Fragment>


      <Dialog
        open={open}
        onClose={handleClose}
        PaperProps={{
          component: 'form',
          onSubmit: handleSubmit,

          style: { backgroundColor: 'rgb(224, 242, 241)', color: 'rgb(10, 63, 61)', textAlign: 'center' }
        }}
      >
        <DialogTitle>{forgetPassword ? "איפוס סיסמא " : "כניסה לחשבון"}</DialogTitle>
        <DialogContent>
          <DialogContentText>
            {forgetPassword ? "אנא הכנס את האימייל איתו נרשמת לחשבון" : "כניסה לחשבון קיים"}
          </DialogContentText>
          {!forgetPassword ? <>
            <TextField
              autoFocus
              required
              margin="dense"
              id="username"
              name="username"
              label="שם משתמש"
              dir="rtl"
              value={credential.userName}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <AccountCircle />
                  </InputAdornment>
                ),
                style: { color: 'rgb(10, 63, 61)' }
              }}
              InputLabelProps={{
                style: { color: 'rgb(10, 63, 61)' }
              }}
              variant="outlined"

              onChange={(e) => handleChange("userName", e.target.value)}
              style={{ backgroundColor: 'rgb(240, 255, 255)', borderRadius: '4px', marginBottom: '10px' }}
            />
            <br />
            <TextField
              required
              margin="dense"
              id="password"
              name="password"
              label="סיסמא"
              value={credential.password}
              type={showPassword ? "text" : "password"}
              variant="outlined"
              dir='rtl'
              onChange={(e) => handleChangePassword("password", e.target.value)}
              style={{ backgroundColor: 'rgb(240, 255, 255)', borderRadius: '4px', marginBottom: '10px' }}

              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      edge="end"
                      style={{ color: 'rgb(10, 63, 61)' }}
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
                style: { color: 'rgb(10, 63, 61)' }
              }}

              InputLabelProps={{
                style: { color: 'rgb(10, 63, 61)' }
              }}
            />
            <br />
          </> : <>
            <TextField
              required
              margin="dense"
              id="email"
              name="email"
              label="אימייל"
              type="email"
              dir='rtl'
              value={email}
              variant="outlined"
              onChange={(e) => { setEmail(e.target.value); console.log(e.target.value); }}
              style={{ backgroundColor: 'rgb(240, 255, 255)', borderRadius: '4px', marginBottom: '10px' }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <EmailIcon style={{ color: 'rgb(10, 63, 61)' }} />
                  </InputAdornment>
                ),
                style: { color: 'rgb(10, 63, 61)' }
              }}
              InputLabelProps={{
                style: { color: 'rgb(10, 63, 61)' }
              }}
            />
            <br />

          </>}
          <Button onClick={() => setForgetPassword(!forgetPassword)} style={{ color: 'rgb(10, 63, 61)', marginTop: '10px' }}>{!forgetPassword ? "שכחתי סיסמא" : "שם משתמש וסיסמא"}</Button>
          <br />
          <p style={{ color: 'rgb(10, 63, 61)' }}>או</p>
          <GoogleAuthOld></GoogleAuthOld>
          <br />
          <p>?אין לך חשבון עדיין</p>
          <br />
          <Button
            variant="contained"
            color="primary"
            onClick={handleSignUp}
            style={{
              backgroundColor: '#1c5f68',
              color: 'white',
              padding: '15px 30px',
              fontSize: '18px',
              borderRadius: '10px',
              textTransform: 'none',
              boxShadow: '0px 3px 6px #c8c8c8b5',
              transition: 'background-color 0.3s ease',
            }}
            onMouseMove={(e) => (e.currentTarget.style.backgroundColor = 'rgb(23, 27, 30)')}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#1c5f68')}
          >צור חשבון</Button>
          <br />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} style={{ color: 'rgb(10, 63, 61)' }}>ביטול</Button>
          {forgetPassword ? <Button type="submit" style={{ color: 'rgb(10, 63, 61)' }}>שלח קוד אימות למייל</Button> : <Button type="submit" style={{ color: 'rgb(10, 63, 61)' }}>היכנס לחשבון</Button>}


        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}



