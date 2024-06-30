import { useState } from "react";


export default function ForgetPassword()
{
    const [reset,setReset]=useState(false);
    const [passwords,setPasswords]=useState({password1:'',password2:''});
    

return(
    <>
<React.Fragment>
<Dialog
        open={open}
        onClose={handleClose}
        PaperProps={{
          component: 'form',
          onSubmit: async(event) => {
            event.preventDefault();
            if(forgetPassword)
                {
                  authSingleton.ResetEmail(email);
                    //navigate to - ?
                    console.log("email",email);
                }                                           
            else{
            const res=await authSingleton.postLogin(credential.userName,credential.password)
                     //navigate to : אזור אישי
                     console.log(credential);
                     console.log("res",res);
                     handleClose();
            }    
            
           
          },
        }}
      >
<DialogTitle>איפוס סיסמא</DialogTitle>

{!reset?
<>
<DialogContent>
  <DialogContentText>
   אנא הכנס את האימייל שאיתו נרשמת לחשבון
  </DialogContentText>
 
   
    <TextField required 
    margin="dense" 
    id="email"
    name="email"
    label="email"
    type="email"
    fullWidth
    variant="outlined"
    onChange={()=>setEmail(event.target.value)}
    />

    <br></br>

    <Button onClick={()=>setForgetPassword(!forgetPassword)}>{!forgetPassword?"שכחתי סיסמא":"שם משתמש וסיסמא"}</Button>
    </DialogContent>
    <DialogActions>
    <Button onClick={handleClose}>ביטול</Button>
    <Button type="submit">שלח קוד אימות למייל</Button>
    
    </DialogActions>
    </>
:
<>
<DialogContent>
<DialogContentText>
צור סיסמא חדשה
</DialogContentText>

 
  <TextField required 
  margin="dense" 
  id="password"
  name="empasswordail"
  label="סיסמא חדשה"
  type="password"
  fullWidth
  variant="outlined"
  onChange={()=>setEmail(event.target.value)}
  />

  <br></br>
  <TextField required 
  margin="dense" 
  id="password"
  name="empasswordail"
  label="אימות סיסמא חדשה" 
  type="password"
  fullWidth
  variant="outlined"
  onChange={()=>setEmail(event.target.value)}
  />
  <Button onClick={()=>setForgetPassword(!forgetPassword)}>{!forgetPassword?"שכחתי סיסמא":"שם משתמש וסיסמא"}</Button>
  </DialogContent>
  <DialogActions>
  <Button onClick={handleClose}>ביטול</Button>
  <Button type="submit">אפס סיסמא</Button>
  
  </DialogActions>
  </>
  
  
  }
    </Dialog>
 </React.Fragment>
</>
)}