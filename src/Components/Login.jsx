// // // import * as React from 'react';
// // // import Button from '@mui/material/Button';
// // // import TextField from '@mui/material/TextField';
// // // import Dialog from '@mui/material/Dialog';
// // // import DialogActions from '@mui/material/DialogActions';
// // // import DialogContent from '@mui/material/DialogContent';
// // // import DialogContentText from '@mui/material/DialogContentText';
// // // import DialogTitle from '@mui/material/DialogTitle';
// // // import { useState } from 'react';
// // // import authSingleton from '../Logic/AuthService';
// // // import InputAdornment from '@mui/material/InputAdornment';
// // // import AccountCircle from '@mui/icons-material/AccountCircle';
// // // import { LoginOutlined } from '@mui/icons-material';




// // // export default function Login() {
// // //   const [open, setOpen] = React.useState(false);
// // //   const [credential, setCredential] = useState({userName:'',password:''});
// // //   const [forgetPassword, setForgetPassword] = useState(false);
// // //   const [email, setEmail] =useState('');
 


// // //   const handleChange=(field,value)=>{
// // //     var temp= {...credential};
// // //     temp[field]=value;
// // //     setCredential(temp);
// // //   }
  
// // //   const handleClickOpen = () => {
// // //     setOpen(true);
// // //   };

// // //   const handleClose = () => {
// // //     setOpen(false);
// // //   };

// // //  const handleChangePassword=(field,value)=>{
// // //     handleChange(field,value);
// // //     //בדיקות תקינות----------------------------------------------------------------------------------------------
// // //  }


// // //   return (
// // //     <React.Fragment>
// // //       <Button variant="outlined" onClick={handleClickOpen}>
// // //         Log-In
// // //       </Button>

// // //       <Dialog
// // //         open={open}
// // //         onClose={handleClose}
// // //         PaperProps={{
// // //           component: 'form',
// // //           onSubmit: async(event) => {
// // //             event.preventDefault();
// // //             if(forgetPassword)
// // //                 {
// // //                   authSingleton.ResetEmail(email);
// // //                     //navigate to - ?
// // //                     console.log("email",email);
// // //                 }                                           
// // //             else{
// // //             const res=await authSingleton.Login(credential.userName,credential.password)
// // //                      //navigate to : אזור אישי
// // //                      console.log(credential);
// // //                      console.log("res",res);
// // //                      handleClose();
// // //             }    
            
           
// // //           },
// // //         }}
// // //         sx={{backgroundColor:'rgb(10, 215, 440,0.3)'}}
// // //       >
// // //         {/* '#538683' rgba(85, 260, 120,0.5) 'rgb(106, 174, 151)'*/}
       
// // //         <DialogTitle >{forgetPassword?"איפוס סיסמא ":"כניסה לחשבון"}</DialogTitle>
// // //         <DialogContent>
// // //           <DialogContentText>
// // //             {forgetPassword?"אנא הכנס את האימייל שאיתו נרשמת לחשבון":"כניסה לחשבון קיים"}
// // //           </DialogContentText>
// // //           {!forgetPassword?<>
          
// // //           <TextField
// // //             autoFocus
// // //             required
// // //             margin="dense"
// // //             id="username"
// // //             name="username"
// // //             label="username"
            
// // //             dir="rtl"
// // //             InputProps={{
// // //               startAdornment: (
// // //                 <InputAdornment position="start">
// // //                   {/* <AccountCircle /> */}
// // //                 </InputAdornment>
// // //               ),
// // //             }}
// // //             variant="standard"
// // //             onChange={()=>handleChange("userName",event.target.value)}

// // //           />
// // //        <br></br>

          
// // //             <TextField required 
// // //             margin="dense" 
// // //             id="password"
// // //             name="password"
// // //             label="password"
// // //             type="password"
            
// // //             variant="standard"
// // //             onChange={()=>handleChangePassword("password",event.target.value)}
// // //             />
// // //             <br></br>
            
// // //             </>:
// // //             <>
// // //             <TextField required 
// // //             margin="dense" 
// // //             id="email"
// // //             name="email"
// // //             label="email"
// // //             type="email"
// // //             fullWidth
// // //             variant="outlined"
// // //             onChange={()=>setEmail(event.target.value)}
            
// // //             />
// // //             <br></br>
// // //            <p>או</p>
// // //            <br></br>
// // //            <LoginOutlined></LoginOutlined>
            
