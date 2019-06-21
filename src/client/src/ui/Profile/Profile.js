import React, { Component } from 'react';
import PropTypes from 'prop-types';

import PostList from '../PostList/PostListContainer';
import PostForm from '../PostForm/PostFormContainer';
import ProfileHeader from '../ProfileHeader/ProfileHeaderContainer';
import Loader from '../Loader/Loader';

import styles from './Profile.module.scss';

export default class Profile extends Component {

    static propTypes = {
        auth: PropTypes.shape({
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
            emailHash: PropTypes.string.isRequired,
        }).isRequired,
        user: PropTypes.shape({
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
            emailHash: PropTypes.string.isRequired,
        }),
        loading: PropTypes.bool.isRequired,
        fetchProfile: PropTypes.func.isRequired,
    }

    componentDidMount() {
        const url = window.location.href;
        const userId = url.split('/profile/')[1];
        this.props.fetchProfile(`${userId}`, 100, 0);
    }

    componentDidUpdate() {
        const { user } = this.props;
        document.title = user ? user.name : 'Friendly';                
    }

    render() {
        const { auth, user, loading } = this.props;  
        if(!user || loading) {
            return <Loader/>;
        }
        const isOwnProfile = user.id === auth.id;
        return (
            <main className={styles.profile}>
                <ProfileHeader user={user} isOwnProfile={isOwnProfile}/>
                {isOwnProfile && <PostForm/>}
                <PostList/>
            </main>
        )
    }
}
