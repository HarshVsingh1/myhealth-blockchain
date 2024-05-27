

import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useEffect, useState } from 'react';
import axios from 'axios';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));







export default function Patientdata() { 
const [rows,setRows] = useState([])
 
const userEmail = sessionStorage.getItem('email')
const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;
  useEffect(()=>{

    const approve = async (appointmentId) => {
      
        
      const response = await axios.get(`${API_BASE_URL}/patients`) 
    
      if(response.status == 200){
        console.log(response.data)
        setRows(response.data)
      }
    } 
  
    approve()
  },[])

  if(!rows) {
    return (
        <div>
                  "wait"
        </div>
    )
  } else {
        
    return (  
      <TableContainer style={{ overflowY: "scroll", height: "400px" }}
      component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Name</StyledTableCell>
              <StyledTableCell align="right">Phone no.</StyledTableCell>
              <StyledTableCell align="right">Visit Time</StyledTableCell>
              <StyledTableCell align="right">Email</StyledTableCell>
              <StyledTableCell align="right">Fees</StyledTableCell>
              <StyledTableCell align="right">Past condition</StyledTableCell>
              <StyledTableCell align="right">Gender</StyledTableCell>
              <StyledTableCell align="right">Ongoing treatment</StyledTableCell>
              <StyledTableCell align="right">Physician Notes</StyledTableCell>
              <StyledTableCell align="right">Allergies</StyledTableCell>
              <StyledTableCell align="right">Reason for visit</StyledTableCell>
              
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <StyledTableRow key={row.id}>
                <StyledTableCell component="th" scope="row">
                  {row.firstName + row.lastName}
                </StyledTableCell>
                <StyledTableCell align="right">{row.phoneNumber}</StyledTableCell>
                <StyledTableCell align="right">{row.timingfrom +" - "+ row.timingto}</StyledTableCell>
                <StyledTableCell align="right">{row.email}</StyledTableCell>
                <StyledTableCell align="right">{row.fees}</StyledTableCell>
                <StyledTableCell align="right">{row.Pastcondition}</StyledTableCell>
                <StyledTableCell align="right">{row.gender}</StyledTableCell>
                <StyledTableCell align="right">{row.ongoingtreatment}</StyledTableCell>
                <StyledTableCell align="right">{row.physiciannotes}</StyledTableCell>
                <StyledTableCell align="right">{row.allergies}</StyledTableCell>
                <StyledTableCell align="right">{row.reasonforvisit}</StyledTableCell>
               
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    );

  }


  
}