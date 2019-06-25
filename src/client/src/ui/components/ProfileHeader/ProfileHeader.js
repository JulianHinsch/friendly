import React from 'react';
import PropTypes from 'prop-types';

import Avatar from '../Avatar/Avatar';

import styles from './ProfileHeader.module.scss';

const ProfileHeader = ({ 
    auth,
    user,
    ownFollow,
    followers,
    following,
    isOwnProfile,
    createFollow,
    deleteFollow,
}) => {

    const getFollowButtonText = () => {
        if(!ownFollow) return 'Follow';
        if(!ownFollow.isApproved) return 'Request Sent';
        return 'Unfollow'
    }
    
    const handleFollowButtonClick = () => {
        if(!ownFollow) {
            createFollow({ followerId: auth.id, followingId: user.id });
        } else {
            deleteFollow({ id: ownFollow.id });
        }
    }

    const { id, emailHash, name } = user;

    return (
        <div className={styles.profile_header}>
            <div>
                <Avatar id={id} emailHash={emailHash} diameter={80}/>
                {name}
                {/* {followers.length} Followers
                {following.length} Following */}
            </div>
            {!isOwnProfile && (
                <button
                    onClick={handleFollowButtonClick} 
                    disabled={ownFollow && !ownFollow.isApproved}>
                    {getFollowButtonText()}
                </button>
            )}
        </div>
    );
}

ProfileHeader.propTypes = {
    auth: PropTypes.shape({
        id: PropTypes.number.isRequired,
    }).isRequired,
    user: PropTypes.shape({
        id: PropTypes.number.isRequired,
        emailHash: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
    }).isRequired,
    ownFollow: PropTypes.shape({
        isApproved: PropTypes.bool.isRequired,
    }),
    // followers: PropTypes.array.isRequired,
    // following: PropTypes.array.isRequired,
    createFollow: PropTypes.func.isRequired,
    deleteFollow: PropTypes.func.isRequired,
    isOwnProfile: PropTypes.bool.isRequired,
    

}

export default ProfileHeader;