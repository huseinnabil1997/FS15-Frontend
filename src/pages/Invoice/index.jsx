import { Breadcrumbs, Stack, Typography } from '@mui/material';
import Footer from '../../components/Footer';
import SimpleTable from '../../components/Table/tableInvoice';
import { Link } from 'react-router-dom';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
// import { useLocation } from 'react-router-dom/cjs/react-router-dom';
// import { useHistory } from 'react-router-dom';

const tableHead = [
  { name: 'No', width: '5%' },
  { name: 'No. Invoice', width: '19%' },
  { name: 'Date', width: '19%' },
  { name: 'Total Course', width: '19%' },
  { name: 'Total Price', width: '19%' },
  { name: 'Action', width: '19%' },
]

const tableItem = [
  { no_invoice: 'OTO00003', date: '12 July 2022', total_course: 1, total_price: 850000, width: '19%' },
  { no_invoice: 'OTO00002', date: '05 Februari 2022', total_course: 1, total_price: 400000, width: '19%' },
  { no_invoice: 'OTO00001', date: '30 August 2021', total_course: 1, total_price: 600000, width: '19%' },
]

const breadcrumbs = [
  <Link key="1" href="/">
    <Typography color="#828282" sx={{ fontFamily: 'Montserrat', fontSize: '16px', fontWeight: 600 }}>
      Home
    </Typography>
  </Link>,
  <Typography key="2" color="#790B0A" sx={{ fontFamily: 'Montserrat', fontSize: '16px', fontWeight: 600 }}>
    Invoice
  </Typography>,
];

const Invoice = () => {
  // const location = useLocation();
  // const history = useHistory();
  // const searchParams = new URLSearchParams(location.search);
  // const payment = searchParams.get('payment');

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
        <Typography sx={{ mb: 2, width: '90%', color: '#4F4F4F', fontFamily: 'Montserrat', fontSize: '20px', fontWeight: 600 }}>Menu Invoice</Typography>
        <SimpleTable tableHead={tableHead} tableItem={tableItem} />
      </Stack>
      <Footer />
    </>
  );
};

export default Invoice;