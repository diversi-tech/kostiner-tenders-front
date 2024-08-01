// import * as React from 'react';
// import Button from '@mui/material/Button';
// import TextField from '@mui/material/TextField';
// import Dialog from '@mui/material/Dialog';
// import DialogActions from '@mui/material/DialogActions';
// import DialogContent from '@mui/material/DialogContent';
// import DialogContentText from '@mui/material/DialogContentText';
// import DialogTitle from '@mui/material/DialogTitle';
// import { useState } from 'react';
// import InputAdornment from '@mui/material/InputAdornment';
// import AccountCircle from '@mui/icons-material/AccountCircle';
// import EmailIcon from '@mui/icons-material/Email';
// import BusinessIcon from '@mui/icons-material/Business';
// import PersonIcon from '@mui/icons-material/Person';
// import LockIcon from '@mui/icons-material/Lock';
// import authSingleton from '../Logic/AuthService';
// import {useNavigate } from 'react-router-dom';
// export default function SignUp(props) {
//   const [open, setOpen] = React.useState(props.open);
//   const navigate= useNavigate();
//   const [details, setDetails] = useState({
//     user_name: '',
//     password: '',
//     email: '',
//     role: 'user',
//     first_name: '',
//     last_name: '',
//     business_name: ''
//   });

//   const handleChange = (field, value) => {
//     var temp = { ...details };
//     temp[field] = value;
//     setDetails(temp);
//   };

//   const handleClickOpen = () => {
//     setOpen(true);
//   };

//   const handleClose = () => {
//     setOpen(false);
//   };

