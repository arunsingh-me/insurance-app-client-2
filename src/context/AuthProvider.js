import { createContext, useState, useEffect } from 'react';

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({});

  useEffect(() => {
    // Write user and token to localStorage whenever auth state changes
    if (auth.token) {
      localStorage.setItem('token', auth.token);
    }
    if (auth.user) {
      localStorage.setItem('user', auth.user);
    }
  }, [auth]); // This tells React to call this effect whenever auth state changes

  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
