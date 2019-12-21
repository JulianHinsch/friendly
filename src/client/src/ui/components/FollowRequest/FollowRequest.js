import React from 'react';
import PropTypes from 'prop-types';

import Avatar from '../Avatar/Avatar';

import styles from './FollowRequest.module.scss';

const FollowRequest = ({
    id,
    user,
    auth,
    updateFollow,
    deleteFollow
}) => {
    return (
        <li className={styles.follow_request}>
            <Avatar id={user.id} emailHash={user.emailHash} diameter={20}/>
            {user.name}
            <button onClick={updateFollow({})}>
                Approve
            </button>
            <button onClick={deleteFollow({})}>
                Delete
            </button>
        </li>
    )
}

FollowRequest.propTypes = {
    id: PropTypes.number.isRequired,
    user: PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        emailHash: PropTypes.string.isRequired,
    }).isRequired,
    auth: PropTypes.shape({
        id: PropTypes.number.isRequired,
    }).isRequired,
    updateFollow: PropTypes.func.isRequired,
    deleteFollow: PropTypes.func.isRequired,
}

export default FollowRequest;