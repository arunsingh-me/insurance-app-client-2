import React, { useEffect, useState } from 'react';
import OrderDetails from './OrderDetails';
import axios from 'axios';

import { Route, Router } from 'react-router-dom';
import { Typography } from '@mui/material';

const containerStyles = {
  display: 'flex',
  justifyContent: 'column',
  margin: '20px'
};

const cardStyles = {
  width: '30%',
  border: '1px solid #ddd',
  borderRadius: '8px',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  marginBottom: '10px'
};

const ordersData = [
  {
    orderId: 1,
    purchaseDate: '2023-11-13',
    orderPrice: 100.0,
    policyAddOns: [
      {
        id: 101,
        name: 'Policy A',
        expiryDate: '2024-01-01',
        nominee: 'John Doe'
      }
    ]
  },
  {
    orderId: 2,
    purchaseDate: '2023-11-14',
    orderPrice: 150.0,
    policyAddOns: [
      {
        id: 101,
        name: 'Policy A',
        expiryDate: '2024-01-01',
        nominee: 'John Doe'
      }
    ]
  },
  {
    orderId: 3,
    purchaseDate: '2023-11-15',
    orderPrice: 120.0,
    policyAddOns: [
      {
        id: 101,
        name: 'Policy A',
        expiryDate: '2024-01-01',
        nominee: 'John Doe'
      }
    ]
  }
];
const PolicyInfo = ({ policy }) => {
  return (
    <div
      style={{
        ...cardStyles,
        width: '100%',
        marginBottom: 0,
        marginTop: '10px'
      }}
    >
      <Typography variant="h4" gutterBottom>
        Policy Details
      </Typography>
      <Typography variant="h6" gutterBottom>
        Policy Name: {policy.name}
      </Typography>
      <Typography color="text.secondary">
        Expiry Date: {policy.expiryDate}
      </Typography>
      <Typography color="text.secondary">Nominee: {policy.nominee}</Typography>
    </div>
  );
};

function PolicyBuyerDashboard({ id }) {
  const [data, setData] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);

  const [selectedPolicy, setSelectedPolicy] = useState(null);

  const handlePolicyClick = (policy) => {
    setSelectedPolicy(policy);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`/order/getOrderByUserId/${id}`);
        setIsLoaded(true);
        setData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, [id]);

  return (
    <div style={containerStyles}>
      {ordersData.map((order) => (
        <OrderDetails
          key={order.id}
          order={order}
          onPolicyClick={handlePolicyClick}
        />
      ))}
      {selectedPolicy && <PolicyInfo policy={selectedPolicy} />}
    </div>
  );
}

export default PolicyBuyerDashboard;
