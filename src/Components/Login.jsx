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




// // export default function Login() {
// //   const [open, setOpen] = React.useState(false);
// //   const [credential, setCredential] = useState({userName:'',password:''});
// //   const [forgetPassword, setForgetPassword] = useState(false);
// //   const [email, setEmail] =useState('');
 


// //   const handleChange=(field,value)=>{
// //     var temp= {...credential};
// //     temp[field]=value;
// //     setCredential(temp);
// //   }
  
// //   const handleClickOpen = () => {
// //     setOpen(true);
// //   };

// //   const handleClose = () => {
// //     setOpen(false);
// //   };

// //  const handleChangePassword=(field,value)=>{
// //     handleChange(field,value);
// //     //בדיקות תקינות----------------------------------------------------------------------------------------------
// //  }


// //   return (
// //     <React.Fragment>
// //       <Button variant="outlined" onClick={handleClickOpen}>
// //         Log-In
// //       </Button>

// //       <Dialog
// //         open={open}
// //         onClose={handleClose}
// //         PaperProps={{
// //           component: 'form',
// //           onSubmit: async(event) => {
// //             event.preventDefault();
// //             if(forgetPassword)
// //                 {
// //                   authSingleton.ResetEmail(email);
// //                     //navigate to - ?
// //                     console.log("email",email);
// //                 }                                           
// //             else{
// //             const res=await authSingleton.Login(credential.userName,credential.password)
// //                      //navigate to : אזור אישי
// //                      console.log(credential);
// //                      console.log("res",res);
// //                      handleClose();
// //             }    
            
           
// //           },
// //         }}
// //         sx={{backgroundColor:'rgb(10, 215, 440,0.3)'}}
// //       >
// //         {/* '#538683' rgba(85, 260, 120,0.5) 'rgb(106, 174, 151)'*/}
       
// //         <DialogTitle >{forgetPassword?"איפוס סיסמא ":"כניסה לחשבון"}</DialogTitle>
// //         <DialogContent>
// //           <DialogContentText>
// //             {forgetPassword?"אנא הכנס את האימייל שאיתו נרשמת לחשבון":"כניסה לחשבון קיים"}
// //           </DialogContentText>
// //           {!forgetPassword?<>
          
// //           <TextField
// //             autoFocus
// //             required
// //             margin="dense"
// //             id="username"
// //             name="username"
// //             label="username"
            
// //             dir="rtl"
// //             InputProps={{
// //               startAdornment: (
// //                 <InputAdornment position="start">
// //                   {/* <AccountCircle /> */}
// //                 </InputAdornment>
// //               ),
// //             }}
// //             variant="standard"
// //             onChange={()=>handleChange("userName",event.target.value)}

// //           />
// //        <br></br>

          
// //             <TextField required 
// //             margin="dense" 
// //             id="password"
// //             name="password"
// //             label="password"
// //             type="password"
            
// //             variant="standard"
// //             onChange={()=>handleChangePassword("password",event.target.value)}
// //             />
// //             <br></br>
            
// //             </>:
// //             <>
// //             <TextField required 
// //             margin="dense" 
// //             id="email"
// //             name="email"
// //             label="email"
// //             type="email"
// //             fullWidth
// //             variant="outlined"
// //             onChange={()=>setEmail(event.target.value)}
            
// //             />
// //             <br></br>
// //            <p>או</p>
// //            <br></br>
// //            <LoginOutlined></LoginOutlined>
            
// //             </>
// //             }
// //             <Button onClick={()=>setForgetPassword(!forgetPassword)}>{!forgetPassword?"שכחתי סיסמא":"שם משתמש וסיסמא"}</Button>
// //         </DialogContent>
// //         <DialogActions>
// //           <Button onClick={handleClose}>ביטול</Button>
// //          {forgetPassword?<Button type="submit">שלח קוד אימות למייל</Button>:<Button type="submit">היכנס לחשבון</Button>}
          


// //         </DialogActions>
// //       </Dialog>
// //     </React.Fragment>
// //   );
// // }


// import * as React from 'react';
// import Button from '@mui/material/Button';
// import TextField from '@mui/material/TextField';
// import Dialog from '@mui/material/Dialog';
// import DialogActions from '@mui/material/DialogActions';
// import DialogContent from '@mui/material/DialogContent';
// import DialogContentText from '@mui/material/DialogContentText';
// import DialogTitle from '@mui/material/DialogTitle';
// import { useState } from 'react';
// import authSingleton from '../Logic/AuthService';
// import InputAdornment from '@mui/material/InputAdornment';
// import AccountCircle from '@mui/icons-material/AccountCircle';
// import Google from './Google';

// export default function Login() {
//   const [open, setOpen] = React.useState(false);
//   const [credential, setCredential] = useState({ userName: '', password: '' });
//   const [forgetPassword, setForgetPassword] = useState(false);
//   const [email, setEmail] = useState('');

//   const handleChange = (field, value) => {
//     var temp = { ...credential };
//     temp[field] = value;
//     setCredential(temp);
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

