import { useState, useEffect } from 'react';
import axios from '../utils/axios';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import DiscountPrice from './DiscountPrice';

const tableHeaders = [
  'Policy Name',
  'Policy Type',
  'Policy Company',
  'Tenure',
  'Policy Price',
  'Coverage',
  'Benefits',
  'Buy'
];

export default function PolicyTable({ id }) {
  const [data, setData] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `/insurance-service/policiesByPolicyTypeId/${id}`
        );
        setIsLoaded(true);
        setData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData(); // Call the API on component mount
  }, [id]);
  return isLoaded ? (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            {tableHeaders.map((header, index) => (
              <TableCell align={index === 0 ? '' : 'right'} key={index}>
                {header}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {data &&
            data.map((policy) => (
              <TableRow
                key={policy.policyId}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {policy.policyName}
                </TableCell>
                <TableCell align="right">
                  {policy.policyType.policyTypeValue}
                </TableCell>
                <TableCell align="right">{policy.policyCompany}</TableCell>
                <TableCell align="right">{policy.tenure}</TableCell>
                <DiscountPrice
                  price={policy.policyPrice}
                  id={policy.policyId}
                />
                <TableCell align="right">{policy.coverage}</TableCell>
                <TableCell align="right">
                  <ul>
                    {JSON.parse(policy.benefit.benefitValue).map(
                      (benefit, index) => (
                        <li key={index}>{benefit}</li>
                      )
                    )}
                  </ul>
                  {/* {policy.benefit.benefitValue} */}
                </TableCell>
                <TableCell align="right">
                  <Button variant="contained" color="success">
                    Add to Cart
                  </Button>
                </TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </TableContainer>
  ) : (
    <Box sx={{ display: 'flex' }}>
      <CircularProgress />
    </Box>
  );
}