// // //             </>
// // //             }
// // //             <Button onClick={()=>setForgetPassword(!forgetPassword)}>{!forgetPassword?"שכחתי סיסמא":"שם משתמש וסיסמא"}</Button>
// // //         </DialogContent>
// // //         <DialogActions>
// // //           <Button onClick={handleClose}>ביטול</Button>
// // //          {forgetPassword?<Button type="submit">שלח קוד אימות למייל</Button>:<Button type="submit">היכנס לחשבון</Button>}
          


// // //         </DialogActions>
// // //       </Dialog>
// // //     </React.Fragment>
// // //   );
// // // }


// // import * as React from 'react';
// // import Button from '@mui/material/Button';
// // import TextField from '@mui/material/TextField';
// // import Dialog from '@mui/material/Dialog';
// // import DialogActions from '@mui/material/DialogActions';
// // import DialogContent from '@mui/material/DialogContent';
// // import DialogContentText from '@mui/material/DialogContentText';
// // import DialogTitle from '@mui/material/DialogTitle';
// // import { useState } from 'react';
// // import authSingleton from '../Logic/AuthService';
// // import InputAdornment from '@mui/material/InputAdornment';
// // import AccountCircle from '@mui/icons-material/AccountCircle';
// // import Google from './Google';

// // export default function Login() {
// //   const [open, setOpen] = React.useState(false);
// //   const [credential, setCredential] = useState({ userName: '', password: '' });
// //   const [forgetPassword, setForgetPassword] = useState(false);
// //   const [email, setEmail] = useState('');

// //   const handleChange = (field, value) => {
// //     var temp = { ...credential };
// //     temp[field] = value;
// //     setCredential(temp);
// //   };

// //   const handleClickOpen = () => {
// //     setOpen(true);
// //   };

// //   const handleClose = () => {
// //     setOpen(false);
// //   };

// //   const handleChangePassword = (field, value) => {
// //     handleChange(field, value);
// //     //בדיקות תקינות----------------------------------------------------------------------------------------------
// //   };

// //   return (
// //     <React.Fragment>
// //       <Button variant="contained" color="primary" onClick={handleClickOpen} style={{ backgroundColor: 'rgb(10, 50, 61,0.8)' }}>
// //         Log-In
// //       </Button>

// //       <Dialog
// //         open={open}
// //         onClose={handleClose}
// //         PaperProps={{
// //           component: 'form',
// //           onSubmit: async (event) => {
// //             event.preventDefault();
// //             if (forgetPassword) {
// //               authSingleton.ResetEmail(email);
// //               //navigate to - ?
// //               console.log("email", email);
// //             } else {
// //               const res = await authSingleton.Login(credential.userName, credential.password);
// //               //navigate to : אזור אישי
// //               console.log(credential);
// //               console.log("res", res);
// //               handleClose();
// //             }
// //           },
// //           style: { backgroundColor: 'rgb(10, 63, 61,0.9)', color: 'white' }
// //         }}
// //       >
// //         <DialogTitle>{forgetPassword ? "איפוס סיסמא " : "כניסה לחשבון"}</DialogTitle>
// //         <DialogContent>
// //           <DialogContentText>
// //             {forgetPassword ? "אנא הכנס את האימייל שאיתו נרשמת לחשבון" : "כניסה לחשבון קיים"}
// //           </DialogContentText>
// //           {!forgetPassword ? <>
// //             <TextField
// //               autoFocus
// //               required
// //               margin="dense"
// //               id="username"
// //               name="username"
// //               label="Username"
// //               dir="rtl"
// //               InputProps={{
// //                 startAdornment: (
// //                   <InputAdornment position="start">
// //                     <AccountCircle />
// //                   </InputAdornment>
// //                 ),
// //               }}
// //               variant="standard"
// //               fullWidth
// //               onChange={(e) => handleChange("userName", e.target.value)}
// //               style={{ backgroundColor: 'white', borderRadius: '4px' }}
// //             />
// //             <br /><br />
// //             <TextField
// //               required
// //               margin="dense"
// //               id="password"
// //               name="password"
// //               label="Password"
// //               type="password"
// //               variant="standard"
// //               fullWidth
// //               onChange={(e) => handleChangePassword("password", e.target.value)}
// //               style={{ backgroundColor: 'white', borderRadius: '4px' }}
// //             />
// //             <br /><br />
// //           </> : <>
// //             <TextField
// //               required
// //               margin="dense"
// //               id="email"
// //               name="email"
// //               label="Email"
// //               type="email"
// //               fullWidth
// //               variant="outlined"
// //               onChange={(e) => setEmail(e.target.value)}
// //               style={{ backgroundColor: 'white', borderRadius: '4px' }}
// //             />
// //             <br /><br />
// //             <p>או</p>
// //             <Google></Google>
// //             <br /><br />
// //           </>}
// //           <Button onClick={() => setForgetPassword(!forgetPassword)} style={{ color: 'white' }}>{!forgetPassword ? "שכחתי סיסמא" : "שם משתמש וסיסמא"}</Button>
// //         </DialogContent>
// //         <DialogActions>
// //           <Button onClick={handleClose} style={{ color: 'white' }}>ביטול</Button>
// //           {forgetPassword ? <Button type="submit" style={{ color: 'white' }}>שלח קוד אימות למייל</Button> : <Button type="submit" style={{ color: 'white' }}>היכנס לחשבון</Button>}
// //         </DialogActions>
// //       </Dialog>
// //     </React.Fragment>
// //   );
// // }


