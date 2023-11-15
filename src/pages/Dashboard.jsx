import React from 'react';
import ContextApp from './ContextApp';
import UserDetailsForm from './UserDetailsForm';

export default function Dashboard() {
  return (
    <div>
      <h1>Dashboard</h1>
      <ContextApp />
      <UserDetailsForm />
    </div>
  );
}
