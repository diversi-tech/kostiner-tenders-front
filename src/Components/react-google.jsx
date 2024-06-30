import React from 'react';
import { GoogleLogin } from 'react-google-login';

const CLIENT_ID = '720220089306-t58chastvvm3593rprr080mgjbjcntub.apps.googleusercontent.com';

const Loginreact = () => {
  const onSuccess = (response) => {
    console.log('Login Success: currentUser:', response.profileObj);
    fetch('/api/google-login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ token: response.tokenId }),
    })
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(error => console.error('Error:', error));
  };

  const onFailure = (response) => {
    console.log('Login failed: res:', response);
  };

  return (
    <div>
      <GoogleLogin
        clientId={CLIENT_ID}
        buttonText="Login with Google"
        onSuccess={onSuccess}
        onFailure={onFailure}
        cookiePolicy={'single_host_origin'}
      />
    </div>
  );
};

export default Loginreact;
