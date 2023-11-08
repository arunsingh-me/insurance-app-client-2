import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import axios from 'axios';
const Logout = () => {
  const { setAuthData } = useContext(AuthContext);
  const handleLogout = async () => {
    try {
      await axios.get('http://localhost:8080/logout');
      setAuthData({
        username: null,
        token: null
      });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};
export default Logout;