//   const handleChangePassword = (field, value) => {
//     handleChange(field, value);
//     //בדיקות תקינות----------------------------------------------------------------------------------------------
//   };
// // const handleSignUp =()=>
// //   {
// //     navigate('/connection')
// //   }
//   return (
//     <React.Fragment>
//       {/* <Button variant="contained" color="primary" onClick={handleClickOpen} style={{ backgroundColor: 'rgb(106, 174, 165)', color: 'white' }}>
//         הרשמה
//       </Button> */}
//       <Button 
//         variant="contained"
//         color="primary"
//         onClick={handleClickOpen}
//         style={{
//           backgroundColor: 'rgb(33, 37, 41)',
//           color: 'white',
//           padding: '15px 30px',
//           fontSize: '18px',
//           borderRadius: '10px',
//           textTransform: 'none',
//           boxShadow: '0px 3px 6px rgba(0, 0, 0, 0.16)',
//           transition: 'background-color 0.3s ease',
//         }}
//         onMouseOver={(e) => (e.currentTarget.style.backgroundColor = 'rgb(23, 27, 31)')}
//         onMouseOut={(e) => (e.currentTarget.style.backgroundColor = 'rgb(33, 37, 41)')}
//       >
//         הרשמה
//       </Button>
//       <Dialog
//         open={open}
//         onClose={handleClose}
//         PaperProps={{
//           component: 'form',
//           onSubmit: (event) => {
//             event.preventDefault();
//             authSingleton.SignUp({ ...details });
//             handleClose();
//           },
//           style: { backgroundColor: 'rgb(224, 242, 241)', color: 'rgb(10, 63, 61)',textAlign:'center' }
//         }}
//       >
//         <DialogTitle>!הצטרף אלינו</DialogTitle>
//         <DialogContent>
//           <DialogContentText>
//             !צור חשבון חדש והצטרף לקהילה שלנו
//           </DialogContentText>
//           <TextField
//             autoFocus
//             required
//             margin="dense"
//             id="username"
//             name="username"
//             label="שם משתמש"
//             InputProps={{
//               startAdornment: (
//                 <InputAdornment position="start">
//                   <AccountCircle style={{ color: 'rgb(10, 63, 61)' }} />
//                 </InputAdornment>
//               ),
//               style: { color: 'rgb(10, 63, 61)' }
//             }}
//             InputLabelProps={{
//               style: { color: 'rgb(10, 63, 61)' }
//             }}
//             variant="outlined"
//             fullWidth
//             onChange={(e) => handleChange("user_name", e.target.value)}
//             style={{ backgroundColor: 'rgb(240, 255, 255)', borderRadius: '4px', marginBottom: '10px' }}
//           />
//           <TextField
//             required
//             margin="dense"
//             id="password"
//             name="password"
//             label="סיסמא"
//             type="password"
//             variant="outlined"
//             fullWidth
//             onChange={(e) => handleChange("password", e.target.value)}
//             style={{ backgroundColor: 'rgb(240, 255, 255)', borderRadius: '4px', marginBottom: '10px' }}
//             InputProps={{
//               startAdornment: (
//                 <InputAdornment position="start">
//                   <LockIcon style={{ color: 'rgb(10, 63, 61)' }} />
//                 </InputAdornment>
//               ),
//               style: { color: 'rgb(10, 63, 61)' }
//             }}
//             InputLabelProps={{
//               style: { color: 'rgb(10, 63, 61)' }
//             }}
//           />
//           <TextField
//             required
//             margin="dense"
//             id="email"
//             name="email"
//             label="אימייל"
//             type="email"
//             variant="outlined"
//             fullWidth
//             onChange={(e) => handleChange("email", e.target.value)}
//             style={{ backgroundColor: 'rgb(240, 255, 255)', borderRadius: '4px', marginBottom: '10px' }}
//             InputProps={{
//               startAdornment: (
//                 <InputAdornment position="start">
//                   <EmailIcon style={{ color: 'rgb(10, 63, 61)' }} />
//                 </InputAdornment>
//               ),
//               style: { color: 'rgb(10, 63, 61)' }
//             }}
//             InputLabelProps={{
//               style: { color: 'rgb(10, 63, 61)' }
//             }}
//           />
//           <TextField
//             required
//             margin="dense"
//             id="first_name"
//             name="first_name"
//             label="שם פרטי"
//             type="text"
//             variant="outlined"
//             fullWidth
//             onChange={(e) => handleChange("first_name", e.target.value)}
//             style={{ backgroundColor: 'rgb(240, 255, 255)', borderRadius: '4px', marginBottom: '10px' }}
//             InputProps={{
//               startAdornment: (
//                 <InputAdornment position="start">
//                   <PersonIcon style={{ color: 'rgb(10, 63, 61)' }} />
//                 </InputAdornment>
//               ),
//               style: { color: 'rgb(10, 63, 61)' }
//             }}
//             InputLabelProps={{
//               style: { color: 'rgb(10, 63, 61)' }
//             }}
//           />
//           <TextField
//             required
//             margin="dense"
//             id="last_name"
//             name="last_name"
//             label="שם משפחה"
//             type="text"
//             variant="outlined"
//             fullWidth
//             onChange={(e) => handleChange("last_name", e.target.value)}
//             style={{ backgroundColor: 'rgb(240, 255, 255)', borderRadius: '4px', marginBottom: '10px' }}
//             InputProps={{
//               startAdornment: (
//                 <InputAdornment position="start">
//                   <PersonIcon style={{ color: 'rgb(10, 63, 61)' }} />
//                 </InputAdornment>
//               ),
//               style: { color: 'rgb(10, 63, 61)' }
//             }}
//             InputLabelProps={{
//               style: { color: 'rgb(10, 63, 61)' }
//             }}
//           />
//           <TextField
//             required
//             margin="dense"
//             id="business_name"
//             name="business_name"
//             label="שם העסק שלך"
//             type="text"
//             variant="outlined"
//             fullWidth
//             onChange={(e) => handleChange("business_name", e.target.value)}
//             style={{ backgroundColor: 'rgb(240, 255, 255)', borderRadius: '4px', marginBottom: '10px' }}
//             InputProps={{
//               startAdornment: (
//                 <InputAdornment position="start">
//                   <BusinessIcon style={{ color: 'rgb(10, 63, 61)' }} />
//                 </InputAdornment>
//               ),
//               style: { color: 'rgb(10, 63, 61)' }
//             }}
//             InputLabelProps={{
//               style: { color: 'rgb(10, 63, 61)' }
//             }}
//           />
//         </DialogContent>
//         <DialogActions>
//           <Button onClick={handleClose} style={{ color: 'rgb(10, 63, 61)' }}>ביטול</Button>
//           <Button type="submit" style={{ color: 'rgb(10, 63, 61)' }}>צור חשבון</Button>
//         </DialogActions>
//       </Dialog>
//     </React.Fragment>
//   );
// }
//-------------------------------------------
// import * as React from 'react';
// import Button from '@mui/material/Button';
// import TextField from '@mui/material/TextField';
// import Dialog from '@mui/material/Dialog';
// import DialogActions from '@mui/material/DialogActions';
// import DialogContent from '@mui/material/DialogContent';
// import DialogContentText from '@mui/material/DialogContentText';
// import DialogTitle from '@mui/material/DialogTitle';
// import { useState } from 'react';
// import InputAdornment from '@mui/material/InputAdornment';
// import AccountCircle from '@mui/icons-material/AccountCircle';
// import EmailIcon from '@mui/icons-material/Email';
// import BusinessIcon from '@mui/icons-material/Business';
// import PersonIcon from '@mui/icons-material/Person';
// import LockIcon from '@mui/icons-material/Lock';
// import authSingleton from '../Logic/AuthService';
// import { useNavigate } from 'react-router-dom';

