import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
const Navbar = () => {
  const { auth } = useContext(AuthContext);
  return (
    <div>
      <Link to="/">Home</Link>
      {!auth.token && (
        <>
          <Link to="/login">Login</Link>
          <Link to="/register">Register</Link>
        </>
      )}
      {auth.token && (
        <>
          <Link to="/profile">Profile</Link>
          <Link to="/logout">Logout</Link>
        </>
      )}
    </div>
  );
};

export default Navbar;
