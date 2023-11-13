import { Link } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
const Navbar = () => {
  const { auth } = useAuth();
  return (
    <div className="flex flex-row justify-end items-center space-x-3 p-3 bg-slate-600 text-white">
      <div className="flex-grow">
        <h1 className="text-3xl">Insurance App</h1>
      </div>
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
