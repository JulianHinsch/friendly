import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import displayDate from '../../../utils/displayDate';
import styles from './Comment.module.scss';

import Avatar from '../../misc/Avatar/Avatar';

const _Comment = ({ text, createdAt, updatedAt }) => (
    <div className={styles.comment}>
        <Avatar/>
        <div className={styles.comment_body}>
            <Link to={`/profile?id=${''}`}></Link>
            &nbsp;
            <span>{text}</span>
            <span className={styles.time}>{displayDate(updatedAt)}</span>
        </div>
    </div>
)

_Comment.propTypes = {
    id: PropTypes.number.isRequired,
    user: PropTypes.object.isRequired,
    createdAt: PropTypes.string,
    updatedAt: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
}

export default _Comment;