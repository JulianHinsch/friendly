import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Header = ({ username, isAuthenticated }) => {
    <header>
        <Link to='/'> Home </Link>
        {isAuthenticated ? (
            <nav>        
                <p>{`Welcome, ${username}`}</p>
                <Link>Sign Out</Link>
            </nav>
        ) : (
            <nav>
                <Link to='/login'>Log In</Link>
                <Link to='/signup'>Create an Account</Link>
            </nav>
        )}
    </header>
}

Header.propTypes = {
    username: PropTypes.string,
    isAuthenticated: PropTypes.bool,
}

export default Header;
