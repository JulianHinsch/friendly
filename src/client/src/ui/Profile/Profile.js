import React, { Component } from 'react';
import PropTypes from 'prop-types';

import PostList from '../PostList/PostList';
import PostForm from '../PostForm/PostFormContainer';
import ProfileHeader from '../ProfileHeader/ProfileHeader';

import styles from './Profile.module.scss';


//TODO fix the loading logic here...
export default class Profile extends Component {

    static propTypes = {
        auth: PropTypes.shape({
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
            email: PropTypes.string.isRequired,
            isAuthenticated: PropTypes.bool.isRequired,
            loading: PropTypes.bool.isRequired,
            message: PropTypes.string,
        }).isRequired,
        user: PropTypes.shape({
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
            email: PropTypes.string.isRequired,
        }),
        loading: PropTypes.bool.isRequired,
        fetchUsers: PropTypes.func.isRequired,
    }

    componentDidMount() {
        const url = window.location.href;
        const id = url.split('/profile/')[1];
        this.props.fetchUsers(`${id}?includeAll=true&limit=1`);
    }

    componentDidUpdate() {
        const { user } = this.props;
        document.title = user ? user.name : 'Friendly';                
    }

    render() {
        const { user } = this.props;  
        if(!user) {
            return 'Loading';
        }
        const isOwnProfile = this.props.user.id === this.props.auth.id;
        return (
            <main className={styles.profile}>
                <ProfileHeader user={user} isOwnProfile={isOwnProfile}/>
                {isOwnProfile && <PostForm/>}
                <PostList/>
            </main>
        )
    }
}
