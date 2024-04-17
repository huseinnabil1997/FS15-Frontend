import React from 'react';
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
import { useLocation } from 'react-router-dom';
import Test from './test';

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
]

function App() {
  return (
    <>
      <Router>
        <Main />
      </Router>
    </>
  );
}

function Main() {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const token = localStorage.getItem('token');
  return (
    <>
      <Header homePage={!!token}/>
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
