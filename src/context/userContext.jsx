
import { createContext, useState } from 'react';
import PropTypes from 'prop-types';
export const UserContext = createContext();
export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({ role: 'user'});


  const setUserDetails = (userDetails) => {
    setUser((prevUser) => ({ ...prevUser, ...userDetails }));
  };

  return (
    <UserContext.Provider value={{ user, setUser: setUserDetails }}>
      {children}
    </UserContext.Provider>
  );
};

UserProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

