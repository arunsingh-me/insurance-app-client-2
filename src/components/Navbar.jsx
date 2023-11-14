import { Link } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

const Navbar = () => {
  const { auth, setAuth } = useAuth();
  const navigate = useNavigate();
  const handlelogout = () => {
    setAuth({});
    navigate('/');
    toast.success('Logout success');
  };
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
          <p>Hi! {auth?.user}</p>
          <Link to="/dashboard">Dashboard</Link>
          <Link onClick={handlelogout}>Logout</Link>
        </>
      )}
    </div>
  );
};

export default Navbar;
