import React, { Component } from 'react';
import PropTypes from 'prop-types';

import PostList from '../../feed/PostList/PostList';
import PostForm from '../../feed/PostForm/PostFormContainer';
import ProfileHeader from '../ProfileHeader/ProfileHeader';

import styles from './Profile.module.scss';

export default class Profile extends Component {

    static propTypes = {
        auth: PropTypes.object.isRequired,
    }

    isOwnProfile = () => {
        const url = window.location.href;
        const id = url.split('/profile/')[1];
        return id === this.props.auth.id;
    }

    render() {
        return (
            <main className={styles.profile}>
                <ProfileHeader/>
                {this.isOwnProfile() && <PostForm/>}
                <PostList/>
            </main>
        )
    }
}
