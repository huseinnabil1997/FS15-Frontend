import './index.css';
import Logo from '../../assets/logo.png';
import Cart from '../../assets/cart.png';
import User from '../../assets/user.png';
import Logout from '../../assets/logout.png';
import { Stack } from '@mui/material';
import { useHistory } from 'react-router-dom/cjs/react-router-dom';
import { useToken } from '../../utils/TokenContext';

const Header = () => {
  const { token, removeToken } = useToken();
  const history = useHistory();
  return (
    <Stack width="100%" height="86px" position="absolute" top={0} direction="row" display="flex" justifyContent="space-between">
      <div className="logo" onClick={() => history.push('/')}>
        <img src={Logo} alt="Logo" />
        <span>Otomobil</span>
      </div>
      <div className="nav">
        {!token && (
          <>
            <button onClick={() => history.push('/register')} className="btn-signup">Sign Up</button>
            <button onClick={() => history.push('/login')} className="login">Login</button>
          </>
        )}
        {token && (
          <>
            <button className="icon_button" onClick={() => history.push('/checkout')}>
              <img src={Cart} alt="Cart" />
            </button>
            <button className="button_header" onClick={() => history.push('/my-class')}>My Class</button>
            <button className="button_header" onClick={() => history.push('/invoice')}>Invoice</button>
            <div className="separator" />
            <button className="icon_button" style={{ marginLeft: 20, marginRight: 20 }} onClick={() => console.log("User clicked")}>
              <img src={User} alt="User" />
            </button>
            <button
              className="icon_button"
              style={{ marginRight: 20 }}
              onClick={() => {
                removeToken()
                history.push('/login');
              }}
            >
              <img src={Logout} alt="Logout" />
            </button>
          </>
        )}
      </div>
    </Stack>
  );
}

export default Header;
