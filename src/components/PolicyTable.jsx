import { useState, useEffect } from 'react';
import axios from 'axios';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';

export default function PolicyTable({ id }) {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://0.tcp.in.ngrok.io:13128/insurance-service/policiesByPolicyTypeId/${id}`
        );
        setData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData(); // Call the API on component mount
  }, [id]);
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Policy Name</TableCell>
            <TableCell align="right">Policy Type</TableCell>
            <TableCell align="right">Policy Company</TableCell>
            <TableCell align="right">Tenure</TableCell>
            <TableCell align="right">Policy Price</TableCell>
            <TableCell align="right">Coverage</TableCell>
            <TableCell align="right">Benefits</TableCell>
            <TableCell align="right">Buy</TableCell>
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
                <TableCell align="right">{policy.policyPrice}</TableCell>
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
  );
}
