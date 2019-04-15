import React from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import styles from './Header.module.scss';

const Header = ({ auth }) => {
    return (
        <header className={classNames(styles.header, 'bg-1')}>
            <nav>
                <Link to='/'>Home</Link>
                {/* {auth.isAuthenticated && (
                     <Link to={`/profile`}>Profile</Link>              
                )} */}
            </nav>
        </header>
    )
}

export default Header;