import { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Register = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:8080/register', {
        username,
        password,
        email
      });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    // <div>
    //   <form onSubmit={handleSubmit}>
    //     <input
    //       type="text"
    //       value={username}
    //       onChange={(e) => setUsername(e.target.value)}
    //     />
    //     <input
    //       type="password"
    //       value={password}
    //       onChange={(e) => setPassword(e.target.value)}
    //     />
    //     <input
    //       type="email"
    //       value={email}
    //       onChange={(e) => setEmail(e.target.value)}
    //     />
    //     <button type="submit">Register</button>
    //   </form>
    // </div>
    // create a register form using material ui
    <div className="flex flex-col justify-center items-center space-y-4">
      <h1 className="text-2xl">Register</h1>
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
        <input
          type="email"
          placeholder="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border border-gray-300 p-2 rounded-md"
        />
        <button type="submit" variant="contained">
          Register
        </button>
      </form>
      <Link to="/login">Login</Link>
    </div>
  );
};

export default Register;
