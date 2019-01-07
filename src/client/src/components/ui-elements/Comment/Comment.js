import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import moment from 'moment';
import classNames from 'classnames';

import styles from './Comment.module.scss';

const _Comment = ({ name, userId, date, text }) => {
    <div className={classNames('comment', styles.comment)}>
        <Link to={`/profile?id=${userId}`}>{name}</Link>
        <p className={styles.comment_date}>{moment(date).fromNow()}</p>
        <p className={styles.comment_text}>{text}</p>
    </div>
}

_Comment.propTypes = {
    name: PropTypes.string.isRequired,
    date: PropTypes.instanceOf(Date).isRequired,
    text: PropTypes.string.isRequired,
}

export default _Comment;
