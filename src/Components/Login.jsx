// import * as React from 'react';
// import Button from '@mui/material/Button';
// import TextField from '@mui/material/TextField';
// import Dialog from '@mui/material/Dialog';
// import DialogActions from '@mui/material/DialogActions';
// import DialogContent from '@mui/material/DialogContent';
// import DialogContentText from '@mui/material/DialogContentText';
// import DialogTitle from '@mui/material/DialogTitle';
// import { useState, useRef,useEffect,useContext } from 'react';
// import InputAdornment from '@mui/material/InputAdornment';
// import AccountCircle from '@mui/icons-material/AccountCircle';
// import EmailIcon from '@mui/icons-material/Email';
// import Visibility from '@mui/icons-material/Visibility';
// import VisibilityOff from '@mui/icons-material/VisibilityOff';
// import IconButton from '@mui/material/IconButton';
// import GoogleAuthOld from './GoogleAuth-old';
// import LoginService from '../Logic/LoginService';
// import { useNavigate } from 'react-router-dom';
// import { UserContext } from '../context/userContext';
// export default function Login(props) {
//   console.log("login");
//   const [open, setOpen] = React.useState(props.open);
//   const [credential, setCredential] = useState({ userName: '', password: '' });
//   const [forgetPassword, setForgetPassword] = useState(false);
//   const [email, setEmail] = useState('');
//   const [showPassword, setShowPassword] = useState(false);
//   const navigate = useNavigate();
//   const [setResetEmailSent] = useState(false);
//   const [setMessage] = useState(false);
//   const [ setEmailError] = useState(false);
//   const passwordRef = useRef(null);
//   const emailRef = useRef(null);
//   const { user,setUser } = useContext(UserContext);


//   useEffect(() => {
//     console.log("User in useEffect:", user);
//   }, [user]);
//   const handleChange = (field, value) => {
//     var temp = { ...credential };
//     temp[field] = value;
//     setCredential(temp);
//   };
//   // const handleClickOpen = () => {
//   //   setOpen(true);
//   // };
//   // const forget = () => {
//   //   setMessage(''); // Clear previous message on submit
//   //   setEmailError(''); // Clear previous email error on submit
//   //   setForgetPassword(!forgetPassword)
//   // }
//   const handleClose = () => {
//     setOpen(false);
//     // setResetEmailSent(false);
//     setMessage(false);
//     setEmailError(false);
//     setCredential({ userName: '', password: '' }); 
//     setEmail(''); 
//     navigate('/');
//   };
//   const handleChangePassword = (field, value) => {
//     handleChange(field, value);
//     //בדיקות תקינות----------------------------------------------------------------------------------------------
//   };
//   const handleClickShowPassword = () => {
//     setShowPassword(!showPassword);
//   };
//   const handleSignUp = () => {
//     handleClose();
//     navigate('/connection')
//   }
//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     if (forgetPassword) {
//       const res = await LoginService.requestPasswordReset(email, credential.userName);
//       if (res.success) {
//         setResetEmailSent(true);
//         setEmailError(false)
//       } else if (!res.success) {
//         setEmailError(true);
//         setResetEmailSent(false);
//         setEmail('');
//         console.log("emailRef", emailRef);
//         console.log("emailRef.current", emailRef.current);
//         emailRef.current.focus(); 
//       }
//     } else {
//       const res = await LoginService.login(credential.userName, credential.password);
//       console.log("Login response:", res);
//       if (res.status === 400) {
//         setMessage(true);
//         setCredential(prev => ({ ...prev, password: '' }));
//         console.log("passwordRef", passwordRef);
//         console.log("passwordRef.current", passwordRef.current);
//         passwordRef.focus();
//       }
//       else if (res.status === 200) {
//         let userData = res.data;
//         const token = localStorage.getItem('authToken');
//         userData = await LoginService.fetchAndSetUser(token)
//         console.log("Before setUser:", userData);
//         setUser(userData);
//         console.log("After setUser:", user);
//         navigate('/');
//         // // navigate('/user-profile');
//         location.reload();
//         handleClose();
//       }
//     }
   