// // import * as React from 'react';
// // import Button from '@mui/material/Button';
// // import TextField from '@mui/material/TextField';
// // import Dialog from '@mui/material/Dialog';
// // import DialogActions from '@mui/material/DialogActions';
// // import DialogContent from '@mui/material/DialogContent';
// // import DialogContentText from '@mui/material/DialogContentText';
// // import DialogTitle from '@mui/material/DialogTitle';
// // import { useState } from 'react';
// // import authSingleton from '../Logic/AuthService';
// // import InputAdornment from '@mui/material/InputAdornment';
// // import AccountCircle from '@mui/icons-material/AccountCircle';
// // import { LoginOutlined } from '@mui/icons-material';
// // import GoogleAuthOld from './GoogleAuth-old';

// // export default function Login() {
// //   const [open, setOpen] = React.useState(false);
// //   const [credential, setCredential] = useState({ userName: '', password: '' });
// //   const [forgetPassword, setForgetPassword] = useState(false);
// //   const [email, setEmail] = useState('');

// //   const handleChange = (field, value) => {
// //     var temp = { ...credential };
// //     temp[field] = value;
// //     setCredential(temp);
// //   };

// //   const handleClickOpen = () => {
// //     setOpen(true);
// //   };

// //   const handleClose = () => {
// //     setOpen(false);
// //   };

// //   const handleChangePassword = (field, value) => {
// //     handleChange(field, value);
// //     //בדיקות תקינות----------------------------------------------------------------------------------------------
// //   };

// //   return (
// //     <React.Fragment>
// //       <Button variant="contained" color="primary" onClick={handleClickOpen} style={{ backgroundColor: 'rgb(106, 174, 151)', color: 'white' }}>
// //         Log-In
// //       </Button>

// //       <Dialog
// //         open={open}
// //         onClose={handleClose}
// //         PaperProps={{
// //           component: 'form',
// //           onSubmit: async (event) => {
// //             event.preventDefault();
// //             if (forgetPassword) {
// //               authSingleton.ResetEmail(email);
// //               //navigate to - ?
// //               console.log("email", email);
// //             } else {
// //               const res = await authSingleton.Login(credential.userName, credential.password);
// //               //navigate to : אזור אישי
// //               console.log(credential);
// //               console.log("res", res);
// //               handleClose();
// //             }
// //             // 0504188947
// //             // 036197875 rgb(10, 63, 61,0.9)
// //           },
// //           style: { backgroundColor: 'rgb(224, 242, 241)', color: 'rgb(10, 63, 61)' }
// //         }}
// //       >
// //         <DialogTitle>{forgetPassword ? "איפוס סיסמא " : "כניסה לחשבון"}</DialogTitle>
// //         <DialogContent>
// //           <DialogContentText>
// //             {forgetPassword ? "אנא הכנס את האימייל שאיתו נרשמת לחשבון" : "כניסה לחשבון קיים"}
// //           </DialogContentText>
// //           {!forgetPassword ? <>
// //             <TextField
// //               autoFocus
// //               required
// //               margin="dense"
// //               id="username"
// //               name="username"
// //               label="Username"
// //               dir="rtl"
// //               color="primary"
// //               InputProps={{
// //                 startAdornment: (
// //                   <InputAdornment position="start">
// //                     <AccountCircle />
// //                   </InputAdornment>
// //                 ),
// //                style: { color: 'rgb(10, 63, 61)' }
// //              }}
// //               InputLabelProps={{
// //                 style: { color: 'rgb(10, 63, 61)' }
// //               }}
// //               variant="outlined"
            
