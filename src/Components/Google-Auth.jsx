import React from 'react';
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';

const CLIENT_ID = '720220089306-t58chastvvm3593rprr080mgjbjcntub.apps.googleusercontent.com';

const GoogleAuth = () => {
  const onSuccess = async(response) => {
    console.log('Login Success: currentUser:', response);
    await fetch('https://kostiner-tenders-back.onrender.com/auth/continue-with-google', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ 'token': ''+response.credential }),
      'token': JSON.stringify(response.credential)
      
    })
    .then(res => res.json())
    .then(data => {
      console.log("google data: ",data);
      localStorage.setItem('authToken', data.access_token);
      navigate('/');
      location.reload();
      navigate('/user-profile');
        
    })
    .catch(error => console.error('Error:', error));
  };

  const onError = () => {
    console.log('Login failed');
  };

  return (
    <GoogleOAuthProvider clientId={CLIENT_ID} >
      <div>
        <GoogleLogin
          onSuccess={onSuccess}
          onError={onError}
        />
      </div>
    </GoogleOAuthProvider>
  );
};

export default GoogleAuth;
