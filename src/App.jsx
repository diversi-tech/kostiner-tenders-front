import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Component_example from './Components/component_example'
import Login from './Components/Login'
import SignUp from './Components/SignUp'
import { Button } from '@mui/material'
import singleton from './Logic/AuthService'
import LoginWithGoogle from './Components/LoginwithGoogle'
import GoogleAuth from './Components/Google-Auth'
import axios from 'axios'
//import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
import Loginreact from './Components/react-google'
import TryDesign from './Components/tryDesign'
import Google from './Components/Google'
import GoogleAuthOld from './Components/GoogleAuth-old'
import LoginButton from './Components/LoginGoogle-LAST!'
import G from './Components/try-login'
import { GoogleLogin } from 'react-google-login';
function App() {
  function btn()
  {
   const res= axios.get('http://127.0.0.1:5000/')
 console.log("btn",res);
  }
  // function onSignIn(googleUser) {
  //   var profile = googleUser.getBasicProfile();
  //   console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
  //   console.log('Name: ' + profile.getName());
  //   console.log('Image URL: ' + profile.getImageUrl());
  //   console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.
  // }
  return (
    <>
     {/* <Component_example/> */}
     <Login></Login>
      <SignUp/>
      <LoginButton></LoginButton>
    {/* <Button class="btn" onClick={btn}>goooooooooogle</Button>
     <LoginWithGoogle></LoginWithGoogle>
     <GoogleAuth></GoogleAuth> */}
    <G></G>

    <GoogleLogin
    clientId="720220089306-5rmsdqqui44gegs1d7f4h1mr8infd5d4.apps.googleusercontent.com"
    buttonText="Login"
    onSuccess={(res)=>{console.log("success",res);}}
    onFailure={(res)=>{console.log("fail",res);}}
    cookiePolicy={'single_host_origin'}
  />
     {/* <GoogleOAuthProvider clientId={'720220089306-t58chastvvm3593rprr080mgjbjcntub.apps.googleusercontent.com'}>
      <div className="App">
        <GoogleLogin
          onSuccess={response => console.log(response)}
          onError={() => console.log('Login Failed')}
        />
      </div>
    </GoogleOAuthProvider> */}
    {/* <GoogleAuthOld></GoogleAuthOld>*/}
<p>----------------------------------------------</p>
<br></br>
{/*
<Loginreact></Loginreact>
<TryDesign></TryDesign>

<Google></Google>
<p>----------------------------------------------</p>
<br></br>
<div class="g-signin2" data-onsuccess="onSignIn">ghjkl;'</div> */}
         </>
  )
}

export default App
