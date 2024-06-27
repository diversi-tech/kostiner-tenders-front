import React from 'react';
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';

const CLIENT_ID = '720220089306-t58chastvvm3593rprr080mgjbjcntub.apps.googleusercontent.com';

const GoogleAuth = () => {
  const onSuccess = async(response) => {
    console.log('Login Success: currentUser:', response);
    await fetch('http://127.0.0.1:5000/api/google-login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ token: response.credential }),
    })
    .then(res => res.json())
    .then(data => console.log(data))
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
