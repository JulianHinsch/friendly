import React from 'react';
import PropTypes from 'prop-types';

import styles from './FollowRequest.module.scss';

const FollowRequest = ({ id, user, auth, updateFollowRequest, deleteFollowRequest }) => {
    return (
        <li className={styles.follow_request}>
            {name}
            <button onClick={updateFollowRequest({})}>
                Approve
            </button>
            <button onClick={deleteFollowRequest({})}>
                Delete
            </button>
        </li>
    )
}

FollowRequest.propTypes = {
    id: PropTypes.number.isRequired,
    user: PropTypes.shape({

    }).isRequired,
    auth: PropTypes.shape({

    }).isRequired,
    updateFollowRequest: PropTypes.func.isRequired,
    deleteFollowRequest: PropTypes.func.isRequired,
}

export default FollowRequest;