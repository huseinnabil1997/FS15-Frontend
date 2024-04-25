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
