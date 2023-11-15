import React from 'react';
import { Card, CardContent, Typography, Button } from '@mui/material';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
const cardStyles = {
  width: '30%',
  border: '1px solid #ddd',
  borderRadius: '8px',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  marginBottom: '10px'
};

const OrderDetails = ({ order, onPolicyClick }) => {
  return (
    <Card style={cardStyles}>
      <CardContent>
        <Typography variant="h5" component="div">
          Order ID: {order.orderId}
        </Typography>
        <Typography color="text.secondary">
          Purchase Date: {order.purchaseDate}
        </Typography>
        <Typography color="text.secondary">
          Order Price: {order.orderPrice}
        </Typography>
        <Typography variant="h6" component="div" mt={2}>
          Policies:
        </Typography>
        {order.policyAddOns.map((policy) => (
          <Button
            color="primary"
            key={policy.id}
            component={Link}
            onClick={() => onPolicyClick(policy)}
            style={{ marginRight: '10px', marginTop: '5px' }}
          >
            {policy.name}
          </Button>
        ))}
      </CardContent>
    </Card>
  );
};

export default OrderDetails;
