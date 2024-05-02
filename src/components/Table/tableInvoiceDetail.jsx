import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import PropTypes from 'prop-types';

function SimpleTable({ tableHead, tableItem }) {

  const formatCurrency = (amount) => {
    return amount?.toString()?.replace(/\B(?=(\d{3})+(?!\d))/g, '.');
  }

  return (
    <TableContainer component={Paper} sx={{ width: '90%' }}>
      <Table>
        <TableHead>
          <TableRow>
            {tableHead?.map((item, index) => (
              <TableCell key={index} sx={{ color: 'white', height: 60, width: item?.width, backgroundColor: '#790B0A', fontFamily: 'Montserrat', fontWeight: 600, fontSize: '16px' }} align="center">{item?.name}</TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {tableItem.map((row, index) => (
            <TableRow
              key={row.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 }, backgroundColor: index % 2 === 0 ? 'white' : '#790B0A1A' }}
            >
              <TableCell sx={{ height: 77, width: '5%' }} component="th" scope="row" align="center">
                {index + 1}
              </TableCell>
              <TableCell sx={{ color: '#4F4F4F', height: 77, fontFamily: 'Montserrat', fontSize: '16px', fontWeight: 500, width: row?.width }} align="center">{row?.course_name}</TableCell>
              <TableCell sx={{ color: '#4F4F4F', height: 77, fontFamily: 'Montserrat', fontSize: '16px', fontWeight: 500, width: row?.width }} align="center">{row?.type}</TableCell>
              <TableCell sx={{ color: '#4F4F4F', height: 77, fontFamily: 'Montserrat', fontSize: '16px', fontWeight: 500, width: row?.width }} align="center">{row?.schedule}</TableCell>
              <TableCell sx={{ color: '#4F4F4F', height: 77, fontFamily: 'Montserrat', fontSize: '16px', fontWeight: 500, width: row?.width }} align="center">IDR {formatCurrency(row?.price)}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default SimpleTable;

SimpleTable.propTypes = {
  tableHead: PropTypes.array,
  tableItem: PropTypes.array,
};
