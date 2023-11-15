import PolicyTable from '../components/PolicyTable';
import { useState } from 'react';
import Button from '@mui/material/Button';

export const insuranceTypes = [
  'Health Insurance',
  'Life Insurance',
  'Two-wheeler Insurance',
  'Property Insurance',
  'Car Insurance'
];

export default function Home() {
  const [id, setId] = useState(1);

  const checkDisabled = (buttonId) => {
    return id === buttonId ? true : false;
  };

  return (
    <div className="p-5 m-5">
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
