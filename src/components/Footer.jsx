// add footer component
// Path: src/components/Footer.jsx
// import React from 'react';
import { Typography } from '@mui/material';

export default function Footer() {
  return (
    <div className="flex justify-center items-center bg-gray-600 p-5 text-white">
      <Typography variant="body1" gutterBottom>
        Made with ❤️ by{' '}
        <b>{'Arun Singh, Jessica Reehal, Itashi, Ankit and Vinay'}</b> in{' '}
        <b>Gurugram</b> and <b>Bengaluru</b>
      </Typography>
    </div>
  );
}