// export default function SignUp(props) {
//   const [open, setOpen] = React.useState(props.open);
//   const navigate = useNavigate();
//   const [details, setDetails] = useState({
//     user_name: '',
//     password: '',
//     email: '',
//     role: 'user',
//     first_name: '',
//     last_name: '',
//     business_name: ''
//   });
//   const [errors, setErrors] = useState({
//     user_name: '',
//     password: '',
//     email: '',
//     first_name: '',
//     last_name: '',
//     business_name: ''
//   });

//   const handleChange = (field, value) => {
//     var temp = { ...details };
//     temp[field] = value;
//     setDetails(temp);
//     validateField(field, value);
//   };

//   const validateField = (field, value) => {
//     let error = '';
//     switch (field) {
//       case 'user_name':
//         if (value.length < 3) {
//           error = 'שם המשתמש חייב להכיל לפחות 3 תווים';
//         }
//         break;
//       case 'password':
//         if (value.length < 6) {
//           error = 'הסיסמא חייבת להכיל לפחות 6 תווים';
//         }
//         break;
//       case 'email':
//         const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//         if (!emailRegex.test(value)) {
//           error = 'כתובת האימייל אינה תקינה';
//         }
//         break;
//       case 'first_name':
//       case 'last_name':
//         if (value.length < 2) {
//           error = `ה${field === 'first_name' ? 'שם הפרטי' : 'שם המשפחה'} חייב להכיל לפחות 2 תווים`;
//         }
//         break;
//       case 'business_name':
//         if (value.length < 3) {
//           error = 'שם העסק חייב להכיל לפחות 3 תווים';
//         }
//         break;
//       default:
//         break;
//     }
//     setErrors(prevErrors => ({ ...prevErrors, [field]: error }));
//   };

//   const handleClickOpen = () => {
//     setOpen(true);
//   };

//   const handleClose = () => {
//     setOpen(false);
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     let valid = true;
//     for (const field in details) {
//       if (validateField(field, details[field])) {
//         valid = false;
//       }
//     }
//     if (valid) {
//       authSingleton.SignUp({ ...details });
//       handleClose();
//     }
//   };

