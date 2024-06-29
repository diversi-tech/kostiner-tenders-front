import React from 'react';
import { GoogleLogin } from 'react-google-login';

const clientId = '720220089306-5rmsdqqui44gegs1d7f4h1mr8infd5d4.apps.googleusercontent.com';

const LastGoogleLoginButton = () => {
  const onSuccess = (response) => {
    console.log('Login Success:', response);
    const profile = response.profileObj;
    const accessToken = response.accessToken;
    
    // קריאה לפונקציה לקבלת פרטי המשתמש
    getProfileInfo(accessToken);
  };

  const onFailure = (response) => {
    console.log('Login Failed:', response);
  };

  // פונקציה לקריאה ל-Google People API באמצעות ה-access token
  const getProfileInfo = async (accessToken) => {
    try {
      const response = await fetch('https://people.googleapis.com/v1/people/me?personFields=names,emailAddresses', {
        headers: {
          'Authorization': `Bearer ${accessToken}`
        }
      });
      const data = await response.json();
      console.log('Profile Info:', data);
    } catch (error) {
      console.error('Error fetching profile info:', error);
    }
  };

  return (
    <div>
      <GoogleLogin
        clientId={clientId}
        buttonText="Continue with Google"
        onSuccess={onSuccess}
        onFailure={onFailure}
        cookiePolicy={'single_host_origin'}
      />
    </div>
  );
};

export default LastGoogleLoginButton;
