import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
// import DeleteIcon from '@material-ui/icons/Delete';
import './Classes.css'

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

function createData(name, calories, fat, carbs) {
  return { name, calories, fat, carbs };
}

const rows = [
  createData('Test 1', '23/11/2020', '10:00', 'https://meet.google.com/swi-cnkb-cio', 4.0),
  createData('Test 2', '24/11/2020', '11:00', 'https://meet.google.com/swi-cnkb-cio', 4.3),
  createData('Test 3', '25/11/2020', '16:30', 'https://meet.google.com/swi-cnkb-cio', 6.0),
  createData('Test 4', '26/11/2020', '08:15', 'https://meet.google.com/swi-cnkb-cio', 4.3),
  createData('Test 5', '27/11/2020', '20:45', 'https://meet.google.com/swi-cnkb-cio', 3.9),
];

export default function BasicTable() {
  const classes = useStyles();

  return (
      <div className='tableContainer shadow'>
          <h2>Next class:</h2>
        <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
            <TableHead>
                <TableRow>
                    <TableCell style={{fontWeight: 'bold', fontSize: '16px'}}>Description</TableCell>
                    <TableCell style={{fontWeight: 'bold', fontSize: '16px'}}>Date:</TableCell>
                    <TableCell style={{fontWeight: 'bold', fontSize: '16px'}}>Start time:</TableCell>
                    <TableCell style={{fontWeight: 'bold', fontSize: '16px'}}>Link</TableCell>
                    {/* <TableCell style={{fontWeight: 'bold', fontSize: '16px'}}>Actions</TableCell> */}
                </TableRow>
            </TableHead>
            <TableBody>
            {rows.map((row) => (
                <TableRow key={row.name}>
                <TableCell component="th" scope="row">
                    {row.name}
                </TableCell>
                <TableCell >{row.calories}</TableCell>
                <TableCell >{row.fat}</TableCell>
                <TableCell >{row.carbs}</TableCell>
                {/* <TableCell >{row.protein}</TableCell> */}
                </TableRow>
            ))}
            </TableBody>
        </Table>
        </TableContainer>
      </div>
  );
}
