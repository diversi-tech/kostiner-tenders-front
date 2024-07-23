import { createContext, useState } from 'react';
import PropTypes from 'prop-types';
export const UserContext = createContext();
export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({role:'admin'});
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
UserProvider.propTypes = {
  children: PropTypes.node.isRequired,
};