//   return (
//     <React.Fragment>
//       <Button variant="contained" color="primary" onClick={handleClickOpen} style={{ backgroundColor: 'rgb(10, 50, 61,0.8)' }}>
//         Log-In
//       </Button>

//       <Dialog
//         open={open}
//         onClose={handleClose}
//         PaperProps={{
//           component: 'form',
//           onSubmit: async (event) => {
//             event.preventDefault();
//             if (forgetPassword) {
//               authSingleton.ResetEmail(email);
//               //navigate to - ?
//               console.log("email", email);
//             } else {
//               const res = await authSingleton.Login(credential.userName, credential.password);
//               //navigate to : אזור אישי
//               console.log(credential);
//               console.log("res", res);
//               handleClose();
//             }
//           },
//           style: { backgroundColor: 'rgb(10, 63, 61,0.9)', color: 'white' }
//         }}
//       >
//         <DialogTitle>{forgetPassword ? "איפוס סיסמא " : "כניסה לחשבון"}</DialogTitle>
//         <DialogContent>
//           <DialogContentText>
//             {forgetPassword ? "אנא הכנס את האימייל שאיתו נרשמת לחשבון" : "כניסה לחשבון קיים"}
//           </DialogContentText>
//           {!forgetPassword ? <>
//             <TextField
//               autoFocus
//               required
//               margin="dense"
//               id="username"
//               name="username"
//               label="Username"
//               dir="rtl"
//               InputProps={{
//                 startAdornment: (
//                   <InputAdornment position="start">
//                     <AccountCircle />
//                   </InputAdornment>
//                 ),
//               }}
//               variant="standard"
//               fullWidth
//               onChange={(e) => handleChange("userName", e.target.value)}
//               style={{ backgroundColor: 'white', borderRadius: '4px' }}
//             />
//             <br /><br />
//             <TextField
//               required
//               margin="dense"
//               id="password"
//               name="password"
//               label="Password"
//               type="password"
//               variant="standard"
//               fullWidth
//               onChange={(e) => handleChangePassword("password", e.target.value)}
//               style={{ backgroundColor: 'white', borderRadius: '4px' }}
//             />
//             <br /><br />
//           </> : <>
//             <TextField
//               required
//               margin="dense"
//               id="email"
//               name="email"
//               label="Email"
//               type="email"
//               fullWidth
//               variant="outlined"
//               onChange={(e) => setEmail(e.target.value)}
//               style={{ backgroundColor: 'white', borderRadius: '4px' }}
//             />
//             <br /><br />
//             <p>או</p>
//             <Google></Google>
//             <br /><br />
//           </>}
//           <Button onClick={() => setForgetPassword(!forgetPassword)} style={{ color: 'white' }}>{!forgetPassword ? "שכחתי סיסמא" : "שם משתמש וסיסמא"}</Button>
//         </DialogContent>
//         <DialogActions>
//           <Button onClick={handleClose} style={{ color: 'white' }}>ביטול</Button>
//           {forgetPassword ? <Button type="submit" style={{ color: 'white' }}>שלח קוד אימות למייל</Button> : <Button type="submit" style={{ color: 'white' }}>היכנס לחשבון</Button>}
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
// import { useState } from 'react';
// import authSingleton from '../Logic/AuthService';
// import InputAdornment from '@mui/material/InputAdornment';
// import AccountCircle from '@mui/icons-material/AccountCircle';
// import { LoginOutlined } from '@mui/icons-material';
// import GoogleAuthOld from './GoogleAuth-old';

// export default function Login() {
//   const [open, setOpen] = React.useState(false);
//   const [credential, setCredential] = useState({ userName: '', password: '' });
//   const [forgetPassword, setForgetPassword] = useState(false);
//   const [email, setEmail] = useState('');

//   const handleChange = (field, value) => {
//     var temp = { ...credential };
//     temp[field] = value;
//     setCredential(temp);
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

//   return (
//     <React.Fragment>
//       <Button variant="contained" color="primary" onClick={handleClickOpen} style={{ backgroundColor: 'rgb(106, 174, 151)', color: 'white' }}>
//         Log-In
//       </Button>

//       <Dialog
//         open={open}
//         onClose={handleClose}
//         PaperProps={{
//           component: 'form',
//           onSubmit: async (event) => {
//             event.preventDefault();
//             if (forgetPassword) {
//               authSingleton.ResetEmail(email);
//               //navigate to - ?
//               console.log("email", email);
//             } else {
//               const res = await authSingleton.Login(credential.userName, credential.password);
//               //navigate to : אזור אישי
//               console.log(credential);
//               console.log("res", res);
//               handleClose();
//             }
//             // 0504188947
//             // 036197875 rgb(10, 63, 61,0.9)
//           },
//           style: { backgroundColor: 'rgb(224, 242, 241)', color: 'rgb(10, 63, 61)' }
//         }}
//       >
//         <DialogTitle>{forgetPassword ? "איפוס סיסמא " : "כניסה לחשבון"}</DialogTitle>
//         <DialogContent>
//           <DialogContentText>
//             {forgetPassword ? "אנא הכנס את האימייל שאיתו נרשמת לחשבון" : "כניסה לחשבון קיים"}
//           </DialogContentText>
//           {!forgetPassword ? <>
//             <TextField
//               autoFocus
//               required
//               margin="dense"
//               id="username"
//               name="username"
//               label="Username"
//               dir="rtl"
//               color="primary"
//               InputProps={{
//                 startAdornment: (
//                   <InputAdornment position="start">
//                     <AccountCircle />
//                   </InputAdornment>
//                 ),
//                style: { color: 'rgb(10, 63, 61)' }
//              }}
//               InputLabelProps={{
//                 style: { color: 'rgb(10, 63, 61)' }
//               }}
//               variant="outlined"
            