//   return (
//     <React.Fragment>
//       <Button 
//         variant="contained"
//         color="primary"
//         onClick={handleClickOpen}
//         style={{
//           backgroundColor: 'rgb(33, 37, 41)',
//           color: 'white',
//           padding: '15px 30px',
//           fontSize: '18px',
//           borderRadius: '10px',
//           textTransform: 'none',
//           boxShadow: '0px 3px 6px rgba(0, 0, 0, 0.16)',
//           transition: 'background-color 0.3s ease',
//         }}
//         onMouseOver={(e) => (e.currentTarget.style.backgroundColor = 'rgb(23, 27, 31)')}
//         onMouseOut={(e) => (e.currentTarget.style.backgroundColor = 'rgb(33, 37, 41)')}
//       >
//         הרשמה
//       </Button>
//       <Dialog
//         open={open}
//         onClose={handleClose}
//         PaperProps={{
//           component: 'form',
//           onSubmit: handleSubmit,
//           style: { backgroundColor: 'rgb(224, 242, 241)', color: 'rgb(10, 63, 61)', textAlign: 'center' }
//         }}
//       >
//         <DialogTitle>!הצטרף אלינו</DialogTitle>
//         <DialogContent>
//           <DialogContentText>
//             !צור חשבון חדש והצטרף לקהילה שלנו
//           </DialogContentText>
//           <TextField
//             autoFocus
//             required
//             margin="dense"
//             id="username"
//             name="username"
//             label="שם משתמש"
//             error={!!errors.user_name}
//             helperText={errors.user_name}
//             InputProps={{
//               startAdornment: (
//                 <InputAdornment position="start">
//                   <AccountCircle style={{ color: 'rgb(10, 63, 61)' }} />
//                 </InputAdornment>
//               ),
//               style: { color: 'rgb(10, 63, 61)' }
//             }}
//             InputLabelProps={{
//               style: { color: 'rgb(10, 63, 61)' }
//             }}
//             variant="outlined"
//             fullWidth
//             onChange={(e) => handleChange("user_name", e.target.value)}
//             style={{ backgroundColor: 'rgb(240, 255, 255)', borderRadius: '4px', marginBottom: '10px' }}
//           />
//           <TextField
//             required
//             margin="dense"
//             id="password"
//             name="password"
//             label="סיסמא"
//             type="password"
//             error={!!errors.password}
//             helperText={errors.password}
//             variant="outlined"
//             fullWidth
//             onChange={(e) => handleChange("password", e.target.value)}
//             style={{ backgroundColor: 'rgb(240, 255, 255)', borderRadius: '4px', marginBottom: '10px' }}
//             InputProps={{
//               startAdornment: (
//                 <InputAdornment position="start">
//                   <LockIcon style={{ color: 'rgb(10, 63, 61)' }} />
//                 </InputAdornment>
//               ),
//               style: { color: 'rgb(10, 63, 61)' }
//             }}
//             InputLabelProps={{
//               style: { color: 'rgb(10, 63, 61)' }
//             }}
//           />
//           <TextField
//             required
//             margin="dense"
//             id="email"
//             name="email"
//             label="אימייל"
//             type="email"
//             error={!!errors.email}
//             helperText={errors.email}
//             variant="outlined"
//             fullWidth
//             onChange={(e) => handleChange("email", e.target.value)}
//             style={{ backgroundColor: 'rgb(240, 255, 255)', borderRadius: '4px', marginBottom: '10px' }}
//             InputProps={{
//               startAdornment: (
//                 <InputAdornment position="start">
//                   <EmailIcon style={{ color: 'rgb(10, 63, 61)' }} />
//                 </InputAdornment>
//               ),
//               style: { color: 'rgb(10, 63, 61)' }
//             }}
//             InputLabelProps={{
//               style: { color: 'rgb(10, 63, 61)' }
//             }}
//           />
//           <TextField
//             required
//             margin="dense"
//             id="first_name"
//             name="first_name"
//             label="שם פרטי"
//             type="text"
//             error={!!errors.first_name}
//             helperText={errors.first_name}
//             variant="outlined"
//             fullWidth
//             onChange={(e) => handleChange("first_name", e.target.value)}
//             style={{ backgroundColor: 'rgb(240, 255, 255)', borderRadius: '4px', marginBottom: '10px' }}
//             InputProps={{
//               startAdornment: (
//                 <InputAdornment position="start">
//                   <PersonIcon style={{ color: 'rgb(10, 63, 61)' }} />
//                 </InputAdornment>
//               ),
//               style: { color: 'rgb(10, 63, 61)' }
//             }}
//             InputLabelProps={{
//               style: { color: 'rgb(10, 63, 61)' }
//             }}
//           />
//           <TextField
//             required
//             margin="dense"
//             id="last_name"
//             name="last_name"
//             label="שם משפחה"
//             type="text"
//             error={!!errors.last_name}
//             helperText={errors.last_name}
//             variant="outlined"
//             fullWidth
//             onChange={(e) => handleChange("last_name", e.target.value)}
//             style={{ backgroundColor: 'rgb(240, 255, 255)', borderRadius: 'I've adjusted your component to include validations and checks. The validation functions will now ensure that the user inputs meet specific criteria before submitting the form.



