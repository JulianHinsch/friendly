import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import displayDate from '../../utils/displayDate';
import styles from './Comment.module.scss';

import Avatar from '../Avatar/Avatar';

const _Comment = ({ id, userId, user, text, createdAt, updatedAt }) => {
    const { email, name } = user;
    return (
        <div className={styles.comment}>
            <Avatar id={userId} email={email}/>
            <div className={styles.comment_body}>
                <Link to={`/profile/${userId}`}>{name}</Link>
                &nbsp;
                <span>{text}</span>
                <span className={styles.time}>{displayDate(updatedAt)}</span>
            </div>
        </div>
    )
}

_Comment.propTypes = {
    id: PropTypes.number.isRequired,
    userId: PropTypes.number.isRequired,
    user: PropTypes.shape({
        id: PropTypes.number.isRequired,
        email: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
    }).isRequired,
    text: PropTypes.string.isRequired,    
    createdAt: PropTypes.string,
    updatedAt: PropTypes.string.isRequired,
}

export default _Comment;