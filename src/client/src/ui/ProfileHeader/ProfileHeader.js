import React from 'react';
import PropTypes from 'prop-types';

import Avatar from '../Avatar/Avatar';

import styles from './ProfileHeader.module.scss';


// TODO - make sure the follow button works here - 
// it should display 'follow', 'following', or 'request sent', 
// or if the profile is the users, display nothing

const ProfileHeader = ({ user, follow, numFollows, numFollowing, isOwnProfile }) => {
    const { id, email, name } = user;
    return (
        <div className={styles.profile_header}>
            <div>
                <Avatar id={id} email={email} diameter={80}/>
                {name}
                {numFollows} Followers
                {numFollowing} Following
            </div>
            {!isOwnProfile && (
                <button>Follow</button>
            )}
        </div>
    );
}

ProfileHeader.propTypes = {
    user: PropTypes.shape({
        id: PropTypes.number.isRequired,
        email: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
    }).isRequired,
    follow: PropTypes.shape({

    }),
    isOwnProfile: PropTypes.bool.isRequired,
    

}

export default ProfileHeader;