//               onChange={(e) => handleChange("userName", e.target.value)}
//               style={{ backgroundColor: 'rgb(240, 255, 255)', borderRadius: '4px', marginBottom: '10px' }}
//             />
//             <br></br>
//             <TextField
//               required
//               margin="dense"
//               id="password"
//               name="password"
//               label="Password"
//               type="password"
//               variant="outlined"
//               color="primary"
//               onChange={(e) => handleChangePassword("password", e.target.value)}
//               style={{ backgroundColor: 'rgb(240, 255, 255)', borderRadius: '4px', marginBottom: '10px' }}
//               InputProps={{
//                 style: { color: 'rgb(10, 63, 61)' }
//               }}
//               InputLabelProps={{
//                 style: { color: 'rgb(10, 63, 61)' }
//               }}
//             />
//             <br></br>
//           </> : <>
//             <TextField
//               required
//               margin="dense"
//               id="email"
//               name="email"
//               label="Email"
//               type="email"
//               color="primary"
//               variant="outlined"
//               onChange={(e) => setEmail(e.target.value)}
//               style={{ backgroundColor: 'rgb(240, 255, 255)', borderRadius: '4px', marginBottom: '10px' }}
//               InputProps={{
//                 style: { color: 'rgb(10, 63, 61)' }
//               }}
//               InputLabelProps={{
//                 style: { color: 'rgb(10, 63, 61)' }
//               }}
//             />
//             <br />
           
//             {/* <LoginOutlined style={{ color: 'rgb(10, 63, 61)' }} /> */}
//           </>}
//           <Button onClick={() => setForgetPassword(!forgetPassword)} style={{ color: 'rgb(10, 63, 61)', marginTop: '10px' }}>{!forgetPassword ? "שכחתי סיסמא" : "שם משתמש וסיסמא"}</Button>
//           <br/>
//           <p style={{ color: 'rgb(10, 63, 61)' }}>או</p>
//           <GoogleAuthOld></GoogleAuthOld>
       
//         </DialogContent>
//         <DialogActions>
//           <Button onClick={handleClose} style={{ color: 'rgb(10, 63, 61)' }}>ביטול</Button>
//           {forgetPassword ? <Button type="submit" style={{ color: 'rgb(10, 63, 61)' }}>שלח קוד אימות למייל</Button> : <Button type="submit" style={{ color: 'rgb(10, 63, 61)' }}>היכנס לחשבון</Button>}
//         </DialogActions>
//       </Dialog>
//     </React.Fragment>
//   );
// }

//***********************************************************************
import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useState } from 'react';
import authSingleton from '../Logic/AuthService';
import InputAdornment from '@mui/material/InputAdornment';
import AccountCircle from '@mui/icons-material/AccountCircle';
import EmailIcon from '@mui/icons-material/Email';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import IconButton from '@mui/material/IconButton';
import GoogleAuthOld from './GoogleAuth-old';

export default function Login() {
  const [open, setOpen] = React.useState(false);
  const [credential, setCredential] = useState({ userName: '', password: '' });
  const [forgetPassword, setForgetPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (field, value) => {
    var temp = { ...credential };
    temp[field] = value;
    setCredential(temp);
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

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <React.Fragment>
      <Button variant="contained" color="primary" onClick={handleClickOpen} style={{ backgroundColor: 'rgb(106, 174, 165)', color: 'white' }}>
        Log-In
      </Button>

      <Dialog
        open={open}
        onClose={handleClose}
        PaperProps={{
          component: 'form',
          onSubmit: async (event) => {
            event.preventDefault();
            if (forgetPassword) {
              authSingleton.ResetEmail(email);
              //navigate to - ?
              console.log("email", email);
            } else {
              const res = await authSingleton.Login(credential.userName, credential.password);
              //navigate to : אזור אישי
              console.log(credential);
              console.log("res", res);
              handleClose();
            }
          },
          //224, 242, 241
          
          style: { backgroundColor: 'rgb(224, 242, 241)', color: 'rgb(10, 63, 61)' }
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
              label="Username"
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
              label="Password"
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
              label="Email"
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
       
        
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} style={{ color: 'rgb(10, 63, 61)' }}>ביטול</Button>
          {forgetPassword ? <Button type="submit" style={{ color: 'rgb(10, 63, 61)' }}>שלח קוד אימות למייל</Button> : <Button type="submit" style={{ color: 'rgb(10, 63, 61)' }}>היכנס לחשבון</Button>}
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}

