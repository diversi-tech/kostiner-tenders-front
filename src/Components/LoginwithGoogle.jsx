// import React from 'react';
// import { GoogleLogin } from 'react-google-login';

// const clientId = '720220089306-t58chastvvm3593rprr080mgjbjcntub.apps.googleusercontent.com';

// function LoginWithGoogle() {
//   const onSuccess = (response) => {
//     console.log('Login Success: currentUser:', response.profileObj);
//   };

//   const onFailure = (response) => {
//     console.log('Login failed: res:', response);
//   };

//   return (
//     <div>
//       <GoogleLogin
//         clientId={clientId}
//         buttonText="Sign in with Google"
//         onSuccess={onSuccess}
//         onFailure={onFailure}
//         cookiePolicy={'single_host_origin'}
//         style={{ marginTop: '100px' }}
//         isSignedIn={true}
//          redirectUri="https://127.0.0.1:5000/authorize"
//       />
//     </div>
//   );
// }

// export default LoginWithGoogle;
// //---------------------------------------------------------


// import React from 'react';
// import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';

// const LoginWithGoogle = () => {
//     return (
//         <GoogleOAuthProvider clientId="720220089306-t58chastvvm3593rprr080mgjbjcntub.apps.googleusercontent.com">
//             <GoogleLogin
//                 onSuccess={credentialResponse => {
//                     console.log(credentialResponse);
//                 }}
//                 onError={(err) => {
//                     console.log('Login Failed'+err);
//                 }}
//             />
//         </GoogleOAuthProvider>
//     );
// };

// export default LoginWithGoogle;

// import React from 'react';
// import {GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';

// const clientId = '720220089306-t58chastvvm3593rprr080mgjbjcntub.apps.googleusercontent.com';

// function LoginWithGoogle() {
//     const onSuccess = (response) => {
//         console.log('Login Success: currentUser:', response.profileObj);
//     };

//     const onFailure = (response) => {
//         console.log('Login failed:', response);
//     };

//     return (
//         <div>
//            <GoogleOAuthProvider clientId="720220089306-t58chastvvm3593rprr080mgjbjcntub.apps.googleusercontent.com">
//             <GoogleLogin
//                 clientId={clientId}
//                 buttonText="Login with Google"
//                 onSuccess={onSuccess}
//                 onFailure={onFailure}
//                 cookiePolicy={'single_host_origin'}
//                 redirectUri="https://127.0.0.1:5000/authorize"
//             />
//             </GoogleOAuthProvider>
//         </div>
//     );
// }

// export default LoginWithGoogle;






import React from 'react';
import { GoogleLogin } from 'react-google-login';
import axios from 'axios';

const clientId = '720220089306-t58chastvvm3593rprr080mgjbjcntub.apps.googleusercontent.com';

function LoginWithGoogle() {
    const onSuccess = async (response) => {
        console.log('Login Success:', response.profileObj);

        try {
            //  await axios.post('http://127.0.0.1:5000/authorize', {
            //     token: response.tokenId
            // });

           const res = await fetch('http://127.0.0.1:5000/authorize', {
              method: 'POST',
              headers: {
                  'Content-Type': 'application/json',
              },
               body: JSON.stringify({token:response.tokenId}),
          });

            if (res.data.success) {
                console.log('User authenticated:', res.data.user);
            } else {
                console.log('User not registered');
            }
        } catch (error) {
            console.log('Error:', error);
        }
    };

    const onFailure = (response) => {
        console.log('Login failed:', response);
    };

    return (
        <div>
            <GoogleLogin
                clientId={clientId}
                buttonText="Login with Google"
                onSuccess={onSuccess}
                onFailure={onFailure}
                // cookiePolicy={'single_host_origin'}
            />
        </div>
    );
}

export default LoginWithGoogle;