// //               onChange={(e) => handleChange("userName", e.target.value)}
// //               style={{ backgroundColor: 'rgb(240, 255, 255)', borderRadius: '4px', marginBottom: '10px' }}
// //             />
// //             <br></br>
// //             <TextField
// //               required
// //               margin="dense"
// //               id="password"
// //               name="password"
// //               label="Password"
// //               type="password"
// //               variant="outlined"
// //               color="primary"
// //               onChange={(e) => handleChangePassword("password", e.target.value)}
// //               style={{ backgroundColor: 'rgb(240, 255, 255)', borderRadius: '4px', marginBottom: '10px' }}
// //               InputProps={{
// //                 style: { color: 'rgb(10, 63, 61)' }
// //               }}
// //               InputLabelProps={{
// //                 style: { color: 'rgb(10, 63, 61)' }
// //               }}
// //             />
// //             <br></br>
// //           </> : <>
// //             <TextField
// //               required
// //               margin="dense"
// //               id="email"
// //               name="email"
// //               label="Email"
// //               type="email"
// //               color="primary"
// //               variant="outlined"
// //               onChange={(e) => setEmail(e.target.value)}
// //               style={{ backgroundColor: 'rgb(240, 255, 255)', borderRadius: '4px', marginBottom: '10px' }}
// //               InputProps={{
// //                 style: { color: 'rgb(10, 63, 61)' }
// //               }}
// //               InputLabelProps={{
// //                 style: { color: 'rgb(10, 63, 61)' }
// //               }}
// //             />
// //             <br />
           
// //             {/* <LoginOutlined style={{ color: 'rgb(10, 63, 61)' }} /> */}
// //           </>}
// //           <Button onClick={() => setForgetPassword(!forgetPassword)} style={{ color: 'rgb(10, 63, 61)', marginTop: '10px' }}>{!forgetPassword ? "שכחתי סיסמא" : "שם משתמש וסיסמא"}</Button>
// //           <br/>
// //           <p style={{ color: 'rgb(10, 63, 61)' }}>או</p>
// //           <GoogleAuthOld></GoogleAuthOld>
       
// //         </DialogContent>
// //         <DialogActions>
// //           <Button onClick={handleClose} style={{ color: 'rgb(10, 63, 61)' }}>ביטול</Button>
// //           {forgetPassword ? <Button type="submit" style={{ color: 'rgb(10, 63, 61)' }}>שלח קוד אימות למייל</Button> : <Button type="submit" style={{ color: 'rgb(10, 63, 61)' }}>היכנס לחשבון</Button>}
// //         </DialogActions>
// //       </Dialog>
// //     </React.Fragment>
// //   );
// // }

