import { useState, useRef, useEffect } from 'react';
import Button from '@mui/material/Button';
import useAuth from '../hooks/useAuth';
import { Link, useNavigate, useLocation } from 'react-router-dom';

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { setAuth } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || '/';

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch('http://localhost:8080/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ username, password })
    });
    const data = await response.json();
    // setAuthData(data);
    // history.push('/');
  };
  return (
    // <>
    //   <form onSubmit={handleSubmit}>
    //     <input
    //       type="text"
    //       placeholder="username"
    //       value={username}
    //       onChange={(e) => setUsername(e.target.value)}
    //     />
    //     <input
    //       type="password"
    //       placeholder="password"
    //       value={password}
    //       onChange={(e) => setPassword(e.target.value)}
    //     />
    //     <Button type="submit">Login</Button>
    //   </form>
    // </>
    // create a login form using material ui

    <div className="flex flex-col justify-center items-center space-y-4">
      <h1 className="text-2xl">Login</h1>
      <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
        <input
          type="text"
          placeholder="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="border border-gray-300 p-2 rounded-md"
        />
        <input
          type="password"
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="border border-gray-300 p-2 rounded-md"
        />
        <Button type="submit" variant="contained">
          Login
        </Button>
      </form>
      <Link to="/register">Register</Link>
    </div>
  );
}
