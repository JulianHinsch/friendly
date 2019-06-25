import React from 'react';
import PropTypes from 'prop-types';
import FollowRequest from '../FollowRequest/FollowRequestContainer';
import styles from './FollowRequestList.module.scss';

const FollowRequestList = ({ followRequests }) => (
    <ul className={styles.follow_request_list}>
        {followRequests.map(followRequest => (
            <FollowRequest key={followRequest.id} {...followRequest}/>
        ))}
    </ul>
)

FollowRequestList.propTypes = {
    followRequests: PropTypes.arrayOf(PropTypes.object).isRequired,
}

export default FollowRequestList;