import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useSelector } from 'react-redux'
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

export default function BasicTable() {
  const classes = useStyles();
  const listClasses = useSelector(state => state.classes)

  return (

      <div className='tableContainer shadow'>
          <h2>Up next classes:</h2>
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
            {listClasses && listClasses.lenght !== 0 ?
            listClasses.map((row) => (
                <TableRow key={row.id}>
                <TableCell >{row.description}</TableCell>
                <TableCell >{row.start.split('T')[0]}</TableCell>
                <TableCell >{row.start.split('T')[1]} hs</TableCell>
                <TableCell >{row.end.split('T')[1]} hs</TableCell>
                <TableCell >{row.url}</TableCell>
                <TableCell ><DeleteIcon /></TableCell>
                </TableRow>
            ))
          : null}
            </TableBody>
        </Table>
        </TableContainer>
      </div>
  );
}
