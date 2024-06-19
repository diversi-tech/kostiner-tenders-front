import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useState } from 'react';

export default function Login() {
  const [open, setOpen] = React.useState(false);
  const [credential, setCredential] = useState({userName:'',password:''});
  const [forgetPassword, setForgetPassword] = useState(false);
  const [email, setEmail] =useState('');
  const handleChange=(field,value)=>{
    var temp= {...credential};
temp[field]=value;
setCredential(temp);

  }
  
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
 const handleChangePassword=(field,value)=>{
handleChange(field,value);
//בדיקות תקינות----------------------------------------------------------------------------------------------

 }
  return (
    <React.Fragment>
      <Button variant="outlined" onClick={handleClickOpen}>
        Log-In
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        PaperProps={{
          component: 'form',
          onSubmit: (event) => {
            event.preventDefault();
            if(forgetPassword)
                {
                    //go to reset email function
                    //navigate to - ?
                    console.log("email",email);
                }                                           
            else{
                    //go to Submit function
                     //navigate to : אזור אישי
                     console.log(credential);

            }    
             //     const formData = new FormData(event.currentTarget);
            //     const formJson = Object.fromEntries(formData.entries());
            //    const u=(formJson.username);
            //    setPassword(formJson.password);
                // console.log("userName"+userName," password"+password);
                // console.log(u);
                // setUserName(u)
                // console.log("after",userName);

            handleClose();
          },
        }}
      >
        <DialogTitle>{!forgetPassword?"LOG-IN":"forgot your password?"}</DialogTitle>
        <DialogContent>
          <DialogContentText>
            כניסה לחשבון
          </DialogContentText>
          <TextField
            autoFocus
            required
            margin="dense"
            id="username"
            name="username"
            label="username"
            type="text"
            fullWidth
            variant="standard"
            onChange={()=>handleChange("userName",event.target.value)}
          />
          {!forgetPassword?
            <TextField required 
            margin="dense" 
            id="password"
            name="password"
            label="password"
            type="password"
            fullWidth
            variant="standard"
            onChange={()=>handleChangePassword("password",event.target.value)}
            />:
            <TextField required 
            margin="dense" 
            id="email"
            name="email"
            label="email"
            type="email"
            fullWidth
            variant="standard"
            onChange={()=>setEmail(event.target.value)}
        
            />
            }
            <Button onClick={()=>setForgetPassword(!forgetPassword)}>{!forgetPassword?"שכחתי סיסמא":"שם משתמש וסיסמא"}</Button>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button type="submit">Log-IN</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
