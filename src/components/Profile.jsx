import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../context/AuthContext';
import axios from 'axios';

const Profile = () => {
  const [user, setUser] = useState(null);
  const { auth } = useContext(AuthContext);
  useEffect(() => {
    const getUser = async () => {
      try {
        const response = await axios.get('http://localhost:8080/user', {
          headers: {
            Authorization: `Bearer ${auth.token}`
          }
        });
        setUser(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    getUser();
  }, [auth.token]);
  return (
    <div>
      <h1>Profile</h1>
      {user && (
        <div>
          <p>{user.username}</p>
          <p>{user.email}</p>
        </div>
      )}
    </div>
  );
};

export default Profile;
