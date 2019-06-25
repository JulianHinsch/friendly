import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import displayDate from '../../utils/displayDate';
import styles from './Comment.module.scss';

import Avatar from '../Avatar/Avatar';

const _Comment = ({ auth, id, userId, user, text, updatedAt, deleteComment }) => {
    const { emailHash, name } = user;
    return (
        <div className={styles.comment}>
            <Avatar id={userId} emailHash={emailHash}/>
            <div className={styles.comment_body}>
                <Link to={`/profile/${userId}`}>{name}</Link>
                &nbsp;
                <span>{text}</span>
                {auth.id === userId && (
                    <img 
                        src={require('../../assets/x_grey.svg')}
                        className={styles.delete}
                        alt='Delete'
                        onClick={() => deleteComment(id)}/>
                )}
                <span className={styles.time}>{displayDate(updatedAt)}</span>
            </div>
            
        </div>
    )
}

_Comment.propTypes = {
    id: PropTypes.number.isRequired,
    userId: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,    
    createdAt: PropTypes.string,
    updatedAt: PropTypes.string.isRequired,
    deleteComment: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,    
    user: PropTypes.object.isRequired,
}

export default _Comment;