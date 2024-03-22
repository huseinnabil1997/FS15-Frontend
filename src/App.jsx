import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';
import ConfirmSuccess from './pages/auth/ConfirmSuccess';
import Homepage from './pages/homepage';
import ForgotPassword from './pages/auth/ForgotPassword';
import NewPassword from './pages/auth/NewPassword';
import MenuClass from './pages/MenuClass';
import './App.css';

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/confirm-success" component={ConfirmSuccess} />
          <Route exact path="/forgot-password" component={ForgotPassword} />
          <Route exact path="/new-password" component={NewPassword} />
          <Route exact path="/menu-class" component={MenuClass} />
          <Route path="/" component={Homepage} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
