// // import { useRef } from "react";
// // import useScript from "hooks/useScript";

// // export default function GGG({
// //   onGoogleSignIn = () => {},
// //   text = "signin_with",
// //   // feel free to add more options here
// // }) {
// //   const googleSignInButton = useRef(null);

// //   useScript("https://accounts.google.com/gsi/client", () => {
// //     window.google.accounts.id.initialize({

// //       callback: onGoogleSignIn,
// //     });
// //     window.google.accounts.id.renderButton(
// //       googleSignInButton.current,
// //       { theme: "outline", size: "large", text, width: "250" } // customization attributes
// //     );
// //   });

// //   return <div className="test" ref={googleSignInButton}></div>;
// // }


// import React from 'react';
// import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';



// const GGG = () => {
//   const onSuccess = (response) => {
//     console.log('Login Success:', response);
//     const token = response.credential;

//     // קריאה לפונקציה לקבלת פרטי המשתמש
//     getProfileInfo(token);
//   };

//   const onFailure = (error) => {
//     console.log('Login Failed:', error);
//   };

//   // פונקציה לקריאה ל-Google People API באמצעות ה-access token
//   const getProfileInfo = async (token) => {
//     try {
//       const response = await fetch('https://people.googleapis.com/v1/people/me?personFields=names,emailAddresses', {
//         headers: {
//           'Authorization': `Bearer ${token}`
//         }
//       });
//       const data = await response.json();
//       console.log('Profile Info:', data);
//     } catch (error) {
//       console.error('Error fetching profile info:', error);
//     }
//   };

//   return (
//     <GoogleOAuthProvider clientId={clientId}>
//       <GoogleLogin
//         onSuccess={onSuccess}
//         onError={onFailure}
//         useOneTap
//         shape='pill'
//       />
//     </GoogleOAuthProvider>
//   );
// };

// export default GGG;



import React from 'react';
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';

const clientId = import.meta.env.VITE_CLIENT_ID;


const GoogleLoginButton = () => {
  const onSuccess = (response) => {
    console.log('Login Success:', response);
    const token = response.credential;

    // שליחה לשרת כדי לקבל פרטי משתמש
    getProfileInfo(token);
  };

  const onFailure = (error) => {
    console.log('Login Failed:', error);
  };

  // פונקציה לקריאה ל-Google People API באמצעות ה-access token
  const getProfileInfo = async (token) => {
    try {
      const response = await fetch('https://kostiner-tenders-back.onrender.com/auth/continue-with-google', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body:  token 
      });
      const data = await response.json();
      
      console.log('Profile Info:', data);
    } catch (error) {
      console.error('Error fetching profile info:', error);
    }
  };

  return (
    <GoogleOAuthProvider clientId={clientId}>
      <GoogleLogin
        onSuccess={onSuccess}
        onError={onFailure}
        useOneTap
      />
    </GoogleOAuthProvider>
  );
};

export default GoogleLoginButton;
