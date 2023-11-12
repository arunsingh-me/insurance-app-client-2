import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
const Navbar = () => {
  const { auth } = useAuth();
  return (
    <div className="flex flex-row justify-end space-x-3 p-5 m-5 bg-slate-500 text-white">
      <Link to="/">Home</Link>
      {!auth?.token && (
        <>
          <Link to="/login">Login</Link>
          <Link to="/register">Register</Link>
        </>
      )}
      {auth?.token && (
        <>
          <Link to="/profile">Profile</Link>
          <Link to="/logout">Logout</Link>
        </>
      )}
    </div>
  );
};

export default Navbar;
