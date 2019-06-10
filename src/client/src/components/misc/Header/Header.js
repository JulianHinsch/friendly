import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import styles from './Header.module.scss';
import PropTypes from 'prop-types';

class Header extends Component {

    static propTypes = {
        auth: PropTypes.object.isRequired,
        logOut: PropTypes.func.isRequired,
    }

    state = {
        search: '',
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.history.push(`/search/q=${this.state.search}`);
    }

    handleChange = (event) => {
        this.setState({[event.target.name]: event.target.value});
    }

    render() {
        const { auth, logOut } = this.props;
        return (
        <header className={classNames(styles.header, 'bg-1')}>
            <nav>
                <Link to='/' className={styles.logo}>
                    <img src={require('../../../assets/logo.svg')} alt='home'/>
                    friendly
                </Link>
                <form className={styles.search_form} onSubmit={this.handleSubmit}>
                    <label htmlFor='search' style={{display: 'none'}}>Search</label>
                    <input 
                        name='search' 
                        type='text' 
                        onChange={this.handleChange} 
                        placeholder='Search for people...'/>
                </form>
                {auth.isAuthenticated ? (
                    <ul>
                        <li>
                            <img src={require('../../../assets/inbox.svg')} alt='Follow Requests'/>
                        </li>
                        <li>
                            <Link to={`/profile`}>
                                <img src={require('../../../assets/profile.svg')} alt='My Profile'/>
                            </Link>   
                        </li>
                        <li>
                            <img onClick={logOut} src={require('../../../assets/logout.svg')} alt='Log Out'/>
                        </li>
                    </ul>   
                ) : (
                    <ul>
                        <li><Link to='/signup'>Sign Up</Link></li>
                        <li><Link to='/login'>Log In</Link></li>
                    </ul>
                )}
            </nav>
        </header>
    )
    }
}

Header.propTypes = {

}

export default Header;