//   };
//   return (
//     <React.Fragment>
//       <Dialog
//         open={open}
//         onClose={handleClose}
//         PaperProps={{
//           component: 'form',
//           onSubmit: handleSubmit,
//           style: { backgroundColor: 'rgb(224, 242, 241)', color: 'rgb(10, 63, 61)', textAlign: 'center' }
//         }}
//       >
//         <DialogTitle>{forgetPassword ? "איפוס סיסמא " : "כניסה לחשבון"}</DialogTitle>
//         <DialogContent>
//           <DialogContentText>
//             {forgetPassword ? "אנא הכנס את האימייל איתו נרשמת לחשבון" : "כניסה לחשבון קיים"}
//           </DialogContentText>
//           {!forgetPassword ? <>
//             <TextField
//               autoFocus
//               required
//               margin="dense"
//               id="username"
//               name="username"
//               label="שם משתמש"
//               dir="rtl"
//               value={credential.userName}
//               InputProps={{
//                 startAdornment: (
//                   <InputAdornment position="start">
//                     <AccountCircle />
//                   </InputAdornment>
//                 ),
//                 style: { color: 'rgb(10, 63, 61)' }
//               }}
//               InputLabelProps={{
//                 style: { color: 'rgb(10, 63, 61)' }
//               }}
//               variant="outlined"
//               onChange={(e) => handleChange("userName", e.target.value)}
//               style={{ backgroundColor: 'rgb(240, 255, 255)', borderRadius: '4px', marginBottom: '10px' }}
//             />
//             <br />
//             <br />
//             <TextField
//               required
//               margin="dense"
//               id="password"
//               name="password"
//               label="סיסמא"
//               value={credential.password}
//               type={showPassword ? "text" : "password"}
//               variant="outlined"
//               dir='rtl'
//               onChange={(e) => handleChangePassword("password", e.target.value)}
//               style={{ backgroundColor: 'rgb(240, 255, 255)', borderRadius: '4px', marginBottom: '10px' }}
//               InputProps={{
//                 startAdornment: (
//                   <InputAdornment position="start">
//                     <IconButton
//                       aria-label="toggle password visibility"
//                       onClick={handleClickShowPassword}
//                       edge="end"
//                       style={{ color: 'rgb(10, 63, 61)' }}
//                     >
//                       {showPassword ? <VisibilityOff /> : <Visibility />}
//                     </IconButton>
//                   </InputAdornment>
//                 ),
//                 style: { color: 'rgb(10, 63, 61)' }
//               }}
//               InputLabelProps={{
//                 style: { color: 'rgb(10, 63, 61)' }
//               }}
//             />
//             <br />
//             <br />
//           </> : <>
//             <TextField
//               required
//               margin="dense"
//               id="email"
//               name="email"
//               label="אימייל"
//               type="email"
//               dir='rtl'
//               value={email}
//               variant="outlined"
//               onChange={(e) => { setEmail(e.target.value); console.log(e.target.value); }}
//               style={{ backgroundColor: 'rgb(240, 255, 255)', borderRadius: '4px', marginBottom: '10px' }}
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
//             />
//             <br />

//           </>}
//           <Button onClick={() => setForgetPassword(!forgetPassword)} style={{ color: 'rgb(10, 63, 61)', marginTop: '10px' }}>{!forgetPassword ? "שכחתי סיסמא" : "שם משתמש וסיסמא"}</Button>
//           <br />
//           <br />
//           <p style={{ color: 'rgb(10, 63, 61)' }}>או</p>
//           <GoogleAuthOld></GoogleAuthOld>
//           <br />
//           <p>?אין לך חשבון עדיין</p>
//           <br />
//           <Button
//             variant="contained"
//             color="primary"
//             onClick={handleSignUp}
//             style={{
//               backgroundColor: '#1C5F68',
//               color: 'white',
//               padding: '15px 30px',
//               fontSize: '18px',
//               borderRadius: '10px',
//               textTransform: 'none',
//               boxShadow: '0px 3px 6px #c8c8c8b5',
//               transition: 'background-color 0.3s ease',
//             }}
//             onMouseMove={(e) => (e.currentTarget.style.backgroundColor = 'rgb(23, 27, 30)')}
//             onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#1C5F68')}
//           >צור חשבון</Button>
//           <br />
//         </DialogContent>
//         <DialogActions>
//           <Button onClick={handleClose} style={{ color: 'rgb(10, 63, 61)' }}>ביטול</Button>
//           {forgetPassword ? <Button type="submit" style={{ color: 'rgb(10, 63, 61)' }}>שלח קוד אימות למייל</Button> : <Button type="submit" style={{ color: 'rgb(10, 63, 61)' }}>היכנס לחשבון</Button>}
//         </DialogActions>
//       </Dialog>
//     </React.Fragment>
//   );
// }



// import * as React from 'react';
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
// import GoogleAuthOld from './GoogleAuth-old';
// import LoginService from '../Logic/LoginService';
// import { useNavigate } from 'react-router-dom';
// import { useState, useRef, useEffect, useContext } from 'react';
// import { UserContext } from '../context/userContext';
// import './Login.css'; // הוספת קובץ ה-CSS

