import React from 'react';
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
import { Box, Button, Typography, Container } from '@mui/material';
import GoogleIcon from '@mui/icons-material/Google';

const CLIENT_ID = '720220089306-t58chastvvm3593rprr080mgjbjcntub.apps.googleusercontent.com';

const TryDesign = () => {
  const onSuccess = (response) => {
    console.log('Login Success: currentUser:', response);
    fetch('/api/google-login', {
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
    <GoogleOAuthProvider clientId={CLIENT_ID}>
      <Container maxWidth="sm" sx={{ mt: 8, textAlign: 'center' }}>
        <Box sx={{ mb: 4 }}>
          <Typography variant="h4" component="h1" gutterBottom>
            Welcome to My App
          </Typography>
          <Typography variant="subtitle1" gutterBottom>
            Please login with Google to continue
          </Typography>
        </Box>
        <GoogleLogin
          onSuccess={onSuccess}
          onError={onError}
          render={renderProps => (
            <Button
              variant="contained"
              color="primary"
              startIcon={<GoogleIcon />}
              onClick={renderProps.onClick}
              disabled={renderProps.disabled}
              sx={{
                backgroundColor: '#4285F4',
                '&:hover': { backgroundColor: '#357ae8' },
                color: 'white',
                padding: '10px 20px',
                borderRadius: '5px',
                fontSize: '16px',
                textTransform: 'none'
              }}
            >
              Sign in with Google
            </Button>
          )}
        />
      </Container>
    </GoogleOAuthProvider>
  );
};

export default TryDesign;
