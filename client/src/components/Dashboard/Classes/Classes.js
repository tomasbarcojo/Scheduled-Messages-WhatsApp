import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useDispatch, useSelector } from 'react-redux'
import { getClasses } from '../../../actions/classes'
import {  } from '../../../actions/user'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import DeleteIcon from '@material-ui/icons/Delete';
import './Classes.css'

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

function createData(desc, date, starttime, endtime, link) {
  return { desc, date, starttime, endtime, link };
}

const rows = [
  createData('Test 1', '23/11/2020', '10:00', '10:30', 'https://meet.google.com/swi-cnkb-cio'),
  createData('Test 2', '24/11/2020', '11:00', '12:30', 'https://meet.google.com/swi-cnkb-cio'),
  createData('Test 3', '25/11/2020', '16:30', '17:00', 'https://meet.google.com/swi-cnkb-cio'),
  createData('Test 4', '26/11/2020', '08:15', '09:00', 'https://meet.google.com/swi-cnkb-cio'),
  createData('Test 5', '27/11/2020', '20:45', '21:15', 'https://meet.google.com/swi-cnkb-cio'),
];

export default function BasicTable() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const user = useSelector(state => state.user)
  console.log(user)

  useEffect(() => {
    // dispatch()
    dispatch(getClasses(user.id))
  }, [])

  return (
      <div className='tableContainer shadow'>
          <h2>Next class:</h2>
        <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
            <TableHead>
                <TableRow>
                    <TableCell style={{fontWeight: 'bold', fontSize: '16px'}}>Description</TableCell>
                    <TableCell style={{fontWeight: 'bold', fontSize: '16px'}}>Date</TableCell>
                    <TableCell style={{fontWeight: 'bold', fontSize: '16px'}}>Start time</TableCell>
                    <TableCell style={{fontWeight: 'bold', fontSize: '16px'}}>End time</TableCell>
                    <TableCell style={{fontWeight: 'bold', fontSize: '16px'}}>Link</TableCell>
                    <TableCell style={{fontWeight: 'bold', fontSize: '16px'}}>Actions</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
            {rows.map((row) => (
                <TableRow key={row.desc}>
                <TableCell component="th" scope="row">
                    {row.desc}
                </TableCell>
                <TableCell >{row.date}</TableCell>
                <TableCell >{row.starttime}</TableCell>
                <TableCell >{row.endtime}</TableCell>
                <TableCell >{row.link}</TableCell>
                <TableCell ><DeleteIcon /></TableCell>
                </TableRow>
            ))}
            </TableBody>
        </Table>
        </TableContainer>
      </div>
  );
}
