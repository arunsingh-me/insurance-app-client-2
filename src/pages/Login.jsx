import { useContext, useState } from 'react';
// import { useHistory } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import { Button } from 'flowbite-react';

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { setAuthData } = useContext(AuthContext);
  // const history = useHistory();
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
    setAuthData(data);
    // history.push('/');
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button type="submit">Login</Button>
      </form>
    </>
  );
}

// Path: src/components/Profile.jsx
// write profile component

// import React, { useContext } from 'react';
// import { AuthContext } from '../context/AuthContext';
// import { Button } from 'flowbite-react';

// const Profile = () => {
//   const { authData, setAuthData } = useContext(AuthContext);
//   const handleLogout = () => {
//     setAuthData(null);
//   };
//   return (
//     <div>
//       <h1>Profile</h1>
//       <p>{authData?.username}</p>
//       <Button onClick={handleLogout}>Logout</Button>
//     </div>
//   );
// }

// export default Profile;
