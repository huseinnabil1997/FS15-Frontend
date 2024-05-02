import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button } from '@mui/material';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';

function SimpleTable({ tableHead, tableItem }) {
  const history = useHistory();

  const formatCurrency = (amount) => {
    return amount?.toString()?.replace(/\B(?=(\d{3})+(?!\d))/g, '.');
  }

  const handleClick = (row) => {
    const data = {
      no_invoice: row?.no_invoice,
      date: row?.date,
      total_course: row?.total_course,
      total_price: row?.total_price
    };
    const queryString = encodeURIComponent(JSON.stringify(data));
    history.push(`/invoice-detail?data=${queryString}`);
  };

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
              <TableCell sx={{ color: '#4F4F4F', height: 77, fontFamily: 'Montserrat', fontSize: '16px', fontWeight: 500, width: row?.width }} align="center">{row?.no_invoice}</TableCell>
              <TableCell sx={{ color: '#4F4F4F', height: 77, fontFamily: 'Montserrat', fontSize: '16px', fontWeight: 500, width: row?.width }} align="center">{row?.date}</TableCell>
              <TableCell sx={{ color: '#4F4F4F', height: 77, fontFamily: 'Montserrat', fontSize: '16px', fontWeight: 500, width: row?.width }} align="center">{row?.total_course}</TableCell>
              <TableCell sx={{ color: '#4F4F4F', height: 77, fontFamily: 'Montserrat', fontSize: '16px', fontWeight: 500, width: row?.width }} align="center">IDR {formatCurrency(row?.total_price)}</TableCell>
              <TableCell sx={{ color: '#4F4F4F', height: 77, fontFamily: 'Montserrat', fontSize: '16px', fontWeight: 500, width: row?.width }} align="center">
                <Button
                  onClick={() => handleClick(row)}
                  variant='outlined'
                  sx={{
                    width: 130, height: 37, backgroundColor: 'white', borderColor: '#790B0A', textTransform: 'none', color: '#790B0A', fontFamily: 'Montserrat', fontWeight: 700, fontSize: '14px',
                    '&:hover': {
                      borderColor: '#790B0A', backgroundColor: '#790B0A', color: "white",
                    },
                  }}
                >
                  Details
                </Button>
              </TableCell>
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
