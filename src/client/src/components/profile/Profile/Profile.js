import React from 'react';
import styles from './Profile.module.scss';

import Feed from '../../feed/Feed/Feed';
import ProfileHeader from '../ProfileHeader/ProfileHeader';


const Profile = () => {
    return (
        <main className={styles.profile}>
            <ProfileHeader/>
            <Feed/>
        </main>
    )
}

export default Profile;