// //***********************************************************************
import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useState ,useRef} from 'react';
import authSingleton from '../Logic/AuthService';
import InputAdornment from '@mui/material/InputAdornment';
import AccountCircle from '@mui/icons-material/AccountCircle';
import EmailIcon from '@mui/icons-material/Email';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import IconButton from '@mui/material/IconButton';
import GoogleAuthOld from './GoogleAuth-old';
import LoginService from '../Logic/LoginService';
// import SignUp from "./SignUp";
import {useNavigate } from 'react-router-dom';
export default function Login(props) {
  console.log("login");
  const [open, setOpen] = React.useState(props.open);
  const [credential, setCredential] = useState({ userName: '', password: '' });
  const [forgetPassword, setForgetPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const [resetEmailSent, setResetEmailSent] = useState(false); // State for showing reset email sent message
  const [message, setMessage] = useState(false);
  const [emailError, setEmailError] = useState(false); // State for email error message
//const {user,setUser } = useContext(UserContext);
  const passwordRef = useRef(null);
  const emailRef = useRef(null);

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

  const handleSignUp = ()=>{

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
            setEmail(''); // Clear the email field
           
           
            console.log("emailRef",emailRef);
            console.log("emailRef.current",emailRef.current);
            emailRef.current.focus(); // Set focus on the email field
          }
        } else {
          const res = await LoginService.login(credential.userName, credential.password);
          console.log("Login response:", res);
          if (res.status === 400) {
            setMessage(true);
            setCredential(prev => ({ ...prev, password: '' }));

            console.log("passwordRef",passwordRef);
            console.log("passwordRef.current",passwordRef.current);
            passwordRef.focus();
          }
          else if (res.status === 200) {
            let userData = res.data;
            const token= localStorage.getItem('authToken');
            userData =await LoginService.fetchAndSetUser(token)
            //setUser(userData);
            // console.log(user);
            handleClose();
            // await LoginService.getUsers();
          }
        }
      };


  return (
    <React.Fragment>
      {/* <Button variant="contained" color="primary" onClick={handleClickOpen} style={{ backgroundColor: 'rgb(106, 174, 165)', color: 'white' }}>
        Log-In
      </Button> */}

      <Dialog 
        open={open}
        onClose={handleClose}
        PaperProps={{
          component: 'form',
          // onSubmit: async (event) => {
          //   event.preventDefault();
          //   if (forgetPassword) {
          //     authSingleton.ResetEmail(email);
          //     //navigate to - ?
          //     console.log("email", email);
          //   } else {
          //     const res = await authSingleton.Login(credential.userName, credential.password);
          //     //navigate to : אזור אישי
          //     console.log(credential);
          //     console.log("res", res);
          //     handleClose();
          //   }

          onSubmit: handleSubmit,          
          
          style: { backgroundColor: 'rgb(224, 242, 241)', color: 'rgb(10, 63, 61)', textAlign: 'center'  }
        }}
      >
        <DialogTitle>{forgetPassword ? "איפוס סיסמא " : "כניסה לחשבון"}</DialogTitle>
        <DialogContent>
          <DialogContentText>
            {forgetPassword ? "אנא הכנס את האימייל שאיתו נרשמת לחשבון" : "כניסה לחשבון קיים"}
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
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <AccountCircle />
                  </InputAdornment>
                ),
                style: { color: 'rgb(10, 63, 61)' }
              }}
              InputLabelProps={{
                style: { color: 'rgb(10, 63, 61)'}
              }}
              variant="outlined"
             
              onChange={(e) => handleChange("userName", e.target.value)}
              style={{ backgroundColor: 'rgb(240, 255, 255)', borderRadius: '4px', marginBottom: '10px' }}
            />
            <br/>
            <TextField
              required
              margin="dense"
              id="password"
              name="password"
              label="סיסמא"
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
            <br/>
          </> : <>
            <TextField
              required
              margin="dense"
              id="email"
              name="email"
              label="אימייל"
              type="email"
              dir='rtl'
              variant="outlined"
              onChange={(e) => setEmail(e.target.value)}
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
          <br/>
          <p style={{ color: 'rgb(10, 63, 61)' }}>או</p>
            <GoogleAuthOld></GoogleAuthOld>
            <br/>
        <p>?אין לך חשבון עדיין</p>
        <br/>
        <Button
          variant="contained"
          color="primary"
          onClick={handleSignUp}
          style={{
            backgroundColor:'#1c5f68' ,
            color: 'white',
            padding: '15px 30px',
            fontSize: '18px',
            borderRadius: '10px',
            textTransform: 'none',
            boxShadow: '0px 3px 6px #c8c8c8b5',
            transition: 'background-color 0.3s ease',
          }}
          onMouseOver={(e) => (e.currentTarget.style.backgroundColor = 'rgb(23, 27, 31)')}
          onMouseOut={(e) => (e.currentTarget.style.backgroundColor = 'rgb(33, 37, 41)')}
        >צור חשבון</Button>
        <br/>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} style={{ color: 'rgb(10, 63, 61)' }}>ביטול</Button>
          {forgetPassword ? <Button type="submit" style={{ color: 'rgb(10, 63, 61)' }}>שלח קוד אימות למייל</Button> : <Button type="submit" style={{ color: 'rgb(10, 63, 61)' }}>היכנס לחשבון</Button>}
        
       
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}




