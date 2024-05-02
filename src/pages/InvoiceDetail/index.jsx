import { Breadcrumbs, Stack, Typography } from '@mui/material';
import Footer from '../../components/Footer';
import { Link } from 'react-router-dom';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { useLocation } from 'react-router-dom/cjs/react-router-dom';
import SimpleTable from '../../components/Table/tableInvoiceDetail';

const tableHead = [
  { name: 'No', width: '5%' },
  { name: 'Course Name', width: '35%' },
  { name: 'Type', width: '20%' },
  { name: 'Schedule', width: '20%' },
  { name: 'Price', width: '20%' },
]

const tableItem = [
  { course_name: 'Hyundai Palisade 2021', schedule: 'Wednesday, 27 July 2022', type: 'SUV', price: 850000 },
]

const breadcrumbs = [
  <Link key="1" to="/">
    <Typography color="#828282" sx={{ fontFamily: 'Montserrat', fontSize: '16px', fontWeight: 600 }}>
      Home
    </Typography>
  </Link>,
  <Link key="1" to="/invoice">
    <Typography color="#828282" sx={{ fontFamily: 'Montserrat', fontSize: '16px', fontWeight: 600 }}>
      Invoice
    </Typography>
  </Link>,
  <Typography key="2" color="#790B0A" sx={{ fontFamily: 'Montserrat', fontSize: '16px', fontWeight: 600 }}>
    Details Invoice
  </Typography>,
];

const InvoiceDetail = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const data = JSON.parse(searchParams.get('data'));

  const formatCurrency = (amount) => {
    return amount?.toString()?.replace(/\B(?=(\d{3})+(?!\d))/g, '.');
  }

  return (
    <>
      <Stack sx={{ width: '100vw', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
        <Breadcrumbs
          sx={{ width: '90%', mb: 2 }}
          separator={<NavigateNextIcon fontSize="small" sx={{ color: '#828282' }} />}
          aria-label="breadcrumb"
        >
          {breadcrumbs}
        </Breadcrumbs>
        <Typography sx={{ mb: 2, width: '90%', color: '#4F4F4F', fontFamily: 'Montserrat', fontSize: '20px', fontWeight: 700 }}>Details Invoice</Typography>
        <Typography sx={{ width: '90%', color: '#4F4F4F', fontFamily: 'Montserrat', fontSize: '18px', fontWeight: 500 }}>No. Invoice : {data?.no_invoice}</Typography>
        <Stack direction="row" justifyContent="space-between" width="90%">
          <Typography sx={{ mb: 2, color: '#4F4F4F', fontFamily: 'Montserrat', fontSize: '18px', fontWeight: 500 }}>Date : 12 June 2022</Typography>
          <Stack direction="row" spacing={1} width="22%" justifyContent="space-between">
            <Typography sx={{ mb: 2, color: '#4F4F4F', fontFamily: 'Montserrat', fontSize: '20px', fontWeight: 700 }}>Total Price</Typography>
            <Typography sx={{ mb: 2, ml: 10, color: '#4F4F4F', fontFamily: 'Montserrat', fontSize: '20px', fontWeight: 700 }}>IDR {formatCurrency(data?.total_price)}</Typography>
          </Stack>
        </Stack>
        <SimpleTable tableHead={tableHead} tableItem={tableItem} />
      </Stack>
      <Footer />
    </>
  );
};

export default InvoiceDetail;