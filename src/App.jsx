import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';
import ConfirmSuccess from './pages/auth/ConfirmSuccess';
import Homepage from './pages/homepage';
import ForgotPassword from './pages/auth/ForgotPassword';
import NewPassword from './pages/auth/NewPassword';
import MenuClass from './pages/MenuClass';
import './App.css';
import Header from './components/Header';
import { Stack } from '@mui/material';
import DetailClass from './pages/DetailClass';
import Checkout from './pages/Checkout';
import Test from './test';
import { TokenProvider } from './utils/TokenContext';
import PruchaseSuccess from './pages/PurchaseSuccess';
import Invoice from './pages/Invoice';
import InvoiceDetail from './pages/InvoiceDetail';
import MyClass from './pages/myClass';

const paths = [
  {
    pathName: '/test',
    compName: Test,
  },
  {
    pathName: '/',
    compName: Homepage,
  },
  {
    pathName: '/login',
    compName: Login,
  },
  {
    pathName: '/register',
    compName: Register,
  },
  {
    pathName: '/confirm-success',
    compName: ConfirmSuccess,
  },
  {
    pathName: '/forgot-password',
    compName: ForgotPassword,
  },
  {
    pathName: '/new-password',
    compName: NewPassword,
  },
  {
    pathName: '/menu-class',
    compName: MenuClass,

  },
  {
    pathName: '/detail-class',
    compName: DetailClass,

  },
  {
    pathName: '/checkout',
    compName: Checkout,

  },
  {
    pathName: '/PurchaseSucces',
    compName: PruchaseSuccess,

  },
  {
    pathName: '/invoice',
    compName: Invoice,

  },
  {
    pathName: '/invoice-detail',
    compName: InvoiceDetail,

  },
  {
    pathName: '/my-class',
    compName: MyClass,

  },
]

function App() {
  return (
    <TokenProvider>
      <Router>
        <Main />
      </Router>
    </TokenProvider>
  );
}

function Main() {
  const token = localStorage.getItem('token');
  console.log('token', token)
  return (
    <>
      <Header homePage={!!token} />
      <Stack mt="86px" direction="column" flexGrow={1}>
        <Switch>
          {paths?.map((data) => (
            <Route key={data.pathName} exact path={data.pathName} component={data.compName} />
          ))}
        </Switch>
      </Stack>
    </>
  );
}

export default App;
