// // // import React, { useEffect } from 'react';
// // // import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';

// // // const clientId = 'YOUR_GOOGLE_CLIENT_ID';

// // // const App = () => {
// // //   const handleLoginSuccess = (response) => {
// // //     console.log('Login Success:', response);
// // //     // Handle successful login
// // //   };

// // //   const handleLoginFailure = (error) => {
// // //     console.log('Login Failed:', error);
// // //     // Handle login failure
// // //   };

// // //   return (
// // //     <GoogleOAuthProvider clientId={clientId}>
// // //       <div>
// // //         <h1>Login with Google</h1>
// // //         <GoogleLogin
// // //           onSuccess={handleLoginSuccess}
// // //           onFailure={handleLoginFailure}
// // //         />
// // //       </div>
// // //     </GoogleOAuthProvider>
// // //   );
// // // };

// // // export default App;

// // import React from 'react';
// // import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
// // import axios from 'axios';
// // import Login from './Login';

// // const clientId = '720220089306-5rmsdqqui44gegs1d7f4h1mr8infd5d4.apps.googleusercontent.com';
// // //720220089306-t58chastvvm3593rprr080mgjbjcntub.apps.googleusercontent.com
// // const GoogleAuthOld = () => {
// //   const handleLoginSuccess = (response) => {
// //     console.log('Login Success:', response);
// //     // שליחת המידע לשרת הפייתון
// //     axios.post('http://127.0.0.1:5000/google-login', {//
// //       token: response.credential,
// //     })
// //     .then((res) => {
// //       console.log('Server Response:', res.data);
// //     })
// //     .catch((err) => {
// //       console.error('Server Error:', err);
// //     });
// //   };

// //   const handleLoginFailure = (error) => {
// //     console.error('Login Failed:', error);
// //   };

// //   return (
// //     <GoogleOAuthProvider clientId={clientId}  key={'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'}>
// //       <div>
       
// //         <GoogleLogin
// //           onSuccess={handleLoginSuccess}
// //           onError={handleLoginFailure}
// //           allowed_parent_origin={Login}
// //           login_uri='http://127.0.0.1:5000/login/oauth2/code/google'
// //         />
// //       </div>
// //     </GoogleOAuthProvider>
// //   );
// // };

// // export default GoogleAuthOld;


// //******************************************* */
// import React from 'react';
// import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
// import axios from 'axios';

// const clientId = '720220089306-5rmsdqqui44gegs1d7f4h1mr8infd5d4.apps.googleusercontent.com';

// const GoogleAuthOld = () => {
//   const handleLoginSuccess = (response) => {
//     console.log('Login Success:', response);
//     // שליחת המידע לשרת הפייתון
//     axios.post('http://127.0.0.1:5000/google-login', {
//       token: response.credential,
//     })
//     .then((res) => {
//       console.log('Server Response:', res.data);
//     })
//     .catch((err) => {
//       console.error('Server Error:', err);
//     });
//   };

//   const handleLoginFailure = (error) => {
//     console.error('Login Failed:', error);
//   };

//   return (
//     <GoogleOAuthProvider clientId={clientId}>
//       <div>
        
//         <GoogleLogin
//           onSuccess={handleLoginSuccess}
//           onError={handleLoginFailure}
//         />
//       </div>
//     </GoogleOAuthProvider>
//   );
// };

// export default GoogleAuthOld;



//************************************************************* */

import React from 'react';
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
import axios from 'axios';

const clientId = '290860980213-comb21pdjv13dejo0ofou5afivk1ra4m.apps.googleusercontent.com';
//720220089306-5rmsdqqui44gegs1d7f4h1mr8infd5d4.apps.googleusercontent.com

const GoogleAuthOld = () => {
  const handleLoginSuccess = (response) => {
    console.log('Login Success:', response);
    console.log("token",response.credential);
    //  axios.post('http://127.0.0.1:5000/google-login', {
    //   token: response.credential,
    // })
    // .then((res) => {
    //   console.log('Server Response:', res.data);
    // })
    // .catch((err) => {
    //   console.error('Server Error:', err);
    // });
    // axios.post('http://127.0.0.1:5000/google', {
    //   token: response.credential,
    // })
    // .then((res) => {
    //   console.log('Server Response:', res.data);
    // })
    // .catch((err) => {
    //   console.error('Server Error:', err);
    // });

    //********************* */
    console.log('Login Success: currentUser:', response);
     fetch('http://127.0.0.1:5000/google', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
       
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS"
       
      },
      body: JSON.stringify({ token: response.credential }),
    })
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(error => console.error('Error:', error));


  };

  const handleLoginFailure = (error) => {
    console.error('Login Failed:', error);
  };

  return (
    <GoogleOAuthProvider clientId={clientId}>
      
       
        <GoogleLogin
          onSuccess={handleLoginSuccess}
          onError={handleLoginFailure}
        />
      
    </GoogleOAuthProvider>
  );
};

export default GoogleAuthOld;