// import * as React from 'react';
// import { useState, useRef } from 'react';
// import Button from '@mui/material/Button';
// import TextField from '@mui/material/TextField';
// import Dialog from '@mui/material/Dialog';
// import DialogActions from '@mui/material/DialogActions';
// import DialogContent from '@mui/material/DialogContent';
// import DialogContentText from '@mui/material/DialogContentText';
// import DialogTitle from '@mui/material/DialogTitle';
// import InputAdornment from '@mui/material/InputAdornment';
// import AccountCircle from '@mui/icons-material/AccountCircle';
// import EmailIcon from '@mui/icons-material/Email';
// import Visibility from '@mui/icons-material/Visibility';
// import VisibilityOff from '@mui/icons-material/VisibilityOff';
// import IconButton from '@mui/material/IconButton';
// import LoginService from '../Logic/LoginService'; // Presumed location of LoginService
// // import { UserContext } from '../context/userContext';
// // import { useContext } from 'react';
// export default function Login(props) {
//   const [open, setOpen] =React.useState(props.open);
//   const [credential, setCredential] = useState({ userName: '', password: '' });
//   const [forgetPassword, setForgetPassword] = useState(false);
//   const [email, setEmail] = useState('');
//   const [showPassword, setShowPassword] = useState(false);
  
