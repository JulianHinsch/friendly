import React from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import styles from './Header.module.scss';
import PropTypes from 'prop-types';

const Header = (props) => {
    const { auth } = props;
    return (
        <header className={classNames(styles.header, 'bg-1')}>
            <nav>
                <Link to='/'><img src={require('../../../assets/logo.svg')} alt='home'/></Link>
                {auth.isAuthenticated ? (
                    <div>
                        <Link>Follow Requests</Link>
                        <Link to={`/profile`}>
                            <img src={require('../../../assets/profile.svg')} alt='My Profile'/>
                        </Link>   
                        <Link>Log Out</Link>
                    </div>   
                ) : (
                    <div>
                        <Link></Link>
                        <Link></Link>
                    </div>
                )}
            </nav>
        </header>
    )
}

Header.propTypes = {
    
}

export default Header;