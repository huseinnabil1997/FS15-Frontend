import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';
import ConfirmSuccess from './pages/auth/ConfirmSuccess';
import Homepage from './pages/homepage';
import ForgotPassword from './pages/auth/ForgotPassword';
import NewPassword from './pages/auth/NewPassword';
import MenuClass from './pages/MenuClass';
import './App.css';

const paths = [
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
        <Switch>
          {paths?.map((data) => (
            <Route exact path={data.pathName} component={data.compName} />
          ))}
          {/* <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/confirm-success" component={ConfirmSuccess} />
          <Route exact path="/forgot-password" component={ForgotPassword} />
          <Route exact path="/new-password" component={NewPassword} />
          <Route exact path="/menu-class" component={MenuClass} />
          <Route path="/" component={Homepage} /> */}
        </Switch>
      </Router>
    </>
  );
}

export default App;
