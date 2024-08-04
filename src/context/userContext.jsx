
import { createContext, useState,useEffect} from 'react';
import PropTypes from 'prop-types';
import LoginService from '../Logic/LoginService';


const initialCurrentUser = {
  role:'user'
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
    if (!user.user_name) {
      const token = localStorage.getItem('authToken');
      if (token) {
        const fetchUserData = async () => {
          try {
            const userData = await LoginService.fetchAndSetUser(token);
            if (userData) {
              setUser(userData);
            }
          } catch (error) {
            console.error('Failed to fetch user data:', error);
          }
        };

        fetchUserData();
      }
    }
    console.log('User updated:', user);
  }, [user]);




  return (
    <UserContext.Provider value={{ user, setUser: handleSetCurrentUser }}>
      {children}
    </UserContext.Provider>
  );
};


UserProvider.propTypes = {
  children: PropTypes.node.isRequired
};
