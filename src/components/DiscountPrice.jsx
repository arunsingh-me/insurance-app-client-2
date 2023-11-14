import { TableCell } from '@mui/material';
import { useState, useEffect } from 'react';
import axios from '../utils/axios';

export default function DiscountPrice({ price, id }) {
  const [data, setData] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `/discount/getdiscountbypolicyid/${id}`
        );
        setData(response.data);
        setIsLoaded(true);
        console.log(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, [id]);
  return isLoaded ? (
    <TableCell align="right">
      <s>{price}</s>&nbsp;
      {price - (data?.percentage / 100) * price}
    </TableCell>
  ) : (
    <TableCell align="right">{price}</TableCell>
  );
}
