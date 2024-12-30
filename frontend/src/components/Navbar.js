import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Navbar = () => {
  const user = useSelector((store) => store.app.user);
  console.log('Navbar-user', user);

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light shadow">
      <div className="container d-flex justify-content-between align-items-center">
        {/* User Welcome Section */}
        <Link
          to={'/profile'}
          style={{
            textDecoration: 'none',
            color: 'gray',
            fontSize: '20px',
          }}
        >
          Welcome: {user.name}
        </Link>

        {/* Logout Button */}
        <Link to={'/login'}>
          <button className="btn btn-outline-danger">Logout</button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