//   const [resetEmailSent, setResetEmailSent] = useState(false); // State for showing reset email sent message
//   const [message, setMessage] = useState(false);
//   const [emailError, setEmailError] = useState(false); // State for email error message
//   // const {user,setUser } = useContext(UserContext);
//   // Adding a reference to the password and email input fields
//   const passwordRef = useRef(null);
//   const emailRef = useRef(null);
//   const handleChange = (field, value) => {
//     setCredential(prev => ({ ...prev, [field]: value }));
//   };
//   const handleClickOpen = () => {
//     setOpen(true);
//   };
//   const forget = () => {
//     setMessage(''); // Clear previous message on submit
//     setEmailError(''); // Clear previous email error on submit
//     setForgetPassword(!forgetPassword)
//   }
//   const handleClose = () => {
//     setOpen(false);
//     setResetEmailSent(false); // Reset the state when dialog is closed
//     setMessage(false); // Reset the message state when dialog is closed
//     setEmailError(false); // Reset the email error state when dialog is closed
//     setCredential({ userName: '', password: '' }); // Reset credentials
//     setEmail(''); // Reset email field
//   };
//   const handleClickShowPassword = () => {
//     setShowPassword(!showPassword);
//   };
//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     if (forgetPassword) {
//       const res = await LoginService.requestPasswordReset(email, credential.userName);
//       if (res.success) {
//         setResetEmailSent(true); // Set state when password reset email is sent
//         setEmailError(false)
//       } else if (!res.success) {
//         setEmailError(true);
//         setResetEmailSent(false); // Set state when password reset email is sent
//         setEmail(''); // Clear the email field
//         emailRef.current.focus(); // Set focus on the email field
//       }
//     } else {
//       const res = await LoginService.login(credential.userName, credential.password);
//       console.log("Login response:", res);
//       if (res.status === 400) {
//         setMessage(true);
//         setCredential(prev => ({ ...prev, password: '' }));
//         passwordRef.current.focus();
//       }
//       else if (res.status === 200) {
//         let userData = res.data;
//         const token= localStorage.getItem('authToken');
//         userData =await LoginService.fetchAndSetUser(token)
//         setUser(userData);
//         // console.log(user);
//         handleClose();
//         // await LoginService.getUsers();
//       }
//     }
//   };
//   return (
//     <React.Fragment>
//       {/* <Button variant="contained" color="primary" onClick={handleClickOpen} style={{ backgroundColor: 'rgb(106, 174, 165)', color: 'white' }}>
//         Log-In
//       </Button> */}
//       <Dialog
//         open={open}
//         onClose={handleClose}
//         PaperProps={{
//           component: 'form',
//           onSubmit: handleSubmit,
//           style: { backgroundColor: 'rgb(224, 242, 241)', color: 'rgb(10, 63, 61)' }
//         }}
//       >
//         <DialogTitle>{forgetPassword ? "איפוס סיסמא" : "כניסה לחשבון"}</DialogTitle>
//         <DialogContent>
//           <DialogContentText>
//             {forgetPassword ? "אנא הכנס את האימייל שאיתו נרשמת לחשבון" : "כניסה לחשבון קיים"}
//           </DialogContentText>
//           {!forgetPassword ? (
//             <>
//               <TextField
//                 autoFocus
//                 required
//                 margin="dense"
//                 id="username"
//                 name="username"
//                 label="שם משתמש"
//                 dir="rtl"
//                 variant="outlined"
//                 onChange={(e) => handleChange("userName", e.target.value)}
//                 InputProps={{
//                   startAdornment: (
//                     <InputAdornment position="start">
//                       <AccountCircle />
//                     </InputAdornment>
//                   ),
//                   style: { color: 'rgb(10, 63, 61)' }
//                 }}
//                 InputLabelProps={{
//                   style: { color: 'rgb(10, 63, 61)' }
//                 }}
//                 style={{ backgroundColor: 'rgb(240, 255, 255)', borderRadius: '4px', marginBottom: '10px' }}
//               />
//               <br />
//               <TextField
//                 required
//                 margin="dense"
//                 id="password"
//                 name="password"
//                 label="סיסמא"
//                 type={showPassword ? "text" : "password"}
//                 variant="outlined"
//                 dir="rtl"
//                 onChange={(e) => handleChange("password", e.target.value)}
//                 value={credential.password}
//                 inputRef={passwordRef} // Reference to the password input field
//                 InputProps={{
//                   startAdornment: (
//                     <InputAdornment position="start">
//                       <IconButton
//                         aria-label="toggle password visibility"
//                         onClick={handleClickShowPassword}
//                         edge="end"
//                         style={{ color: 'rgb(10, 63, 61)' }}
//                       >
//                         {showPassword ? <VisibilityOff /> : <Visibility />}
//                       </IconButton>
//                     </InputAdornment>
//                   ),
//                   style: { color: 'rgb(10, 63, 61)' }
//                 }}
//                 InputLabelProps={{
//                   style: { color: 'rgb(10, 63, 61)' }
//                 }}
//                 style={{ backgroundColor: 'rgb(240, 255, 255)', borderRadius: '4px', marginBottom: '10px' }}
//               />
//             </>
//           ) : (
//             <TextField
//               required
//               margin="dense"
//               id="email"
//               name="email"
//               label="מייל"
//               type="email"
//               dir="rtl"
//               variant="outlined"
//               onChange={(e) => setEmail(e.target.value)}
//               value={email}
//               inputRef={emailRef} // Reference to the email input field
//               InputProps={{
//                 startAdornment: (
//                   <InputAdornment position="start">
//                     <EmailIcon style={{ color: 'rgb(10, 63, 61)' }} />
//                   </InputAdornment>
//                 ),
//                 style: { color: 'rgb(10, 63, 61)' }
//               }}
//               InputLabelProps={{
//                 style: { color: 'rgb(10, 63, 61)' }
//               }}
//               style={{ backgroundColor: 'rgb(240, 255, 255)', borderRadius: '4px', marginBottom: '10px' }}
//             />
//           )}
//           <br />
//           {resetEmailSent && (
//             <DialogContentText style={{ color: 'green' }}>
//               קוד אימות נשלח למייל שלך. אנא בדוק את תיבת הדואר הנכנס.
//             </DialogContentText>
//           )}
//           {emailError && (
//             <DialogContentText style={{ color: 'red' }}>
//               המייל אינו נשלח , אנא נסה מייל נוסף.
//             </DialogContentText>
//           )}
//           {message && (
//             <DialogContentText style={{ color: 'red' }}>
//               הסיסמא שגויה אנא הכנס סיסמא שוב
//             </DialogContentText>
//           )}
//           <Button onClick={() => forget(!forgetPassword)} style={{ color: 'rgb(10, 63, 61)', marginTop: '10px' }}>
//             {!forgetPassword ? "שכחתי סיסמא" : "שם משתמש וסיסמא"}
//           </Button>
//           <p style={{ color: 'rgb(10, 63, 61)' }}>או</p>
//         </DialogContent>
//         <DialogActions>
//           <Button onClick={handleClose} style={{ color: 'rgb(10, 63, 61)' }}>ביטול</Button>
//           <Button type="submit" style={{ color: 'rgb(10, 63, 61)' }}>
//             {forgetPassword ? "שלח קוד אימות למייל" : "היכנס לחשבון"}
//           </Button>
//         </DialogActions>
//       </Dialog>
//     </React.Fragment>
//   );
// }