import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import AuthContext from '../AuthContext';

const Header = () => {
  const { auth, logout } = useContext(AuthContext);

  return (
    <header>
      <div className="container">
        <h1>My Application</h1>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            {!auth.token ? (
              <li><Link to="/login">Login</Link></li>
            ) : (
              <>
                <li><Link to="/dashboard">Dashboard</Link></li>
                <li><button onClick={logout}>Logout</button></li>
              </>
            )}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