// export default function Login(props) {
//   const [open, setOpen] = useState(props.open);
//   const [credential, setCredential] = useState({ userName: '', password: '' });
//   const [forgetPassword, setForgetPassword] = useState(false);
//   const [email, setEmail] = useState('');
//   const [showPassword, setShowPassword] = useState(false);
//   const navigate = useNavigate();
//   const [setResetEmailSent] = useState(false);
//   const [setMessage] = useState(false);
//   const [setEmailError] = useState(false);
//   const passwordRef = useRef(null);
//   const emailRef = useRef(null);
//   const { user, setUser } = useContext(UserContext);

//   useEffect(() => {
//     console.log("User in useEffect:", user);
//   }, [user]);

//   const handleChange = (field, value) => {
//     setCredential({ ...credential, [field]: value });
//   };

//   const handleClose = () => {
//     setOpen(false);
//     setMessage(false);
//     setEmailError(false);
//     setCredential({ userName: '', password: '' }); 
//     setEmail(''); 
//     navigate('/');
//   };

//   const handleChangePassword = (field, value) => {
//     handleChange(field, value);
//   };

//   const handleClickShowPassword = () => {
//     setShowPassword(!showPassword);
//   };

//   const handleSignUp = () => {
//     handleClose();
//     navigate('/connection');
//   };

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     if (forgetPassword) {
//       const res = await LoginService.requestPasswordReset(email, credential.userName);
//       if (res.success) {
//         setResetEmailSent(true);
//         setEmailError(false);
//       } else {
//         setEmailError(true);
//         setResetEmailSent(false);
//         setEmail('');
//         emailRef.current.focus(); 
//       }
//     } else {
//       const res = await LoginService.login(credential.userName, credential.password);
//       if (res.status === 400) {
//         setMessage(true);
//         setCredential(prev => ({ ...prev, password: '' }));
//         passwordRef.focus();
//       } else if (res.status === 200) {
//         const token = localStorage.getItem('authToken');
//         const userData = await LoginService.fetchAndSetUser(token);
//         setUser(userData);
//         navigate('/');
//         location.reload();
//         handleClose();
//       }
//     }
//   };

//   return (
//     <Dialog
//       open={open}
//       onClose={handleClose}
//       PaperProps={{
//         component: 'form',
//         onSubmit: handleSubmit,
//         className: 'dialog-container'
//       }}
//     >
//       <DialogTitle>{forgetPassword ? "איפוס סיסמא" : "כניסה לחשבון"}</DialogTitle>
//       <DialogContent>
//         <DialogContentText>
//           {forgetPassword ? "אנא הכנס את האימייל איתו נרשמת לחשבון" : "כניסה לחשבון קיים"}
//         </DialogContentText>
//         {!forgetPassword ? (
//           <>
//             <TextField
//               autoFocus
//               required
//               margin="dense"
//               id="username"
//               name="username"
//               label="שם משתמש"
//               dir="rtl"
//               value={credential.userName}
//               variant="outlined"
//               onChange={(e) => handleChange("userName", e.target.value)}
//               className="text-field"
//               InputProps={{
//                 startAdornment: (
//                   <InputAdornment position="start">
//                     <AccountCircle />
//                   </InputAdornment>
//                 )
//               }}
//             />
//             <TextField
//               required
//               margin="dense"
//               id="password"
//               name="password"
//               label="סיסמא"
//               value={credential.password}
//               type={showPassword ? "text" : "password"}
//               variant="outlined"
//               dir='rtl'
//               onChange={(e) => handleChangePassword("password", e.target.value)}
//               className="text-field"
//               InputProps={{
//                 startAdornment: (
//                   <InputAdornment position="start">
//                     <IconButton
//                       aria-label="toggle password visibility"
//                       onClick={handleClickShowPassword}
//                       edge="end"
//                     >
//                       {showPassword ? <VisibilityOff /> : <Visibility />}
//                     </IconButton>
//                   </InputAdornment>
//                 )
//               }}
//             />
//           </>
//         ) : (
//           <TextField
//             required
//             margin="dense"
//             id="email"
//             name="email"
//             label="אימייל"
//             type="email"
//             dir='rtl'
//             value={email}
//             variant="outlined"
//             onChange={(e) => setEmail(e.target.value)}
//             className="text-field"
//             InputProps={{
//               startAdornment: (
//                 <InputAdornment position="start">
//                   <EmailIcon />
//                 </InputAdornment>
//               )
//             }}
//           />
//         )}
//         <Button onClick={() => setForgetPassword(!forgetPassword)} className="button-toggle">
//           {!forgetPassword ? "שכחתי סיסמא" : "שם משתמש וסיסמא"}
//         </Button>
//         <p>או</p>
//         <GoogleAuthOld className="google-auth" />
//         <p>?אין לך חשבון עדיין</p>
//         <Button
//           variant="contained"
//           onClick={handleSignUp}
//           className="sign-up-button-secondary" 
//         >צור חשבון</Button>
//       </DialogContent>
//       <DialogActions>
//         <Button onClick={handleClose} className="cancel-button">ביטול</Button>
//         <Button type="submit" className="submit-button">
//           {forgetPassword ? "שלח קוד אימות למייל" : "היכנס לחשבון"}
//         </Button>
//       </DialogActions>
//     </Dialog>
//   );
// }



import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import InputAdornment from '@mui/material/InputAdornment';
import AccountCircle from '@mui/icons-material/AccountCircle';
import EmailIcon from '@mui/icons-material/Email';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import IconButton from '@mui/material/IconButton';
import GoogleAuthOld from './GoogleAuth-old';
import LoginService from '../Logic/LoginService';
import { useNavigate } from 'react-router-dom';
import { useState, useRef, useEffect, useContext } from 'react';
import { UserContext } from '../context/userContext';
import '../Components/Login.css'; // הוספת קובץ ה-CSS

export default function Login(props) {
  const [open, setOpen] = useState(props.open);
  const [credential, setCredential] = useState({ userName: '', password: '' });
  const [forgetPassword, setForgetPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const [resetEmailSent, setResetEmailSent] = useState(false);
  const [message, setMessage] = useState('');
  const [emailError, setEmailError] = useState('');
  const passwordRef = useRef(null);
  const emailRef = useRef(null);
  const { user, setUser } = useContext(UserContext);

  useEffect(() => {
    console.log("User in useEffect:", user);
  }, [user]);

  const handleChange = (field, value) => {
    setCredential({ ...credential, [field]: value });
  };

  const handleClose = () => {
    setOpen(false);
    setMessage('');
    setEmailError('');
    setCredential({ userName: '', password: '' }); 
    setEmail(''); 
    navigate('/');
  };

  const handleChangePassword = (field, value) => {
    handleChange(field, value);
  };

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleSignUp = () => {
    handleClose();
    navigate('/connection');
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (forgetPassword) {
      const res = await LoginService.requestPasswordReset(email, credential.userName);
      if (res.success) {
        setResetEmailSent(true);
        setEmailError('');
      } else {
        setEmailError('אירעה שגיאה בשליחת המייל.');
        setResetEmailSent(false);
        setEmail('');
        emailRef.current.focus(); 
      }
    } else {
      const res = await LoginService.login(credential.userName, credential.password);
      if (res.status === 400) {
        setMessage('שם משתמש או סיסמה שגויים.');
        setCredential(prev => ({ ...prev, password: '' }));
        passwordRef.current.focus();
      } else if (res.status === 200) {
        const token = localStorage.getItem('authToken');
        const userData = await LoginService.fetchAndSetUser(token);
        setUser(userData);
        navigate('/');
        // location.reload();
        handleClose();
      }
    }
  };

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      PaperProps={{
        component: 'form',
        onSubmit: handleSubmit,
        className: 'dialog-container'
      }}
    >
      <DialogTitle>{forgetPassword ? "איפוס סיסמא" : "כניסה לחשבון"}</DialogTitle>
      <DialogContent>
        <DialogContentText>
          {forgetPassword ? "אנא הכנס את האימייל איתו נרשמת לחשבון" : "כניסה לחשבון קיים"}
        </DialogContentText>
        {!forgetPassword ? (
          <>
            <TextField
              autoFocus
              required
              margin="dense"
              id="username"
              name="username"
              label="שם משתמש"
              dir="rtl"
              value={credential.userName}
              variant="outlined"
              onChange={(e) => handleChange("userName", e.target.value)}
              className="text-field"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <AccountCircle />
                  </InputAdornment>
                )
              }}
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
              className="text-field"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                )
              }}
            />
            <br />
          </>
        ) : (
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
            onChange={(e) => setEmail(e.target.value)}
            className="text-field"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <EmailIcon />
                </InputAdornment>
              )
            }}
          />
        )}
        <Button onClick={() => setForgetPassword(!forgetPassword)} className="button-toggle">
          {!forgetPassword ? "שכחתי סיסמא" : "שם משתמש וסיסמא"}
        </Button>
        <p>או</p>
        <GoogleAuthOld className="google-auth" />
        <p>?אין לך חשבון עדיין</p>
        <Button
          variant="contained"
          onClick={handleSignUp}
          className="sign-up-button-secondary" 
        >צור חשבון</Button>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} className="cancel-button">ביטול</Button>
        <Button type="submit" className="submit-button">
          {forgetPassword ? "שלח קוד אימות למייל" : "היכנס לחשבון"}
        </Button>
      </DialogActions>
    </Dialog>
  );
}
