
// import { createContext, useState,useEffect} from 'react';
// import PropTypes from 'prop-types';
// import LoginService from '../Logic/LoginService';


// const initialCurrentUser = {
//   role:'user'
// };

// export const UserContext = createContext({
//   user: initialCurrentUser,
//   setCurrentUser: () => {}
// });

// export const UserProvider = ({ children }) => {
//   const [user, setUser] = useState(initialCurrentUser);

//   const handleSetCurrentUser = (user) => {
//     setUser(user);
//   };
 
//   useEffect(() => {
//     if (!user.user_name) {
//       const token = localStorage.getItem('authToken');
//       if (token) {
//         const fetchUserData = async () => {
//           try {
//             const userData = await LoginService.fetchAndSetUser(token);
//             if (userData) {
//               setUser(userData);
//             }
//           } catch (error) {
//             console.error('Failed to fetch user data:', error);
//           }
//         };

//         fetchUserData();
//       }
//     }
//     console.log('User updated:', user);
//   }, [user]);




//   return (
//     <UserContext.Provider value={{ user, setUser: handleSetCurrentUser }}>
//       {children}
//     </UserContext.Provider>
//   );
// };


// UserProvider.propTypes = {
//   children: PropTypes.node.isRequired
// };



// contexts/UserContext.js

import { createContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import LoginService from '../Logic/LoginService';
import User from '../Server/user'
//  localStorage.getItem('user')
// // | {...User.getCurrentUser} 
// console.log("in userContext initialCurrentUser = ",initialCurrentUser);
// console.log("in userContext {...User.getCurrentUser} = ",{...User.getCurrentUser});
const initialCurrentUser =
{
  role: 'user',
  user_name: User.getCurrentUser?.user_name,
  email: User.getCurrentUser?.email,
  categories: [],  // הוספת רשימת הקטגוריות
};

export const UserContext = createContext({
  user: initialCurrentUser,
  setCurrentUser: () => {}
});

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(initialCurrentUser);

  const handleSetCurrentUser = (user) => {
    setUser(user);
  };

  useEffect(() => {
    const fetchUserData = async () => {
      const token = localStorage.getItem('authToken');
      if (token) {
        try {
          const userData = await LoginService.fetchAndSetUser(token);
          if (userData) {
            setUser(userData);
          }
        } catch (error) {
          console.error('Failed to fetch user data:', error);
        }
      }
    };

    fetchUserData();
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser: handleSetCurrentUser }}>
      {children}
    </UserContext.Provider>
  );
};

UserProvider.propTypes = {
  children: PropTypes.node.isRequired
};

