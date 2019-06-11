import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Feed from '../../feed/Feed/Feed';
import PostForm from '../../feed/PostForm/PostFormContainer';
import ProfileHeader from '../ProfileHeader/ProfileHeader';

import styles from './Profile.module.scss';

export default class Profile extends Component {

    static propTypes = {
        auth: PropTypes.object.isRequired,
    }

    //TODO render PostForm only if this is the user's own profile
    render() {
        const { auth } = this.props;
        return (
            <main className={styles.profile}>
                <ProfileHeader/>
                <PostForm/>
                <Feed/>
            </main>
        )
    }
}
