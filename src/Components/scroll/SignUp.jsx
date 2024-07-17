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
// import authSingleton from '../Logic/AuthService';
// export default function SignUp() {
//   const [open, setOpen] = React.useState(false);
//   const [details, setDetails] = useState(
//     {username:'',
//      password:'',
//      email:'',
//      role:'',
//      first_name:'',
//      last_name:'',
//      business_name:''
//     });

//   const handleChange=(field,value)=>{
//     var temp= {...details};
//     temp[field]=value;
//     setDetails(temp);

//   }
  
//   const handleClickOpen = () => {
//     setOpen(true);
//   };

//   const handleClose = () => {
//     setOpen(false);
//   };
//  const handleChangePassword=(field,value)=>{
// handleChange(field,value);
// //בדיקות תקינות----------------------------------------------------------------------------------------------

//  }
//   return (
//     <React.Fragment>
//       <Button variant="outlined" onClick={handleClickOpen}>
//         sign-up
//       </Button>
//       <Dialog
//         open={open}
//         onClose={handleClose}
//         PaperProps={{
//           component: 'form',
//           onSubmit: (event) => {
//             event.preventDefault() ;
//             authSingleton.SignUp({...details});
//             handleClose();
//           },
//         }}
//         sx={{backgroundColor:'rgb(10, 215, 440,0.3)'}}
//       >
//         <DialogTitle>!הצטרף אלינו</DialogTitle>
//         <DialogContent>
//           <DialogContentText>
             
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
//                   <AccountCircle />
//                 </InputAdornment>
//               ),
//             }}
//             variant="standard"
//             onChange={()=>handleChange("username",event.target.value)}

//           /><br></br>
         
//             <TextField required 
//             margin="dense" 
//             id="password"
//             name="password"
//             label="סיסמא"
//             type="password"
           
//             variant="standard"
//             onChange={()=>handleChange("password",event.target.value)}
//             />
//             <br></br>
//             <TextField required 
//             margin="dense" 
//             id="email"
//             name="email"
//             label="אימייל"
//             type="email"
            
//             variant="standard"
//             onChange={()=>handleChange("email",event.target.value)}
        
//             /><br></br>
//              <TextField required 
//             margin="dense" 
//             id="email"
//             name="email"
//             label="שם פרטי"
//             type="text"
            
//             variant="standard"
//             onChange={()=>handleChange("first_name",event.target.value)}
        
//             /><br></br>
//              <TextField required 
//             margin="dense" 
//             id="email"
//             name="email"
//             label="שם משפחה"
//             type="text"
            
//             variant="standard"
//             onChange={()=>handleChange("last_name",event.target.value)}
        
//             /><br></br>
//              <TextField required 
//             margin="dense" 
//             id="email"
//             name="email"
//             label="שם העסק שלך"
//             type="text"
            
//             variant="standard"
//             onChange={()=>handleChange("business_name",event.target.value)}
        
//             /><br></br>
            
//         </DialogContent>
//         <DialogActions>
//           <Button onClick={handleClose}>ביטול</Button>
//           <Button type="submit">צור חשבון</Button>
//         </DialogActions>
//       </Dialog>
//     </React.Fragment>
//   );
// }

//*********************************************************************** */

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
import {useNavigate } from 'react-router-dom';
export default function SignUp(props) {
  const [open, setOpen] = React.useState(props.open);
  const navigate= useNavigate();
  const [details, setDetails] = useState({
    username: '',
    password: '',
    email: '',
    role: '',
    first_name: '',
    last_name: '',
    business_name: ''
  });

  const handleChange = (field, value) => {
    var temp = { ...details };
    temp[field] = value;
    setDetails(temp);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleChangePassword = (field, value) => {
    handleChange(field, value);
    //בדיקות תקינות----------------------------------------------------------------------------------------------
  };
// const handleSignUp =()=>
//   {
//     navigate('/connection')
//   }
  return (
    <React.Fragment>
      {/* <Button variant="contained" color="primary" onClick={handleClickOpen} style={{ backgroundColor: 'rgb(106, 174, 165)', color: 'white' }}>
        הרשמה
      </Button> */}
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
          onSubmit: (event) => {
            event.preventDefault();
            authSingleton.SignUp({ ...details });
            handleClose();
          },
          style: { backgroundColor: 'rgb(224, 242, 241)', color: 'rgb(10, 63, 61)',textAlign:'center' }
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
            onChange={(e) => handleChange("username", e.target.value)}
            style={{ backgroundColor: 'rgb(240, 255, 255)', borderRadius: '4px', marginBottom: '10px' }}
          />
          <TextField
            required
            margin="dense"
            id="password"
            name="password"
            label="סיסמא"
            type="password"
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
            InputLabelProps={{
              style: { color: 'rgb(10, 63, 61)' }
            }}
          />
          <TextField
            required
            margin="dense"
            id="business_name"
            name="business_name"
            label="שם העסק שלך"
            type="text"
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
          <Button onClick={handleClose} style={{ color: 'rgb(10, 63, 61)' }}>ביטול</Button>
          <Button type="submit" style={{ color: 'rgb(10, 63, 61)' }}>צור חשבון</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