import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useState } from 'react';
import InputAdornment from '@mui/material/InputAdornment';
import AccountCircle from '@mui/icons-material/AccountCircle';
import EmailIcon from '@mui/icons-material/Email';
import BusinessIcon from '@mui/icons-material/Business';
import PersonIcon from '@mui/icons-material/Person';
import LockIcon from '@mui/icons-material/Lock';
import authSingleton from '../Logic/AuthService';
import { useNavigate } from 'react-router-dom';

export default function SignUp(props) {
  const [open, setOpen] = React.useState(props.open);
  const navigate = useNavigate();
  const [details, setDetails] = useState({
    user_name: '',
    password: '',
    email: '',
    role: 'user',
    first_name: '',
    last_name: '',
    business_name: ''
  });
  const [errors, setErrors] = useState({
    user_name: '',
    password: '',
    email: '',
    first_name: '',
    last_name: '',
    business_name: ''
  });

  const handleChange = (field, value) => {
    var temp = { ...details };
    temp[field] = value;
    setDetails(temp);
    validateField(field, value);
  };

  const validateField = (field, value) => {
    let error = '';
    switch (field) {
      case 'user_name':
        if (value.length < 3) {
          error = 'שם המשתמש חייב להכיל לפחות 3 תווים';
        }
        break;
      case 'password':
        if (value.length < 6) {
          error = 'הסיסמא חייבת להכיל לפחות 6 תווים';
        }
        break;
      case 'email':
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value)) {
          error = 'כתובת האימייל אינה תקינה';
        }
        break;
      case 'first_name':
      case 'last_name':
        if (value.length < 2) {
          error = `ה${field === 'first_name' ? 'שם הפרטי' : 'שם המשפחה'} חייב להכיל לפחות 2 תווים`;
        }
        break;
      case 'business_name':
        if (value.length < 3) {
          error = 'שם העסק חייב להכיל לפחות 3 תווים';
        }
        break;
      default:
        break;
    }
    setErrors(prevErrors => ({ ...prevErrors, [field]: error }));
    return error;
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    navigate('/');
    setOpen(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    let valid = true;
    for (const field in details) {
      if (validateField(field, details[field])) {
        valid = false;
      }
    }
    if (valid) {
      authSingleton.SignUp({ ...details });
      handleClose();
    }
  };

  return (
    <React.Fragment>
      <Button 
        variant="contained"
        color="primary"
        onClick={handleClickOpen}
        style={{
          backgroundColor: 'rgb(33, 37, 41)',
          color: 'white',
          padding: '15px 30px',
          fontSize: '18px',
          borderRadius: '10px',
          textTransform: 'none',
          boxShadow: '0px 3px 6px rgba(0, 0, 0, 0.16)',
          transition: 'background-color 0.3s ease',
        }}
        onMouseOver={(e) => (e.currentTarget.style.backgroundColor = 'rgb(23, 27, 31)')}
        onMouseOut={(e) => (e.currentTarget.style.backgroundColor = 'rgb(33, 37, 41)')}
      >
        הרשמה
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        PaperProps={{
          component: 'form',
          onSubmit: handleSubmit,
          style: { backgroundColor: 'rgb(224, 242, 241)', color: 'rgb(10, 63, 61)', textAlign: 'center' }
        }}
      >
        <DialogTitle>!הצטרף אלינו</DialogTitle>
        <DialogContent>
          <DialogContentText>
            !צור חשבון חדש והצטרף לקהילה שלנו
          </DialogContentText>
          <TextField
            autoFocus
            required
            margin="dense"
            id="username"
            name="username"
            label="שם משתמש"
            error={!!errors.user_name}
            helperText={errors.user_name}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <AccountCircle style={{ color: 'rgb(10, 63, 61)' }} />
                </InputAdornment>
              ),
              style: { color: 'rgb(10, 63, 61)' }
            }}
            InputLabelProps={{
              style: { color: 'rgb(10, 63, 61)' }
            }}
            variant="outlined"
            fullWidth
            onChange={(e) => handleChange("user_name", e.target.value)}
            style={{ backgroundColor: 'rgb(240, 255, 255)', borderRadius: '4px', marginBottom: '10px' }}
          />
          <TextField
            required
            margin="dense"
            id="password"
            name="password"
            label="סיסמא"
            type="password"
            error={!!errors.password}
            helperText={errors.password}
            variant="outlined"
            fullWidth
            onChange={(e) => handleChange("password", e.target.value)}
            style={{ backgroundColor: 'rgb(240, 255, 255)', borderRadius: '4px', marginBottom: '10px' }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <LockIcon style={{ color: 'rgb(10, 63, 61)' }} />
                </InputAdornment>
              ),
              style: { color: 'rgb(10, 63, 61)' }
            }}
            InputLabelProps={{
              style: { color: 'rgb(10, 63, 61)' }
            }}
          />
          <TextField
            required
            margin="dense"
            id="email"
            name="email"
            label="אימייל"
            type="email"
            error={!!errors.email}
            helperText={errors.email}
            variant="outlined"
            fullWidth
            onChange={(e) => handleChange("email", e.target.value)}
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
          <TextField
            required
            margin="dense"
            id="first_name"
            name="first_name"
            label="שם פרטי"
            type="text"
            error={!!errors.first_name}
            helperText={errors.first_name}
            variant="outlined"
            fullWidth
            onChange={(e) => handleChange("first_name", e.target.value)}
            style={{ backgroundColor: 'rgb(240, 255, 255)', borderRadius: '4px', marginBottom: '10px' }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <PersonIcon style={{ color: 'rgb(10, 63, 61)' }} />
                </InputAdornment>
              ),
              style: { color: 'rgb(10, 63, 61)' }
            }}
            InputLabelProps={{
              style: { color: 'rgb(10, 63, 61)' }
            }}
          />
          <TextField
            required
            margin="dense"
            id="last_name"
            name="last_name"
            label="שם משפחה"
            type="text"
            error={!!errors.last_name}
            helperText={errors.last_name}
            variant="outlined"
            fullWidth
            onChange={(e) => handleChange("last_name", e.target.value)}
            style={{ backgroundColor: 'rgb(240, 255, 255)', borderRadius: '4px', marginBottom: '10px' }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <PersonIcon style={{ color: 'rgb(10, 63, 61)' }} />
                </InputAdornment>
              ),
              style: { color: 'rgb(10, 63, 61)' }
            }}
            />
          <TextField
            required
            margin="dense"
            id="business_name"
            name="business_name"
            label="שם עסק"
            type="text"
            error={!!errors.business_name}
            helperText={errors.business_name}
            variant="outlined"
            fullWidth
            onChange={(e) => handleChange("business_name", e.target.value)}
            style={{ backgroundColor: 'rgb(240, 255, 255)', borderRadius: '4px', marginBottom: '10px' }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <BusinessIcon style={{ color: 'rgb(10, 63, 61)' }} />
                </InputAdornment>
              ),
              style: { color: 'rgb(10, 63, 61)' }
            }}
            InputLabelProps={{
              style: { color: 'rgb(10, 63, 61)' }
            }}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            ביטול
          </Button>
          <Button type="submit" color="primary">
            הירשם
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
