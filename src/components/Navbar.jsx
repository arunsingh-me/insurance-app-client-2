import { Link } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

const Navbar = () => {
  const { auth, setAuth } = useAuth();
  const navigate = useNavigate();
  const handlelogout = () => {
    setAuth({});
    localStorage.removeItem('auth');
    navigate('/');
    toast.success('Logout success');
  };
  return (
    <div className="lg:flex lg:flex-row flex-col justify-end items-center space-x-3 p-3 bg-slate-600 text-white">
      <div className="flex-grow flex items-center">
        <img
          className="p-2"
          width="64"
          height="64"
          src="https://img.icons8.com/cotton/64/security-checked--v3.png"
          alt="security-checked--v3"
        />
        <h1 className="text-3xl">Insurance App</h1>
      </div>
      <Link to="/">Home</Link>
      <Link to="/feedback">Feedbacks</Link>
      {!auth?.token && (
        <>
          <Link to="/login">Login</Link>
          <Link to="/register">Register</Link>
        </>
      )}
      {auth?.token && (
        <>
          <p className="text-yellow-300">Hi! {auth?.name}</p>
          <Link to="/forgot-password">Reset Password</Link>
          <Link to="/cart">Cart</Link>
          <Link to="/dashboard">Dashboard</Link>
          <Link onClick={handlelogout}>Logout</Link>
        </>
      )}
    </div>
  );
};

export default Navbar;
