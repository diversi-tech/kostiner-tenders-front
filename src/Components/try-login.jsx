import React from 'react';

import GoogleLogin from 'react-google-login';
// or
// import { GoogleLogin } from 'react-google-login';

export default function G(){
const responseGoogle = (response) => {
  console.log(response);
}
return(
// ReactDOM.render(
  <GoogleLogin
    clientId="720220089306-5rmsdqqui44gegs1d7f4h1mr8infd5d4.apps.googleusercontent.com"
    buttonText="Login"
    onSuccess={responseGoogle}
    onFailure={responseGoogle}
    cookiePolicy={'single_host_origin'}
    // {...getAccessToken ()}
  />
//   document.getElementById('googleButton')
)};