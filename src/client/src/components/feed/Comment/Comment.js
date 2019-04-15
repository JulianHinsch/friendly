import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styles from './Comment.module.scss';

import Avatar from '../../misc/Avatar/Avatar';

const Comment = ({ author, authorId, time, text }) => (
    <div className={styles.comment}>
        <Avatar/>
        <div className={styles.comment_body}>
            <Link to={`/profile?id=${authorId}`}>{author}</Link>
            &nbsp;
            <span>{text}</span>
            <span className={styles.time}>{time}</span>
        </div>
    </div>
)

Comment.propTypes = {
    author: PropTypes.string.isRequired,
    authorId: PropTypes.string.isRequired,
    time: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
}

export default Comment;