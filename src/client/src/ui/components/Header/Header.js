import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import styles from './Header.module.scss';
import PropTypes from 'prop-types';
import history from '../../../history';

import FollowRequestList from '../FollowRequestList/FollowRequestListContainer';

class Header extends Component {

    static propTypes = {
        auth: PropTypes.object.isRequired,
        logOut: PropTypes.func.isRequired,
    }

    state = {
        search: '',
        showFollowRequests: false,
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const query = this.state.search.trim();
        if (query!=='') {
            history.push(`/search/?q=${query}`);
            this.setState({ search: '' });
        }
    }

    handleChange = (event) => {
        this.setState({[event.target.name]: event.target.value});
    }

    showFollowRequests = (event) => {
        this.setState(prevState => ({showFollowRequests: !prevState.showFollowRequests}));
    }

    render() {
        const { auth, logOut } = this.props;
        return (
            <header className={styles.header}>
                <nav>
                    <Link to='/' className={styles.logo} title='Home'>
                        <img 
                            src={require('../../../assets/logo_white.svg')} 
                            alt='Home'/>
                        <span className={styles.logo_text}> friendly</span>
                    </Link>
                    <form className={styles.search_form} onSubmit={this.handleSubmit}>
                        <label htmlFor='search' style={{display: 'none'}}>Search</label>
                        <input 
                            name='search'
                            type='text'
                            maxLength={140}
                            onChange={this.handleChange} 
                            placeholder='Search for people...'/>
                        <img 
                            src={require('../../../assets/search.svg')}
                            alt='Search'
                            title='Search'
                            onClick={this.handleSubmit}/>
                    </form>
                    {auth.isAuthenticated ? (
                        <ul>
                            <li className={classNames({[styles.active]: this.state.showFollowRequests})}>
                                <img 
                                    onClick={this.showFollowRequests}
                                    src={require('../../../assets/inbox.svg')} 
                                    alt='Follow Requests' 
                                    title='Follow Requests'/>
                                {this.state.showFollowRequests && (
                                    <FollowRequestList/>
                                )}
                            </li>
                            <li>
                                <Link to={`/profile/${auth.id}`} title='Profile'>
                                    <img 
                                        src={require('../../../assets/profile.svg')} 
                                        alt='My Profile'/>
                                </Link>   
                            </li>
                            <li> 
                                <img 
                                    onClick={logOut} 
                                    src={require('../../../assets/logout.svg')} 
                                    alt='Log Out' 
                                    title='Log Out'/>
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

export default Header;