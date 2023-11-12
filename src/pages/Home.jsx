import PolicyTable from '../components/PolicyTable';
import { useEffect, useState } from 'react';
import Button from '@mui/material/Button';

export default function Home() {
  const [id, setId] = useState(1);

  const checkDisabled = (buttonId) => {
    return id === buttonId ? true : false;
  };

  const insuranceTypes = [
    'Health Insurance',
    'Life Insurance',
    'Motor Insurance',
    'Travel Insurance',
    'Home Insurance'
  ];

  return (
    <div className="">
      <div className="flex justify-center space-x-4">
        {insuranceTypes.map((insuranceType, index) => (
          <Button
            key={index}
            variant="contained"
            disabled={checkDisabled(index + 1)}
            onClick={() => setId(index + 1)}
          >
            {insuranceType}
          </Button>
        ))}
      </div>
      <div className="flex items-center justify-center m-5 p-5">
        <PolicyTable id={id} />
      </div>
    </div>
  );
}
